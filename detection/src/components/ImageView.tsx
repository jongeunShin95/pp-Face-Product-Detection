import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';

type urlProps = {
    url: string
}

function ImageView({ url }: urlProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const { data, loading, error } = useSelector((state: RootState) => state.detection.faceInfo);

    useEffect(() => {
        if (!canvasRef.current) return;
        if (!imgRef.current) return;

        const canvas: HTMLCanvasElement = canvasRef.current;
        const img: HTMLImageElement = imgRef.current;
        const ctx = canvas.getContext("2d");

        if (!img) return;
        if (!ctx) return;
        if (!data) return;

        img.onload = () => {
            ctx.drawImage(img, 0, 0);
            ctx.strokeStyle = "white";
            ctx.fillStyle = "white";
            ctx.font = '48px serif';
            ctx.lineWidth = 10;
            for (var i=0; i<data.result.faces.length; ++i) {
                const age = Math.floor(data.result.faces[i].facial_attributes.age);
                const { male, female } = data.result.faces[i].facial_attributes.gender;
                const { width, height } = data.result;
                const { x, y, w, h } = data.result.faces[i];
                const sex = male > female ? '남' : '여';
        
                ctx.fillText("" + age + " " + sex, x * width, y * height - 10);
                ctx.strokeRect(x * width, y * height, w * width, h * height);
            }
        }
    }, [data]);

    if (url === '') return null;
    if (data === null) return null;
    if (loading) return <div>loading...</div>;
    if (error) return <div>error...</div>;

    return (
        <>
            <canvas ref={canvasRef} width={data.result.width} height={data.result.height} />
            <img ref={imgRef} src={url} alt="img" hidden />
        </>
    );
}

export default ImageView;