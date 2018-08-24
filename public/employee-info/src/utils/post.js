import axios from 'axios';

const post = async (url, params) => {
  const {data} = await axios.post(url, params);
  return data
}

export default post;