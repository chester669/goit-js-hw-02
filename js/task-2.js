function formatMessage(message, maxLength) {
  const messageSymbols = message.length;
  if (messageSymbols > maxLength) {
    message = message.slice(0, maxLength);
    return message + "...";
  } else {
    return message;
  }
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

function subtitles(phrase, length) {
  if (phrase.length > length) {
    phrase = phrase.slice(0, length);
    return phrase;
  } else {
    return phrase;
  }
}

console.log(subtitles("I love jesus he is creator", 5));
console.log(subtitles("I love jesus he is creator", 10));
