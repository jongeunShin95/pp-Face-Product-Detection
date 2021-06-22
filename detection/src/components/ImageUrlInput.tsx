import React, { FormEvent, useState } from 'react';

function ImageUrlInput() {
    const [value, setValue] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const onSubmit = (e: FormEvent) => {
    }

    return (
        <>
            <input onChange={onChange} value={value} />
            <button onClick={onSubmit}>클릭</button>
        </>
    );
}

export default ImageUrlInput;