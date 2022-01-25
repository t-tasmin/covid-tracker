import React, {useState, useEffect} from 'react';
import './Chart.css';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';




const Chart = (props) => {

  const [dailyData, setDailyData] =useState([]);  // dailyData is an array of objects

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    }
    
    fetchAPI();
    
  },[]);

const lineChart = 
  dailyData.length? 
  (<Line data= {{
    labels:dailyData.map(({date}) => date), 
    datasets:[
      {
        data:dailyData.map(({confirmed})=>confirmed),
        label: "Infected",
        borderColor: "#3333ff",
        fill: true,
      },
      {
        data:dailyData.map(({deaths})=>deaths),
        label: "Deaths",
        borderColor: "red",
        backgroundColor: "rgba(255,0,0,0.5)",
        fill: true,
      }
    ]

  }}/>)
  : null

  const data =props.data.fetchedData;

  const barChart = 
  props.country? 
  (<Bar 
    data= {{
    labels: ['Infected','Recovered','Deaths'],
    datasets:[{
      label: "",
      fill: false,
      backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255, 0, 0, 0.5)'],
      data:[data.confirmed.value, data.recovered.value, data.deaths.value]
    }]
    }}
    options={{
      title:{ display:true, text: `Current state in ${props.country}`,  fontSize:20 },
      legend:{display:false}
    }}
    
   />)
  : null
 


return (
  <div className="container">
    {props.country ? barChart : lineChart}
  </div>
);

};

export default Chart;