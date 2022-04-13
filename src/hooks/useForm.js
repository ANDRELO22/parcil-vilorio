import { useState } from "react"

<link rel='stylesheet' href='style.css'/>



export const useForm = (inicialState = {}) => {
  
  const [values, setValues] = useState(inicialState)

  const handeleInputChange = ({target}) =>{

    setValues({

        ...values,
        [target.name]: target.value

     });
    
   }

   return [ values, handeleInputChange]

  }
