"use client";

interface DiagonalDividerProps {
  direction?: "up" | "down";
}

export default function DiagonalDivider({ direction = "down" }: DiagonalDividerProps) {
  return (
    <div className="relative w-full -mt-20 z-20">
      <div
        className="absolute inset-0"
        style={{
          background: "#0a0a0a",
          clipPath:
            direction === "up"
              ? "polygon(0 100%, 100% 0, 100% 100%, 0 100%)"
              : "polygon(0 20%, 100% 0, 100% 100%, 0 100%)",
        }}
      />
    </div>
  );
}
