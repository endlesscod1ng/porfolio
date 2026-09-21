import { useState, type ChangeEvent, type InputHTMLAttributes } from "react";
import s from "./AppInput.module.scss";

interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  label?: string;
  className?: string;
}

export const AppInput = ({
  placeholder,
  type = "text",
  required,
  label,
  className,
  ...otherPoprs
}: AppInputProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div className={`${s.appInputContainer}`}>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        id={label}
        {...otherPoprs}
        type={type}
        required={required}
        placeholder={placeholder}
        className={[s.appInput, className].filter(Boolean).join(" ")}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (required && !e.currentTarget.value.trim()) {
            setErrorMessage("This field is required");
          }
        }}
      />
      {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
    </div>
  );
};
