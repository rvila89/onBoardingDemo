import React from 'react';
import { UiButton, UiImage } from '@absis-components/react';
import './styles/app.css';
import logo from './assets/logo-caixa.png';

const App = () => (
  <section className="app">
    <div className="logo-caixa">
      <UiImage alt="logo caixabank" src={logo} />
    </div>
    <UiButton
      className="ui-button"
      href="https://confluence.cloud.lacaixa.es/confluence/display/absis3/-+Getting+Started"
    >
      Get Started with ABSIS3-SPA
    </UiButton>
    <UiButton
      className="ui-button"
      href="https://portalabsis3.pro.ca.caixabank.com/marketplace/components/ui/"
    >
      Components Marketplace
    </UiButton>
    <UiButton className="ui-button" href="https://reactjs.org">
      Learn React
    </UiButton>

    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
  </section>
);

export default App;
