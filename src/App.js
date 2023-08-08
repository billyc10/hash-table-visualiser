import { useState } from 'react';
import './App.css';
import LiveArray from './components/LiveArray/LiveArray';
import HashFunction from './components/HashFunction/HashFunction';
import HashTable from './components/HashTable.mjs';

function App() {
  const [hashTable, setHashTable] = useState({});
  const [message, setMessage] = useState('Hash me!');
  const [hashNumber, setHashNumber] = useState(5);

  const createHashTable = () => {
    const newTable = new HashTable(hashNumber);
    console.log(newTable.array);
    setHashTable(newTable);
  }

  return (
    <div className="App Row">
      <HashFunction
        createHashTable={createHashTable}
        message={message}
        setMessage={setMessage}
        hashNumber={hashNumber}
        setHashNumber={setHashNumber}
      />
      { hashTable.array?
        <LiveArray className="LiveArray"
          array={hashTable.array}
          hashing={hashTable.hashing}
        />
        : null
      }
    </div>
  );
}

export default App;
