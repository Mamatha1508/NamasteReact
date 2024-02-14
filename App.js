
import React from "react";
import ReactDOM from "react-dom";

// console.log('div out',document.querySelector('[id="root"]'));
// setTimeout(()=>{
    
   
// console.log('div',document.querySelector('[id="root"]'));
// console.log('root 1',root);
// },10000)

const heading= React.createElement('h1',{id:"heading"},'Hellow World from React !');
const root= ReactDOM.createRoot(document.getElementById('root'));
console.log('root',root);
root.render(heading);