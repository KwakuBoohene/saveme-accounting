function shortenPipe(text, length) {
  if (text.length > length) {
    return text.substring(0, length) + "...";
  }
  return text;
}

function capitalizePipe(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function upperCasePipe(text) {
  return text.toUpperCase();
}

function lowerCasePipe(text) {
  return text.toLowerCase();
}

function titleCasePipe(text) {
  text = text.toLowerCase().map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return text.join(" ");
}

function percentPipe(value) {
  value = parseFloat(value);
  return (value * 100).toFixed(2) + "%";
}

function decimalPipe(value) {
  value = parseFloat(value);
  return value.toFixed(2);
}

function numberPipe(value) {
  return new Intl.NumberFormat().format(value);
}

function currencyPipe(value, currency = "GHS", format = "en-US") {
  return new Intl.NumberFormat(format, {
    style: "currency",
    currency: currency,
  }).format(value);
}

function randomNumberBtwn(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export {
  capitalizePipe,
  decimalPipe,
  percentPipe,
  shortenPipe,
  titleCasePipe,
  upperCasePipe,
  lowerCasePipe,
  currencyPipe,
  numberPipe,
  randomNumberBtwn,
};
