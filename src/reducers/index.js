import {combineReducers} from 'redux';
import ProductsReducer from './productsReducers';

export default combineReducers({
    products: ProductsReducer
})