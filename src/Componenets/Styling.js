import "./Styling.css"; //here we use external css

const Style = () => {
  const a = {
    //here we are using inline style
    backgroundColor: "violet",
    color: "white"
  };

  return (
    <div>
      {/* Here we use external CSS*/}
      <h3>What else you want tot talk </h3>

      {/*here we use inline css using style as an attribute also double brakcet required{{}} */}
      <h1 style={{ backgroundColor: "green", color: "crimson" }}>
        Hii I am Rutuja Ramesh Mashere{" "}
      </h1>

      {/*this is inline style using variable so,style store in variable */}
      <h3 style={a}>Hello how are you </h3>
      {""}
    </div>
  );
};

export default Style;
