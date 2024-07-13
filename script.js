fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    console.log('Your Public IP Address:', data.ip);
    document.getElementById("ip").innerHTML = data.ip;
  })
  .catch(error => {
    document.getElementById("ip").innerHTML = "XXX You got us XXX";
    console.error('Error fetching IP:', error);
  });


console.log("The master password is: \"Hello World\"")

// ---------------
// Encryption Demo

function generateKey(str, key) {

  key = key.split("");
  if (str.length == key.length)
    return key.join("");
  else {
    let temp = key.length;
    for (let i = 0; i < (str.length - temp); i++) {

      key.push(key[i % ((key).length)])
    }
  }
  return key.join("");
}

function cipherText(str, key) {
  let cipher_text = "";

  for (let i = 0; i < str.length; i++) {
    // converting in range 0-25
    let x = (str[i].charCodeAt(0) + key[i].charCodeAt(0)) % 26;

    // convert into alphabets(ASCII)
    x += 'A'.charCodeAt(0);

    cipher_text += String.fromCharCode(x);
  }
  return cipher_text;
}

function originalText(cipher_text, key) {
  let orig_text = "";

  for (let i = 0; i < cipher_text.length; i++) {
    // converting in range 0-25
    let x = (cipher_text[i].charCodeAt(0) -
      key[i].charCodeAt(0) + 26) % 26;

    // convert into alphabets(ASCII)
    x += 'A'.charCodeAt(0);
    orig_text += String.fromCharCode(x);
  }
  return orig_text;
}

function LowerToUpper(s) {
  let str = (s).split("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toLowerCase()) {
      str[i] = s[i].toUpperCase();
    }
  }
  s = str.toString();
  return s;
}

function encrypt() {
  let text = document.getElementById("text_to_encrypt").value;
  let key = document.getElementById("encryption_key").value;

  key = generateKey(text, key);

  document.getElementById("encrypted_text").innerHTML = cipherText(text, key);
}

// Encryption Demo (End)
// ---------------------

const hidden_passwords = ["Now you", "can access", "all of", "my accounts!"];

function pwd() {
  if (document.getElementById("password_entry").value == "Hello World"){
    for (let i = 1; i <= 4; i++){
      console.log(i);
      document.getElementById("pwd" + i.toString()).innerHTML = hidden_passwords[i-1];
    }
    document.getElementById("pwd_manager_note").innerHTML = "The Password Manager has been compromised :O";
  }
}