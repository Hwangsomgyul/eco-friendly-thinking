export default function SearchField({ search, onChange, onSearch }) {
  return (
    <div className="p-8 flex w-400px gap-[15px]">
      <input
        className="flex-1 border-2 rounded p-2 w-[270px] h-[40px]"
        value={search}
        onChange={onChange}
      />
      <button
        className="bg-[#365a31] text-white py-2 rounded w-[70px] h-[40px]"
        onClick={onSearch}
      >
        검색
      </button>
    </div>
  );
}
