import API from './API';

const getData = async () => {
  return new Promise((resolve, reject) => {
    try {
      API.get('')
        .then(response => {
          if (response.status !== 200) {
            throw response.data;
          } else {
            const { data } = response;
            resolve(data.results);
          }
        })
        .catch(error => {
          reject(error);
        });
    } catch (e) {
      reject(e);
    }
  });
};

export default getData;
