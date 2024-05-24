import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
    const [form,setForm] = useState(initialForm);
    const [errors,setErrors] = useState({});
    const [loading,setLoading] = useState(false);
    const [response,setResponse] = useState(null);

    const handleChange = (e) => {
        const {email, value} = e.target;

        setForm({
            ...form,
            [email]: value
        });
    };
   
    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleSubmit = (e) => {};


    return {
        form, 
        errors, 
        loading, 
        response, 
        handleBlur, 
        handleChange, 
        handleSubmit,
    };
};