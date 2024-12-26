import Image from "next/image";
import styles from "./page.module.css";
import MyHomeCategory from "./Components/categories/MyHomeCategory";
import HomePage from './Components/HomeSection/HomePage';
import HomePageOne from './Components/HomeSection/HomePageOne';
import MyHomeProduct from "./Components/Products/MyHomeProduct";
import MyHomeQuestions from "./Components/Questions/MyHomeQuestions";
import MyHomeClients from "./Components/Clients/MyHomeClients";

import MySignUp from "./Components/Stories/MySignUp";
import MyHomeCertificate from "./Components/Certificates/MyHomeClients";


export default function Home() {
  return (
    <div>
      <HomePage />
      <HomePageOne />
      <MyHomeProduct />
      <MySignUp/>
      <MyHomeCertificate/>
      <MyHomeClients/>
      <MyHomeQuestions/>
      <MyHomeCategory />
    </div>
  );
}
