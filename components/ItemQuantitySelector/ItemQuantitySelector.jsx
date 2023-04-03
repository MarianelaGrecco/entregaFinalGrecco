import React, { useState } from "react";

function ItemQuantitySelector({onQuantityChange}) {
  const [cantidad, setCantidad] = useState(1);

  const handleCantidadChange = (event) => {
    const cantidad = parseInt(event.target.value);
    if (!isNaN(cantidad)) {
      setCantidad(cantidad);
      onQuantityChange(cantidad);
    }
    
  };

  return (
    <div>
      <button onClick={() => setCantidad(cantidad - 1)}>-</button>
      <input type="number" min="1" value={cantidad} onChange={handleCantidadChange} />
      <button onClick={() => setCantidad(cantidad + 1)}>+</button>
    </div>
  );
}

export default ItemQuantitySelector;

