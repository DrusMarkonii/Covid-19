import React from "react";

import "./InfoCard.css";

export function InfoCard({ name, count }) {
  return (
    <div className="InfoCard">
      <span>{name}</span>
      <span>{count}</span>
    </div>
  );
}
