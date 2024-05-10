import { cn } from "@/lib/utils";

type T_ColoredSeparator = {
  className?: string;
};

export default function ColoredSeparator({ ...props }: T_ColoredSeparator) {
  const colors: React.HTMLProps<HTMLElement>["className"][] = [
    "bg-[#273043]",
    "bg-[#9197AE]",
    "bg-[#EFF6EE]",
    "bg-[#F02D3A]",
    "bg-[#DD0426]",
  ];
  return (
    <div className={cn("flex h-min justify-center gap-1", props.className)}>
      {colors.map((color, index) => {
        return (
          <div
            key={index}
            className={`aspect-square h-6 border-2 border-black ${color}`}
          ></div>
        );
      })}
    </div>
  );
}
