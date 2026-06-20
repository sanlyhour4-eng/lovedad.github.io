function updateMessage() {
  const customMessage = document.getElementById("customMessage").value;
  const messageElement = document.getElementById("message");

  if (customMessage.trim() !== "") {
    // Fade out
    messageElement.style.opacity = 0;
    setTimeout(() => {
      // Update text with Khmer + English
      messageElement.innerHTML = customMessage + "<br>ឪពុកជាវីរបុរសរបស់ខ្ញុំ សូមអរគុណសម្រាប់អ្វីៗទាំងអស់!";
      // Fade in
      messageElement.style.opacity = 1;
    }, 500);
  } else {
    alert("Please write a message before sending.");
  }
}
