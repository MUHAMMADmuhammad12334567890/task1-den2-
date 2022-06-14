import Header from "./Component/header-Component/Header";
import Main from "./Component/Main/Main";
import './app.css'
import logo1 from "../src/logo/1.jpg";
import logo2 from "../src/logo/2.jpg";
import logo3 from "../src/logo/3.jpg";
import logo4 from "../src/logo/4.jpg";
import logo5 from "../src/logo/5.jpg";
import logo6 from "../src/logo/6.jpg";
import Navbar from "./Component/Navbar/Navbar";

const mainData = {
  mainObject: [
    { image: logo1, price: 97000, oldPrice: 100000, name:'MacBook', button: "Купить" },
    { image: logo2, price: 35999, name:'Galaxy', button: "Купить" },
    { image: logo3, price: 58950, oldPrice: 65500, name:'Скутер', button: "Купить" },
    { image: logo4, price: 12000, name:'Монитор Samsung', button: "Купить" },
    { image: logo5, price: 500,  name:'Респераторная маска', button: "Купить" },
    { image: logo6, price: 75000, oldPrice: 100000, name:'Стиральная машина', button: "Купить" }
  ],
};
const App = () => {
  return (
    <>
      <Header />
      <div className="section">
        <Navbar />
        <Main data={mainData} />
      </div>
    </>
  );
};

export default App;
