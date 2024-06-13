import React from "react";
import Numbers from "./Numbers";
import Operators from "./Operators";

export default function Buttons() {
  return (
    <div className="buttons">
      <Numbers></Numbers>
      <Operators></Operators>
    </div>
  );
}
