import {ADD_PRODUCT, ADD_PRODUCT_ERR, ADD_PRODUCT_SUCCESSFULLY, DOWNLOAD_PRODUCTS, DOWNLOAD_PRODUCTS_ERR, DOWNLOAD_PRODUCTS_SUCCESSFULLY} from '../types';

const initialState = {
    products: [],
    error: false,
    loading: false,
};

export default function ProductsReducer(state = initialState, action) {
    switch(action.type){
        case DOWNLOAD_PRODUCTS:
        case ADD_PRODUCT:
            return {...state, loading: true, error: false};
        
        case ADD_PRODUCT_SUCCESSFULLY:
            return {...state, loading: false, error: false, products: [...state.products, action.payload]};

        case DOWNLOAD_PRODUCTS_ERR:
        case ADD_PRODUCT_ERR:
            return {...state, loading: false, error: true};

        case DOWNLOAD_PRODUCTS_SUCCESSFULLY:
            return {...state, loading: false, error: false, products: action.payload};

        default:
            return state;
    }
}