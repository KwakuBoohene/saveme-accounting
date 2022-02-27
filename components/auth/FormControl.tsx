
import styles from "../../styles/auth/auth.module.scss";

export default function FormControl(
    props:any){
    return(
        <div className="my-10">
            <input type={props.type} placeholder={props.placeholder}
            className={styles.form_control} />
        </div>
    )
}