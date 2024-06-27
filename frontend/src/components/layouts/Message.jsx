import { useEffect, useState } from "react";
import { MessageContainer, MessageText } from "./Message.style";
import eventMessage from "../../utils/eventMessage";

export default function Message() {
  const [visible, setVisible] = useState("false");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const flashMessage = ({ message, type }) => {
      setVisible("true");
      setMessage(message);
      setType(type);

      setTimeout(() => {
        setMessage("");
        setType("default");
        setVisible("false");
      }, 5000);
    };

    eventMessage.addListener("flash", flashMessage);

    return () => {
      eventMessage.removeAllListeners("flash", flashMessage);
    };
  }, []);

  return (
    <MessageContainer type={type} $visible={visible}>
      <MessageText>{message}</MessageText>
    </MessageContainer>
  );
}
