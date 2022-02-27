import styles from "../../styles/dashboard/dashboard.module.scss";
import type {ReactElement} from 'react'
import Sidebar from "../dashboard/Sidebar";
import Header from "./Header";


function Layout(children:ReactElement){
    return(
        <div className='flex min-h-screen h-full'>
            <Sidebar/>

            <div className="px-6 min-h-screen w-full
              bg-gray-extra-light">      
                <Header/>
                {children}
            </div>
        </div>
    )
}

export default Layout