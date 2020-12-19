import axios from 'axios';

const BASEURL = 'https://randomuser.me/api/?results=40';

export default {
  randomEmployees: function () {
    return axios.get(BASEURL);
  },
};
