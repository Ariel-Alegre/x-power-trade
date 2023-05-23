

const initialState = {
  AllMarkets: [],
  ReserveMarkets: [],
  token: localStorage.getItem('token'),
  error: null,
  DetailUsers: {},
  CheckEmail: [],
  document: []
}


export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MARKETS':
      return {
        ReserveMarkets: action.payload,
        AllMarkets: action.payload

      }

    case 'REGISTER':
      return {
        ...state,
      }

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.payload,
        error: null
      };

    case 'LOGIN_ERROR':
      return {
        ...state,
        token: null,
        error: 'Usuario o contraseña incorrectos.'
      };

    case 'DATA_PERSONAL':
      return {
        ...state,
        DetailUsers: action.payload,
      };

    case 'ALL_USERS':
      return {
        ...state,
        CheckEmail: action.payload
      }

    case 'DOCUMENT': 
      return {
        document: action.payload
      }
    

    default: return { ...state }

  }
}