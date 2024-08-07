import { useEffect, useState } from 'react';

const UseKakaoLoader = ({ appkey, libraries = [] }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appkey}&libraries=${libraries.join(',')}`;
    script.onload = () => setIsLoaded(true);
    script.onerror = () => setIsLoaded(false);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [appkey, libraries]);

  return isLoaded;
};

export default UseKakaoLoader;
