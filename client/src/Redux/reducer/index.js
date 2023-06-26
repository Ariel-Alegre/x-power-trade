

const initialState = {
  AllMarkets: [],
  ReserveMarkets: [],
  token: localStorage.getItem('token'),
  error: null,
  userDetail: [],
  AllUsers: [],
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
        AllUsers: action.payload
      }

      case 'USER_DETAILS':

      return {
        userDetail: action.payload
      }

    case 'DOCUMENT': 
      return {
        document: action.payload
      }

      case 'DELETE_USER': 
      const updatedUsers = state.userDetail.filter(user => user.id !== action.payload);
      return {
        userDetail: updatedUsers
      }
    

    default: return { ...state }

  }
}