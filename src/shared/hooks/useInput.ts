import React, {useState} from "react";

const useInput = (initialValue: string) => {
    const [value, setValue] = useState('');
    const [isDirty, setIsDirty] = useState(false);

    const onChange = (event: React.ChangeEvent<HTMLInputElement> ) =>{
        setValue(event.target.value);

    };
    const onBlur = ()=>{
        setIsDirty(true);
    }

    const reset = () =>{
        setValue(initialValue);
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

export default  useInput;