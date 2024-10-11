import {useEffect, useState} from "react";
import axios from "axios";
import "./Table.css";

const Tabledata=({data})=>{

  const[startpage,setStartPage]=useState(1);
  const itemperpage=10;
  const totalpage=Math.ceil(data.length/itemperpage)
  const lastindex=startpage*itemperpage;
  const startindex=lastindex-itemperpage;
  const paginatedData=data.slice(startindex,lastindex);


  if (!data || !Array.isArray(data)) {
    return null;
}

  const handlePrev=()=>{
    if(startpage>1)
    {
      setStartPage(prev=>prev-1);
    }
  }
  const handleNext=()=>{
    if(startpage<totalpage)
    {
      setStartPage(prev=>prev+1);
    }
  }
   
    return(
        <div className="tableParent">
       
       
<table>
  <thead>
  <tr>
    <th>ID</th>
    <th>EMAIL</th>
    <th>EMAIL</th>
    <th>ROLE</th>
  </tr>
  </thead>
  <tbody>
    {
      paginatedData.map((item)=>(
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.role}</td>
        </tr>
      ))
    }
  </tbody>
</table>
<div className="pagination">
  <button onClick={()=>handlePrev()} className="navBtn prev-btn">Previous</button>
  <button className="numBtn prev-btn">{startpage}</button>
  <button onClick={()=>handleNext()} className="navBtn prev-btn">Next</button>
  </div>
      
        </div>
    )
}
export default Tabledata;