import "./Stars.css";

export default function Stars({ children }) {
  return (
    <div className="startsContainer">
      <div className="stars s">
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
      </div>
      <div className="stars m">
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
      </div>
      <div className="stars l">
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
      </div>
      {children}
    </div>
  );
}
