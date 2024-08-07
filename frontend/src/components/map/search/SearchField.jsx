import React, { useState } from 'react';

export default function SearchField({
  search,
  onChange,
  onSearch,
  showTooltip,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-400px flex gap-[15px] p-8">
      <input
        className="h-[40px] w-[270px] flex-1 rounded border-2 p-2"
        value={search}
        onChange={onChange}
      />
      <button
        className="h-[40px] w-[70px] rounded bg-[#365a31] py-2 text-white"
        onClick={onSearch}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        검색
      </button>
      {showTooltip && (
        <p
          className={`absolute left-0 ml-[150px] mt-[50px] w-[200px] rounded-[8px] bg-[#333] p-[8px] text-center text-[14px] text-white ${isHovered ? 'block' : 'hidden'} arrow_box`}
        >
          리뷰쓰고 20point!!
        </p>
      )}
      <style>{`
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
