import {ADD_PRODUCT, ADD_PRODUCT_ERR, ADD_PRODUCT_SUCCESSFULLY, DOWNLOAD_PRODUCTS, DOWNLOAD_PRODUCTS_ERR, DOWNLOAD_PRODUCTS_SUCCESSFULLY} from '../types';
import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

export function createNewProductAction(product) {
  return async ( dispatch ) => {
    dispatch(addProduct());

    try {

        // insertar en la api
        await axiosClient.post('/productos', product);

        dispatch(addProductSucccess(product));

        Swal.fire(
            'Correcto',
            'El producto se agregó correctamente',
            'success'
        );
    }
    catch (e) {
        dispatch(addProductErr())
    }

  };  
}

const addProduct = () => ({
    type: ADD_PRODUCT
})

const addProductSucccess = (product) => ({
    type: ADD_PRODUCT_SUCCESSFULLY,
    payload: product
});

const addProductErr = () => ({
    type: ADD_PRODUCT_ERR
})

export function getProductsAction() {
    return async (dispatch) => {
        dispatch(downloadProducts());

        try {
            const {data} = await axiosClient.get('/productos');
            dispatch(downloadSuccess(data));
        } catch (e) {
            dispatch(downloadErr());
        }
    }
}

const downloadProducts = () => ({
    type: DOWNLOAD_PRODUCTS,
})

const downloadSuccess = (products) => ({
    type: DOWNLOAD_PRODUCTS_SUCCESSFULLY,
    payload: products,
});

const downloadErr = () => ({
    type: DOWNLOAD_PRODUCTS_ERR,
})