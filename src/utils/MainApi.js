const URL =
  "https://api.thecatapi.com/v1/images/search?limit=15&mime_types=&order=Random&size=small&page=2&category_ids=15&sub_id=demo-c0e1a4";

const checkStatusResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

export const getCats = () => {
  return fetch(URL, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      mode: "no-cors",
    },
  }).then(checkStatusResponse);
};
