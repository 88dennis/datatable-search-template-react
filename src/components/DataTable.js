import React from 'react'


// let isMounted = false;
const DataTable = ({data}) => {
console.log(data)
const columns = data[0] && Object.keys(data[0])
    return (
        <>
            {/* <table className="table" cellPadding={0} cellSpacing={0}> */}
          
            <table className="table">
                <thead>
                    <tr>
                        {data[0] && columns.map((heading, index) => <th key={index}scope="col">{heading}</th>)}
                    </tr>   
                </thead>
                <tbody>
                    {data.map((row, index)=> <tr key={index}>
                        {
                            // columns.map(column => <td>{JSON.stringify(row[column])}</td>)
                            columns.map((column, index) => {
                            if(column === "borrowerEmail") {
                                return   <td key={index}><a href="#">{row[column]}</a></td> 
                            }
                            return <td key={index}>{row[column]}</td> 
                           
                        })

                            }
                        </tr>)}
                </tbody>
            </table>

        </>
    )
}

export default DataTable;
