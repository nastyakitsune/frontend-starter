import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { Vendor } from "./Vendor";
import { NotFound } from "./NotFound";

export const pages = () => [
  { path: "/", exact: true, component: Login },
  { path: "/dashboard", exact: true, component: Dashboard },
  { path: "/vendors/:vendorId", exact: true, component: Vendor },
  { component: NotFound }
];
