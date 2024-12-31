import "./globals.css";
import MyFooter from "./Utils/MyFooter";
import Navbars from "./Utils/Navbars";
import { DrawerProvider } from "./Utils/DrawerContext";
import MiniDrawer from "./Utils/DrawerPatient/MyDrawer";
import MtThemes from "./Utils/MtThemes";


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


export const metadata = {
  title: "Siwa Garden",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MtThemes>
          <DrawerProvider>
            <Navbars />
            <MiniDrawer />
            {children}
            <MyFooter />
          </DrawerProvider>
        </MtThemes>
      </body>
    </html>
  );
}
