import React, { useEffect, useState } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import { useSelector } from 'react-redux';
import socket from '../../socket';

import { State } from '../../redux/root-reducer';
import 'react-chat-widget/lib/styles.css';
import './chat.css';

type UserData = {
  lastname: string;
  firstname: string;
  avatar: string;
};

function Chat(): JSX.Element {
  const userData = useSelector((state: State) => state.user.userData);
  const [senderUserData, setSenderUserData] = useState<UserData>({
    firstname: '',
    lastname: '',
    avatar: '',
  });

  useEffect(() => {
    socket.on('newChatMessage', ({ newMessage = '', senderUser }) => {
      if (newMessage !== '') addResponseMessage(newMessage);
      setSenderUserData({
        ...senderUser,
        avatar: senderUser?.firstname
          ? `https://eu.ui-avatars.com/api/?background=random&name=${senderUser?.firstname}+${senderUser?.lastname}`
          : '',
      });
    });
  }, []);

  const handleNewUserMessage = (newMessage: string) => {
    socket.emit('sendChatMessage', {
      newMessage,
      classroomId: userData.classrooms[0].id,
      userData,
    });
  };

  console.log('avatar', senderUserData.avatar);

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="Chat de la classe"
      subtitle={userData.classrooms[0].name}
      senderPlaceHolder="Ecrire un message..."
      profileAvatar={senderUserData.avatar}
      emojis
    />
  );
}

export default Chat;
