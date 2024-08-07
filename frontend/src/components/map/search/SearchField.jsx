import React, {useState} from 'react';

export default function SearchField({ search, onChange, onSearch, showTooltip }) {

  const [isHovered, setIsHovered] = useState(false);

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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        검색
      </button>
      {showTooltip && (
      <p className={`ml-[150px] mt-[50px] absolute w-[200px] p-[8px] left-0 rounded-[8px] bg-[#333] text-center text-white text-[14px] ${isHovered ? 'block' : 'hidden'} arrow_box`}>
        리뷰쓰고 20point!!
      </p>
      )}
      <style jsx>{`
        .arrow_box::after {
          position: absolute;
          bottom: 100%;
          right: 0%;
          width: 0;
          height: 0;
          margin-left: -10px;
          border: solid transparent;
          border-color: rgba(51, 51, 51, 0);
          border-bottom-color: #333;
          border-width: 10px;
          pointer-events: none;
          content: ' ';
        }
      `}</style>
    </div>
  );
}
