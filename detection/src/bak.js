// import React, { FormEvent, useRef, useState } from 'react';
// import './App.css';

// type CanvasProps = {
//   width: number;
//   height: number;
// }

// function App({ width, height }: CanvasProps) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const imgRef = useRef<HTMLImageElement>(null);

//   const [value, setValue] = useState('');
//   const [url, setUrl] = useState('');

//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//   }

//   const onSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     setUrl(value);
//     setValue('');

//     if (!canvasRef.current) return;
//     if (!imgRef.current) return;
//     const canvas: HTMLCanvasElement = canvasRef.current;
//     const img: HTMLImageElement = imgRef.current;

//     canvas.width = img.width;
//     canvas.height = img.height;

//     const ctx = canvas.getContext("2d");

//     console.log("-------onSubmit--------")
//     console.log(ctx);
//     console.log(img.height);

//     if (!img) return;

//     img.onload = () => {
//       ctx?.drawImage(img, 0, 0);
//       ctx?.fillRect(20, 20, 100, 100);
//     }
//   }

//   return (
//     <div className="App">
//       <input onChange={onChange} value={value} />
//       <canvas ref={canvasRef} />
//       <img ref={imgRef} src={url} width={300} height={300} hidden />
//       <br />
//       <button onClick={onSubmit}>클릭</button>
//     </div>
//   );
// }

// App.defaultProps = {
//   width: 800,
//   height: 600
// };

// export default App;