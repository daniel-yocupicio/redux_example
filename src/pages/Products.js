import React, {Fragment, useEffect} from 'react';
// redux
import {useDispatch, useSelector} from 'react-redux';
// actions
import { getProductsAction } from '../actions/productsActions';


import Product from '../components/Product';

const Products = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        const cargarProductos = () => dispatch(getProductsAction());
        cargarProductos();
    }, [dispatch]);

    const products = useSelector(state => state.products.products);
    const error = useSelector(state => state.products.error);
    const loading = useSelector(state => state.products.loading);

    return (
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>

            {error && <p className="font-weight-bold alert alert-danger text-center">Hubo un error</p>}
            {loading && <p className="text-center">Cargando...</p>}

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 ? 
                        'No hay productos' 
                        : 
                        products.map(product => (
                            <Product key={product.id} product={product} />
                        ))
                    }
                </tbody>
            </table>
        </Fragment>
    );
}

export default Products;
