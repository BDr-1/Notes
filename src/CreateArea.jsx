import React, { useState } from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {


   const [expanded , setExpanded] = useState(false);



    const [note , setNote] = useState({
        title:"",
        content:""
    });


    function handleChange(event){
       const {name,value} =  event.target;
       setNote(prevValue=>{
        return{
            ...prevValue,
            [name]: value
        }
       });
    }
    function submitBtn(event){
        props.onAdd(note)
        event.preventDefault();
        setNote({
            title:"",
            content:""
        });
        
    }
     

    function expand(){
        setExpanded(true);
    }

  return (
    <div>
      <form className="create-note">
      {expanded ?  <input  onChange={handleChange}  name="title" placeholder="Title" value={note.title} /> : null}
       
        <textarea onClick={expand} 
        onChange={handleChange} 
        name="content" placeholder="Take a note..." 
        rows={expanded ? "3" : "1"} 
        value={note.content} />
       <Zoom in={expanded}>
        <Fab onClick={submitBtn}><NoteAddIcon /></Fab>
       </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;