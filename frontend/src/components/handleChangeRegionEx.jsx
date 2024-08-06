export const DrawChart = () => {
  const [region, setRegion] = useState("지역구");

  const handleChangeRegion = (reg) => {
    setRegion(reg);
  };

  useEffect(() => {
    if (region !== "동작구") {
      callApi();
    }
  }, [region]);

  useEffect(() => {
    if (elRef.current) {
      if (elRef.current.textContent !== "동작구") {
        callApi();
      }
    }
  }, [elRef, region]);

  // 지역구 list 선택을 구독하는 useEffect
  // if (이전에 선택했던 지역구인지?)
  //    -> False : api 요청
  // 요청받은 데이터 처리 함수 (따로 빼기)
  // 변경된 data는 handleData props 전달
  // handleData return값을 차트로 전달해서 그리기
  return (
    <div style={{ width: "800px" }}>
      <Chart data={seoulData} options={options} />
      <button
        ref={elRef}
        onClick={() => {
          handleChangeRegion("동작구");
        }}
      >
        {region}
      </button>
      <button
        onClick={() => {
          handleChangeRegion("마포구");
          callApi();
        }}
      >
        {region}
      </button>
    </div>
  );
};
