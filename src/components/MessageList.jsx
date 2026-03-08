import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble.jsx";
import styles from "../styles/chat.module.css";

export default function MessageList({ messages }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={styles.messages}>
      {messages.map((m) => (
        <MessageBubble key={m.id} from={m.from} text={m.text} time={m.time} />
      ))}
      <div ref={endRef} />
    </div>
  );
}