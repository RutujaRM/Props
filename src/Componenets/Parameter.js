// 1)create function and passing parameter
function MyComponent(props) {
  console.log(props);

  function abcd() {}
  abcd();

  return;
  <button>{props.abcd}</button>;
}

export default MyComponent;
