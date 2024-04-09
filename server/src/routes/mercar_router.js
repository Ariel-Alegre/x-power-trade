const Binance = require('node-binance-api');
const { Router } = require('express');
const router = Router();

const binance = new Binance().options({
    APIKEY: 'ipe1sXyBoKsTvNMcm1p9Sjc2SqjjQFbYTMlEUawqhVee8kw3vx958JVLPE2iiCkJ',
    APISECRET: 'XriH2hkOCihv0h9EFse1JM8g0XzYFnYNOqfGDGZckHZuIqv97KD1QWpSt58CqOBZ',
    useServerTime: true,
    recvWindow: 1000,
    family: 4, // Establece la propiedad 'family' a 4 (IPv4)
  });
  
  

router.get('/api/binance/data', async (req, res) => {
    try {
        // Obtener información del libro de órdenes
        const depth = await binance.depth("BTCUSDT");

        // Obtener información de los últimos 24 horas de operaciones (candlesticks)
        const candlesticks = await binance.candlesticks("BTCUSDT", "1h");

        // Puedes ajustar la estructura de la respuesta según tus necesidades
        res.json({
            marketData: {
                depth,
                candlesticks,
            }
        });
    } catch (error) {
        console.error('Error al obtener datos de Binance:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
module.exports = router;
