import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magni
        repellat tempora, excepturi qui eius veritatis natus ex laudantium
        delectus deserunt quia dolorum cum harum aspernatur dolore laboriosam
        optio distinctio.
      </p>
      <p>
        Go to <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
}
