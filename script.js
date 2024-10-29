function generatePassword() {
    const length = document.getElementById("length").value;
    const includeLowercase = document.getElementById("include-lowercase").checked;
    const includeUppercase = document.getElementById("include-uppercase").checked;
    const includeNumbers = document.getElementById("include-numbers").checked;
    const includeSymbols = document.getElementById("include-symbols").checked;
  
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  
    let characterPool = "";
    if (includeLowercase) characterPool += lowercase;
    if (includeUppercase) characterPool += uppercase;
    if (includeNumbers) characterPool += numbers;
    if (includeSymbols) characterPool += symbols;
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      password += characterPool[randomIndex];
    }
  
    document.getElementById("password").value = password;
  }
  
  function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  }
  