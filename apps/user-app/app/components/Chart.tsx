"use client"
import { useEffect } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
// 


// Register the necessary components
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title);

export function Example({data}:{data:number[]}) {

  useEffect(() => {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const Amount= data.map((value)=>value)
    const label=data.map((_,index)=>index+1)

    const myChart = new Chart(ctx!, {  // The '!' asserts that ctx is non-null
      type: 'line',
      data: {
        labels:label,
        datasets: [{
          label: 'My First Dataset',
          data:Amount,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        }]
      },
      options: {
        scales: {
          x: {
            type: 'category',
          },
          y: {
            beginAtZero: true,
          }
        }
      }
    });

    // Cleanup function to destroy the chart on component unmount
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <>
      {/* line chart */}
      {/* <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize">Line Chart</h1> */}
      <div className="w-[1100px] max-h-screen flex mx-auto my-auto mt-4">
        <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl'>
          <canvas id='myChart'></canvas>
        </div>
      </div>
    </>
  );
}
