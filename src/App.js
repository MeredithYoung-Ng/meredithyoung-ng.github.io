import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Music from './Music';
import Portalware from './Portalware';
import CrochetMatic from './CrochetMatic';
import SurfaceBrush from './SurfaceBrush';
import PathTracer from './PathTracer';
import TileTunes from './TileTunes';
import DiscoBot from './DiscoBot';
import PVDCM from './PVDCM';
import WiCSHistory from './WiCSHistory';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
          <Route exact path="/">
            <Header page={0}/>
            <About />
          </Route>
          <Route path="/work">
            <Header page={1}/>
            <Portfolio />
          </Route>
          <Route path="/music">
            <Header page={1}/>
            <Music />
          </Route>
          <Route path="/portalware">
            <Header page={2}/>
            <Portalware />
          </Route>
          <Route path="/crochetmatic">
            <Header page={2}/>
            <CrochetMatic />
          </Route>
          <Route path="/surfacebrush">
            <Header page={2}/>
            <SurfaceBrush />
          </Route>
          <Route path="/pathtracer">
            <Header page={2}/>
            <PathTracer />
          </Route>
          <Route path="/tiletunes">
            <Header page={2}/>
            <TileTunes />
          </Route>
          <Route path="/discobot">
            <Header page={2}/>
            <DiscoBot />
          </Route>
          <Route path="/pvdcm">
            <Header page={2}/>
            <PVDCM />
          </Route>
          <Route path="/wicshistory">
            <Header page={2}/>
            <WiCSHistory />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
