import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './Slices/SignUpSlice';
import { UserReducer } from './Slices/UserSlice';
import { CategoryReducer } from './Slices/CategorySlice';
import { ClientTypeReducer } from "./Slices/ClientTypeSlice";
import { ClientsReducer } from "./Slices/CLientsSlice";
import { CertificateReducer } from "./Slices/CertificateSlice";
import { BlogsReducer } from "./Slices/BlogsSlice";
import { ProductsReducer } from "./Slices/ProductsSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: UserReducer,
    Category: CategoryReducer,
    ClientType: ClientTypeReducer,
    Clients: ClientsReducer,
    Certificates: CertificateReducer,
    Blogs: BlogsReducer,
    Products : ProductsReducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit'

// export const makeStore = () => {
//   return configureStore({
//     reducer: {}
//   })
// }