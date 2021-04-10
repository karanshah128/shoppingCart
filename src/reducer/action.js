import * as actions from './actionTypes';


const setLoginName = (payload) => {
    return {
        type: actions.SET_LOGIN_NAME,
        payload
    }
}


const setAuth = (payload) => {
    return {
        type: actions.SET_AUTH,
        payload
    }
}

const setProductDetail =(payload) =>{
    return {
        type :actions.SET_PRODUCT_DETAIL,
        payload
    }
}

export {
    setLoginName, setAuth,setProductDetail

}