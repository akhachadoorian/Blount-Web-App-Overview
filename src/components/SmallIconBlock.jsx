import React from "react";
import * as PIcons from "@phosphor-icons/react";

function SmallIconBlock({
  text,
  iconName,
  iconSide = "right",
  style = "fill",
}) {
  var IconComponent = PIcons[iconName];

  return (
    <div className={`small-icon-block ${style === "fill" ? "fill" : "outline"}`}>
      {iconSide === "right" ? (
        <>
          <h6>{text}</h6>
          <IconComponent size={40} />
        </>
      ) : (
        <>
          <IconComponent size={40} />
          <h6>{text}</h6>
        </>
      )}
    </div>
  );
}

export default SmallIconBlock;
