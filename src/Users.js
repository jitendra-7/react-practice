import React, {useState,useEffect} from 'react'
import './App.css'
export default function Users(){
    // const [user] = useState([
    //     {name:'Bruce', age:28, City:'Delhi' },
    //     {name:'Steven', age:35, City:'Lucknow' },
    //     {name:'Mark', age:38, City:'Mumbai' },
    //     {name:'Eleza', age:25, City:'Kerla' },
    //     {name:'Jack', age:26, City:'Bengaluru' },
    //     {name:'Michael', age:48, City:'Nagpur' }
    // ])

    // const user = [
    //     {name:'Bruce', age:28, City:'Delhi' },
    //     {name:'Steven', age:35, City:'Lucknow' },
    //     {name:'Mark', age:38, City:'Mumbai' },
    //     {name:'Eleza', age:25, City:'Kerla' },
    //     {name:'Jack', age:26, City:'Bengaluru' },
    //     {name:'Michael', age:48, City:'Nagpur' }
    // ]
    const [user, setUser] = useState([])

    useEffect (()=>{
        fetch("https://dummy.restapiexample.com/api/v1/employees").then((apidata)=>{
                apidata.json().then(API_RESULT=>{
               // console.warn('API RESULT',API_RESULT);
                setUser(API_RESULT.data)
            })
        })
    }, []);
    return(
        <div className='container'> 
            <h1>Users Listing Here</h1>
                <table className="table table-striped table-dark">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item,index)=>
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.employee_name}</td>
                            <td>{item.employee_salary}</td>
                            <td>{item.employee_age}</td>
                        </tr>
                        )
                    }
                    {/* {
                    user.map((item,index)=>
                    <tr key={index}><th scope="row">{index}</th><td>{item.name}</td><td>{item.age}</td><td>{item.City}</td></tr>
                        )    
                    } */}
            
                </tbody>
                </table>
            <div className="App">
            </div>
                {
                user.length===24 ? <div>Yes length is 24</div>   : <div>No length should be 6</div>
                }
        </div>
        
    );
}