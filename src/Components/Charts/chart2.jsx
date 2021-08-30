import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, YAxis } from 'recharts';

function chart2() {
    const data = [
        {
          name: 'June',
          "Revanue Generated": 3000,
        },
        {
          name: 'May',
          "Revanue Generated": 2400,
          
        },
        {
          name: 'April',
          "Revanue Generated": 1500,
          
        },
        {
          name: 'March',
          "Revanue Generated": 1900,
          
        },
        
      ];
      
    return (
        <div className="chart">
        <h3 className="chartTitle">REVANUE GENERATED THIS YEAR COMPARED LAST YEAR</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1} >
         <LineChart data={data} >
         <XAxis dataKey="name" stroke="#5550bd"/>
         <YAxis/>
         <Line type="monotone" dataKey="Revanue Generated" stroke="#5550bd"/>
         <Tooltip/>
         <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
         </LineChart>
        </ResponsiveContainer>
        </div>
        
    )
}

export default chart2;
