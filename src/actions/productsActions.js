import {ADD_PRODUCT, ADD_PRODUCT_ERR, ADD_PRODUCT_SUCCESSFULLY} from '../types';
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