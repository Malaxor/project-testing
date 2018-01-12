import React from "react";

export const TextArea = props =>
	  <div className="form-group" style={{ float: "center", width: 500 }} >
	    <textarea className="form-control" rows="5" {...props} />
	  </div>;
