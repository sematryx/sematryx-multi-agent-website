import { Hero } from "@/components/hero";
import { PatternByTask } from "@/components/pattern-by-task";
import { Quickstart } from "@/components/quickstart";

export default function Home() {
  return (
    <>
      <Hero />
      <PatternByTask />
      <Quickstart />
    </>
  );
}
