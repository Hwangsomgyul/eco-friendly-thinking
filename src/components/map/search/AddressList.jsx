export default function AddressList({ list }) {
  if (!list.length) {
    return null;
  }

  return (
    <ul className="w-full list-none px-8 py-16">
      {list.map(({ id, address_name, road_address_name }) => (
        <li
          key={id}
          className="flex flex-col gap-4 rounded-full px-8 py-4 hover:text-red-500"
        >
          <p className="text-lg">{address_name}</p>
          <p className="text-sm">{road_address_name}</p>
        </li>
      ))}
    </ul>
  );
}
