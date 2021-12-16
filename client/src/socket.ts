import { io } from 'socket.io-client';
// eslint-disable-next-line import/no-cycle

const socket =
  process.env.NODE_ENV === 'development'
    ? io('http://localhost:4000', { autoConnect: false })
    : io({ autoConnect: false });

export default socket;
