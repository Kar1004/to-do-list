import '../form.css'
import React, { useState } from 'react'

function Form() {
  const[input,setInput] = useState("");
  const[List,setList]= useState([])
  

  const handleChange = (e)  =>{
 
    e.preventDefault();
    setInput(e.target.value)

    }

    const Addlist=(e)=>{
       e.preventDefault();
        if (input !== ""){
         const  listDetails = {
               id : Math.floor(Math.random()*1000),
               value : input,
               isCompleted :false ,
         }
         setList([...List,listDetails])
         console.log(listDetails);
        }
    }

    const deleteList = (e ,id) =>{
      e.preventDefault();
      setList(List.filter( (Tasklist) => Tasklist.id != id))
    }

    const completedList = (e , id) =>{
      e.preventDefault();

      // use findIndex()
     const element = List.findIndex(element => element.id === id);

     const newList = [ ...List]

     newList[element] =  {
       ...newList[element] ,
       isCompleted : true,
     }
     setList(newList)

    }
  return (
      <div className='form-list'>
      <form  className='list'>
          <input
          type="text"
          value={input}
          placeholder='entrez votre tache'
          className='InputColor'
          onChange={(e)=>handleChange(e)}

          />
          <button className='add' onClick={(e)=>Addlist(e)} type='submit'>Ajouter</button>
           {List !== [] ? (
             <ul>
               {List.map((Tasklist) =>(
              <li className={Tasklist.isCompleted ? "surlignText" : "listItem"}>
                <div className="align">
                <div className="right">
                {Tasklist.value}
                </div>
                <div className="left">
                <button className='complete' onClick={(e)=>completedList( e , Tasklist.id)}>completed</button>
                <button  className='delete' onClick={(e)=>deleteList(  e , Tasklist.id )}>delete</button>
                </div>
                </div>
              </li>

               )
               )
               }
             </ul>

           ):null}
      </form>
      
      </div>
  )
}

export default Form