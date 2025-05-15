import {useState} from "react";

export const useInput = () => {
    const [value, setValue] = useState('');
    const [isDirty, setIsDirty] = useState(false);

    const onChange = (event) =>{
        setValue(event.target.value);
    };
    const onBlur = (event)=>{
        setIsDirty(true);
    }

    const reset = () =>{
        setValue('');
        setIsDirty(false);
    }


    return {
        value,
        onChange,
        onBlur,
        isDirty,
        reset
    }
}