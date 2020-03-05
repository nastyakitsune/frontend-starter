import React from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const vendors = ["1", "2", "3"];
  return (
    <>
      <div>Dashboard</div>
      {vendors.map(vendorId => (
        <div key={vendorId}>
          <Link to={`/vendors/${vendorId}`}>Vendor id {vendorId}</Link>
        </div>
      ))}
    </>
  );
};
