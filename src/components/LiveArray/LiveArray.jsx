import './LiveArray.css'

const LiveArray = (props) => {
    const arrayValues = props.array;
    const hashing = props.hashing;
    const arraySize = arrayValues.length;

    const ArrayRow = (props) => {
        let arrayList;
        if (props.values === undefined || props.values.length === 0) {
            arrayList = <div className="ArrayCell" />
        } else if (hashing === 'open') {
            // Open hashing allows chaining
            arrayList = props.values.map(
                (value, index) => (
                    <div className="ArrayCell" key={index}>
                        {value}
                    </div>
                )
            );
        } else if (hashing === 'closed') {
            // Closed hashing only allows one entry per index
            arrayList = <div className="ArrayCell"> {props.values} </div>
        }
        return (
            <div className="ArrayRow">
                <div className="ArrayIndex"> {props.index} </div>
                {arrayList} 
            </div>
        )
    }

    const FullArray = () => {
        const rows = [];
        for (var i = 0; i < arraySize; i++) {
            rows.push(<ArrayRow key={i} index={i} values={arrayValues[i]}/>)
        }

        return <div className="LiveArray"> {rows} </div>;
    }

    return <FullArray/>
  }
  
  export default LiveArray;