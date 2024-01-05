import Menu from "../../Menu";
import axios from "axios";
import { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "./Search icon.svg";

const ENDPOINT = "https://qtify-backend-labs.crio.do/";

export default () => {
  const [TopAlbum, setTopAlbum] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then(({ data }) => {
      setTopAlbum(data);
    });
  }, []);

  const handleInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setInput(inputValue);
  };

  // Filter the TopAlbum based on input
  const filteredAlbums = TopAlbum.filter((album) =>
    album.title.toLowerCase().includes(input)
  );

  return (
    <div style={{ position: "relative" }}>
      <form
        onSubmit={(e) => e.preventDefault()} // Prevent form submission
        style={{ display: "flex", minWidth: "570px" }}
      >
        <input
          placeholder="Search an album of your choice"
          value={input}
          onChange={handleInputChange}
          style={{
            flex: 1,
            borderRadius: "8px 0px 0px 8px",
            padding: "8px",
          }}
        />
        <button
          type="submit"
          style={{
            width: "66px",
            height: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0px 8px 8px 0px",
            padding: "8px",
          }}
        >
          <SearchIcon />
        </button>
      </form>
      {input && <Menu data={filteredAlbums} />}
    </div>
  );
};
