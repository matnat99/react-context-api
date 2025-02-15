export default function Alert({ type = "info", message }) {
  const classes = {
    info: "bg-blue",
    succes: "bg-green",
    danger: "bg-red",
  };

  if (!message) return null;

  return <div className={classes[type]}>{message}</div>;
}
