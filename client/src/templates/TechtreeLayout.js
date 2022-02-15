import React, { useState } from "react";
import Navigation from "../components/navigation/Navigation";

export default function TechtreeLayout({ children }) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Navigation />

      <main>{children}</main>
    </div>
  );
}
