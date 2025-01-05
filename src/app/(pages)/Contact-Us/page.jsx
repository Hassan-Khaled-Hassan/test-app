"use server"
import MyHomeProduct from "@/app/Components/aboutIntro/MyHomeProduct";
import SignInSide from "@/app/Components/ContactUs/SignInSide";

export default async function Page() {
  return (
    <div>
      <MyHomeProduct
        home={{ label: "Home", href: "/" }}
        Categories={{ label: "Contact Us" }}
        name={"Contact Us"}
      />
      <SignInSide/>
    </div>
  );
}
