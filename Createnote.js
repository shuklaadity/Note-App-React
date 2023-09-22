
import React, { useState } from "react";

const Createnote =( props)=>{

     const [Note,setNote]=useState(
       {
        title:" ",
        dis:" "
       }
     )

     const inputvalue=(event)=>{

        // Hare performing object destructuring 
     const {name,value} = event.target;
     console.log(value)

     setNote(
        (olddata)=>{
             // Hare using spreade oprater that is very usefull for from in react js

               return{
                  // this line of code remove meny line in program
                  // when the name is equal to input feild name then the input value assinig the usestate object
                   ...olddata,
                   [name]:value
               }
             

        }
     )

     console.log(Note)
     

     }

    // onclick function using funtion 

     const showdata=()=>{
          props.Fun(Note);
     }

     const onsubmit = (event) => {
        event.preventDefault();
       
    }

    return(
        <>
           <div className="Createnote">
                <form onSubmit={onsubmit}>
                    <input  
                    type="text" 
                    placeholder="Title"  
                    name="title"
                    autoCapitalize="off"
                    onChange={inputvalue}

                    value={Note.title}
                    
                    />
                    <textarea 
                    rows="" 
                    column="" 
                    placeholder="Add discription" 
                    name="dis"
                    onChange={inputvalue}
                    value={Note.dis}
                    />
                    <button onClick={showdata}> Add note</button>
                </form>
           </div>
        </>
    )
}
export default Createnote;