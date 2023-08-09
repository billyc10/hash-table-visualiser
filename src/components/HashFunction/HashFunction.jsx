import { useState } from 'react';
import HashTable from '../HashTable.mjs';
import './HashFunction.css'
import { hasUnreliableEmptyValue } from '@testing-library/user-event/dist/utils';

const HashFunction = (props) => {
    const {message, setMessage, hashNumber, setHashNumber, handleAddToTable, generateHashCallback} = props;
    const [hash, setHash] = useState('');

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }
    const handleGenerateHash = (e) => {
        const hash = HashTable.hashFunction(message, hashNumber);
        setHash(hash.toString());
        generateHashCallback(hash);
    }
    
    const handleNumberChange = (e) => {
        let num = e.target.value;
        if (num > 21) { num = 21 }
        else if (num < 1) { num = 1}
        setHashNumber(num);
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
            <div className="Text">
                <div> Basic hash function sums up each character's ASCII code </div>
                <div> and performs modulo division by hash size 'm' </div>
                <div className='CodeSnippet'> 
                    <div className='HashSizeText'> Hash size: m = {hashNumber}</div>
                    <code><pre>{hashingAlgorithm}</pre></code>
                </div>
            </div>
            
        )
    }

    return (
        <div className='HashFunction'>
            <Preview/>
            <div className='Options Column'>
                <text className="Heading"> Hash Table Options </text>
                <div className='Row'>
                    <label>
                        Hash size: <input type="number" name="sizeInput" onChange={handleNumberChange} value={hashNumber} />
                    </label>
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