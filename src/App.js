
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'





import Homepage from './components/pages/homepage'
import Loginpage from './components/pages/loginpage'
import Createpage from './components/pages/createpage.js'   
import Footer from './components/footercomponent/footer' 
import Header from './components/headercomponent/header'

class App extends Component{

    render() {
    return (
   <Router>
<div className="App">

<Header/>

           <Route exact path="/"     component={Homepage}/>
           <Route path="/Createpage" component={Createpage}/>
           <Route path="/Loginpage" component={Loginpage}/>

 
<Footer/>
         
</div>
    </Router>

    );
  }
}


export default App;
