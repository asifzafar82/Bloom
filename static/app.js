* { box-sizing: border-box; margin: 0; padding: 0; }

body {
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #fce4ec, #f8bbd0);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.header {
    text-align: center;
    margin-bottom: 20px;
}

.header h1 {
    color: #880e4f;
    font-size: 24px;
}

.header p {
    color: #ad1457;
    font-size: 14px;
    margin-top: 5px;
}

.stage-selector {
    background: white;
    border-radius: 16px;
    padding: 16px;
    width: 100%;
    max-width: 480px;
    margin-bottom: 16px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.stage-selector label {
    display: block;
    color: #880e4f;
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 14px;
}

.stage-selector select {
    width: 100%;
    padding: 10px;
    border: 2px solid #f48fb1;
    border-radius: 10px;
    color: #333;
    font-size: 14px;
    background: white;
}

.mood-selector {
    background: white;
    border-radius: 16px;
    padding: 16px;
    width: 100%;
    max-width: 480px;
    margin-bottom: 16px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.mood-selector label {
    display: block;
    color: #880e4f;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 14px;
}

.mood-buttons {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.mood-btn {
    padding: 8px 14px;
    border: 2px solid #f48fb1;
    border-radius: 20px;
    background: white;
    color: #ad1457;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.2s;
}

.mood-btn.selected {
    background: #e91e8c;
    color: white;
    border-color: #e91e8c;
}

.chat-container {
    background: white;
    border-radius: 20px;
    width: 100%;
    max-width: 480px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    height: 420px;
}

.chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.message {
    max-width: 80%;
    padding: 12px 16px;
    border-radius: 18px;
    font-size: 14px;
    line-height: 1.5;
}

.message.bot {
    background: #fce4ec;
    color: #333;
    align-self: flex-start;
    border-bottom-left-radius: 4px;
}

.message.user {
    background: #e91e8c;
    color: white;
    align-self: flex-end;
    border-bottom-right-radius: 4px;
}

.chat-input {
    display: flex;
    padding: 12px;
    border-top: 1px solid #f8bbd0;
    gap: 8px;
}

.chat-input input {
    flex: 1;
    padding: 10px 14px;
    border: 2px solid #f48fb1;
    border-radius: 20px;
    font-size: 14px;
    outline: none;
}

.chat-input input:focus {
    border-color: #e91e8c;
}

.chat-input button {
    background: #e91e8c;
    color: white;
    border: none;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    font-size: 18px;
    cursor: pointer;
}

.typing {
    color: #ad1457;
    font-size: 13px;
    font-style: italic;
    padding: 0 16px 8px;
}
