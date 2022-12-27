import {
    ADD_PRODUCT, 
    ADD_PRODUCT_ERR, 
    ADD_PRODUCT_SUCCESSFULLY, 
    DOWNLOAD_PRODUCTS, 
    DOWNLOAD_PRODUCTS_ERR, 
    DOWNLOAD_PRODUCTS_SUCCESSFULLY, 
    GET_PRODUCT_TO_DELETE, 
    PRODUCT_DELETED_SUCCESSFULLY, 
    PRODUCT_NO_DELETED_ERR,
    GET_PRODUCT_TO_EDIT,
    PRODUCT_EDITED_SUCCESSFULLY,
    PRODUCT_NO_EDITED_ERR,
} from '../types';

const initialState = {
    products: [],
    error: false,
    loading: false,
    deleteProduct: null,
    editProduct: null,
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

        case GET_PRODUCT_TO_DELETE:
            return {...state, deleteProduct: action.payload}
        
        case PRODUCT_DELETED_SUCCESSFULLY:
            return {
                ...state, 
                deleteProduct: null,
                products: state.products.filter(producto => producto.id !== state.deleteProduct)
            }

        case PRODUCT_NO_DELETED_ERR:
            return {
                ...state,
                deleteProduct: null,
                error: true,
            }

        case GET_PRODUCT_TO_EDIT:
            return {
                ...state,
                editProduct: action.payload
            }

        case PRODUCT_EDITED_SUCCESSFULLY:
            return {
                ...state,
                editProduct: null,
                products: state.products.map(
                    product => product.id === action.payload.id ? 
                        product = action.payload
                        :
                        product
                )
            }
        
        case PRODUCT_NO_EDITED_ERR:
            return {
                ...state,
                editProduct: null,
                error: true,
            }

        default:
            return state;
    }
}