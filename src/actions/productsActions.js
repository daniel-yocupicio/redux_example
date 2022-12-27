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
    INIT_TO_EDIT_PRODUCT
} from '../types';
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

export function deleteProductAction(id){
    return async (dispatch) => {
        dispatch(getProductToDelete(id));

        try {
            await axiosClient.delete(`/productos/${id}`);
            dispatch(deletedProductSuccess());

            Swal.fire('Eliminado', 'El producto se elimino', 'success')

        } catch(e) {
            dispatch(deleteProductErr());
        }
    }
};

const getProductToDelete = (id) => ({
    type: GET_PRODUCT_TO_DELETE,
    payload: id
});

const deletedProductSuccess = () => ({
    type: PRODUCT_DELETED_SUCCESSFULLY,
});

const deleteProductErr = () => ({
    type: PRODUCT_NO_DELETED_ERR,
});

export function getProductToEdit(product) {
    return (dispatch) => {
        dispatch(getProductAction(product))
    }
}

const getProductAction = (product) => ({
    type: GET_PRODUCT_TO_EDIT,
    payload: product,
});

export function editProductAction(product) {
    return async (dispatch) => {
        dispatch(editProduct());

        try {
            await axiosClient.put(`/productos/${product.id}`, product);
            dispatch(editProductSuccess(product));
        } catch(e) {
            dispatch(editProductErr())
        }
    }
}

const editProduct = () => ({
    type: INIT_TO_EDIT_PRODUCT,
})

const editProductSuccess = (product) => ({
    type: PRODUCT_EDITED_SUCCESSFULLY,
    payload: product,
});

const editProductErr = () => ({
    type: PRODUCT_NO_EDITED_ERR,
})