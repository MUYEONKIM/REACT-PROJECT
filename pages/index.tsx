import { useState } from "react";
import LayoutHeader from "../src/components/commons/layout/header/header.index";

export default function Main(): JSX.Element {
  const [isMain] = useState(true);

  return (
    <>
      <LayoutHeader isMain={isMain} />
    </>
  );
}
