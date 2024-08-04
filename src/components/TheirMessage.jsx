const TheirMessage = ({ lastMessage, message }) => {
  // Check if message is defined before trying to access its properties
  if (!message) return null;

  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message.sender?.avatar})` }}
        />
      )}
      {message.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            color: "white",
            backgroundColor: "#CABCDC",
            marginLeft: isFirstMessageByUser ? "4px" : "48px",
          }}
          dangerouslySetInnerHTML={{ __html: message.text }}
        />
      )}
    </div>
  );
};

export default TheirMessage;
