//chatbotMsgList Array
let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
//We are getting the chatContainer and userInput ID.
let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");

//We call the sendMsgToChatbot function by providing onclick attribute
function sendMsgToChatbot() {
//Declare userMsg as the userInputEl input value
  let userMsg = userInputEl.value;

  // Creating and appending the container element div
  let msgContainerEl = document.createElement("div");
  msgContainerEl.classList.add("msg-to-chatbot-container");
  chatContainerEl.appendChild(msgContainerEl);

  // Creating and appending the span element
  let userMsgEl = document.createElement("span");
  userMsgEl.textContent = userMsg;
  userMsgEl.classList.add("msg-to-chatbot");
  msgContainerEl.appendChild(userMsgEl);

//Empty the userInputEl input value
  userInputEl.value = "";
//Call the getReplyFromChatbot()
  getReplyFromChatbot();
}

//getReplyFromChatbot() function gets called in the sendMsgToChatbot() function
function getReplyFromChatbot() {
//Decalring the array length as noOfChatbotMsgs
  let noOfChatbotMsgs = chatbotMsgList.length;

//We get the random array item from here
  let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs) - 1];

  // Creating and appending the container element div
  let msgContainerEl = document.createElement("div");
  msgContainerEl.classList.add("msg-from-chatbot-container");
  chatContainerEl.appendChild(msgContainerEl);

  // Creating and appending the span element
  let chatbotMsgEl = document.createElement("span");
  chatbotMsgEl.textContent = chatbotMsg;
  chatbotMsgEl.classList.add("msg-from-chatbot");
  msgContainerEl.appendChild(chatbotMsgEl);
}