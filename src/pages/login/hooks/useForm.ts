import { useState } from "react";

export interface Errors {
  email: string;
  password: string;
}

export const useForm = (initialForm: any, validateForm: (form: any) => Errors) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState<Errors>({ email: "", password: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors(validateForm(form));
        if (!Object.values(errors).some(error => error !== "")) {
            // Submit form
        }
    };

    return {
        form,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
    };
};
