import  { useState } from 'react'
import { Data } from '../interfaces';

const Counter = () => {
    const [counter , setCounter] = useState<number>(0);
    const [firstName , setFirstName] = useState<string>("");
    const [lastName , setLastName] = useState<string>("");
    const [age , setAge] = useState<string>("");
    const [data , setData] = useState<Data[]>([{
        firstName : "Ashish",
        lastName : "Srivastava",
        age : 26
    }]);

    


    const handleData = () => {
        const newObject: Data = {firstName : "Vikas" , lastName : "Srivastava" , age : 27 };
        // setData(prevData => [...prevData, newObject]);
        setData([...data , newObject])
    }

    const submitHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const newObject: Data = {firstName : firstName , lastName : lastName , age : parseInt(age) };
        // setData(prevData => [...prevData, newObject]);
        setData([...data , newObject])
        setFirstName("");
        setLastName("");
        setAge("")
    }

  return (
    <div style={{marginTop : 30}}>
       <div>{counter}</div>  
        <button onClick={() => setCounter(prev => prev + 1)}>Inc</button>
        <button onClick={() => setCounter(prev => prev - 1)}>Dec</button>
        <button onClick={handleData}>Click me</button>
        <form onSubmit={submitHandler}>
         <div>
         <label>First Name</label><br/>
            <input type="text" value={firstName} required  onChange={(e) => setFirstName(e.target.value)} />
         </div>
         <div>
         <label>Last Name</label><br/>
            <input type="text" value={lastName} required onChange={(e) => setLastName(e.target.value)} />
         </div>
         <div>
         <label>Age</label><br/>
            <input type="number" value={age} required onChange={(e) => setAge(e.target.value)}  />
         </div>
         <button type='submit'  >Submit</button>
         {/* disabled={!firstName || !lastName || !age ? true : false} */}
        </form>
        {
            data.map((res , index) => {
                return (
                    <div key={index}>
                        <h1>{res.firstName}</h1>
                        <h2>{res.lastName}</h2>
                        <h2>{res.age}</h2>
                     </div>
                )
            })
        }
    </div>
  )
}

export default Counter