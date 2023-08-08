import './App.css';
import LiveArray from './components/LiveArray/LiveArray';
import HashFunction from './components/HashFunction/HashFunction';
import HashTable from './components/HashTable.mjs';

function App() {
  const hashTable = new HashTable(5);
  hashTable.assign(['Billy', 'Roberto', 'Mark', , 'Edward']);
  console.log(hashTable.array);

  return (
    <div className="App">
      <LiveArray array={hashTable.array} hashing={hashTable.hashing} className="LiveArray"></LiveArray>
      <HashFunction/>
    </div>
  );
}

export default App;
