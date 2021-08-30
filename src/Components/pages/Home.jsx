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
             title="Revanue"
             value="2425"
             rate="-11.4"
             areaname= "Shahfaisal"
             comparedtolastmonth= "less 1000"
            />
             <Featuredinfo
             id= "2"
             title="Revanue"
             value="2425"
             rate="-11.4"
             areaname= "Shahfaisal"
             comparedtolastmonth= "less 1000"
            />
             <Featuredinfo
             id= "3"
             title="Revanue"
             value="2425"
             rate="-11.4"
             areaname= "Shahfaisal"
             comparedtolastmonth= "less 1000"
            />
             <Featuredinfo
             id= "1"
             title="Revanue"
             value="2425"
             rate="-11.4"
             areaname= "Shahfaisal"
             comparedtolastmonth= "less 1000"
            />
             </div>
             <div style={{display: "flex", flexDirection: "row",marginTop: "30px"}}>
           
             <Featuredinfo
             id= "2"
             title="Revanue"
             value="2425"
             rate="-11.4"
             areaname= "Shahfaisal"
             comparedtolastmonth= "less 1000"
            />
             <Featuredinfo
             id= "3"
             title="Revanue"
             value="2425"
             rate="-11.4"
             areaname= "Shahfaisal"
             comparedtolastmonth= "less 1000"
            />
            <Featuredinfo
             id= "1"
             title="Revanue"
             value="2425"
             rate="-11.4"
             areaname= "Shahfaisal"
             comparedtolastmonth= "less 1000"
            />
             <Featuredinfo
             id= "2"
             title="Revanue"
             value="2425"
             rate="-11.4"
             areaname= "Shahfaisal"
             comparedtolastmonth= "less 1000"
            />
             </div>
             <div style={{display: "flex", flexDirection: "row"}}>
            
          
             </div>
            <Chart />
            <Chart1 />
            <Chart2 />
            <CostumerChart />
        </div>

    )
}

export default Home;