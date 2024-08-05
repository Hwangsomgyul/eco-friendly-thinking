import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const KakaoCallback = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    if (code) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
          access_token: code,
        })
        .then((response) => {
          const { token, user } = response.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/MainPage");
        })
        .catch((error) => {
          console.error("카카오 로그인 에러:", error);
          setError("로그인 중 오류가 발생했습니다. 다시 시도해 주세요.");
          setTimeout(() => navigate("/"), 3000);
        });
    }
  }, [navigate]);

  if (error) {
    return <div>{error}</div>;
  }

  return <div>카카오 로그인 처리 중...</div>;
};

export default KakaoCallback;
