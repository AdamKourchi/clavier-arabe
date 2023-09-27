function translator(letter, b = " ", a = " ") {
    let send = "";
    switch (letter) {
      case "a":
        send = "ا";
        break;
      case "b":
        send = "ب";
        break;
      case "c":
        send = "ث";
        break;
      case "d":
        send = "د";
        break;
      case "D":
        send = "ض";
        break;
      case "e":
        send = "آ";
        break;
      case "f":
        send = "ف";
        break;
      case "g":
        send = "ڭ";
        break;
      case "h":
        send = "ه";
        break;
      case "A":
        send = "ة";
        break;
      case "i":
        send = "ي";
        break;
      case "I":
        send = "إ";
        break;
      case "j":
        send = "ج";
        break;
      case "k":
        send = "ك";
        break;
      case "K":
        send = "ق";
        break;
      case "l":
        send = "ل";
        break;
      case "m":
        send = "م";
        break;
      case "n":
        send = "ن";
        break;
      case "o":
        send = "و";
        break;
      case "p":
        send = "ب";
        break;
      case "q":
        send = "ق";
        break;
      case "r":
        send = "ر";
        break;
      case "s":
        send = "س";
        break;
      case "S":
        send = "ص";
        break;
      case "t":
        send = "ت";
        break;
      case "T":
        send = "ط";
        break;
      case "u":
        send = "أ";
        break;
      case "v":
        send = "ڤ";
        break;
      case "w":
        send = "و";
        break;
      case "x":
        send = "ش";
        break;
      case "y":
        send = "ي";
        break;
      case "z":
        send = "ز";
        break;
      case "Z":
        send = "ظ";
        break;
      case " ":
        send = " ";
        break;
      case "?":
        send = "؟";
        break;
      case ",":
        send = "،";
        break;
      default:
        send = letter;
        break;
    }
    return send;
  }
  const fr = document.getElementById("fr");
  
function type1(e) {
    const selectionStart = fr.selectionStart;
    const selectionEnd = fr.selectionEnd;
  
    // Get the text content before and after the selection.
    const textBeforeSelection = fr.value.substring(0, selectionStart);
    const textAfterSelection = fr.value.substring(selectionEnd);
  
    // The text you want to insert when the button is clicked.
    const newText = e;
  
    // Combine the text before the selection, the new text, and the text after the selection.
    const updatedText = textBeforeSelection + newText + textAfterSelection;
  
    // Set the updated text as the fr's value.
    fr.value = updatedText;
  
    // Update the cursor position to be at the end of the inserted text.
    fr.selectionStart = selectionStart + newText.length;
    fr.selectionEnd = selectionStart + newText.length;
  
    // Focus on the fr to ensure the cursor is visible.
    fr.focus();
}

function copyText(){
    fr.select();

    // Execute the copy command
    document.execCommand('copy');
  
    // Deselect the text (optional)
    fr.selectionEnd = fr.selectionStart;
  
}

function searchGoogle(query) {
    query = fr.value
    // Construct the Google search URL with the query
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  
    // Open a new browser window or tab with the Google search URL
    window.open(googleSearchUrl, '_blank');
  }
  function searchYt(query) {
    query = fr.value
    // Construct the Google search URL with the query
    const googleSearchUrl = `https://www.youtube.com/search?q=${encodeURIComponent(query)}`;
  
    // Open a new browser window or tab with the Google search URL
    window.open(googleSearchUrl, '_blank');
  }
  
  const letters = [];
  // Add Arabic letters from Unicode
  for (let i = 0x621; i <= 0x64a; i++) {
    letters.push(String.fromCharCode(i));
  }

  fr.addEventListener("input", () => {
    let text = fr.value;
    let newText = [];
    let cursorPosition = fr.selectionStart;
    for (let i = 0; i < text.length; i++) {
      send = translator(text[i], (b = text[i - 1]), (a = text[i + 1]));
      newText.push(send);
    }
    for (let i = 0; i < newText.length; i++) {
      if (newText[i] == "ه" && newText[i - 1] == "ڭ") {
        newText.splice(i - 1, 2, "غ");
        cursorPosition--;
      }
      if (newText[i] == "ه" && newText[i - 1] == "ث") {
        newText.splice(i - 1, 2, "ش");
        cursorPosition--;
      }
      if (newText[i] == "ه" && newText[i - 1] == "ك") {
        newText.splice(i - 1, 2, "خ");
        cursorPosition--;
      }

      if (newText[i] == "'" && newText[i - 1] == "د") {
        newText.splice(i - 1, 2, "ذ");
        cursorPosition--;
      }

      if (newText[i] == "'" && newText[i - 1] == "ا") {
        newText.splice(i - 1, 2, "أ");
        cursorPosition--;
      }
      if (newText[i] == "آ" && newText[i - 1] == "آ") {
        newText.splice(i - 1, 2, "ى");
        cursorPosition--;
      }
      if (newText[i] == "'" && newText[i - 1] == "و") {
        newText.splice(i - 1, 2, "ؤ");
        cursorPosition--;
      }
      //Numbers To Letters
      if (
        newText[i] == "3" &&
        (letters.includes(newText[i - 1]) ||
          letters.includes(newText[i + 1]))
      ) {
        newText.splice(i, 1, "ع");
      }
      if (
        newText[i] == "7" &&
        (letters.includes(newText[i - 1]) ||
          letters.includes(newText[i + 1]))
      ) {
        newText.splice(i, 1, "ح");
      }

      if (
        newText[i] == "5" &&
        (letters.includes(newText[i - 1]) ||
          letters.includes(newText[i + 1]))
      ) {
        newText.splice(i, 1, "خ");
      }
      if (
        newText[i] == "2" &&
        (letters.includes(newText[i - 1]) ||
          letters.includes(newText[i + 1]))
      ) {
        newText.splice(i, 1, "ء");
      }
      if (
        newText[i] == "9" &&
        (letters.includes(newText[i - 1]) ||
          letters.includes(newText[i + 1]))
      ) {
        newText.splice(i, 1, "ق");
      }
      if (newText[i] == "ه" && newText[i - 1] == "ل" && newText[i-2]=="ل" && newText[i-3]=="ا") {
        newText.splice(i - 3, 4, "اللّه");
        cursorPosition++;
    }
  }
    fr.value = newText.join("");
    fr.setSelectionRange(cursorPosition, cursorPosition);
  });