import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'
import 'virtual:windi.css'

const { VITE_AUTH0_DOMAIN, VITE_AUTH0_CLIENT_ID } = import.meta.env

function Menu () {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0()

  return (
    <nav>
      {isAuthenticated
        ? (<a className='cursor-pointer text-white' onClick={() => logout({ returnTo: window.location.origin })}>logout</a>)
        : (<a className='cursor-pointer text-white' onClick={() => loginWithRedirect()}>login</a>)}
    </nav>
  )
}

export default function page (App) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Auth0Provider cacheLocation='localstorage' useRefreshTokens domain={VITE_AUTH0_DOMAIN} clientId={VITE_AUTH0_CLIENT_ID} redirectUri={window.location.origin}>
        <header className='bg-emerald-500 '>
          <div className='container m-auto p-4 flex items-center justify-between'>
            <a className='text-white' href='/'>web3flix</a>
            <Menu />
          </div>
        </header>
        <main className='container m-auto p-4'>
          <App />
        </main>
      </Auth0Provider>
    </React.StrictMode>
  )
}
