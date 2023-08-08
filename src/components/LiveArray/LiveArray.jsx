import './LiveArray.css'

const LiveArray = (props) => {
    const arrayValues = props.array;
    const arraySize = arrayValues.length;

    const ArrayRow = (props) => {
        if (props.values.length == 0) {
            return <div className="ArrayCell" key={0}/>
        }
        const arrayList = props.values.map(
            (value, index) => (
                <div className="ArrayCell" key={index}>
                    {value}
                </div>
            )
        );
        return <div className="ArrayRow"> {arrayList} </div>
    }

    const FullArray = () => {
        const rows = [];
        for (var i = 0; i < arraySize; i++) {
            rows.push(<ArrayRow key={i} values={arrayValues[i]}/>)
        }

        return <div className="LiveArray"> {rows} </div>;
    }

    return <FullArray/>
  }
  
  export default LiveArray;