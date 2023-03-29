
import './App.css';
import React,{useState} from 'react';
function App() {
  const[value,setvalue]=useState("")
  const handler=(e)=>{
    if(typeof(value)==="string"){
    setvalue(value.concat(e.target.name))
    }
    else{
      var converted=value.toString()
      setvalue(converted.concat(e.target.name))
    }
  }
  const allclear=()=>{
    setvalue("")
  }
  const clear=()=>{
    if(typeof(value)==="string"){
    setvalue(value.slice(0,-1))}
    else{
      var converted=value.toString()
      setvalue(converted.slice(0,-1))
    }
  }
  const totalvalue=()=>{
    try
   { var coverttostring = eval(value)
    setvalue(coverttostring)}
   catch{
setvalue("Error")
   }
   
  }
  return (
    <div className="App">
      <h1>Calcultor</h1>
      <div className='main_body'>
<input value={value} />
<div className='keyboard'>
  <button className='ac' id="highlight" onClick={allclear}>AC</button>
  <button onClick={clear}  id="highlight">Clear </button>
  <button name="+"  id="highlight" onClick={handler}>+</button>
  <button name="7" onClick={handler}>7</button>
  <button name="8" onClick={handler}>8</button>
  <button name="9" onClick={handler}>9</button>
  <button name="-"  id="highlight" onClick={handler}>-</button>
  <button name="4" onClick={handler}>4</button>
  <button name="5" onClick={handler}>5</button>
  <button name="6" onClick={handler}>6</button>
  <button name="*"  id="highlight" onClick={handler}>X</button>
  <button name="1" onClick={handler}>1</button>
  <button name="2" onClick={handler}>2</button>
  <button name="3" onClick={handler}>3</button>
  <button name="/"   id="highlight"onClick={handler}>%</button>
  <button name="0" onClick={handler}>0</button>
  <button name="." onClick={handler}>.</button>
  <button className='equal' id="highlight" onClick={()=>totalvalue()}>=</button>


</div>

      </div>
     
    </div>
  );
}

export default App;
