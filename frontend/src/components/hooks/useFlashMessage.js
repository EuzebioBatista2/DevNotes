import eventMessage from "../../utils/eventMessage";

export default function useFlashMessage() {
  function setFlashMessage(msg, type) {
    eventMessage.emit("flash", {
      message: msg,
      type: type,
    });
  }

  return { setFlashMessage };
}
