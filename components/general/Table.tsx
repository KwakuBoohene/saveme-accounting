/* eslint-disable react/jsx-key */
import styles from '../../styles/general/component.module.scss';

export default function Table(
    props:any
){

    const keys:string[] = Object.keys(props.data[0])
    const data:any[] = props.data;
    let headers:any[] = keys.map((key) =>{
        return (
        // eslint-disable-next-line react/jsx-key
            <th scope="col" className={styles.table_header}>
            {key}
            </th>  
        )  
    })
    const entries:any[] = data.map((value:any)=>{
        return(
        <tr key={value.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
            {
                Object.values(value).map((cell:any)=>{
                   return(<td className={styles.table_cell_dark}>{cell}</td>)
                })
            }
            <td className={styles.table_cell_link}>
                <a href="#" className={styles.table_link}>Edit</a>
            </td>
            <td className={styles.table_cell_link}>
                <a href="#" className={styles.table_link}>Delete</a>
            </td>
        </tr>  
        )
    })

    return(
        
    <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden ">
                    <table className={styles.table_style}>
                        <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                            {headers}
                            <th scope="col" className="p-4">
                                <span className="sr-only">Edit</span>
                            </th>
                            <th scope="col" className="p-4">
                                <span className="sr-only">Delete</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y 
                        divide-gray-200 dark:bg-gray-800
                        dark:divide-gray-700">
                            {entries}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    )
}