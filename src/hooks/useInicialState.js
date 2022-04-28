import {useState} from 'react';

const inicialState ={
    cart : [],
}

const useInicialState = () =>{
    const [state, setState] = useState(inicialState);
    
    const addToCart = (payLoad) =>{
        setState({
            ...state,
            cart : [...state.cart, payLoad]
        });
    }

    const removeFromCart = (payLoad) =>{
        setState({
            ...state,
            cart: state.cart.filter(item => item.id != payLoad.id),
        })
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInicialState;


