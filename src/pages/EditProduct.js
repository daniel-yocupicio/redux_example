import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

//redux
import {useDispatch, useSelector} from 'react-redux';
import { editProductAction } from '../actions/productsActions';

const EditProduct = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [product, saveProduct] = useState({
        name: '',
        price: '',
    });
    
    const editProduct = useSelector(state => state.products.editProduct);
    
    useEffect(()=>{
        saveProduct(editProduct);
    },[editProduct])
    
    const editForm = (e) => {
        saveProduct({
            ...product,
            [e.target.name] : e.target.value,
        });
    }

    const submitProduct = e => {
        e.preventDefault();

        dispatch(editProductAction(product));

        history('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        <form
                            onSubmit={submitProduct}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre producto"
                                    name="name"
                                    value={product.name}
                                    onChange={editForm}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio producto"
                                    name="price"
                                    value={Number(product.price)}
                                    onChange={editForm}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                Guardar Cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProduct;
