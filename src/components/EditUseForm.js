import React from 'react'
import { useForm } from 'react-hook-form'

  <link rel='stylesheet' href='style.css'/>

  const EditUserForm = (props) => {
    
  const {register, errors, handleSubmit,setValue} = useForm({
      defaultValues: props.currentUser
  });

  setValue('name',props.currentUser.name);
  setValue('username',props.currentUser.username);
  setValue('id',props.currentUser.id);
    const onSubmit = (data,e) => {
      console.log(data)
    props.updateUser( props.currentUser.id,data)
      e.target.reset()
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" name="name"/>
    <div>
      {errors?.name?.message }
    </div>
      
      <label>Username</label>
      <input type="text" name="username" {...register('username',{required: true,message: "campo requrido"})}  />
       <div>
         {errors?.username?.message}
       </div>
       <label>Cedula</label>
       <input type="text" id="id" {...register('id',{required:{ value: true, message: "campo requrido"}})}/>
       <div>
         {errors?.userid?.message}
       </div>
      <button>Edit user</button>
    </form>
  )
}

export default EditUserForm;