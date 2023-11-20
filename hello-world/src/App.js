
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import EventBind from './components/EventBind';
import UserGreeting from './components/UserGreeting';
import TodoList from './components/TodoList';
import ComponentMemory from './components/ComponentMemory';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyle.css'
import styles from './appStyle.module.css'
function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.sucess}>Sucess</h1>
      {/* <FunctionClick></FunctionClick>
      <ClassClick />
      <ParentComponent />
      <EventBind /> */}
      <UserGreeting />
      <NameList />
      <Stylesheet primary={true}/>
      <Inline />  
      {/* <TodoList /> */}
      <ComponentMemory />
      {/* <Counter /> */}
      {/* <Message /> */}
     {/* <Greet name="Dhoni" heroName="Mr.Cool">
      <p>This is children props</p>
     </Greet>
     <Greet name="Kohli" heroName="King">
      <button>Action</button>
     </Greet>
     <Greet name="Rohit" heroName="Hitu">
     <Hello />
     </Greet>
     <Welcome name="Dhoni" heroName="Mr.Cool"></Welcome>
     <Welcome name="Kohli" heroName="King"></Welcome>
     <Welcome name="Rohit" heroName="Hitu"></Welcome> */}
     {/* <Hello /> */}
     {/* <Greet name="Dhoni" heroName="Mr.Cool">
     </Greet>
     <Welcome name="Kohli" heroName="King"></Welcome> */}
    </div>
  );
}

export default App;
