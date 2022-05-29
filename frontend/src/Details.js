import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const App = () => {
  const classes = useStyles();
  const [products, setproduct] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getProductData();
    
  }, []);

  const getProductData = async () => {
    const response = await axios.get("http://localhost:5000/api/v1/employee/");
    console.log(response.data.data);
    setproduct(response.data.data.reverse());
  };

  //   useEffect(() => {
  //     getProductData();
  //   }, []);
  return (
    <div className="App">
      <h1>All Students Reports</h1>
      {/* <input
        type="text"
        placeholder="Search here"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      /> */}

      {/* {product
        .filter((item) => {
          if (search == "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((item) => {
          return (
            <p>
              {item.name} - {item.price}
            </p>
          );
        })} */}

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Class</StyledTableCell>
              <StyledTableCell>Section</StyledTableCell>
              <StyledTableCell>Age</StyledTableCell>
              <StyledTableCell>Attendance</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((data, index) => {
              return (
                <StyledTableRow key={index}>
                {/* <tr key={index}> */}
                  <StyledTableCell>{index + 1}</StyledTableCell>

                  <StyledTableCell component="th" scope="row">
                    {data.name}
                  </StyledTableCell>
                  <StyledTableCell>{data.class}</StyledTableCell>
                  <StyledTableCell>{data.section}</StyledTableCell>
                  <StyledTableCell>{data.age}</StyledTableCell>
                  <StyledTableCell>
                   {data.attendance ? data.attendance.toString().toUpperCase():"FALSE"}
                  </StyledTableCell>
                
                </StyledTableRow>
              );
            })}
            {/* console.log(JSON.stringify(products)); */}
            {/* <table className="table border shadow">
            <thead className="table-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
          {
                products.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.section}</td>
                        </tr>
                    )
                })
            }
            </tbody>
            </table> */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default App;
