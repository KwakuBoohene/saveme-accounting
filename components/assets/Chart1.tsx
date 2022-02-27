import Chart from "react-apexcharts";
import { useState } from "react";


export default function Chart1(){

    const [options,setOptions] = useState({
        chart: {
            id: "Donut Chart"
        },
        colors:['#689C7E','#025928','#024C22C3'],
        dataLabels:{
            enabled:false
        },
        labels:['Bank','Vodafone Cash','Mtn']
    })

    const [series,setSeries] = useState(
        [630, 540, 345]
    )

    return(
        <div className="">
                <Chart
              options={options}
              series={series}
              type="donut"
              width={600}
              height={250}
            />
        </div>
    )
}