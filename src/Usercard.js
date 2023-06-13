import React from "react";

const Usercard = ({ el }) => {
  return (
    <div style={{ borderStyle: "solid" }}>
      <p>{el.id}</p>
      <p>
        <b>Name:</b> {el.name}
      </p>
      <p>
        <b>user name:</b> {el.username}
      </p>
      <p>
        <b>street:</b> {el.address.street}
      </p>
      <p>
        <b>cuite:</b> {el.address.suite}
      </p>
      <p>
        <b>city:</b> {el.address.city}
      </p>
      <p>
        <b>zipcode:</b> {el.address.zipcode}
      </p>
      <p>
        <b>email</b> :{el.email}
      </p>
      <p>
        <b>phone:</b> {el.phone}
      </p>
      <p>
        <b>website:</b> {el.website}
      </p>
      <p>
        <b>company name:</b>
        {el.company.name}
      </p>
    </div>
  );
};

export default Usercard;
