import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import CreateArea from './CreateArea.jsx';


function KeeperApp(){

    const [notes, setNotes] = useState([]);
if(!localStorage.getItem("notes") || JSON.parse(localStorage.getItem("notes")).length === 0){
 localStorage.setItem('notes', JSON.stringify(notes));

}
    function addNote(newNote){
      setNotes(prevNotes =>{
       return [...prevNotes, newNote];
      });
    }

    function deleteNote(id){
       setNotes((prevNotes)=>{
        return prevNotes.filter((noteItem,index)=>{
              return index !== id;
        });
       });
    }

 return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
     { notes.map((noteItem , index)=>{
         return  <Note 
                key={index} id={index} title={noteItem.title}content={noteItem.content} onDelete={deleteNote} />
          })
      }
 <Footer /> 
 </div>
  );
}

export default KeeperApp;