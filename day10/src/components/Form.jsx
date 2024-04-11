import React,{useRef} from 'react';

const Form=()=>{

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleSubmit=(e)=>{

    e.preventDefault();

    const formData={

      email:emailInputRef.current.value,
      password:passwordInputRef.current.value
    }

    console.log(formData);
    emailInputRef.current.value='';
    passwordInputRef.current.value='';
    emailInputRef.current.focus();
  }

  return(

    <>
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type='email' id='email' ref={emailInputRef}/>
      <label>Password</label>
      <input type='password' id='password' ref={passwordInputRef}/>
      <button type='submit'> Submit</button>
    </form>
    </>
  )

}

export default Form;