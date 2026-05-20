export default function Loader({
  fullPage = false,
  inline = false,
  text = '',
  size = 'md',
  className = '',
}) {
  if (inline) {
    return <span className="loader-inline" aria-label="Loading" />;
  }

  const sizeStyle =
    size === 'sm'
      ? { width: 24, height: 24, borderWidth: 2 }
      : size === 'lg'
      ? { width: 56, height: 56, borderWidth: 4 }
      : {};

  const spinner = (
    <div className={`loader ${className}`}>
      <div className="loader__spinner" style={sizeStyle} />
      {text && <span className="loader__text">{text}</span>}
    </div>
  );

  if (fullPage) {
    return <div className="loader-overlay">{spinner}</div>;
  }

  return spinner;
}
