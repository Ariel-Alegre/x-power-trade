
const { Coin, User } = require('../db'); // Ajusta la ruta según la ubicación de tu modelo Coin
const { Router } = require('express');
const router = Router();
const routerRegister = require('./register_router');
const routerLogin = require('./login_router');
const routerUsers = require('./users_router');
/* const routerLeads = require('./leads_router')  */
const routerPayment = require('./payment_router.js');
const routerBalance = require('./balance_router.js');


const axios = require('axios');
const { conn } = require('../db');
const { Op } = require('sequelize');



const actualizarInformacionDelMercado = async () => {
  try {
    const response = await axios.get('https://trading4pro.com/server/chart/feed/json?from=1500000000&n=100');

    const informacionDelMercado = response.data.map(item => {
      
      const rating = parseFloat(item.rating);

      const price = parseFloat(item.target_price);
      const drawings = item.data && item.data.drawings ? item.data.drawings : [];
      const priceSale = drawings[0] && drawings[0].points && drawings[0].points[0] ? parseFloat(drawings[0].points[0].value): null; // Primer punto en el primer dibujo para la venta
      const pricePurchase =parseFloat(item.target_price)
      const pipValue = pricePurchase ? (parseFloat(pricePurchase) * 0.01) : null; // Valor del pip asumiendo un margen de pip del 1% // Valor del pip asumiendo un margen de pip del 1%

      return {
        id: item.symbol,
        symbol: item.symbol,
        price: price,
        pricePurchase: parseFloat(pricePurchase), // Convertir a número antes de guardar en la base de datos
        priceSale: parseFloat(priceSale), // Convertir a número antes de guardar en la base de datos
        pipValue: pipValue,
        rating: rating
      };
    });

    // Ordenar las monedas por el símbolo antes de procesarlas
    informacionDelMercado.sort((a, b) => a.symbol.localeCompare(b.symbol));

    for (const coin of informacionDelMercado) {
      const existingCoin = await Coin.findOne({ where: { id: coin.id } });
      if (!existingCoin) {
        await Coin.create(coin);
      } else {
        await existingCoin.update(coin);
      }
    }

    console.log('Información del mercado actualizada en la base de datos');
  } catch (error) {
    console.error('Error al cargar la información del mercado desde trading4pro:', error);
  }
};





// Inicia la actualización automática cada 5 minutos
setInterval(actualizarInformacionDelMercado, 5 * 60 * 1000); // 5 minutos en milisegundos





router.get('/api/coins', async (req, res) => {
  try {
    const coins = await Coin.findAll({
        order: [['symbol', 'ASC']], 
    });

    res.json(coins);
  } catch (error) {
    console.error('Error al obtener la lista de monedas desde la base de datos:', error);
    res.status(500).json({ success: false, error: 'Error al obtener la lista de monedas' });
  }
});


const eliminarEditedPrice = async () => {
  try {
    await Coin.update({
      edited_price_purchase: null,
      edited_price_sale: null,

    }, {
      where: {
        expiration_time: {
          [Op.lte]: new Date(),
        },
      },
    });
  } catch (error) {
    console.error('Error al eliminar el campo "edited_price":', error);
  }
};
setInterval(eliminarEditedPrice, 20 * 60 * 1000);


router.post('/api/coins/update-price', async (req, res) => {
  const { coinId, newPricePurchase, newPriceSale } = req.body;

  try {
    const updatedCoin = await Coin.findByPk(coinId);  
    if (updatedCoin) {
      updatedCoin.edited_price_purchase = newPricePurchase;
      updatedCoin.edited_price_sale = newPriceSale;
      updatedCoin.expiration_time = new Date(Date.now() + 5 * 60 * 1000);
      await updatedCoin.save();
      res.json({ success: true,  });
    } else {
      res.status(404).json({ success: false, error: 'Moneda no encontrada' });
    }
  } catch (error) {
    console.error('Error al actualizar el precio en la base de datos:', error);
    res.status(500).json({ success: false, error: 'Error al actualizar el precio' });
  }
});


router.post('/init', function (req, res, next) {
  var order = req.body;


  axios.post("https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment", order, {
    headers: {
      'Authorization': 'Basic Njk4NzYzNTc6dGVzdHBhc3N3b3JkX0RFTU9QUklWQVRFS0VZMjNHNDQ3NXpYWlEyVUE1eDdN',
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (response.data.status === 'SUCCESS') {
        res.send(response.data.answer.formToken);
      } else {
        // Handle the error
        console.error(`Error en la respuesta del servicio web: ${response.data.answer.errorMessage}`);
        res.status(500).send(`Error en la respuesta del servicio web: ${response.data.answer.errorMessage}`);
      }
    })
    .catch(error => {
      // Handle the error
      console.error(`Error en la solicitud al servicio web: ${error.message}`);
      res.status(500).send('Error en la solicitud al servicio web');
    });
});


router.use('/', routerRegister, routerLogin, routerUsers, routerPayment, routerBalance)










router.post('/api/coins/comprar', async (req, res) => {
  const { coinId, cantidad, precio } = req.body;

  try {
    // Buscar la moneda en la base de datos
    const coin = await Coin.findByPk(coinId);

    if (!coin) {
      return res.status(404).json({ success: false, error: 'Moneda no encontrada' });
    }

    // Calcular el total de la transacción
    const total = cantidad * precio;

    // Verificar si el usuario tiene suficientes fondos
    const userId = req.user.id;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ success: false, error: 'Usuario no encontrado' });
    }

    if (user.saldo < total) {
      return res.status(400).json({ success: false, error: 'Fondos insuficientes' });
    }

    // Actualizar el saldo del usuario y la cantidad de la moneda
    user.saldo -= total;
    await user.save();

    coin.cantidad += cantidad;
    await coin.save();

    res.json({ success: true, message: 'Compra realizada con éxito' });
  } catch (error) {
    console.error('Error al realizar la compra:', error);
    res.status(500).json({ success: false, error: 'Error al realizar la compra' });
  }
});


module.exports = router