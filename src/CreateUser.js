import React, {useState} from 'react'
function CreateUser(){
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [city,setCity] = useState("");
    function makeUser(){
        let userdata = {name,age,city}
        console.warn("Click",userdata);
    }
    return(
        <>
            <h1>Create Users Form</h1>
            <label>Name :  </label>
            <input type='text' onChange={(e)=>setName(e.target.value)} value={name} />
            <br/><br/>
            <label>Age :  </label>
            <input type='number' onChange={(e)=>setAge(e.target.value)} value={age}/>
            <br/><br/>
            <label>City :  </label>
            <input type='text' onChange={(e)=>setCity(e.target.value)} value={city}/>
            <br/><br/>
            <button onClick={makeUser}>Create User</button>
        </>
    )
}

export default CreateUser;