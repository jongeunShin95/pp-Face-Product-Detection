import React, { useState } from 'react';
import ImageUrlInput from './components/ImageUrlInput';
import ImageView from './components/ImageView';

function App() {
  const [url, setUrl] = useState('');

  const onSetUrl = (url: string) => {
    setUrl(url);
  }

  return (
    <>
      <ImageView url={url} /><br />
      <ImageUrlInput onSetUrl={onSetUrl} />
    </>
  );
}

export default App;