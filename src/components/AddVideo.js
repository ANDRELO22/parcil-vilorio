import React,{ useState } from 'react'
import { useForm } from 'react-hook-form'

<link rel='stylesheet' href='style.css'/>

const AddUsers = (props) => {

  const {register, errors, handleSubmit} = useForm();
  const [nombreInvalido, setNombreInvalido] = useState();
  const [correoInvalido, setCorreoInvalido] = useState();
  const [cedulaInvalida, setCedulaInvalida] = useState();

  const onSubmit = (data,e) => {
    console.log(data.name)
    if(data.name.length < 4){
      setNombreInvalido(true);
    }
    props.addUsers(data)
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" name="name" {...register('name',{required: true,message: "campo requrido"})}  />
      { nombreInvalido ? <p className='text-danger'>Este campo es requerido y debe tener un minimo de 4 caracteres</p> : null }
    <div>
      {errors?.name?.message }
    </div>
      
      <label>gmail</label>
      <input type="text" name="username" {...register('username',{required: true,message: "campo requrido"})}  />
       <div>
         {errors?.username?.message}
       </div>
       <label>Cedula</label>
       <input type="text" id="id" {...register('id',{required:{ value: true, message: "campo requrido"}})}/>
       <div>
         {errors?.userid?.message}
       </div>
      <button>Add new user</button>
    </form>
  )
}

export default AddUsers;