import React, { useState } from "react";
import Header from "./Header";
import "./Notapp.css";
import Footer from "./Footer";
import Createnote from "./Createnote";
import Note from "./Note";



const Noteapp = () => {

  const [items, setitems] = useState([]);

  const showlargedata = (Note) => {

    setitems(
      (prev) => {
        return [...prev, Note];
      }
    );
    console.log(Note)
  }


  const deletenote = (id) => {
        
    setitems(
      (old)=>{
             old.filter((cur,ind)=>{
               return id !== ind ;
             })
      }
    );

  }

  return (
    <>
      <Header />
      <Createnote
        Fun={showlargedata}
      />
      {
        items.map((elem, index) => {
             return <Note
              key={index}
              index={index}
              title={elem.title}
              dis={elem.dis}
              delete={deletenote}
            />;
          }

      )
      }

      <Footer />

    </>
  )

}

export default Noteapp;