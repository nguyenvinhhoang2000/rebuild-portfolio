/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";

import Magnetic from "@/components/Magnetic";

function Button({ children, type = "button" }) {
  return (
    <Magnetic>
      <button
        type={type}
        className="h-[200px] w-[200px] bg-primary-6 rounded-full"
      >
        {children}
      </button>
    </Magnetic>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

export default Button;
