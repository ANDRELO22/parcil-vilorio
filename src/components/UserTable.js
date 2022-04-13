import React from 'react'

<link rel='stylesheet' href='style.css'/>

const UserTable = ( props ) => {
    console.log(props.users)
  return (
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>cedula</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {
            props.users.length > 0 ?
            props.users.map( users => (
                <tr key={users.id}>
                <td>{users.name}</td>
                <td>{users.username}</td>
                <td>{users.id}</td>
                <td>
                  <button 
                  className="button muted-button"
                  onClick={()=>{props.editRow(users)}}
                  >
                    Edit</button>
                  <button
                   className="button muted-button"
                   onClick={ () => {props.deleteUser(users.id)}}
                   >
                     Delete
                   </button>
                </td>
              </tr>

            )) : (
                <tr>
                    <td colSpan={3}> No Users</td>
                </tr>
            )
        }
     
    </tbody>
  </table>
)


}

export default UserTable