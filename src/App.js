import "./styles.css";
import MyComponent from "./Componenets/Parameter";
import { Add, Sub } from "./Componenets/Arithmetic";
import Style from "./Componenets/Styling";
export default function App() {
  const arr = [10, 4, 5, 8, 9, 6, 1, 2]; //array created
  const obj = { val: 5, name: "Rutuja", number: 88888, some: "array v" }; //object created
  return (
    <div className="App">
      <h1>We learn Props thats means parameter ans arguments </h1>
      {/*Here we pass value(Argument) to vaiable and that variable holds that value and assign to paramter variable  */}
      <MyComponent value="Hii Rutuja" />

      {/*Here we pass argument as an variable that holds value */}
      <MyComponent array={arr} />

      {/*Here by using variable we send value into parameter */}
      <Add val="10" />
      <Sub val2={obj} />

      <Style />
    </div>
  );
}
