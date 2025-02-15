import { useAlertContext } from "../contexts/AlertContext";

export default function Alert() {
  const { alertData, setAlertData } = useAlertContext();

  const { type, message } = alertData;

  const handleAlertClose = () => {
    setAlertData({ type: "", message: "" });
  };

  const classes = {
    info: "bg-blue",
    success: "bg-green",
    danger: "bg-red",
  };

  if (!alertData.message) return null;

  return (
    <div className={`alert ${classes[type]}`}>
      {message}
      <button className="btn-alert" onClick={handleAlertClose}>
        ⨉
      </button>
    </div>
  );
}
