const replaceChildNode = (node) => {
  if (node.textContent === null) return node;
  const newNode = document.createElement("span");
  const words = node.textContent
    .split(" ")
    .filter((word) => word !== "" && word !== "\n");
  const HTMLstring = spannifyWords(words);
  newNode.innerHTML = HTMLstring;
  return newNode;
};

const spannifyWords = (words) => {
  let HTMLstring = "";
  words.forEach((word) => {
    const spannifiedWord = `<span style="letter-spacing: 0.05em; font-weight: 200;"> ${spannifyCharacters(
      word
    )} </span>`;
    HTMLstring += spannifiedWord;
  });
  return HTMLstring;
};

const spannifyCharacters = (word) => {
  //avoid highlighting numbers
  var hasNumber = /\d/;
  if (hasNumber.test(word)) return word;

  let biometricWord = "";
  const characters = word.split("");
  switch (characters.length) {
    case 0:
      biometricWord = word;
      break;
    case 1:
      biometricWord = `<span style="font-weight: bold; "> ${word} </span>`;
      break;
    case 2:
      biometricWord = `<span style="font-weight: bold; "> ${word} </span>`;
      break;
    case 3:
      biometricWord = `<span style="font-weight: bold; "> ${word} </span>`;
      break;
    default:
      let bold = "";
      let notBold = "";
      for (let i = 0; i < characters.length; i++) {
        if (i < characters.length / 2) {
          bold += characters[i];
        } else {
          notBold += characters[i];
        }
      }
      biometricWord = `<span style="font-weight: bold;"> ${bold}</span>${notBold} `;
      break;
  }
  return biometricWord;
};

export default replaceChildNode;
