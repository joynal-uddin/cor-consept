import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayok = ['Anowaer', 'Jashim', 'Alomgir', 'Manna', 'Rajib', 'Robel', 'Siam']
  const products = [
    {name:'photoShop', price:'$99.99'},
    {name:'illustrator', price:'$66.99'},
    {name:'PDF Reader', price:'$6.99'}
]

const nayokName = nayok.map(nayok => nayok)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
          <Counter></Counter>
          <Users></Users>
        <ul>

          {
            nayok.map(nayok => <li>{nayok}</li>)
          }
         {
           products.map(products => <li>{products.name}</li>)
         }
        </ul>
        {
          products.map(products =><Product product={products}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name="Munna" job="football"></Person>
        <Person name="Masum" job="Dorshok"></Person>
        <Person name="Abed" job="Rickshaw poler"></Person>
      </header>
    </div>
  );
}


function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic users : {users.length}</h3>
     <ol>
       {
         users.map(users => <li>{users.name}  phone:  {users.phone} Email: {users.email}</li>)
       }
     </ol>
    </div>
  )
}

function  Product(props) {
  const productStyle = {
    border:'2px solid red',
    borderRadius:'5px',
    backgroundColor:'lightgray',
     height:'200px',
     width:'200px',
     float:'left',
     color:'black',

  }
  const {name, price}= props.product
  
  return(
    <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        
        <button>Buy now</button>
    </div>
  )
}
function Person(props) {
  const personStyle = {
    border:'2px solid red',
    margin:'20px'
  }
  return (
  <div style={{border:'2px solid gold', margin:'10px'}}>
  <h1>name: {props.name} {props.job}</h1>
  <h2></h2>
  </div>
  )
}

function Counter(){
  const [count, setCount] =useState(10);
  const handleIncrease = () => setCount(count +1);
  return(
    <div>
      <h1>count:{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count +1)}>increase</button>
    </div>
  )
}

export default App;
