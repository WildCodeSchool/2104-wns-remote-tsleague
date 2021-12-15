import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

function Chat(): JSX.Element {
  useEffect(() => {
    addResponseMessage('Welcome to this **awesome** chat!');
  }, []);
  const handleNewUserMessage = (newMessage: string) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage('response');
  };
  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="My new awesome title"
      subtitle="And my cool subtitle"
    />
  );
}

export default Chat;
