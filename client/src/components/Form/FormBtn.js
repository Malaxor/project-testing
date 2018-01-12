import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ float: "center", width: 200, length: 200 }} className="btn btn-success">
    {props.children}
  </button>;
