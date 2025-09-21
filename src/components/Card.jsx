import React from "react";

const Card = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-fit">
      {/* Red Card */}
      <div className="flex flex-col items-center justify-center text-center rounded-md text-white cursor-pointer transition-transform duration-300 ease-in-out bg-[#67aaf7] col-start-1 row-start-1 h-[100px] w-[120px] hover:scale-110 hover:shadow-xl hover:z-10 group">
        <p className="text-base font-bold">Hover Me</p>
        <p className="text-sm">Lorem Ipsum</p>
      </div>

      {/* Blue Card */}
      <div className="flex flex-col items-center justify-center text-center rounded-md text-white cursor-pointer transition-transform duration-300 ease-in-out bg-[#dda36c] col-start-2 row-span-2 h-[215px] w-[120px] hover:scale-110 hover:shadow-xl hover:z-10 group">
        <p className="text-base font-bold">Hover Me</p>
        <p className="text-sm">Lorem Ipsum</p>
      </div>

      {/* Green Card */}
      <div className="flex flex-col items-center justify-center text-center rounded-md text-white cursor-pointer transition-transform duration-300 ease-in-out bg-[#bc8acf] col-start-1 row-start-2 h-[100px] w-[120px] hover:scale-110 hover:shadow-xl hover:z-10 group">
        <p className="text-base font-bold">Hover Me</p>
        <p className="text-sm">Lorem Ipsum</p>
      </div>
    </div>
  );
};

export default Card;
