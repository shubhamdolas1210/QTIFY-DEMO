function MenuItem() {
  return (
    <div
      style={{
        display: "flex",
        height: "120px",
        width: "100%",
        border: "2px solid blue",
      }}
    >
      <div
        style={{
          width: "120px",
          height: "120px",
          border: "2px solid yellow",
        }}
      ></div>
      <div
        style={{
          flex: 1,
          border: "2px solid orange",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <p>Album text</p>
        <p
          style={{
            fontSize: "8px",
          }}
        >
          Album lettterr aplha bet
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "200px",
          height: "100%",
          border: "2px solid yellow",
          color: "#fff",
        }}
      >
        100 followers
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
        border: "5px solid red",
        overflowY: "auto",
        top: "60px",
        backgroundColor: "black",
      }}
    >
      {data.map((n) => (
        <MenuItem />
      ))}
      ;
    </div>
  );
};
