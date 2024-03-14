document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener('submit', function(event) {
        if (event.target.classList.contains('message-form')) {
            event.preventDefault();
            const messageForm = event.target;
            const messageInput = messageForm.querySelector('.message-input');
            const messageContent = messageInput.value.trim();
            if (messageContent !== '') {
                const conversation = messageForm.closest('.conversation');
                const message = document.createElement('div');
                message.classList.add('message');
                const messageText = document.createElement('span');
                messageText.classList.add('message-content');
                messageText.textContent = messageContent;

                // Check some condition to determine if the message is yours
                const isMyMessage = true; // Replace true with your actual condition

                // Use the appropriate user class based on the condition
                const userClass = isMyMessage ? 'user1' : 'user2';
                message.classList.add(userClass);

                message.appendChild(messageText);
                conversation.querySelector('.messages').appendChild(message);
                messageInput.value = ''; // Clear the input after sending message
            }
        }
    });
});