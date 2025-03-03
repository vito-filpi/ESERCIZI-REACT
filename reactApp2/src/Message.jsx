const Message = ({ text, isSent }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isSent ? "flex-end" : "flex-start",
        marginBottom: "8px",
      }}
    >
      <div
        style={{
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: isSent ? "#dcf8c6" : "#ffffff",
          maxWidth: "60%",
          border: "1px solid #ccc",
          color: "black",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;
