import axios from 'axios';

export default axios.create({
    baseURL: 'https://3946-171-7-83-224.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});