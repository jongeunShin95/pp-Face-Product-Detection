import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFaceInfoThunk, getProductInfoThunk } from '../modules/detection';

type urlProps = {
    onSetUrl: (url: string) => void;
    onSetType: (t: number) => void;
}

function ImageUrlInput({ onSetUrl, onSetType }: urlProps) {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const onFace = (e: FormEvent) => {
        e.preventDefault();
        dispatch(getFaceInfoThunk(value));
        onSetUrl(value);
        onSetType(1);
        setValue('');
    }

    const onProduct = (e: FormEvent) => {
        e.preventDefault();
        dispatch(getProductInfoThunk(value));
        onSetUrl(value);
        onSetType(2);
        setValue('');
    }

    return (
        <>
            <input onChange={onChange} value={value} />
            <button onClick={onFace}>얼굴 검출</button>
            <button onClick={onProduct}>상품 검출</button>
        </>
    );
}

export default ImageUrlInput;