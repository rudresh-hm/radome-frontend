import React from 'react';
import {Line} from 'react-chartjs-2';
const LineGraph=(props)=>{
    let options={
        responsive:true,
        maintainAspectRatio : true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{ 
                gridLines: {
                    display: true,
                    color:"#fff",
                    drawOnChartArea: false
                },
                ticks: {
                  fontColor: "#ffffff", // this here
                  fontFamily:"sans-serif",
                  fontSize:16
                },
                offset:1
            }],
            yAxes: [{
                gridLines: {
                    display: true,
                    color:"#fff",
                    drawOnChartArea: false
                },
                ticks: {
                    fontColor: "#ffffff", // this here
                    padding:5,
                    fontSize:16
                },
                offset:true
            }],
            
        },
        
    }
    return(
        <Line
          data={{
            labels: props.graphData.labels,
            datasets: [
                {
                  label: 'Sales',
                  fill: false,
                  lineTension: 0,
                  backgroundColor: '#FEB95A',
                  borderColor: '#20BFA9',
                  borderWidth: 2,
                  data: props.graphData.data,
                  pointRadius: 6,
                  pointHoverRadius: 8,
                }
              ]
            }
            
          }
          options={options}
        />
    )
}
export default LineGraph;