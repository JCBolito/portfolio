export default function ColorPalette({ className }) {
  const colors = ["#273043", "#9197AE", "#EFF6EE", "#F02D3A", "#DD0426"];
  return (
    <div className={`flex gap-2 ${className}`}>
      {colors.map((color, index) => {
        return (
          <div
            key={index}
            className={`aspect-square h-6 border-2 border-black bg-[${color}] sm:h-8`}
          ></div>
        );
      })}
    </div>
  );
}
