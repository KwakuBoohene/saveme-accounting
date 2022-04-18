
import styles from "../../styles/auth/auth.module.scss";

export default function FormControl(
    { form, fieldName,type, placeholder }:any) {
    return (
        <div className="my-10">
            <input name={fieldName}
                type={type}
                onChange={form.handleChange}
                value={form.values[fieldName]}
                placeholder={placeholder}
                className={styles.form_control} />
        </div>
    )
}