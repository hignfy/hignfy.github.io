// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
  // Your JavaScript code goes here

  // Example: Change the text of an element
  const greetingElement = document.getElementById('greeting');
  if (greetingElement) {
      greetingElement.textContent = 'Hello, World!';
  }

  // Example: Add an event listener to a button
  const myButton = document.getElementById('myButton');
  if (myButton) {
      myButton.addEventListener('click', function () {
          alert('Button clicked!');
      });
  }

  // You can add more functionality, interact with the DOM, and respond to user interactions here.

});
