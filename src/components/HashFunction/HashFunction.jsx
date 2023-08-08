import { useState } from 'react';
import HashTable from '../HashTable.mjs';
import './HashFunction.css'

const HashFunction = (props) => {
    const {message, setMessage, hashNumber, setHashNumber, handleAddToTable} = props;
    const [hash, setHash] = useState('');
    const [hashNumberDisplay, setHashNumberDisplay] = useState(5);

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }
    const handleGenerateHash = (e) => {
        setHash(HashTable.hashFunction(message, hashNumber));
    }
    
    const handleNumberChange = (e) => {
        let num = e.target.value;
        if (num > 21) { num = 21 }
        else if (num < 1) { num = 1}
        setHashNumberDisplay(num);
    }
    const handleSetNumber = (e) => {
        setHashNumber(hashNumberDisplay);
        console.log(hashNumber);
    }

    const Preview = () => {
        const hashingAlgorithm = `
function myHash(message, m) {
    let total = 0;

    for (let i = 0; i < message.length; i++) {
        total += message.charCodeAt(i);
    }

    return total % m
}
        `

        return (
            <div className='CodeSnippet'> 
                <div className='HashSizeText'> Hash size: m = {hashNumber}</div>
                <code><pre>{hashingAlgorithm}</pre></code>
            </div>
        )
    }

    return (
        <div className='HashFunction'>
            <Preview/>
            <div className='Options Column'>
                <div className='Row'>
                    <label>
                        Hash size: <input type="number" name="sizeInput" onChange={handleNumberChange} value={hashNumberDisplay} />
                    </label>
                    <button type="submit" onClick={handleSetNumber}>Set Length</button>
                    <button type="submit" onClick={props.createHashTable}>Create New Table</button>
                </div>
                <div className='Row'>
                    <label>
                        Enter message: <input name="messageInput" onChange={handleMessageChange} value={message} />
                    </label>
                    <button type="submit" onClick={handleGenerateHash}>Generate Hash</button>
                </div>
                
                    {hash ?
                        <div className='Column'>
                            <div className='Row'>
                                <div>
                                    Hash value: 
                                </div>
                                <div className='Hash'> {hash} </div>
                            </div>
                            <button type="submit" onClick={handleAddToTable}>Add to table</button>
                        </div>
                        : null
                    }
                
            </div>
        </div>
    )
}

export default HashFunction;