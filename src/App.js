import './App.css';
import {useState} from "react"

function App() {
  const [columns,setColumns] = useState(25)
  const [rows,setRows] = useState(25)
  

  const handleColumnChange=(event)=>{
    setColumns(Number(event.target.value))
  }
  const handleRowChange=(event)=>{
    setRows(Number(event.target.value))
  }
  

  const renderTable=()=>{
    const tableRows=[]

      for (let i=0;i<rows;i++){
        let rowCells=[]
        for (let j=0;j<columns;j++){
          rowCells.push(<td key={j}>{i+j}</td>)
        }
        tableRows.push(<tr key={i}>{rowCells}</tr>)
      }
     return (
      <div>
        <tbody>
          {tableRows}
        </tbody>
      </div>
     )
  }

  return (
    <div className="App">
      <div>
        <h1>Column-table</h1>
      </div>
      <div>
        <h3>Change the numbers to build your table</h3>
        <label>
          Columns:
        <input 
        onChange={handleColumnChange} 
        value={columns}
        type="number" />
        </label>

        {" "}
        <label>
          Rows:
        <input 
        onChange={handleRowChange} 
        value={rows} 
        type="number" />
          </label> 
      </div>
      <div>
      {renderTable()}
      </div>

    </div>
  );

}

export default App;
