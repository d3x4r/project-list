import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Main.css';
import Psd2htmlPage from '../pages/Psd2htmlPage';
import JsPage from '../pages/JsPage';
import ReactPage from '../pages/ReactPage';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/psd2html">
          <Psd2htmlPage />
        </Route>
        <Route path="/js">
          <JsPage />
        </Route>
        <Route path="/react">
          <ReactPage />
        </Route>
        <Route path="/">
          <div>default</div>
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
