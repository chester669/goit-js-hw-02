function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  const forbiddenWords =
    lowerCaseMessage.includes("sale") || lowerCaseMessage.includes("spam");
  return forbiddenWords;
}
