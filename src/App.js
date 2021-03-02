import "./styles.css";
import { useEffect, useState } from "react";
import { Map } from "./components/Map";
import { Filter } from "./components/Filter";
import { Reduce } from "./components/Reduce";
import { Twitch } from "./components/EsModules"

export default function App() {
  const programers = ["Robert", "Joe", "Jane"];
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/volta2016")
      .then((response) => response.json())
      .then((data) => setAvatar(data.avatar_url))
      .catch((error) => console.log("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <h1>skills-you-need-for-react-practical-examples</h1>

      <Map data={programers}></Map>
      <Filter data={programers}></Filter>
      <Reduce data={programers}></Reduce>
      <img src={avatar} alt="volta2016" />
      <Twitch></Twitch>
    </div>
  );
}
