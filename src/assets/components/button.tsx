import { useCount } from "../store/store";

export const Button = () => {
  const { count, increment } = useCount();
  return <button onClick={() => increment(count)}>{count}</button>;
};
