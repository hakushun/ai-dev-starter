import { Link } from "@tanstack/react-router";
import { Counter } from "../components/Counter";

export function IndexPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <nav className="mb-8 flex gap-4">
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-blue-600 hover:underline">
          About
        </Link>
      </nav>
      <h1 className="mb-4 text-2xl font-bold">Home</h1>
      <Counter />
    </div>
  );
}
