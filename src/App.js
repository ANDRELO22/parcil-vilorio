import React, { useState } from 'react'
import UserTable from './components/UserTable';
import AddUsers from './components/AddUsers'


function App ()  {

  const usersData = [
    { id: 1002465848, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  // state
  const [users, setUsers] = useState(usersData)
 // agregar usuario
  const addUsers = (user) => {
    user.id = users.length == users.id
    setUsers([...users, user])
  }

  return (
    <div className='container'>
      <h1> creacion de usuario</h1>
      <div className='flex-row'>
       <div className='flex-large'>
         <h2>add user</h2>
         <AddUsers addUsers = { addUsers }/>
       </div>
       <div className='flex-large'>
         <h2>View users</h2>
         <UserTable users={ users }/>
       </div>
      </div>
    </div>
  )
}

export default App;