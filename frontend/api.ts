import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.124.113:3000', // <-- เปลี่ยน IP ให้ตรงกับของเครื่องคุณ
});

export default api;
