export const fetchGet = () => {
     fetch("https://api.github.com/users/reedbarger")
      .then((response) => response.json())
};