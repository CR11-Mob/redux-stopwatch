import "./Button.css";

export default function Button(props) {
  return (
    <button className="btn" onClick={props.clicked}>
      {props.children}
    </button>
  );
}
