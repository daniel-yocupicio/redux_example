import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
// redux
import {useDispatch, useSelector} from 'react-redux';
// action crea
import { createNewProductAction } from '../actions/productsActions';
import { showAlerAction, hiddenAlerAction } from '../actions/alertAction';

const NewProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const history = useNavigate();

    // crear dispatch
    const dispatch = useDispatch();
    // acceder al state del store
    const loading = useSelector(state => state.products.loading); 
    const error = useSelector(state => state.products.error); 
    const alert = useSelector(state => state.alert.alert); 
    // usar el dispatch con la funcion con el action
    const addProduct = (product) => dispatch(createNewProductAction(product));
    // submit
    const submitNuevoProducto = e => {
        e.preventDefault();

        if(name.trim() === '' && price === 0) {

            const alert = {
                msg: 'Ambos campos son obligatorios', 
                classes: 'alert alert-danger text-center text-uppercase p3'
            }

            dispatch(showAlerAction(alert))

            return;
        }

        dispatch(hiddenAlerAction());

        addProduct({name, price});

        history('/');
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

                        {alert !== null && <p className={alert.classes}>{alert.msg}</p>}

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

                        {loading && <p>Cargando</p>}
                        {error && <p className="alert alert-danger p2 mt-4 text-center">Error</p>}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;