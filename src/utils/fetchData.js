export const fetchData = async (urls, config = {}) => {
  try {
    // Checks if an array of urls as been passed, otherwise, it will convert the single string into an
    // array of one index
    const urlsArray = Array.isArray(urls) ? urls : [urls];

    // Maps the urlArray to make a fetch with all the urls in the array.
    // inside the Promise.all method to await all promises to resolve, and return an array with the responses.
    const responses = await Promise.all(
      urlsArray.map((url) => fetch(url, config))
    );

    // Mapping though the responses to convert them to JS objects, with the same logic as above
    // If a response is not ok, it will throw with the url and status.
    const jsonData = await Promise.all(
      responses.map((response) => {
        if (!response.ok)
          throw new Error(
            `Request error on URL: ${response.url}: ${response.status}`
          );
        return response.json();
      })
    );

    return jsonData;
  } catch (err) {
    console.error("Error on fetchData function" + err);
  }
};
