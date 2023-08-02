import { FC } from "react";
import { Link } from "react-router-dom";
import { Destination } from "../models";

interface Props {
  title: string;
  inicialRoute: string;
  items: Destination[];
  className?: string;
}

const DropMenu: FC<Props> = ({ title, items, inicialRoute, className }) => {
  return (
    <li className={className??''}>{title}
      <ul>
        {items.map((item, index) => <Link to={`${inicialRoute}/${item.name}`} key={index}>{item.name}</Link>)}
      </ul>
    </li>
  )
} 

export default DropMenu;