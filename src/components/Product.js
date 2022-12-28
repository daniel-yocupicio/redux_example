import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

//redux
import {useDispatch} from 'react-redux';
import { deleteProductAction, getProductToEdit } from '../actions/productsActions';

const Product = ({product}) => {
    const {id, name, price} = product;

    const dispatch = useDispatch();
    const history = useNavigate();

    const deleteProduct = (id) => {

        Swal.fire({
            title: '¿Estas seguro?',
            text: 'Un producto eliminado no se puede revertir',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085D6',
            cancelButtonColor: '#D33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if(result.value) {
                dispatch(deleteProductAction(id))
            }
        })

    }

    const redirectEditProduct = (product) => {
        dispatch(getProductToEdit(product))
        history(`/productos/editar/${product.id}`)
    }

    return (
      <tr>
        <td>{name}</td>
        <td><span className="font-weight-bold">$ {price}</span></td>
        <td className="acciones">
            <button 
                onClick={() => redirectEditProduct(product)} 
                className="btn btn-primary mr-2">
                    Editar
            </button>
            <button  
                type='button' 
                className="btn btn-danger"
                onClick={() => deleteProduct(id)}
            >Eliminar</button>
        </td>
      </tr>
    );
}

export default Product;