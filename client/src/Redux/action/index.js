import axios from 'axios';


export const Register = (payload) => {
  return async (dispatch) => {
    const res = await axios.post('https://x-power-trade-production.up.railway.app/register', payload)
    const data = res.data

    return dispatch({
      type: "REGISTER",
      payload: data
    })

  }
}

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("https://x-power-trade-production.up.railway.app/login", {
        email,
        password,
      });

      if (response.status === 200 && response.data.token) {
        localStorage.setItem("token", response.data.token);

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            token: response.data.token,
            role: response.data.role,
          },
        });

        return true; // Autenticación exitosa
      } else {
        throw new Error("Error durante el inicio de sesión.");
      }
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR" });
      return false; // Autenticación fallida
    }
  };
};



// actions/authActions.js
export const loginSuccess = (token) => ({
  type: "LOGIN_SUCCESS",
  payload: token,
});
export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};


export const AllUsers = () => {
  return async (dispatch) => {
    const res = await axios.get('https://x-power-trade-production.up.railway.app/userdata')
    const data = res.data

    return dispatch({
      type: "ALL_USERS",
      payload: data
    })

  }
}


export const DataUser = (walletId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`https://x-power-trade-production.up.railway.app/userdata/${walletId}`);
      const data = res.data;

      dispatch({
        type: 'DATA_USER',
        payload: data,
      });
    } catch (error) {
      console.error("Error al obtener datos del usuario:", error);
      // Podrías dispatch una acción de error si es necesario
    }
  };
};

export const DataPersonal = (token) => {
  return async (dispatch) => {
    try {
      const res = await axios.get('https://x-power-trade-production.up.railway.app/user', {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = res.data;

      dispatch({
        type: 'DATA_PERSONAL',
        payload: data,
      });
    } catch (error) {
      console.error("Error al obtener datos personales:", error);
      // Podrías dispatch una acción de error si es necesario
    }
  };
};
export const UpdatePersonal = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`https://x-power-trade-production.up.railway.app/update-personal`, payload);

      const data = res.data;

      dispatch({
        type: 'UPDATE_PERSONAL',
        payload: data,
      });
    } catch (error) {
      console.error("Error al editar wallet del usuario:", error);
      // Podrías dispatch una acción de error si es necesario
    }
  };
};

export const UpdateIdentify= (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`https://x-power-trade-production.up.railway.app/upload-identify`, payload);

      const data = res.data;

      dispatch({
        type: 'UPDATE_IDENTIFY',
        payload: data,
      });
    } catch (error) {
      console.error("Error al editar wallet del usuario:", error);
      // Podrías dispatch una acción de error si es necesario
    }
  };
};



export const SuportSend = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`https://x-power-trade-production.up.railway.app/withdraw`, payload);

      const data = res.data;

      dispatch({
        type: 'SOPORT_SEND',
        payload: data,
      });
    } catch (error) {
      console.error("Error al enviar la solicitud de retiro:", error);
      // Podrías dispatch una acción de error si es necesario
    }
  };
};



export const Coins = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('https://x-power-trade-production.up.railway.app/api/coins');

      const data = res.data;

      dispatch({
        type: 'ALL_COINS',
        payload: data,
      });
    } catch (error) {
      console.error("Error al obtener datos de la moneda digital:", error);
      // Podrías dispatch una acción de error si es necesario
    }
  };
};


export const ChangePriceCoins = (coinId, newPricePurchase, newPriceSale) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('https://x-power-trade-production.up.railway.app/api/coins/update-price', {
        coinId,
        newPricePurchase,
        newPriceSale,
      });

      const data = res.data;

      dispatch({
        type: 'CHANGE_COINS',
        payload: data,
      });
    } catch (error) {
      console.error("Error al cambiar la moneda digital:", error);
    }
  };
};


export const PaymentDeposite = (token, payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('https://x-power-trade-production.up.railway.app/payment', payload, {
        headers: {
          Authorization: token,
        },
      }).then((response) => {
        window.location.href = response.data.redirect_url;
      }).catch((error) => {
        console.error(error);
      });
      const data = res.data;

      dispatch({
        type: 'PAYMENT_DEPOSIT',
        payload: data,
      });
    } catch (error) {
      console.error("Error al procesar el pago:", error);
      // Puedes dispatch una acción de error si es necesario
      dispatch({
        type: 'PAYMENT_ERROR',
        payload: { error: 'Error al procesar el pago' },
      });
    }
  };
};

export const Wallet = (token) => {
  return async (dispatch) => {
    try {
      const res = await axios.get('https://x-power-trade-production.up.railway.app/wallet', {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = res.data;

      dispatch({
        type: 'WALLET_PERSONAL',
        payload: data,
      });
    } catch (error) {
      console.error("Error al obtener datos de la billetera:", error);
      // Podrías dispatch una acción de error si es necesario
    }
  };
};

// En tu archivo de acciones Redux (action.js)
export const buyCoins = (token, payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('https://x-power-trade-production.up.railway.app/buy', payload, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      const data = res.data;

      // Verifica si la compra fue exitosa antes de despachar la acción
      if (data.success) {
        // Aquí puedes despachar una acción para actualizar el estado de Redux con el nuevo saldo
        // dispatch(actualizarSaldo(data.nuevoSaldo));
        dispatch({
          type: 'BUY_COINS_SUCCESS',
          payload: data,
        });
      } else {
        dispatch({
          type: 'BUY_COINS_FAILURE',
          payload: data.error,
        });
      }
    } catch (error) {
      console.error("Error al comprar monedas:", error);
      dispatch({
        type: 'BUY_COINS_FAILURE',
        payload: 'Error al comprar monedas. Por favor, inténtalo de nuevo más tarde.',
      });
    }
  };
};

export const sellCoins = (token, payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('https://x-power-trade-production.up.railway.app/sell', payload, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      const data = res.data;

      // Verifica si la compra fue exitosa antes de despachar la acción
      if (data.success) {
        dispatch({
          type: 'SELL_COINS_SUCCESS',
          payload: data,
        });
      } else {
        dispatch({
          type: 'SELL_COINS_FAILURE',
          payload: data.error,
        });
      }
    } catch (error) {
      console.error("Error al comprar monedas:", error);
      dispatch({
        type: 'SELL_COINS_FAILURE',
        payload: 'Error al comprar monedas. Por favor, inténtalo de nuevo más tarde.',
      });
    }
  };
};


export const DataCoinsPurches = (token) => {
  return async (dispatch) => {
    try {
      const res = await axios.get('https://x-power-trade-production.up.railway.app/transaction', {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = res.data;

      dispatch({
        type: 'DATA_COINS_PURCHES',
        payload: data,
      });
    } catch (error) {
      console.error("Error al obtener datos de moneda compradas:", error);
      // Podrías dispatch una acción de error si es necesario
    }
  };
};


export const EditWalletUser = (walletId, payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`https://x-power-trade-production.up.railway.app/editwallet/${walletId}`, payload);

      const data = res.data;

      dispatch({
        type: 'EDIT_WALLETUSER',
        payload: data,
      });
    } catch (error) {
      console.error("Error al editar wallet del usuario:", error);
      // Podrías dispatch una acción de error si es necesario
    }
  };
};


