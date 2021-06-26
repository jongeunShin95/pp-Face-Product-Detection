import React, { useState } from 'react';
import ImageUrlInput from './components/ImageUrlInput';
import ImageView from './components/ImageView';

function App() {
  const [url, setUrl] = useState('');
  const [type, setType] = useState(0); // 0은 기본, 1은 얼굴, 2는 상품

  const onSetUrl = (url: string) => {
    setUrl(url);
  }

  const onSetType = (t: number) => {
    setType(t);
  }

  return (
    <>
      <ImageView url={url} type={type} /><br />
      <ImageUrlInput onSetUrl={onSetUrl} onSetType={onSetType} />
    </>
  );
}

export default App;