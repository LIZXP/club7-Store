import React from "react";
import shop_data from "../../shopdata.json";

function Shop() {
  return (
    <div>
      {shop_data.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
}

export default Shop;
