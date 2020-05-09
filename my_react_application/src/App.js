import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalComponent_Greet from './components/Reactjs01_FunctionalComponent_Greet';
import ClassComponent_Welcome from './components/Reactjs02_ClassComponent_Welcome';
import WithoutJSX from './components/Reactjs03_withoutJSX'
import Props_FuncComponent_Hi from './components/Reactjs04_Props_FuncComponent_Hi'
import Props_ClassComponent_Hi from './components/Reactjs05_Props_ClassComponent_Hi'
import State_ClassCompo from './components/Reactjs06_State_ClassCompo'
import Reactjs07_State_Counter from './components/Reactjs07_State_Counter';
import Event_FuncCompo_Click from './components/Reactjs08_Event_FuncCompo_Click'
import Event_ClassCompo_Click from './components/Reactjs09_Event_ClassCompo_Click'
import EventBind from './components/Reactjs10_EventBind'
import ParentCompo from './components/Reactjs11a_ParentCompo';

/* 
 * Stateless Functional Component
 */
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Reactjs :)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */

 /* 
  * Stateful Class Component
  */ 
class App extends Component {
   render() {
     return (
      <div className="App">
        <FunctionalComponent_Greet/>
        <ClassComponent_Welcome/>
        <WithoutJSX />

        <Props_FuncComponent_Hi name="Batman" desig="Mr."/>
        <Props_FuncComponent_Hi name="Catwoman" desig="Ms."> 
          <p>This is Catwoman children props</p>
        </Props_FuncComponent_Hi>

        <Props_ClassComponent_Hi name="Ironman" desig="Mr."/>
        <Props_ClassComponent_Hi name="Blackwidow" desig="Ms."> 
          <p>This is Blackwidow children props</p>
        </Props_ClassComponent_Hi>

        <State_ClassCompo /> 
        <Reactjs07_State_Counter />     

        <Event_FuncCompo_Click />
        <Event_ClassCompo_Click />
        <EventBind />

        <ParentCompo />
      </div>
     );
   }
 }
export default App;
