import React from "react";
import PropTypes from "prop-types";

export const Vendor = ({
  match: {
    params: { vendorId }
  }
}) => {
  return <div>Vendor id: {vendorId}</div>;
};

Vendor.propTypes = {
  match: PropTypes.object
};
