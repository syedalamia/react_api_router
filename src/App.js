import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect, 
 
} from "react-router-dom";


import React from 'react'
import Product from './component/Product'
import ProductDetails from "./component/ProductDetails";



function App() {

  
  return (
    <div className="App">
      <Router>
      


      <Switch>
        <Route exact path={'/'}>
         <Product/>
        </Route>


        <Route exact path={'/product_details/:id'}>
     
        <ProductDetails/>
        </Route>

       


        <Route  path={'/404'}>
        <p>not found</p>
        </Route>

        <Route path={'*'} render={()=><Redirect to={'/404'}/>}/>

     

   


      </Switch>

      </Router>
    </div>
  );
}

export default App;