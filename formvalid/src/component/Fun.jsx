import React,{useState} from 'react'

function Fun() {

    const [name,setName]=useState('skct');
    const [age,setAge]=useState(18);
  return (
    <>
    <h1>Functional Component</h1>
    <h1>Name: {name}</h1>
    <h1>Age: {age}</h1>
    </>
  )
}

export default Fun