/* eslint-disable react/prop-types */

function Notification({ message }) {

  const { error, text } = message;

  if (text) {
    return <div className={error ? "error" : "message"}>{text}</div>;
  }
}

export default Notification