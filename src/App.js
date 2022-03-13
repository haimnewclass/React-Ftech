import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';



// https://jsonplaceholder.typicode.com/
function App() {
  
let [val,setVal] = useState();
let [val2,setVal2] = useState("start");
let [val3,setVal3] = useState("start");
//let val3="23";
const load=()=>{

let url="https://jsonplaceholder.typicode.com/todos";
fetch(url)
.then(res => res.json())
.then(
  (result) => {
    setVal({
      isLoaded: true,
      items: result
    });

    console.log("****");
  },
  // Note: it's important to handle errors here
  // instead of a catch() block so that we don't swallow
  // exceptions from actual bugs in components.
  (error) => {
   setVal({
     isLoaded: true,
     error:error
   });
  }
)
}

useEffect(load,[val3])
//load();
  return (
    <div className="App">
     start
     <div onClick={()=>{

       let url="https://jsonplaceholder.typicode.com/todos";
       fetch(url)
       .then(res => res.json())
       .then(
         (result) => {
           setVal({
             isLoaded: true,
             items: result
           });

           console.log("****");
         },
         // Note: it's important to handle errors here
         // instead of a catch() block so that we don't swallow
         // exceptions from actual bugs in components.
         (error) => {
          setVal({
            isLoaded: true,
            error:error
          });
         }
       )



     }
    }>click</div>

<div>{val2}</div>
    <input onChange={(i)=>{
      setVal2(i.target.value);
      if(i.target.value==="*") {
        console.log('onChange')
        setVal3("1")};
    }} />

    {
    val? val.items.map((i)=>{
      return (<div>{i.title}</div>);
    }):""}
    </div>
  );
}

export default App;
