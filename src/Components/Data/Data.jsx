import { useEffect, useState } from "react";
import Tabledata from "../Table/Table";
import axios from "axios";
const Data=()=>{

    const [tableData,setTabledata]=useState([])
    useEffect(()=>{

        console.log("fetching")
          const fetchData=async()=>{
              try{
                  const res=await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
                  console.log(res.data);
                  setTabledata(res.data);
              }
              catch(e){
                  console.log(e);
              }
          }
          fetchData()
      },[])
    return(
        <>
        {tableData.length>0 && <Tabledata data={tableData}/>}
        </>
    )
}

export default Data;