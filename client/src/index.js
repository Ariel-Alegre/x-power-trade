import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next';
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'
import global_it from './translations/it/global.json'
import global_de from './translations/de/global.json'
import global_gr from './translations/gr/global.json'
import 'bootstrap/dist/css/bootstrap.min.css';








i18next.init({
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en

    },
    it: {
      global: global_it

    },
    de: {
      global: global_de

    },
    gr: {
      global: global_gr

    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,



);




