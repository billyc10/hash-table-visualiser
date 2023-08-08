import './App.css';
import LiveArray from './components/LiveArray/LiveArray';

class HashTable {
  constructor(size) {
    this.size = size;
    this.array = [...Array(size)].map(e => Array());
  }

  insert(item, pos) {
    if (pos > this.size) {
      return this.array
    } else {
      this.array[pos].push(item);
      return this.array;
    }
  }

  assign(newArray) {
    this.array = newArray;
    this.size = newArray.length;
  }
}

function App() {
  const hashTable = new HashTable(4);
  hashTable.assign([['Billy'], ['Mark', 'Tom', 'Roberto'], [], ['Edward']]);
  console.log(hashTable.array);

  return (
    <div className="App">
      <LiveArray array={hashTable.array} className="LiveArray"></LiveArray>
      hello
    </div>
  );
}

export default App;
