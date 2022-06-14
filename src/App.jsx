import Header from "./Component/header-Component/Header";
import Main from "./Component/Main/Main";
import './app.css'
import logo1 from "../src/logo/1.jpg";
import logo2 from "../src/logo/2.jpg";
import logo3 from "../src/logo/3.jpg";
import logo4 from "../src/logo/4.jpg";
import logo5 from "../src/logo/5.jpg";
import logo6 from "../src/logo/6.jpg";
import logo7 from "../src/logo/7.jpg";
import logo8 from "../src/logo/8.jpg";
import logo9 from "../src/logo/9.jpg";
import Navbar from "./Component/Navbar/Navbar";

const mainData = {
  mainObject: [
    {id: 1, image: logo1, name:'MacBook', price: 100000, left: 31},
    {id: 2, image: logo2, name:'Galaxy', price: 35999, left: 11 },
    {id: 3, image: logo3, name:'Скутер', price: 65500, oldPrice: 65500,  left: 0},
    {id: 4, image: logo4, name:'Монитор Samsung',  price: 12000, left: 7 },
    {id: 5, image: logo5, name:'Респераторная маска', price: 500, left: 24  },
    {id: 6, image: logo6,  name:'Стиральная машина', price: 100000, left: 0 },
    {id: 7, image: logo7,  name:'Белый холодильник', price: 43100, left: 18 },
    {id: 8, image: logo8,  name:'Колонка', price: 3000, left: 1 },
    {id: 9, image: logo9, name: 'Наушники', price:1500, left: 5}
    
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
