import {combineReducers} from 'redux';
import ProductsReducer from './productsReducers';
import AlertReducer from './alertReducer';

export default combineReducers({
    products: ProductsReducer,
    alert: AlertReducer,
});
