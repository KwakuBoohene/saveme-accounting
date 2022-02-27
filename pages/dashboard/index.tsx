import Layout from "../../components/general/Layout"
import Image from "next/image"
import Card from "../../components/general/Card"
import Chart1 from "../../components/dashboard/Chart1"
import Chart2 from "../../components/dashboard/Chart2"

export default function Home (){
    return(
        <div className="container">
            
            <div className="flex w-full justify-between my-6 px-24">
                <Card
                    name='TOTAL AMOUNT IN ASSETS'
                    amount='429,000.00'
                    upwards={true}
                    percentage='30'
                    link='/reports/all-assets'
                />
                <Card
                    name='TOTAL EXPENSES'
                    amount='400.00'
                    upwards={false}
                    percentage='20'
                    link='/reports/all-expenses'
                />
                < Card
                    name='TOTAL INCOME'
                    amount='1,400.00'
                    upwards={true}
                    percentage='30'
                    link='/reports/all-income'
                />
            </div>

            <div className="grid grid-cols-12 gap-4 px-6 text-xs my-6 pb-5">
                <div className="col-span-6">
                      <Chart1/>
                     
                </div>

                <div className="col-span-6">
                    <Chart2/>
                </div>
            </div>


        </div>
    )
}


Home.getLayout = Layout