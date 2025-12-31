import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function About() {
  const [user, setUser] = useState("mario");

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="about">
      <h2>About us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        ducimus omnis neque libero. Amet perferendis sit unde eum, ut atque esse
        eius aperiam aliquid optio ducimus itaque, mollitia non ea!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum earum
        tempore dolores ex ea ratione assumenda facilis itaque, quo, labore
        dolor iusto corporis alias maxime quasi dolore maiores molestiae nihil?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        culpa. Suscipit eos fuga vero neque sint consequuntur magni fugit odit
        facilis eaque. Exercitationem eveniet molestias nisi atque maxime.
        Sapiente, dolorum.
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
