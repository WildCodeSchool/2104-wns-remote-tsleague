import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import { useSelector } from 'react-redux';
import socket from '../../socket';

import { State } from '../../redux/root-reducer';

import 'react-chat-widget/lib/styles.css';
import './chat.css';

function Chat(): JSX.Element {
  const userData = useSelector((state: State) => state.user.userData);

  useEffect(() => {
    socket.on('newChatMessage', (newMessage: string) => {
      addResponseMessage(newMessage);
    });
  }, []);

  const handleNewUserMessage = (newMessage: string) => {
    socket.emit('sendChatMessage', {
      newMessage,
      classroomId: userData.classrooms[0].id,
      userData,
    });
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="Chat de la classe"
      subtitle={userData.classrooms[0].id}
      senderPlaceHolder="Ecrire un message..."
      profileAvatar="coucou"
      emojis
    />
  );
}

export default Chat;
