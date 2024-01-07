function MenuItem({ imgSrc, followerCount, label, artistName }) {
  return (
    <div
      style={{
        display: "flex",
        height: "100px",
        width: "100%",
        padding: "10px",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "80px",
          overflow: "hidden",
          objectfit: "cover",
          borderRadius: "10px",
        }}
      >
        <img src={imgSrc} alt="img not showing" />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "#fff",
          padding: "8px",
        }}
      >
        <p>{label}</p>
        <p
          style={{
            fontSize: "10px",
          }}
        >
          <p>{artistName}</p>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "200px",
          height: "100%",
          color: "#fff",
          padding: "8px",
        }}
      >
        {followerCount} follows
      </div>
    </div>
  );
}

export default ({ data }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "570px",
        maxHeight: "500px",
        overflowY: "auto",
        top: "60px",
        backgroundColor: "black",
        borderRadius: "2px 8px 8px 8px",
        zIndex: "10",
      }}
    >
      {data.map((cardData) => (
        <MenuItem
          imgSrc={cardData.image}
          label={cardData.title}
          followerCount={cardData.follows}
          artistName={cardData.songs
            .reduce((allArtists, song) => [...allArtists, ...song.artists], [])
            .slice(0, 2)
            .join(", ")}
        />
      ))}
      ;
    </div>
  );
};
