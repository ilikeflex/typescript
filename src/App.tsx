import React from "react";
import MyHeader from './components/MyHeader';
import ShoppingBasket from './components/ShoppingBasket'

const App = () => 
{
    const inputParameter = {
        name:"Developer",
        age:90
      };

    return (
    <div>
        Hello React App from scratch
       <MyHeader name={inputParameter.name} age={inputParameter.age} />
       <ShoppingBasket products={['Apples','Orange','Banana']}/>
    </div>
    );
}

/*
const App = () => (
    <div>
         Hello React App from scratch
        <MyHeader name="Developer"/>
     </div>
);
*/

/*
function App() {
    return (
     <div>
         Hello React App from scratch
        <MyHeader name="Developer"/>
     </div>
   
    );
  }
*/
export default App;