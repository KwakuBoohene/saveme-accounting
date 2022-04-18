import styles from "../../styles/auth/auth.module.scss";

export default function FormControl({ form, fieldName, type, placeholder }) {
  return (
    <div className="my-10">
      <div className="">
        <input
          name={fieldName}
          type={type}
          onChange={form.handleChange}
          value={form.values[fieldName]}
          placeholder={placeholder}
          className={styles.form_control}
        />
      </div>
      <div className="">
        {form.errors[fieldName] && (
          <div className="text-red-400">{form.errors[fieldName]}</div>
        )}
      </div>
    </div>
  );
}
