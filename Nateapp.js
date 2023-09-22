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
    console.log(id)
    setitems(
      (olddata) => {

        return olddata.filter((arrele, index) => {

          return index !== id;
        })

      }
    )


  }

  return (
    <>
      <Header />
      <Createnote
        Fun={showlargedata}
      />
      <div className="Notes-div">
        {


          items.map(
            (elem, index) => {

               
                return <Note
                key={index}
                id={index}
                title={elem.title}
                dis={elem.dis}
                delete={deletenote}
              />;
              

            }
          )

        }

      </div>

      <Footer />

    </>
  )

}

export default Noteapp;