import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { KakaoFaceInfo, KakaoProductInfo } from '../api/detection';
import { RootState } from '../modules';

type urlProps = {
    url: string;
    type: number;
}

function ImageView({ url, type }: urlProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const { data, loading, error } = useSelector((state: RootState) => state.detection.detectionInfo);

    useEffect(() => {
        if (!canvasRef.current) return;
        if (!imgRef.current) return;

        const canvas: HTMLCanvasElement = canvasRef.current;
        const img: HTMLImageElement = imgRef.current;
        const ctx = canvas.getContext("2d");

        if (!img) return;
        if (!ctx) return;
        if (!data) return;

        if (type === 1) {
            const info = data as KakaoFaceInfo;
            img.onload = () => {
                ctx.drawImage(img, 0, 0);
                ctx.strokeStyle = "white";
                ctx.fillStyle = "white";
                ctx.font = '48px serif';
                ctx.lineWidth = 10;
                for (var i=0; i<info.result.faces.length; ++i) {
                    const age = Math.floor(info.result.faces[i].facial_attributes.age);
                    const { male, female } = info.result.faces[i].facial_attributes.gender;
                    const { width, height } = data.result;
                    const { x, y, w, h } = info.result.faces[i];
                    const sex = male > female ? '남' : '여';
            
                    ctx.fillText("" + age + " " + sex, x * width, y * height - 10);
                    ctx.strokeRect(x * width, y * height, w * width, h * height);
                }
            }
        } else if (type === 2) {
            const info = data as KakaoProductInfo;
            img.onload = () => {
                ctx.drawImage(img, 0, 0);
                ctx.strokeStyle = 'white';
                ctx.fillStyle = 'white';
                ctx.font = '48px seri';
                ctx.lineWidth = 10;
                for (var i=0; i<info.result.objects.length; ++i) {
                    const clazz = info.result.objects[i].class;
                    const { width, height } = info.result;
                    const { x1, x2, y1, y2 } = info.result.objects[i];

                    ctx.fillText(clazz, x1 * width, y1 * height - 10);
                    ctx.strokeRect(x1 * width, y1 *height, (x2 - x1) * width, (y2 - y1) * height);
                }
            }
        }
    }, [data, type]);

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