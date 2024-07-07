document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("text-input");
  const resultAside = document.getElementById("result-aside");
  const encryptButton = document.getElementById("encrypt-button");
  const decryptButton = document.getElementById("decrypt-button");

  const encrypt = (text) => {
    return text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  };

  const decrypt = (text) => {
    return text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  };

  const displayResult = (text) => {
    resultAside.innerHTML = `
      <textarea id="output-text" class="text-output" readonly>${text}</textarea>
      <button id="copy-output-button" class="copy-button">Copiar</button>
    `;

    const copyOutputButton = document.getElementById("copy-output-button");
    copyOutputButton.addEventListener("click", () => {
      const outputText = document.getElementById("output-text");
      if (outputText) {
        outputText.select();
        document.execCommand("copy");
        alert("Texto copiado para a área de transferência");
      }
    });
  };

  encryptButton.addEventListener("click", () => {
    const text = textInput.value;
    const encryptedText = encrypt(text);
    displayResult(encryptedText);
  });

  decryptButton.addEventListener("click", () => {
    const text = textInput.value;
    const decryptedText = decrypt(text);
    displayResult(decryptedText);
  });
});
