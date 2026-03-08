export default function StatusDot({ online }) {
  return (
    <span
      style={{
        width: 8,
        height: 8,
        borderRadius: 99,
        display: "inline-block",
        background: online ? "rgb(60, 255, 170)" : "rgba(255,255,255,0.35)",
        boxShadow: online ? "0 0 0 4px rgba(60,255,170,0.12)" : "none",
      }}
      aria-label={online ? "online" : "offline"}
      title={online ? "Online" : "Offline"}
    />
  );
}