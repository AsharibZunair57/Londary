import Featuredinfo from "../FeaturedInfo/featuredinfo";
import Chart from "../Charts/chart"
import Chart1 from "../Charts/Chart1"
import Chart2 from "../Charts/chart2"
import CostumerChart from "../Charts/CostumerChart"
import "./Home.css";
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Featureddata from '../FeaturedInfo/Featuredata'

function Home() {
    //     let [responseData, setResponseData] = useState([]);

    //     useEffect(()=>{
    //       Axios.get('http://localhost:3000/cust')
    //       .then(response=>{
    //           if(response.data.success){
    //             setResponseData(response.data.cardData)
    //               console.log(responseData)
    //           }else {
    //               alert('Unable to get Data')
    //           }
    //       }) 
    //       .catch((error) => {
    //         console.log(error)
    //       })
    //   },[])


    return (
        <div className="home">
            <div style={{display: "flex", flexDirection: "row"}}>
            <Featuredinfo
             id= "1"
             title=" Average Order Frequency"
             value="10000"
             rate="-11.4"
             areaname= "Shahfaisal"
             comparedtolastmonth= "less 1000"
            />
             <Featuredinfo
             id= "2"
             title="Increasing Order Value"
             value="50"
             rate="-11.4"
             areaname= "Shahfaisal"
             comparedtolastmonth= "less 1000"
            />
             <Featuredinfo
             id= "3"
             title="Average Order Value "
             value="20"
             rate="-11.4"
             areaname= "Shahfaisal"
             comparedtolastmonth= "less 1000"
            />
             <Featuredinfo
             id= "1"
             title="Number of Orders"
             value="12"
             rate="-11.4"
             areaname= "Shahfaisal"
             comparedtolastmonth= "less 1000"
            />
             </div>
             <div style={{display: "flex", flexDirection: "row",marginTop: "30px"}}>
           
             <Featuredinfo
             id= "2"
             title="Customers Registered"
             value="10"
             rate="-11.4"
             areaname= "Shahfaisal"
             comparedtolastmonth= "less 1000"
            />
             <Featuredinfo
             id= "3"
             title="Number of Orders Filled"
             value="24250"
             rate="-11.4"
             areaname= "Shahfaisal"
             comparedtolastmonth= "less 1000"
            />
            <Featuredinfo
             id= "1"
             title="Complains Monthly"
             value="5"
             rate="-11.4"
             areaname= "Shahfaisal"
             comparedtolastmonth= "less 1000"
            />
             <Featuredinfo
             id= "2"
             title="Complains per Vendor"
             value="2425"
             rate="-11.4"
             areaname= "Shahfaisal"
             comparedtolastmonth= "less 1000"
            />
             </div>
            
            <Chart />
            <Chart1 />
            <Chart2 />
            <CostumerChart />
        </div>

    )
}

export default Home;