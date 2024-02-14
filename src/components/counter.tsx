import { useState } from "react";
export function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <section>
      <h4>Counter</h4>
      <div className="counter-section">
        <div>
          <span>{count}</span>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
    </section>
  );
}
