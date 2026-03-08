import { useMemo, useState } from "react";
import ChatLayout from "./components/ChatLayout.jsx";
import { chats as seed } from "./data/mock.js";
import styles from "./styles/app.module.css";

export default function App() {
  const [allChats, setAllChats] = useState(seed);
  const [activeId, setActiveId] = useState(seed[0]?.id ?? null);
  const [query, setQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const activeChat = useMemo(
    () => allChats.find((c) => c.id === activeId) ?? null,
    [allChats, activeId]
  );

  const filteredChats = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allChats;
    return allChats.filter((c) => c.name.toLowerCase().includes(q));
  }, [allChats, query]);

  function selectChat(id) {
    setActiveId(id);
    // mark unread = 0 (demo)
    setAllChats((prev) => prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c)));
  }

  function sendMessage(text) {
    if (!activeChat) return;

    const newMsg = {
      id: crypto.randomUUID(),
      from: "me",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setAllChats((prev) =>
      prev.map((c) => {
        if (c.id !== activeChat.id) return c;
        return {
          ...c,
          last: text,
          messages: [...c.messages, newMsg],
        };
      })
    );

    // fake typing indicator
    setIsTyping(true);
    window.setTimeout(() => setIsTyping(false), 900);
  }

  return (
    <div className={styles.appShell}>
      <ChatLayout
        brand="Charul Chat"
        chats={filteredChats}
        query={query}
        onQueryChange={setQuery}
        activeChat={activeChat}
        onSelectChat={selectChat}
        onSend={sendMessage}
        isTyping={isTyping}
      />
    </div>
  );
}