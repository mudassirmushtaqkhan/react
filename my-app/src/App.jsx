import React from 'react'
import Header2 from './components/Header2'
import Channel from './components/Channel'
import WordCounter from './components/WordCounter'
import Navbar from './components/navbar'
import Alert from './Alert'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// var App=()=>{
//   return (
//     <div>
//     Hello
//     <Header2 name="mudassir" last="Khan"/>
//     <Header2 name="mubashir" last="Khan"/>
//     <Header2 name="faisal" last="Khan"/>
//      </div>
//   )
// }


class App extends React.Component{
  render(){
    return <div>
        {/* <Header2 name="mudassir" last="Khan" >
          <p>Student of 8th Class</p>
        </Header2>
        
        <Header2 name="mubashir" last="Khan"/>
        <Header2 name="faisal" last="Khan"/> */}

        {/* <Channel title="Text Analysis"/> */}
        <Navbar/>
        <Alert alerttext=""/>
        <WordCounter/>

         </div>
  }
}



export default App
