export function formatApiData(data) {
  fetch("../package.json")
    .then((response) => response.json())
    .then((json) => console.log(json));
  return data;
}
