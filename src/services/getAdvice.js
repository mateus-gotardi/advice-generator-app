import axios from 'axios'

const getAdvice = () => {
  return axios
    .get('https://api.adviceslip.com/advice', {
      params: {
        timestamp: new Date().getTime(),
      },
    })
    .then(({ data }) => data)
    .catch(() => '')
}
export default getAdvice