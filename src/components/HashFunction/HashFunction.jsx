import './HashFunction.css'

const HashFunction = (props) => {

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
                <code><pre>{hashingAlgorithm}</pre></code>
            </div>
        )
    }
    
    return (
        <div className='HashFunction'>
            <Preview/>
            <input></input>
        </div>
    )
}

export default HashFunction;