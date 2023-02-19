import { Outlet } from "@remix-run/react";

export const Outer = () => {
  return (<div>outer<Outlet/></div>)
}

export default Outer;