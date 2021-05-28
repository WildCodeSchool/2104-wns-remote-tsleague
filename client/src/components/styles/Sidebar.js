import styled from 'styled-components';
import { colors } from './globals';

export const StyledSidebar = styled.div`
  position: fixed;
  width: 360px;
  height: 100vh;
  text-align: center;

  /* Colors */
  background-color: ${colors.primary};
  color: ${colors.white};

  h2 {
    text-transform: uppercase;
    margin: 10px 0;
  }

  h3 {
    margin: 10px 0;
  }

  img {
    width: 50%;
    height: 45%;
    border-radius: 50%;
  }

  .sidebar-container {
    height: 100vh;
    text-align: center;
    background-color: #137cbd;
    color: white;
  }

  .sidebar-btn {
    display: flex;
    justify-content: end;
  }
`;

export const StyledSidebarNotificationFeed = styled.div`
  width: 360px;
  padding-top: 20px;

  /* Colors */
  background-color: ${colors.secondary};
  color: ${colors.white};

  .notification-feed {
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-y: scroll;
    background-color: ${colors.white};

    div {
      height: 45vh;
    }
  }
`;

export const StyledNotificationItem = styled.span`
  margin: 10px 0;
  padding: 10px;

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

export const StyledIconRight = styled.span`
  display: block;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-right: 15px solid ${colors.white};
  border-bottom: 10px solid transparent;
  margin: 5px;
`;

export const StyledIconLeft = styled.span`
  display: block;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-left: 15px solid black;
  border-bottom: 10px solid transparent;
  margin: 5px;
`;
