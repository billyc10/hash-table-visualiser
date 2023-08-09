import './LiveArray.css'

const LiveArray = (props) => {
    const arrayValues = props.array;
    console.log(arrayValues);
    const hashing = props.hashing || 'closed';
    const arraySize = arrayValues.length;
    const highlightIndex = props.highlightIndex;
    const highlightType = props.highlightType;
    console.log(highlightType);

    console.log(highlightIndex);

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

        let indexClassName = "ArrayRow";
        if (props.highlight) {
            console.log(highlightType);
            switch(highlightType) {
                case 'light':
                    indexClassName = "ArrayRow Highlight";
                    break
                case 'dark':
                    indexClassName = "ArrayRow HighlightDark";
                    break
                default:
                    indexClassName = "ArrayRow";
            }
        }

        return (
            <div className={indexClassName}>
                <div className="ArrayIndex"> {props.index} </div>
                {arrayList} 
            </div>
        )
    }

    const FullArray = () => {
        const rows = [];
        for (var i = 0; i < arraySize; i++) {
            rows.push(<ArrayRow key={i} index={i} values={arrayValues[i]} highlight={i===highlightIndex}/>)
        }

        return <div className="LiveArray"> {rows} </div>;
    }

    return <FullArray/>
  }
  
  export default LiveArray;