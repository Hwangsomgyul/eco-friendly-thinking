import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// React 18에서 createRoot를 사용하여 앱을 렌더링합니다.
const root = ReactDOM.createRoot(document.getElementById('root'));

// React.StrictMode는 개발 모드에서 추가적인 검사 및 경고를 제공하지만,
// 프로덕션 빌드에는 영향을 미치지 않습니다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 성능 측정을 위해 reportWebVitals 함수를 호출합니다.
reportWebVitals();
