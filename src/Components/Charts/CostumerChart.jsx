import { PieChart, Pie, Tooltip, Cell} from 'recharts';
import "./CostumerChart.css";
import Axios from 'axios';
import React, {useEffect,useState} from 'react';

function CostumerChart() {

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  let [responseData, setResponseData] = useState('');
  var x;

  useEffect(()=>{
    Axios.get('https://londry-backend.herokuapp.com/loc')
    .then(response=>{
        if(response.data.success){
          setResponseData(response.data.location)
          x=responseData.location
            console.log(responseData)
        }else {
            alert('Unable to get chart Data')
        }
    }) 
    .catch((error) => {
      console.log(error)
    })
},[])    
    return (
        <div className="piechart">
        <h1 className="heading">Area PieChart</h1>
        <PieChart width={400} height={400}>
          <Pie 
            dataKey="count"
            isAnimationActive={false}
            data={responseData}
            cx="50%"
            cy="50%"  
            outerRadius={180}
            
            label={renderCustomizedLabel}
          >
            {responseData.location && responseData.location.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip/>
        </PieChart>
       
        </div>
    )
}

export default CostumerChart;
