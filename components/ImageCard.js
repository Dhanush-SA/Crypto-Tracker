import React from "react";

const ImageCard = (props) => {
  return (
    <div className="p-2">
      <div class="card pt-3" style={{ width: 300 }}>
        <div className="justify-conter-center">
          <img src={props.image} alt={props.name} width="80" height="80" />
        </div>
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p>Price: {`$${props.current_price}`}</p>
          <p>Rank: {`#${props.market_cap_rank}`}</p>
          <p>Market Cap: {`$${props.market_cap}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
