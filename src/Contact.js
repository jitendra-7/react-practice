import React,{useState} from 'react'
function Contact(props){
    const [val,setVal] = useState("Dummy Value");
    const test = (e)=>{
        console.warn("Hello From Click Me Button",e.target.value);
        setVal(e.target.value);
    }
    return(
        <div>
            <h1>Conatct Us Component</h1>
            <input type='text' value={val} onChange={test}/>
            <button onClick={()=>{alert(val)}}>Click Me</button>
        </div>
    )
}

export default Contact;