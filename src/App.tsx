import "./App.css";
import axios from "axios";

function App() {
  const options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    params: { q: "emi" },
    headers: {
      "X-RapidAPI-Key": "ce8236a612msh73c5ac845457f7ep138b86jsn7266a9a63bc4",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  const fetchSongs = async () => {
    const res = await axios.request(options);
    console.log(res);
  };
  fetchSongs();
  return (
    <div className="App">
      <h1 className="text-red-500">Hello World</h1>
    </div>
  );
}

export default App;
