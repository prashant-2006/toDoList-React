import { useState } from 'react'
import './App.css'

function App() {

  const [inputText,setInputText]=useState("");

  const [list,setList]=useState([]);

  function updateInput(event){
    const newText=event.target.value;
    setInputText(newText);
  }

  function addList(){
    setList(prevItems => {
      if(inputText==""){
        return [...prevItems];
      }
      else{
        return [...prevItems,inputText];
      }
    })
    setInputText("");
  }

  function removeList(id){
    setList(prevItems => {
      return prevItems.filter((item,index) => {
        return index!==id;
      })
    })
  }

  return (
     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 h-[75vh] overflow-hidden">
        <h1 className="text-4xl font-bold text-center mb-12">To-Do List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded-l-md"
            placeholder="Add a new task"
            onChange={updateInput}
            value={inputText}
          />
          <button onClick={addList} className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600">
            Add
          </button>
        </div>
        <ul className="space-y-2" id="taskList">
          {list.map((item,index)=> <li key={index} id={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-md shadow-sm">{(index+1)+")   "+item}<button className="text-red-500 hover:text-red-700" onClick={() => {removeList(index)}}>Delete</button></li>)}
        </ul>
      </div>
      <footer className=" text-gray-400 text-center py-0 mt-8">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div> 
  )
}

export default App
