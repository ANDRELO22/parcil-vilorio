import React, { useState } from 'react'
import UserTable from './components/UserTable';
import AddUsers from './components/AddUsers'
import EditUserForm from './components/EditUseForm';
import'./index.css'
import LisVideos from './components/LisVideo';
import VideoTable from './components/VideoTable';

function App ()  {

  const usersData = [
    { id: 1002465848, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]
  const LisVideos = [
    {
        id: '1234',
        name: 'poter',
    },
    {
        id: '1256',
        name: 'alicia',
    },
    {
        id: '1110',
        name: 'poker',
    }
]
  
// estado
const [video, setVideo] = useState(LisVideos);

  // state
  const [users, setUsers] = useState(usersData);
  const [stock, setStock] = useState(5);
  const [stockVacio, setStockVacio] = useState(false);

 // agregar usuario
  const addUsers = (user) => {
    user.id = user.id
    setUsers([...users, user])
  }

  //eliminar usuario
  
  const deleteUser= (id) =>{
     console.log(id)

     const arrayFiltrado = users.filter(user => user.id !== id);

     setUsers( arrayFiltrado )
  }

  // editar usuario
  const [editar, setEditar] = useState(false)

  const [currentUser, setCurrentUser] = useState({
    id: null, 
    name: '',
    username:'',
    cedula: ''
  })


  const editRow = (user) =>{
    setEditar(true);
    setCurrentUser({
      id: user.id, 
      name: user.name,
       username: user.username
      })
    
  }


 // const restar = () =>{
   // if(stock > 0){
     // const newStock = stock - 1;
     // setStock(newStock);
    //  if(newStock === 0){
      //  setStockVacio(true);
    //  }
   // }
 // }

  const updateUser = (id, updateUser) =>{
    setEditar(false)

    setUsers(users.map(user => (user.id === id ? updateUser: user)))
  }

  const onSubmit = () =>{
     console.log('hola bro');
     
  }


  return (
    <div className='container'>
      <h1> creacion de usuario</h1>

     
      {
        //stockVacio && <p>Error, ya no hay juegos disponibles.</p>
      }
      
      <div className='flex-row'>
       <div className='flex-large'>

         {
           editar? (
             <div>
               <h2>Editar Usuario</h2>
               <EditUserForm currentUser = {currentUser} updateUser ={updateUser}/>
             </div>
           ) :(
             <div>
               <h2> Agregar Usuario</h2>
               <AddUsers 
                addUsers = { addUsers } />
             </div>
           )
         }


        
       </div>
       <div className='flex-large'>
         <h2>View users</h2>
         <UserTable users={ users } deleteUser= { deleteUser }  editRow = { editRow }/>
       </div>
       <div className='flex-large'>
         <h2>View Videojuegos</h2>
         <VideoTable video={video}/>

         </div>
      </div>
    </div>
  )
}

export default App;