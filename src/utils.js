function requestToApi(url, requestOptions) {
  return new Promise((resolve, reject) => {
    fetch(url, requestOptions)
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          reject(error);
        }

        resolve(data);
      })
      .catch((error) => {
        reject(error.message);
      });
  });
}

export { requestToApi };
