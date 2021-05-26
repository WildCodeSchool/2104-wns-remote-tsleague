import styled from 'styled-components';
import { colors } from './globals';

export const SidebarContainer = styled.div`
  position: fixed;
  width: 360px;
  height: '100vh',
  textAlign: 'center',

  /* Colors */
  background-color: ${colors.primary};
  color: ${colors.white};

  h2{
    text-transform: uppercase;
        margin: 10px 0;

  }

    h3{
    margin: 10px 0;
  }

  img{
    width: 50%;
    height: 45%;
    border-radius: 50%;
  }
`;

export const SidebarNotificationFeed = styled.div`
  width: 360px;
  padding: 20px 0;

  /* Colors */
  background-color: ${colors.secondary};
  color: ${colors.white};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: scroll;
    height: 45vh;
  }
`;

export const NotificationItem = styled.span`
  margin: 10px 0;
  padding: 30px;

  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  /* Colors */
  background-color: ${colors.primary};
  color: #fff;

  /* Rounded border */
  border-radius: 10px;
  height: 30px;
  width: 200px;

  p {
  }
`;

export const IconRight = styled.span`
  display: block;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-right: 15px solid ${colors.white};
  border-bottom: 10px solid transparent;
  margin: 5px;
`;

export const IconLeft = styled.span`
  display: block;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-left: 15px solid black;
  border-bottom: 10px solid transparent;
  margin: 5px;
`;
