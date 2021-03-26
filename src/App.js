import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Form from "./Components/Form";



const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
<Link to="/pizza"><button>Order Here!</button></Link>
      <p>You can order if you want to or leave your money behind!</p>
      <Switch>
        <Route path="/pizza" component={Form}/>
        <Route path="/"/>
      </Switch>
    </>
  );
};
export default App;
