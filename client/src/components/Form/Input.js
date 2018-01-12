import React from "react";

export const Input = props =>
  <div className="form-group" style={{ float: "center", width:500 }} >
    <input className="form-control" {...props} />
  </div>;
