import { FC, ReactNode } from "react"
import '../sass/components/Container.scss'

type ChildrenNode = ReactNode | ReactNode[]; 

interface Props {
  children: ChildrenNode;
  className?: string;
}

const Container: FC<Props> = ({ children, className }) => {
  return <div className={`${className??''} container`}>{children}</div>
}

export default Container;