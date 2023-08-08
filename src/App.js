import { useState } from 'react';
import './App.css';
import LiveArray from './components/LiveArray/LiveArray';
import HashFunction from './components/HashFunction/HashFunction';
import HashTable from './components/HashTable.mjs';

let hashTable;

function App() {
  const [hashTableArray, setHashTableArray] = useState({});
  const [message, setMessage] = useState('Hash me!');
  const [hashNumber, setHashNumber] = useState(5);

  const createHashTable = () => {
    hashTable = new HashTable(hashNumber);
    setHashTableArray(hashTable.array);
  }

  const handleAddToTable = () => {
    hashTable.hashToTable(message);
    setHashTableArray([...hashTable.array]);
  }

  return (
    <div className="App Row">
      <HashFunction
        createHashTable={createHashTable}
        message={message}
        setMessage={setMessage}
        hashNumber={hashNumber}
        setHashNumber={setHashNumber}
        handleAddToTable={handleAddToTable}
      />
      { hashTableArray?
        <LiveArray className="LiveArray"
          array={hashTableArray}
          // hashing={hashTable.hashing}
        />
        : null
      }
    </div>
  );
}

export default App;
