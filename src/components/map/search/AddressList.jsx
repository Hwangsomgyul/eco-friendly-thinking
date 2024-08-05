export default function AddressList({ list, onClickAddress }) {
  if (!list.length) {
    return null;
  }

  const handleClickAddress =
    ({ place_name, road_address_name }) =>
    () => {
      onClickAddress({ place_name, road_address_name });
    };

  return (
    <ul className="w-full list-none px-8 py-16">
      {list.map(({ id, place_name, road_address_name }) => (
        <li
          key={id}
          className="flex flex-col gap-4 rounded-full px-8 py-4 hover:text-red-500"
          onClick={handleClickAddress({ place_name, road_address_name })}
        >
          <p className="text-lg">{place_name}</p>
          <p className="text-sm">{road_address_name}</p>
        </li>
      ))}
    </ul>
  );
}
