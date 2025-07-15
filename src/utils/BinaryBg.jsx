const generateMatrix = () => {
  const columns = 100;
  const symbols = [];

  for (let i = 0; i < columns; i++) {
    const left = Math.random() * 100; // percentage
    const delay = Math.random() * 5;
    const duration = 3 + Math.random() * 100;
    const binary = Math.round(Math.random());

    symbols.push(
      <span
        key={i}
        className="symbol"
        style={{
          left: `${left}vw`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          userSelect: "none",
        }}
      >
        {binary}
      </span>
    );
  }

  return symbols;
};

const BinaryMatrix = () => {
  return <div className="matrix">{generateMatrix()}</div>;
};

export default BinaryMatrix;
