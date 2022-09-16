import React from 'react';
import './App.css';
import RouteA from './RouteA';
import Button from './button';
import simplestate from './simplestate';
import { BrowserRouter , Redirect, Route } from 'react-router-dom';
import ListNote from './ListNote';
import useEff from './useEff';
import useEffMul from './useEffMul';
import Users from './Users';
import "./button.css";
import WriteContext, { UserContext } from './WriteContext';
import { Provider } from 'react-redux';
import { ConfigureStore } from './AppState'
import WriteReducer from './writeReducer';
import ReducerUi from './ReducerUi';
import ReactHookFormUi from './ReactHookFormUi';
import signup from './signup';
import login from './login';
import Home from './Home';
import './FirebaseSetup';
import Usercontext from './Usercontext';
import Profile from './Profile';

function App() {

  return (
    <Provider store={ConfigureStore()}>
   {/* <div className='wel'>Welcome</div> */}
    <BrowserRouter>
{/* ----------------------------PROJECT--------------------------------- */}
      <Usercontext>
        <Route exact={true} path="/SignUp" component={signup} />
        <Route exact={true} path="/Login" component={login} />
        <Route exact={true} path="/Home" component={Home} />
          <Route exact={true} path="/Profile" component={Profile} />

        {/* ...............DEFAULT ROUTE............ */}
        <Route exact={true} path="/" render={()=> <Redirect to="/Home"/ >}
         />
 
 {/* ----------------------------PROJECT--------------------------------- */}





      <Route exact={true} path="/ListNote" component={ListNote}/>
      <Route exact={true} path="/useEff" component={useEff}/>
      <Route exact={true} path="/useEffM" component={useEffMul} />
      <Route exact={true} path="/RouteA/:name" component={RouteA}/>

      <Route exact={true} path="/submit" render={() => <Button label='submit' />}/>
      <Route exact={true} path="/simple" component={simplestate}/>
        <Route exact={true} path="/writecontext" component={WriteContext} />
      
      <Route exact={true} path="/person" component={Users} />

      <Route exact={true} path="/writeReducer" component={WriteReducer} />
        <Route exact={true} path="/ReducerUi" component={ReducerUi} />
        
        <Route exact={true} path="/ReactHookFrom" component={ReactHookFormUi} />

        </Usercontext>
      
    </BrowserRouter>
    </Provider>
  )
}

export default App;
