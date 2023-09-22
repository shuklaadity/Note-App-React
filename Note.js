import React from "react";

const Note =(props)=>{

    const notedelete=()=>{
      props.delete(props.id);

    }
    return(
        <>
           <div className="Note">
           <button onClick={notedelete}><i class="fa-solid fa-trash"></i></button>
               <h3>{props.title}</h3>
               <p> {props.dis} </p>
               
           </div>
        </>
    )
}
export default Note;