export default function SearchField({ search, onChange, onSearch }) {
  return (
    <div className="flex gap-4">
      <input
        className="flex-1 border-[1px] border-solid border-red-300"
        value={search}
        onChange={onChange}
      />
      <button
        className="w-[50px] border-[1px] border-solid border-red-300"
        onClick={onSearch}
      >
        검색
      </button>
    </div>
  );
}
