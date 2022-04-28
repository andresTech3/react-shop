import React,{useContext} from 'react';
import '@styles/OrderItem.scss';
import AppContext from '@context/AppContext'

import close from '@icons/icon_close.png'

const OrderItem = ({product, indexValue}) => {

	const {removeFromCart} = useContext(AppContext);

	const handleRemoveProduct = (prod) =>{
		removeFromCart(prod);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images} alt={product.title}/>
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src={close} onClick={()=>handleRemoveProduct(indexValue)} alt="close"/>
		</div>
	);
}

export default OrderItem;
