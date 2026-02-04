import { useAtom } from "jotai";
import { counterAtom } from "../store/counterAtom";

export function Counter() {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <p className="mb-2 text-sm text-gray-600">Counter (Jotai)</p>
      <div className="flex items-center gap-4">
        <button type="button" onClick={() => setCount((c) => c - 1)} className="rounded bg-gray-200 px-3 py-1 hover:bg-gray-300">
          −
        </button>
        <span className="font-mono text-lg">{count}</span>
        <button type="button" onClick={() => setCount((c) => c + 1)} className="rounded bg-gray-200 px-3 py-1 hover:bg-gray-300">
          +
        </button>
      </div>
    </div>
  );
}
