import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: ${(p) => (p.$fromMe ? "flex-end" : "flex-start")};
  margin: 10px 0;
`;

const Bubble = styled.div`
  max-width: min(520px, 78%);
  padding: 12px 14px;
  border-radius: 18px;
  line-height: 1.35;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);

  background: ${(p) =>
    p.$fromMe
      ? "linear-gradient(135deg, rgba(120,120,255,0.9), rgba(70,200,255,0.85))"
      : "rgba(255,255,255,0.06)"};

  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
`;

const Meta = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 6px;
  font-size: 12px;
  opacity: 0.75;
  justify-content: ${(p) => (p.$fromMe ? "flex-end" : "flex-start")};
`;

export default function MessageBubble({ from, text, time }) {
  const fromMe = from === "me";

  return (
    <Row $fromMe={fromMe}>
      <div>
        <Bubble $fromMe={fromMe}>{text}</Bubble>
        <Meta $fromMe={fromMe}>
          <span>{fromMe ? "You" : "Them"}</span>
          <span>•</span>
          <span>{time}</span>
        </Meta>
      </div>
    </Row>
  );
}