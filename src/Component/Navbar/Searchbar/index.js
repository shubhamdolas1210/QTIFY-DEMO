import Menu from "../../Menu";
import axios from "axios";
import { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "./Search icon.svg";

const ENDPOINT = "https://qtify-backend-labs.crio.do/";

export default () => {
  const [TopAlbum, setTopAlbum] = useState([]);
  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then(({ data }) => {
      setTopAlbum(data);
    });
  }, []);
  return (
    <div
      style={{
        position: "relavtive",
      }}
    >
      <form
        style={{
          display: "flex",
          minWidth: "570px",
        }}
      >
        <input
          placeholder="Search an album of your choice"
          style={{
            flex: 1,
            borderRadius: "8px 0px 0px 8px",
            padding: "8px",
          }}
        />
        <button
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
      <Menu data={TopAlbum} />
    </div>
  );
};
