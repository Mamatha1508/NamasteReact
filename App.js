
console.log('div out',document.querySelector('[id="root"]'));
setTimeout(()=>{
    
    const heading= React.createElement('h1',{},'Hellow World from React !');
const root= ReactDOM.createRoot(document.getElementById('root'));
console.log('root',root);
root.render(heading);
console.log('div',document.querySelector('[id="root"]'));
console.log('root 1',root);
},10000)