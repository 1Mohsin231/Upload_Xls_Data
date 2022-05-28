
import './App.css';
import { ReactExcel, readFile, generateObjects } from '@ramonak/react-excel';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Card from './Card'
import axios from 'axios';

const App = () => {
  const [initialData, setInitialData] = useState(undefined);
  const [currentSheet, setCurrentSheet] = useState({});
  const [count, setcount] = useState(0);
  const [details, setdeatils] = useState([]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    //read excel file
    readFile(file)
      .then((readedData) => setInitialData(readedData))
      .catch((error) => console.error(error));
  };

  const save = () => {
    const result = generateObjects(currentSheet);
    setcount(result.length)
  // var ress = result.map();
    axios.post('http://localhost:5000/api/v1/employee',result)
      .then(response =>{
        console.log(response)
      })
      .catch(error=>{
        console.log(error);
    })
    //save array of objects to backend
    console.log(result.length, "resssss")
  };

  const getdata = () => {
    console.log("hihfiehf;aweofaguil");
      axios.get('http://localhost:5000/api/v1/employee/')
      
      .then(response =>{
        setdeatils(response.data)
        console.log(response)
      })
      .catch(error=>{
        console.log(error);
    })
  };

  return (
    <>
    <h2>File Upload & Image Preview</h2>
    <p></p>
    <div className='input' >
      <p>select a file or drag here</p>
    <input
        type='file'
        accept='.xlsx'
        onChange={handleUpload}
      />
      <ReactExcel
        initialData={initialData}
        onSheetUpdate={(currentSheet) => setCurrentSheet(currentSheet)}
        activeSheetClassName='active-sheet'
        reactExcelClassName='react-excel'
      />
    </div>
      <button className='btn01' onClick={save}>
          Save to API
      </button>
      <Card count={count}/>
      <button className='btn02' onClick={getdata}>
          Get All Students
      </button>
    </>
    
  );
}
export default App;