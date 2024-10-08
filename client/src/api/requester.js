async function requester(method, url, data, token) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    options.headers["X-Authorization"] = token;
  }
  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  //make error handling

  const text = await response.text();
  return text ? JSON.parse(text) : {};
}

export const get = requester.bind(null, "GET");
export const post = requester.bind(null, "POST");
export const put = requester.bind(null, "PUT");
export const patch = requester.bind(null, "PATCH");
export const del = requester.bind(null, "DELETE");
