import { useCallback } from "react";
import { useState } from "react";

export const useInputs = (initialForm) => {
    const [form, setForm] = useState(initialForm);

    // change
    const onChange = useCallback(e => {
        const {name, value} = e.target;
        setForm(form => {
            return {...form, [name]: value};
        }, []);
    });

    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    return [form, onChange, reset];
};