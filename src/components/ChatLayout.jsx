import Sidebar from "./Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import styles from "../styles/app.module.css";

export default function ChatLayout({
  brand,
  chats,
  query,
  onQueryChange,
  activeChat,
  onSelectChat,
  onSend,
  isTyping,
}) {
  return (
    <div className={styles.wrapper}>
      <Sidebar
        brand={brand}
        chats={chats}
        query={query}
        onQueryChange={onQueryChange}
        activeChatId={activeChat?.id ?? null}
        onSelectChat={onSelectChat}
      />

      <ChatWindow activeChat={activeChat} onSend={onSend} isTyping={isTyping} />
    </div>
  );
}