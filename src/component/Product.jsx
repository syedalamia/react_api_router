import axios from 'axios';
import React ,{useState,useEffect} from 'react'
import Loading from './Loading';
import { useHistory } from 'react-router-dom'

export default function Product() {
    
    const [visible,visibleFunction] = useState(true)
    const [product,setProduct]=useState([]);
    const history=useHistory();


    const getClickId =(product_id)=>{

        history.push(`/product_details/${product_id}`)

    
       
    
    
    }


    useEffect(() => {

     setTimeout(() => {
        visibleFunction(false)
     }, 2000);
    }, [])


    useEffect(() => {
       axios
       .get(' https://fakestoreapi.com/products/')
       .then((res)=>{
         console.log(res.data,"response");
         setProduct(res.data)
       })
       .catch((err)=>{
           console.log(err.data,"error")

    })
    }, [])



    return (
        <div>
           {
               (visible&&!product.length)?(<Loading/>)
               :(product.map((data)=>{
                return (
                <>
                
                <h2 >Item - {data.id}</h2> 
                <img src={data.image}/>
                <h2>{data.title}</h2>
                <button onClick={()=>getClickId(data.id)} >click here</button>
             

                         
                </>
                
                
                )

                
            }))




           }



            
        </div>
    )
}
