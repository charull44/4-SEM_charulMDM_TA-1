import MessageList from "./MessageList.jsx";
import Composer from "./Composer.jsx";
import StatusDot from "./ui/StatusDot.jsx";
import styles from "../styles/chat.module.css";

export default function ChatWindow({ activeChat, onSend, isTyping }) {
  // conditional rendering: no chat selected
  if (!activeChat) {
    return (
      <section className={styles.chat}>
        <div className={styles.placeholder}>
          <h2>Select a chat</h2>
          <p>Choose a conversation from the left sidebar.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.chat}>
      <header className={styles.header}>
        <div>
          <div className={styles.title}>{activeChat.name}</div>
          <div className={styles.subTitle}>
            <StatusDot online={activeChat.online} />
            <span>{activeChat.online ? "Online" : "Offline"}</span>
            {isTyping && <span className={styles.typing}>• typing...</span>}
          </div>
        </div>

        <div className={styles.headerRight}>
          <button className={styles.ghostBtn} type="button">Call</button>
          <button className={styles.ghostBtn} type="button">Info</button>
        </div>
      </header>

      <MessageList messages={activeChat.messages} />

      <Composer onSend={onSend} />
    </section>
  );
}