import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import dataJson from '../datatable/index';
// let isMounted = false;
const Home = () => {
  const [data, setData] = useState([]);
  const [searchColumns, setSearchColumns] = useState(["borrowerFirstName", "borrowerUserName"]);


  const [query, setQuery] = useState("");

  // const fetchData = async () => {

  //   return await fetch("/data.json")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json);
  //     });
  // };
  useEffect(() => {
    // fetchData();

    //UPDATE THE OBJECT IF YOU WANT TO ADD MORE PROPERTIES
    // let newObj = dataJson;
    // newObj.map((eachItem)=> {
    // eachItem.product = "deo";
    // eachItem.category = "shampoo";
    // return newObj;
    //   })
    //   setData(newObj);


  //REFACTORED:
  let counter = 0;
    dataJson && dataJson.map((eachItem)=> {

      counter = counter + 1
      return (
        eachItem.product = "deo"+ counter, eachItem.category = "shampoo"+counter
        )
    })
    setData(dataJson);

  }, [query, searchColumns]);


//   function search(itemsFromData){
//       return itemsFromData.filter(dataItem => {
          
//         return dataItem.borrowerFirstName.toLowerCase().indexOf(query) > -1 ||
//         dataItem.borrowerUserName.toLowerCase().indexOf(query) > -1 ||
//         dataItem.borrowerEmail.toLowerCase().indexOf(query) > -1 ||
//         dataItem.lenderUserName.toLowerCase().indexOf(query) > -1 ||
//         dataItem.lenderEmail.toLowerCase().indexOf(query) > -1
    
//     }
      
//       )
//   }

//REFACTOR - FUNCTION TO SEARCH ALL COLUMNS IN YOUR TABLE BASICALLY SEARCH ALL YOUR DATA
//   function search(itemsFromData){
//       const columns = itemsFromData[0] && Object.keys(itemsFromData[0])
//       return itemsFromData.filter(dataItem => 
//          columns.some(
//             (column) => dataItem[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
//             )
//       )
//   }

//TO SEARCH ONLY SPECIFIC COLUMNS
  function search(itemsFromData){
    return itemsFromData.filter(dataItem => 
       searchColumns.some(
          (column) => dataItem[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
          )
    )
}

const columns = data[0] && Object.keys(data[0]);
console.log(columns)


  return (
    <>
      <h1>Filter Goes Here</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-sm-12">
            <form>
              <div className="form-group">
                <label htmlFor="queryInputId">Search</label>
                <input
                  type="text"
                  value={query || ''}
                  onChange={(e)=> setQuery(e.target.value)}
                  className="form-control"
                  id="queryInputId"
                  placeholder="Search"
                />
              </div>
       
            </form>
          </div>
        </div>
        <div className="row">
           <div className="col-md-6 col-md-6 offset-md-3 col-sm-12">

               {columns && columns.map((column)=> {
                   return <> <label>
                       <input type="checkbox" checked={searchColumns.includes(column)}
                       onChange={(e)=>{
                           const checked = searchColumns.includes(column);
                           setSearchColumns(
                            (prev) => checked ? prev.filter((sc)=> sc !== column) : [...prev, column]
                            );
                       }}
                       />
                       <span>{" "}</span> <span>{column}</span>

                   </label><span>{" "}</span>
                   </> })}
           </div>
        </div>
      </div>
      <DataTable data={search(data)} />
    </>
  );
};

export default Home;
