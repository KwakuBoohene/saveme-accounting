
import { useState } from "react";
import styles from "../../styles/auth/auth.module.scss";

export default function FormControl(
    props:any){


    return(
        <div className="my-10">
            <input 
            name={props.name || ''}
             type={props.type}
              placeholder={props.placeholder}
            className={styles.form_control} />
            {
                props.error?(
                    <small className="text-red-400">
                        {props.error}
                    </small>
                ):null
            }
        </div>
    )
}