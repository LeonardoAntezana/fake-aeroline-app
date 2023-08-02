import { FC } from "react";
import { NavLink as RouterLink } from "react-router-dom";

interface Props {
  route: string;
  activeClass?: string;
  className?: string;
}

const NavLink: FC<Props> = ({ route, activeClass, className }) => {
  return (
    <RouterLink to={route} className={({ isActive }) => isActive ? activeClass : className}/>
  )
}


export default NavLink;