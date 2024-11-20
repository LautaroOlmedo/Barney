//hooks/useForm.ts
import { useState } from 'react';

interface FormState {
  email: string;
  password: string;
}

export const useForm = (initialState: FormState) => {
  const [formState, setFormState] = useState(initialState);

  const onInputChange = ({ target }: { target: any }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialState);
  };

  return {
    formState,
    onInputChange,
    onResetForm,
  };
};
