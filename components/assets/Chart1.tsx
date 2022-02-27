
import { useState } from "react";
import { Chart as ChartJS, ArcElement,Legend, Tooltip, Title} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import config from '../../tailwind.config'


ChartJS.register(
    Title,
    ArcElement,
    Legend,

)

export default function Chart1(){

    const [options,setOptions] = useState({
       plugins:{
        legend:{
            position:'left' as const,
        },
        title: {
            display: true,
            text: 'Breakdown of Savings into Sources',
          }
       } 
    })

    const [data, setData] = useState({
        labels: ['Source 1',
         'Source 2',
        'Source 3'],
        
        datasets: [
          {
            responsive: true,
            label: '# of People',
            data: [12, 19,34],
            backgroundColor: [
              config.theme.extend.colors.green.primary,
              config.theme.extend.colors.green.secondary,
              config.theme.extend.colors.green.tertiary
            ],
            borderColor: [
                config.theme.extend.colors.green.primary,
                config.theme.extend.colors.green.secondary
            ],
            borderWidth: 1,
          },
        ],
      }) 

    return(
        <div className="w-full">
            <Doughnut data={data} options={options}  />
        </div>
    )
}