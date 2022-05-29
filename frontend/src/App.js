
import './App.css';
import { ReactExcel, readFile, generateObjects } from '@ramonak/react-excel';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from './Card'
import axios from 'axios';
import Details from './Details.js';
import Grid from "@material-ui/core/Grid";

const App = () => {
  
  const [initialData, setInitialData] = useState(undefined);
  const [currentSheet, setCurrentSheet] = useState({});
  const [count, setcount] = useState(0);
  const [details, setDetails] = useState([]);
  const [show, setShow] = useState(false);

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
  // if(result.length>0){
  //   setShow(false);
    axios.post('http://localhost:5000/api/v1/employee',result)
      .then(response =>{
        console.log(response)
      })
      .catch(error=>{
        console.log(error);
    })
    
  // }else{
  //   setShow(true);
  // }
    
    console.log(result.length, "resssss")
  };

  // const getdata = () => {
  //   console.log("hihfiehf;aweofaguil");
  //     axios.get('http://localhost:5000/api/v1/employee/')
      
  //     .then(response =>{
  //       setDetails(response.data)
  //       console.log(response)
  //     })
  //     .catch(error=>{
  //       console.log(error);
  //   })
  // };
//   const getProductData = async () =>{
//     try {
//       const data =await axios.get('http://localhost:5000/api/v1/employee/')
//       console.log(data);
//     } 
//     catch (error) {
//       console.log(error);
//     }

//   }
// useEffect(()=>{
//   getProductData();
// },[])
  return (
    <>
    <p className='errmsg' style={{color: "red",display: show ? "block" : "none"}}>Empty data</p>
    <h2>File Upload & Image Preview</h2>
    <p></p>
    <div className='input' >
      <p>select a file or drag here</p>
    <input className='btn'
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
    <div>
      <Grid container justify="center">
        <Button className='btn01' variant='contained' color="primary" align="center" onClick={save}>
        Save to API
        </Button>
      </Grid>
    </div>
      <Card count={count}/>
      
      <Details/>
    </>
    
  );
}
export default App;