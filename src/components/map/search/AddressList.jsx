

export default function AddressList({ list, onClickAddress, showModal = true }) {
  if (!list.length) {
    return null;
  }

  const handleClickAddress =
    ({ place_name, road_address_name }) =>
    () => {
      onClickAddress({ place_name, road_address_name });
        // 모달이 열려야 하는 페이지에서만 모달 열기
      if(showModal) {
        // 모달 열기 관련 로직은 Reviewpage와 MainPage에서 다루기에 빈 상태로 둔다
      }
    };

    

  return (
    <ul className="w-full list-none px-8 py-16 bg-[#D6EfD8] overflow-y-auto max-h-[700px]">
      {list.map(({ id, place_name, road_address_name }) => (
        <li
          key={id} 
          className="flex flex-col bg-white rounded-xl px-8 py-4 hover:text-red-500 mb-[10px] cursor-pointer"
          onClick={handleClickAddress({ place_name, road_address_name })}
        >
          <p className="p-4 text-[#1A5319] font-[20px] text-lg">{place_name}</p>
          <p className="p-4 text-[#508D4E] font-[15px] text-sm">{road_address_name}</p>
        </li>
      ))}
    </ul>
  );
}
