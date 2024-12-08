import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };
    
    // Log the value of the environment variable to ensure it's correct
    console.log('Backend URL:', process.env.REACT_APP_BACKEND_URL);

    // Establish WebSocket connection using the environment variable
    return io(process.env.REACT_APP_BACKEND_URL, options);
};
