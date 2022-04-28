
import {useEffect, useState} from "react";
import axios from "axios";

const useGetProducts = (API) =>{
    const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		const response = await axios(API);
		setProducts(response.data)
	}

    return products;
}

export default useGetProducts;