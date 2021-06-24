import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFaceInfoThunk } from '../modules/detection';

type urlProps = {
    onSetUrl: (url: string) => void;
}

function ImageUrlInput({ onSetUrl }: urlProps) {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(getFaceInfoThunk(value));
        onSetUrl(value);
        setValue('');
    }

    return (
        <>
            <input onChange={onChange} value={value} />
            <button onClick={onSubmit}>클릭</button>
        </>
    );
}

export default ImageUrlInput;