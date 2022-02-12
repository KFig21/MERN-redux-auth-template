import React from "react";
import { useSelector } from "react-redux";
import SC from "../../themes/StyledComponents";

export default function Home() {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <div>
      <SC.textOnBgColor>{user.username}</SC.textOnBgColor>
    </div>
  );
}
