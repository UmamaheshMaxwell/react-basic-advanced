import './App.css';
import Greet from './components/Greet'
import Hello from './components/Hello';
import Message from './components/Message';
import Student from './components/Student';
import Todo from './components/Todo';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
        {/* <h1>Hello World</h1>
        <Greet name="Srujana" skill="Java">
          <div>Hello</div>
        </Greet>
        <Greet name="Guru" skill="RPA"/>
        <Greet name="Harsha" skill=".Net"/>
        <Greet name="Uma" skill="Javascript"/> 
        <Message /> 
        <Hello /> 
        <Todo /> */}
        <Student />
    </div>
  );
}

export default App;
