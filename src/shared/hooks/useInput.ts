import React, {useState} from "react";

const useInput = () => {
    const [value, setValue] = useState('');
    const [isDirty, setIsDirty] = useState(false);

    const onChange = (event: React.ChangeEvent<HTMLInputElement> ) =>{
        setValue(event.target.value);

    };
    const onBlur = ()=>{
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

export default  useInput;