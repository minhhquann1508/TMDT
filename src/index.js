import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 0,
            colorPrimary: "#000",
            colorLinkHover: "#888888"
          },
          components: {
            Input: {
              activeShadow: false
            },
            Breadcrumb: {
              fontSize: 12,
              colorBgTextHover: 'none'
            },
          }
        }}
      >
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

