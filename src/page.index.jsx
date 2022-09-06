import { useAuth0 } from '@auth0/auth0-react'

import page from './page'

function PageIndex () {
  const { user, isAuthenticated } = useAuth0()
  return (
    isAuthenticated
      ? (<div>HI {user?.name}</div>)
      : (<div>You are not logged in, so you can't participate.</div>)
  )
}

page(PageIndex)
