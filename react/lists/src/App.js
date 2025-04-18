import './App.css';
import NewNameList from './NewNameList';

function App() {
  const numberList = [1, 2, 3, 4, 5];
  const namesList = ["Vishal", "Shweta", "Meena", "Destiny"];

  const multipliedList = numberList.map((number) => <li>{number * 5}</li>);

  const listedList = namesList.map((names) => <li>{names}</li>);

  const namedList = ["Jason", "Joe", "Skippy", "Kid"];
  return (
    <div className="App">
      <h1>Lists</h1>
      <div class="multiplierList">
        <h2>Multiply by 5</h2>
        <ul>{multipliedList}</ul>
      </div>
      <div class="namesList">
        <h2>List of Names</h2>
        <ul>{listedList}</ul>
      </div>
      <div class="namesNamesList">
        <h2>New Name List</h2>
        <NewNameList items={namedList} />
      </div>
    </div>
  );
}

export default App;
