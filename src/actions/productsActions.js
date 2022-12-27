import {ADD_PRODUCT, ADD_PRODUCT_ERR, ADD_PRODUCT_SUCCESSFULLY} from '../types';

export function createNewProductAction(product) {
  return ( dispatch ) => {
    dispatch(addProduct());

    try {
        dispatch(addProductSucccess(product));
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