import MyHomeCategory from "./Components/categories/MyHomeCategory";
import HomePage from './Components/HomeSection/HomePage';
import HomePageOne from './Components/HomeSection/HomePageOne';
import MyHomeQuestions from "./Components/Questions/MyHomeQuestions";
import MyHomeClients from "./Components/Clients/MyHomeClients";
import MySignUp from "./Components/Stories/MySignUp";
import MyHomeCertificate from "./Components/Certificates/MyHomeClients";
import MyHomeProducts from "./Components/ProductV2/MyHomeProducts";



export default function Home() {
  return (
    <div>
      <HomePage />
      <HomePageOne />
      <MyHomeProducts />
      <MySignUp/>
      <MyHomeCertificate/>
      <MyHomeClients/>
      <MyHomeQuestions/>
      <MyHomeCategory />
    </div>
  );
}
