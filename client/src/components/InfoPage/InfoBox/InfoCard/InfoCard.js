import React from "react";

import "./InfoCard.css";

export default function InfoCard({ name, count }) {
  return (
    <div className="InfoCard">
      <span>{name}</span>
      <span>{count}</span>
    </div>
  );
}
