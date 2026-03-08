import { useState } from "react";
import styles from "../styles/composer.module.css";

export default function Composer({ onSend }) {
  const [text, setText] = useState("");

  function submit(e) {
    e.preventDefault();
    const msg = text.trim();
    if (!msg) return;
    onSend(msg);
    setText("");
  }

  return (
    <form className={styles.composer} onSubmit={submit}>
      <input
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
      />
      <button className={styles.send} type="submit">
        Send
      </button>
    </form>
  );
}