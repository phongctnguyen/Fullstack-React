import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID NHBSsyb7apf4nSBNES7twDcJQrFLuBLFE-5iED3f-4U'
  }
});