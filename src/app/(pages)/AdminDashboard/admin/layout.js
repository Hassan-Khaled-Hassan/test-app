import MyDrawer from "@/app/Utils/DrawerAdmin/MyDrawer";


export default function AdminDashboardLayout({ children }) {
  return (

      <main >
      <MyDrawer/>
        {children}
      </main>

  );
}