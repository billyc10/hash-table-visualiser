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
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [highlightType, setHighlightType] = useState('none');

  const createHashTable = () => {
    hashTable = new HashTable(hashNumber);
    setHashTableArray(hashTable.array);
  }

  const handleAddToTable = () => {
    const insertedPosition = hashTable.hashToTable(message);
    setHashTableArray([...hashTable.array]);
    setHighlightIndex(insertedPosition);
    setHighlightType('dark');
  }

  const generateHashCallback = (hash) => {
    setHighlightIndex(hash);
    setHighlightType('light');
  }

  return (
    <div className="App">
      <div className="column">
        <div className="Row">
          <HashFunction
            createHashTable={createHashTable}
            message={message}
            setMessage={setMessage}
            hashNumber={hashNumber}
            setHashNumber={setHashNumber}
            handleAddToTable={handleAddToTable}
            generateHashCallback={generateHashCallback}
          />
          { hashTableArray?
            <LiveArray className="LiveArray"
              array={hashTableArray}
              highlightIndex={highlightIndex}
              highlightType={highlightType}
            />
            : null
          }
        </div>
      </div>
    </div>
  );
}

export default App;
