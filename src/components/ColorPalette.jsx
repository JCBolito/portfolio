export default function ColorPalette({ className }) {
  const colors = [
    "bg-[#273043]",
    "bg-[#9197AE]",
    "bg-[#EFF6EE]",
    "bg-[#F02D3A]",
    "bg-[#DD0426]",
  ];
  return (
    <div className={`flex gap-2 ${className}`}>
      {colors.map((color, index) => {
        return (
          <div
            key={index}
            className={`aspect-square h-6 border-2 border-black ${color} sm:h-8`}
          ></div>
        );
      })}
    </div>
  );
}
