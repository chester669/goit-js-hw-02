function formatMessage(message, maxLength) {
  const messageSymbols = message.length;
  if (messageSymbols > maxLength) {
    message = message.slice(0, maxLength);
    return message + "...";
  } else {
    return message;
  }
}
