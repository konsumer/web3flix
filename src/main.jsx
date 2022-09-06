import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'
import './style.css'

const { VITE_AUTH0_DOMAIN, VITE_AUTH0_CLIENT_ID } = import.meta.env

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider cacheLocation='localstorage' useRefreshTokens domain={VITE_AUTH0_DOMAIN} clientId={VITE_AUTH0_CLIENT_ID} redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
)
