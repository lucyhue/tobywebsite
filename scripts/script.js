/**
 * Describe what this function does here.
 */
function offset(str, offsetAmount) {
  let outputStr = "";
  for (const letter of str) {
    let charCode = letter.charCodeAt(0);
    let offsetCharCode = charCode + offsetAmount;
    outputStr += String.fromCharCode(offsetCharCode);
  }
  return outputStr;
}

/**
 *
 */
function onClick() {
  const obfuscatedEmail = "vqff656Biockn0eqo";
  const actualEmail = offset(obfuscatedEmail, -2);
  window.location.href = "mailto:" + actualEmail;
}
