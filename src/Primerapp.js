import React, { useEffect } from 'react'
import './components/style.css'


export const Primerapp = () => {

    const [use, handeleInputChange] = use({
        name:'',
        email:'',
        password:''
    });

    const{name, email, password} =use;

    useEffect(() => {
      console.log('email cambio')
    }, [email]);
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log( use )
    }

  return (
    <form onSubmit={ handleSubmit } >
      
      <h1>FormWithCustom</h1>
      <hr/>
      <div className="form-group">
          <input

             type='text'
             name='name'
             className='form-control'
             placeholder='tu nombre'
             autoComplete='off'
             value={ name }
             onChange={ handeleInputChange }
             

          />
          
      </div>

       <p/>
      <div className="form-group">
          <input

             type='text'
             name='email'
             className='form-control'
             placeholder='tu @gmail.com'
             autoComplete='off'
             value={ email }
             onChange={ handeleInputChange }
             

          />
          </div>
          <p/>
          <div className="form-group">
          <input

             type='password'
             name='password'
             className='form-control'
             placeholder='password'
             autoComplete='off'
             value={ password }
             onChange={ handeleInputChange }
             

          />
          </div>
         
        <button type='submit' className='btn btn-primary'>
            guardar
        </button>
    </form>
  )
}
