import axios from 'axios';


export const Markets = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3001/markets')
        const data = res.data

        return dispatch({
            type: "MARKETS",
            payload: data
        })
    }
}

export const getMarket = (name) => {
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3001/markets?name=${name}`);
        const data = await res.data

        return dispatch({
            type: "GET_MARKETS",
            payload: data
        })
    }
};

export const Register = (payload) => {
    return async (dispatch) => {
        const res = await axios.post('http://localhost:3001/auth/register', payload);
        const data = await res.data;

        return dispatch({
            type: "REGISTER",
            payload: data
        })
    }
};

export const loginSuccess = (token) => ({
    type: 'LOGIN_SUCCESS',
    payload: token
});

export const loginError = () => ({
    type: 'LOGIN_ERROR'
});

export const detailUser = (typeData) => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:3001/user", typeData)

        const data = await res.data
        return dispatch({
            type: "DATA_PERSONAL",
            payload: data
        })

    }
};


export const allUser = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3001/users');
        const data = await res.data;

        return dispatch({
            type: "ALL_USERS",
            payload: data
        })
    }
};


export const uploadDocument = (document) => {
    return async (dispatch) => {
        const res = await axios.post('http://localhost:3001/upload', document);
        const data = await res.data;

        return dispatch({
            type: "DOCUMENT",
            payload: data
        })
    }
};

export const clean = () => {
    return {
        type: 'CLEAN',
        payload: []
    }
};

