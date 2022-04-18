/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import SidebarItem from "./SidebarItem"


export default function Sidebar(){
    return(
            <div className="w-96 min-h-screen bg-green-primary py-4">

                <div className="center">
                        <img src="/assets/images/profile-picture.jpg"
                        className="w-32 h-32 rounded-full object-top" alt="" />
                </div>

                <div className="my-10">
                    <SidebarItem
                    icon_src='/assets/icons/dashboard-icon.svg'
                    icon_alt='Dashboard Icon'
                    name='Dashboard'
                    url='/dashboard'
                    />

                    <SidebarItem
                    icon_src='/assets/icons/savings-icon.svg'
                    icon_alt='Savings Icon'
                    name='Assets'
                    url='/assets'
                    />

                    <SidebarItem
                    icon_src='/assets/icons/expenses-icon.svg'
                    icon_alt='Expenses Icon'
                    name='Expenses'
                    url='/expenses'
                    />

                    <SidebarItem
                    icon_src='/assets/icons/income-icon.svg'
                    icon_alt='Income Icon'
                    name='Income'
                    url='/income'
                    />

                    <SidebarItem
                    icon_src='/assets/icons/book-keeping-icon.svg'
                    icon_alt='Book Keeping Icon'
                    name='Book Keeping'
                    url='/book-keeping'
                    />

                    <SidebarItem
                    icon_src='/assets/icons/help-icon.svg'
                    icon_alt='Help Icon'
                    name='Help'
                    url='/help'
                    />


                </div>


            </div>
    )
}