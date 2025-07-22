import { useCallback, useState } from "react";
import * as React from "react";

/**
 * 组件为何仍重新渲染
 */

export const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => setCount((c) => c + 1), []);
  return (
    <>
      <p>{count}</p>
      <Child onClick={handleClick} />
    </>
  );
};

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child render");
  return <button onClick={onClick}>Click</button>;
});
