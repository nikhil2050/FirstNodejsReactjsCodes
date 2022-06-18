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
import NameList from './components/Reactjs13a_NameList';
import PersonList from './components/Reactjs13b_PersonList';
import CSSStylesheet from './components/Reactjs14a_CSSStylesheet';
import InlineStyling from './components/Reactjs14b_InlineStyling';
import CSSModule_Parent from './components/Reactjs14c_CSSModule_Parent';
import SampleForm from './components/Reactjs15_SampleForm';
import LifecycleA from './components/Reactjs16_LifecycleA';
import FragmentDemo from './components/Reactjs17a_FragmentDemo';
import FragmentTable from './components/Reactjs17b_FragmentTable';
import ParentComponent from './components/Reactjs18a_ParentCompo';
import ParentCompoForMemo from './components/Reactjs19a_ParentCompo';
import Refs1 from './components/Reactjs20a_Refs';
import Refs2 from './components/Reactjs20b_Refs';
import GetRequestHandle from './components/httpExamples/Http01_GetRequestHandle';
import PostRequestHandle from './components/httpExamples/Http02_PostRequestHandle';
import UseState_ClassComponentCounter from './components/hooksExamples/Hooks01_useState_ClassComponentCounter';
import UseState_FunctComponentCounter from './components/hooksExamples/Hooks02a_useState_FunctComponentCounter';
import UseState_FunctComponentCounter_PrevState from './components/hooksExamples/Hooks02b_useState_FunctComponentCounter_prevState';

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

        <NameList />
        <PersonList />

        <CSSStylesheet defaultClass="primary"/>
        <InlineStyling />
        <CSSModule_Parent />

        <SampleForm />

        <LifecycleA /> <hr/>

        <FragmentDemo />
        <FragmentTable /> 

        {/* Comment this. As it is running in loop. */}
        {/* <ParentComponent /> */}
        {/* <ParentCompoForMemo /> */}

        {/* Example to focus a Textfield here */}
        {/* <Refs1 />           <hr/> */}
        <Refs2 />           <hr/>

        <GetRequestHandle />        <hr/>
        <PostRequestHandle />       <hr/>

        <b>HOOKS</b><br/>
        1. useState with Class Component:
        <UseState_ClassComponentCounter />

        2a. useState with Functional Component:
        <UseState_FunctComponentCounter />

        2b. useState with Functional Component with Previous state (variable safety):
        <UseState_FunctComponentCounter_PrevState />

      </div>
     );
   }
 }
export default App;
