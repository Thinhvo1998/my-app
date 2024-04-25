import React from "react";
import { Button, Table } from "reactstrap";
import { useAppContext } from "../contexts/AppContainer.context";

const TableContainer = () => {
   const appContext = useAppContext();
   const { dataList, onEditChange, onDeleteData } = appContext;

   return (
      <Table hover>
         <thead>
            <tr>
               <th>ID</th>
               <th>Email</th>
               <th>UserName</th>
               <th>FullName</th>
               <th>Department</th>
               <th>Position</th>
               <th>Edit</th>
               <th>Delete</th>
            </tr>
         </thead>
         <tbody>
            {dataList.map((data, index) => (
               <tr key={data.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.email}</td>
                  <td>{data.userName}</td>
                  <td>{data.fullName}</td>
                  <td>{data.department}</td>
                  <td>{data.position}</td>
                  <td>
                     <Button onClick={() => onEditChange(data)}>Edit</Button>
                  </td>
                  <td>
                     <Button onClick={() => onDeleteData(data.id)}>Delete</Button>
                  </td>
               </tr>
            ))}
         </tbody>
      </Table>
   );
};

export default TableContainer;