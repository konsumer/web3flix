import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export function LoginButton () {
  const { loginWithRedirect } = useAuth0()
  return <button onClick={() => loginWithRedirect()}>Log In</button>
}

export function LogoutButton () {
  const { loginWithRedirect } = useAuth0()
  const { logout } = useAuth0()
  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  )
}

function App () {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0()

  return (
    <>
      <header className='bg-indigo-500 text-white p-4'>
        <nav className='container mx-auto flex gap-4 justify-between'>
          <a href='/'>web3flix</a>
          <menu>
            {isAuthenticated ? (<LogoutButton />) : (<LoginButton />)}
          </menu>
        </nav>
      </header>
      <main className='container  mx-auto'>
        <div>It works</div>

      </main>
    </>
  )
}

export default App
