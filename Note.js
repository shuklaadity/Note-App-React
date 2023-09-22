import React from "react";

const Note =(props)=>{

    const notedelete=()=>{
      props.delete(props.id);

    }
    return(
        <>
           <div className="Note">
               <h3>{props.title}</h3>
               <p> {props.dis} </p>
               <button onClick={notedelete}>Delete</button>
           </div>
        </>
    )
}
export default Note;