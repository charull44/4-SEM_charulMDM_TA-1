import Avatar from "./ui/Avatar.jsx";
import StatusDot from "./ui/StatusDot.jsx";
import styles from "../styles/sidebar.module.css";

export default function Sidebar({
  brand,
  chats,
  query,
  onQueryChange,
  activeChatId,
  onSelectChat,
}) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brandRow}>
        <div className={styles.brandMark} />
        <div>
          <div className={styles.brandName}>{brand}</div>
          <div className={styles.brandHint}>Simple React SPA UI</div>
        </div>
      </div>

      <div className={styles.searchWrap}>
        <input
          className={styles.search}
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search chats..."
        />
      </div>

      <div className={styles.list}>
        {chats.length === 0 ? (
          <div className={styles.empty}>No chats found</div>
        ) : (
          chats.map((chat) => (
            <button
              key={chat.id}
              className={`${styles.chatItem} ${
                chat.id === activeChatId ? styles.active : ""
              }`}
              onClick={() => onSelectChat(chat.id)}
              type="button"
            >
              <Avatar name={chat.name} />
              <div className={styles.chatMeta}>
                <div className={styles.chatTop}>
                  <div className={styles.chatName}>{chat.name}</div>
                  <StatusDot online={chat.online} />
                </div>
                <div className={styles.chatLast}>{chat.last}</div>
              </div>

              {chat.unread > 0 && <div className={styles.unread}>{chat.unread}</div>}
            </button>
          ))
        )}
      </div>
    </aside>
  );
}