import { useState, useEffect } from "react";

const App = () => {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    async function fetchAvatar() {
      /* 
	    Note that because the function passed to useEffect cannot be async, we must create a separate function for our promise to be resolved in (fetchAvatar)
    */
      const response = await fetch("https://api.github.com/users/volta2016");
      const data = await response.json();
      setAvatar(data.avatar_url);
    }
    fetchAvatar();
  }, []);

  return <img src={avatar} alt="volta2016" />;
};

export default App;
