"use server";
import MyHomeProduct from "@/app/Components/aboutIntro/MyHomeProduct";
import MySignUp from "@/app/Components/AllStories/MySignUp";
import MyHomeBlogsAll from "@/app/Components/categories/all/MyHomeBlogsAll";

export default async function Page() {
  return (
    <div>
      <MyHomeProduct
        home={{ label: "Home", href: "/" }}
        Blogs={{ label: "Success Stories" }}
        name={"Success Stories"}
      />
      <MySignUp
        type="row"
        paragraph="Siwa Garden’s factory, situated on the Alex Desert Road near Dina Farms, boasts an advanced processing facility built to top food industry standards. Featuring a cutting-edge laboratory for continuous innovation and rigorous quality control, the factory has a current capacity of 10,000 tons of table olives, with plans to increase to 15,000 tons by 2025. This positions Siwa Garden as a leading producer of olive oil and canned foods, committed to high quality and professional service at competitive costs."
        MyImage = "https://res.cloudinary.com/dyunrntg7/image/upload/v1735564848/pexels-photo-6231906_qrnuxl.jpg"
        />
      <MySignUp
        type="row-reverse"
        paragraph="The Head Office of Siwa Garden is a testament to our commitment to excellence and innovation. Located at villa202-first neighborhood - seventh district - sheikh zayed, our head office not only serves as the nerve center for our operations but also stands as a symbol of our company's growth and ambition. From this modern facility, we oversee the production and distribution of high-quality olive oil and canned foods, ensuring that every product meets the high standards of the food industry."
        MyImage = "https://res.cloudinary.com/dyunrntg7/image/upload/v1735564848/pexels-photo-6231906_qrnuxl.jpg"
        />
    </div>
  );
}
