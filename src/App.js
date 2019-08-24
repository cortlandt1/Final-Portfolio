import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import ButtonAppBar from './components/ButtonAppbar/ButtonAppbar'
import Block1 from './components/Block1'
import Block2 from './components/Block2';

function App() {
  return (
    <>
      <Router>
        <div>
        <BrowserRouter basename="/Portfolio-Official" >
          <Route exact path="/" component={Block1} />
        </BrowserRouter>
          {/* <Navbar uiConfig={uiConfig} isSignedIn={this.state.isSignedIn} userName={this.state.name} /> */}
          {/* <Route path='/Onboarding' component={() => this.state.isSignedIn ? <Onboarding /> : <Loader uiConfig={uiConfig} isSignedIn={this.state.isSignedIn} userName={this.state.name}/>}/> */}
        </div>
        
      </Router>
      </>
  );
}

export default App;
