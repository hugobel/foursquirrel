import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import './index.css';
import App from './YourComponent';
import registerServiceWorker from './registerServiceWorker';
import {PersistGate} from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>, 
  document.getElementById('app')
);

registerServiceWorker();
