interface MarqueeProps {
  text: string;
  speed?: "slow" | "fast";
  highlightWords?: string[];
}

const Marquee = ({ text, speed = "slow", highlightWords = [] }: MarqueeProps) => {
  const repeated = `${text} `.repeat(4);
  
  const renderText = (str: string) => {
    const words = str.split(" ");
    return words.map((word, i) => {
      const clean = word.replace(/·/g, "").trim();
      const isHighlight = highlightWords.some(hw => clean.toLowerCase().includes(hw.toLowerCase()));
      return (
        <span key={i}>
          {isHighlight ? (
            <span className="text-primary">{word}</span>
          ) : (
            word
          )}{" "}
        </span>
      );
    });
  };

  return (
    <div className="w-full overflow-hidden bg-surface border-y border-border py-3">
      <div className={`flex whitespace-nowrap ${speed === "fast" ? "animate-marquee-fast" : "animate-marquee"}`}>
        <span className="font-mono-label text-sm tracking-wider text-muted-foreground">
          {renderText(repeated)}
        </span>
        <span className="font-mono-label text-sm tracking-wider text-muted-foreground">
          {renderText(repeated)}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
