import { useState } from 'react';
import './App.css';
import LiveArray from './components/LiveArray/LiveArray';
import HashFunction from './components/HashFunction/HashFunction';
import HashTable from './components/HashTable.mjs';

function App() {
  const [hashTableArray, setHashTableArray] = useState({});
  const [message, setMessage] = useState('Hash me!');
  const [hashNumber, setHashNumber] = useState(5);
  let hashTable;

  const createHashTable = () => {
    hashTable = new HashTable(hashNumber);
    setHashTableArray(hashTable.array);
  }

  // setHashTable(new HashTable(5));
  // hashTable.assign([,,,,,])
  // hashTable.hashToTable('hi');


  const handleAddToTable = () => {
    hashTable.assign([1,2, 3,4,5]);
    console.log(hashTable.array);
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
