import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction } from './Redux/Action';
import { useEffect } from 'react';
import axios from 'axios';
import { addNewProduct, getProduct } from './Redux/product/action';

function App() {
 const {profile,ticket,productListing} =useSelector(state=>state)
 

const dispatch= useDispatch()
 
const handleClick=()=>{
    dispatch(incrementAction())
}


useEffect(()=>{
   fetchData()
},[])

async function fetchData(){
 const result= await axios.get("https://dummyjson.com/products")
 
 dispatch(getProduct(result.data.products))
 console.log(result)
}

const addNew=()=>{
  dispatch(addNewProduct())
}
  return (
    <div className="App">
      <header className="App-header">
        <h3>{profile.name}</h3>
      <h3>{ticket.count}</h3>
      
      <button onClick={handleClick}>Increment Counter</button>
      <br/>
      <button onClick={addNew}>Add New Product</button>
      {
        productListing.products.length>0 &&
        productListing.products.map(eachObject=><h4>{eachObject.title}</h4>)
      }
      </header>
    </div>
  );
}

export default App;
