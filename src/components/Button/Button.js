import "./Button.scss";

export default function Button(props) {
  const { label, isGrey, isLong, disabled, as = "a", ...otherProps } = props;

  let className = "Button";
  className += isGrey ? " Grey" : "";
  className += isLong ? " Long" : "";
  className += disabled ? " Disabled" : "";

  const child = <div className="Button-Inner">{label}</div>;

  const component =
    as === "a" ? (
      <a className={className} {...otherProps}>
        {child}
      </a>
    ) : (
      <button className={className} {...otherProps}>
        {child}
      </button>
    );
    
  return component;
}
