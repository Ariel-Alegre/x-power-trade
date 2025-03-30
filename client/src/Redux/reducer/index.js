const initialState = {
  token: localStorage.getItem("token"),
  role: null, 
  loginUser: {},
  loginError: null,
  allUser: [],
  allLead: [],
  dataPersonal: [],
  wallet: [],
  coins: [],
  payment: null,
  loading: false,
  error: null,
  success: false,
  message: null,
  dataCoinsPurches: [],
datauser: []
  
  
  }
  
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER':
        return {
          ...state
        };
  
        case "LOGIN_SUCCESS":
          return {
            ...state,
            token: action.payload.token,
            role: action.payload.role, 
          };
        case "LOGOUT_USER":
          // Limpia el token en el estado
          return {
            ...state,
            token: null,
          };
    
        case "LOGIN_ERROR":
          return {
            ...state,
            loginError: true,
          };

    
  
    
        case 'ALL_USERS':
          return {
            ...state,
            allUser: action.payload
          };

          case 'DATA_PERSONAL':
            return {
              ...state,
              dataPersonal: action.payload

            };

            case 'DATA_USER':
              return {
                ...state,
                datauser: action.payload
  
              };

                     case 'ALL_COINS':
              return {
                ...state,
                coins: action.payload
  
              };

              case 'CHANGE_COINS': 
              return {
                ...state,
              };

                case 'PAYMENT_DEPOSIT': 
                return {
                  ...state,
                  payment: action.payload
                }
                case 'WALLET_PERSONAL': 
                return {
                  ...state,
                  wallet: action.payload
                }

                case 'BUY_COINS_SUCCESS':
                  return {
                    ...state,
                    loading: false,
                    success: true,
                    message: action.payload.message,
                  };
                case 'BUY_COINS_FAILURE':
                  return {
                    ...state,
                    loading: false,
                    error: action.payload,
                  };
                  case 'SELL_COINS_SUCCESS':
                    return {
                      ...state,
                      loading: false,
                      success: true,
                      message: action.payload.message,
                    };
                  case 'SELL_COINS_FAILURE':
                    return {
                      ...state,
                      loading: false,
                      error: action.payload,
                    };

                    case 'DATA_COINS_PURCHES':
                      return {
                        ...state,
                        dataCoinsPurches: action.payload,
                      };
                      case 'EDIT_WALLETUSER':
                        return {
                          ...state,
                        };

                        case 'UPDATE_PERSONAL':
                          return {
                            ...state,
                          };

                          case 'UPDATE_IDENTIFY':
                          return {
                            ...state,
                          };

                          case 'SOPORT_SEND':
                            return {
                              ...state,
                            };
                          
                          
                        

      default: return { ...state }
    }
  }
  
  
  
  
  
  
  