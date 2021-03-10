import axios from 'axios';
import React ,{useState,useEffect} from 'react'
import { useParams,useHistory } from 'react-router-dom'

export default function ProductDetails() {

    const [productDetail,setProductDetail]=useState([]);
    const params=useParams();
    const history=useHistory();
    

    useEffect(() => {
        axios
        .get(`https://fakestoreapi.com/products/${params.id}`)
        .then((res)=>{
          console.log(res.data,"response2");
          setProductDetail(res.data);
         
        })
        .catch((err)=>{
            console.log(err.data,"error")
 
     })
     }, [])

     const getClickId =()=>{

        history.push(`/`)

    
       
    
    
    }

    return (
        <div>
            <p>PRODUCT ID : {productDetail.id}</p>
            <p>PRODUCT TITLE : {productDetail.title}</p>
            <p>PRODUCT PRICE : {productDetail.price}</p>
            <p>PRODUCT DESCRIPTION : {productDetail.description}</p>
            <p>PRODUCT CATEGORY : {productDetail.category}</p>
            <img src= {productDetail.image}/>
            <button onClick={getClickId} >click here</button>


            
        </div>
    )
}
