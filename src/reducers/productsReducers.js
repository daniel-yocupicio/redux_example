import {ADD_PRODUCT, ADD_PRODUCT_ERR, ADD_PRODUCT_SUCCESSFULLY} from '../types';

const initialState = {
    products: [],
    error: false,
    isLoading: false,
};

export default function ProductsReducer(state = initialState, action) {
    switch(action.type){
        case ADD_PRODUCT:
            return {...state, loading: true};
        
        case ADD_PRODUCT_SUCCESSFULLY:
            return {...state, loading: false, products: [...state.products, action.payload]};

        case ADD_PRODUCT_ERR:
            return {...state, loading: false, error: true};
        
        default:
            return state;
    }
}