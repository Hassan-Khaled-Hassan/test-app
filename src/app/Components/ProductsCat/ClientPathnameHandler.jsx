"use client"; // Mark this as a client component
import MyHomeProduct from "@/app/Components/aboutIntro/MyHomeProduct";
import { usePathname } from "next/navigation";

const ClientPathnameHandler = ({ selectedCategory }) => {
  const pathname = usePathname(); // Dynamically updates when navigating

  return (
    <>
      {pathname === "/Products" ? (
        <MyHomeProduct
          home={{ label: "Home", href: "/" }}
          Categories={{ label: "Products" }}
          name={"Our Products"}
        />
      ) : (
        <MyHomeProduct
          home={{ label: "Home", href: "/" }}
          products={{ label: "Products", href: "/Products" }}
          Category={{ label: "Category", href: "#" }}
          Categories={{
            label: selectedCategory?.name || "Category name Not Found",
          }}
          name={"Our Products"}
        />
      )}
    </>
  );
};

export default ClientPathnameHandler;
