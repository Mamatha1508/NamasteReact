
import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import { RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import {Outlet} from 'react-router-dom';
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Logout from "./components/Logout";



//using CreateElement method-> which is very difficult to maintain and understand with nested structire and hence we use JSX
// const heading= React.createElement('h1',{id:"heading"},'Hellow World from React !');
 
// console.log('root',root);
// console.log('div out',document.querySelector('[id="root"]'));
// setTimeout(()=>{
// console.log('div',document.querySelector('[id="root"]'));
// console.log('root 1',root);
// },10000)


// const heading=<h1>Hello world from JSX</h1>

// //functional compoenet

// const Heading1=()=><h1>Hellow from Functional component</h1>

// // adding react element in functional component

// const Heading2=()=>(<div>{heading}
//                     <h1>This is heading 2</h1>
//                     </div>)


// // functional compoenent in react element

// const heading3=(<div>
//     <h1>this is heading3</h1>
//     <Heading2 />
// </div>)


// // React element inside another react element

// const heading4=(<div>
//     {heading}
//     <h1>This is heading4</h1>
// </div>)


// // Executing functional component in functional component

// const Heading5=()=>(<div>
//     {Heading2()}
//     <Heading1 />
//     {heading3} ,{ heading4}
    
// </div>)



//  Header
//    - Logo 
//    - Navigation links
// Body
    //  -Search
    //  - Restaurant cart 
    //     - Restaurant cards 
// Footer
//   - Copyright , address, links , contact












const AppLayout=()=>(
    <div>
        <Header />
       
         <Outlet/>
        
         
        {/* <Footer/>  */}
    </div>
)


const appRouter= createBrowserRouter([
    {
        path:'/',
        element : <AppLayout />,
        children :[
            {
                path :'/',
                element : <Body />
            },
            {
                path :'/about',
                element : <About />
            },{
                path : '/contact',
                element : <Contact />
            },
            {
                path : '/cart',
                element :<Cart />
            },{
                path:'restaurant/:resid',
                element :<RestaurantMenu />
            }

        ],
        errorElement : <Error />
    },
    {
        path : '/logout',
        element :<Logout />

    }
    

])





const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);