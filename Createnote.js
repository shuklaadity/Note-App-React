
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

    const discription="dis ";

    return(
        <>
           <div className="Createnote">
                <form onSubmit={onsubmit}>
                    <input  
                    type="text" 
                    name="title"
                    onChange={inputvalue}
                    value={Note.title}
                    placeholder="Title"
                    
                    />
                    <textarea 
                    rows="" 
                    column="" 
                    
                    name="dis"
                    onChange={inputvalue}
                    value={Note.dis}
                     placeholder="Discription...p"
                    />
                    <button onClick={showdata}><i class="fa-solid fa-plus"></i> </button>
                </form>
           </div>
        </>
    )
}
export default Createnote;