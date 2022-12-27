import React, {useState} from 'react';
// redux
import {useDispatch, useSelector} from 'react-redux';
// action crea
import { createNewProductAction } from '../actions/productsActions';

const NewProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    // crear dispatch
    const dispatch = useDispatch();
    // usar el dispatch con la funcion con el action
    const addProduct = (product) => dispatch(createNewProductAction(product));
    // submit
    const submitNuevoProducto = e => {
        e.preventDefault();

        if(name.trim() === '' && price.trim() === 0) {
            return;
        }

        addProduct({name, price});
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre producto"
                                    name="name"
                                    value={name}
                                    onChange = {e => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio producto"
                                    name="price"
                                    value={price}
                                    onChange = {e => setPrice(Number(e.target.value))}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                Agregar Producto
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;