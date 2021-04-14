import React from 'react';
import NavBar from './Component/Header'
import reducer from './State/reducer'
import TreeView from './Component/TreeView'
import Footer from './Component/Footer'
import PossiblePosition from './Component/PossibleArrangement'
import './index.css'
export const appContext = React.createContext({});
function App() {
  const [state, dispatch] = React.useReducer(reducer, {data:{},possible:0,input:''});
 
  return (

    <>
      <appContext.Provider value={{state,dispatch}}>
      <NavBar />
      <TreeView />
      <Footer/> 
      <PossiblePosition/>
      </appContext.Provider>
    </>)
}

export default App;

