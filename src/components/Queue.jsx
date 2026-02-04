// Icons
import { Trello } from "lucide-react";

// Queue Bar Component
export default function Queue() {
  return (
    <div className="fixed top-0 w-full h-10 flex justify-center items-center bg-indigo-950">
      <span>
        <a
          href="https://trello.com/b/c6tp1wzN/amethyst-derg"
          className="flex items-center gap-1 text-gray-300 hover:text-white cursor-pointer"
        >
          <Trello alt="Trello Queue Icon" />
          View my commission queue here!
        </a>
      </span>
    </div>
  );
}
