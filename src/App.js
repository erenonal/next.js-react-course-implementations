import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1> My Todos</h1>
      <Todo text='Learn React'/>
      <br />
      <Todo text='Develop React'/>
      <br />
      <Todo text='Build React'/>
    </div>
  );
}

export default App;
