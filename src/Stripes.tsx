import "./Stripes.css";

const Stripes = () => (
  <div className="stripes">
    {Array(30)
      .fill(undefined)
      .map((_, index) => (
        <div key={index} />
      ))}
  </div>
);

export default Stripes;
