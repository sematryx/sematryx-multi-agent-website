import { Hero } from "@/components/hero";
import { WhatItIs } from "@/components/what-it-is";
import { WhatItIsNot } from "@/components/what-it-is-not";
import { PatternByTask } from "@/components/pattern-by-task";
import { AdversarialDebateSection } from "@/components/adversarial-debate";
import { BenchmarksRationale } from "@/components/benchmarks-rationale";
import { ExamplesGallery } from "@/components/examples-gallery";
import { DesignPrinciples } from "@/components/design-principles";
import { ApiExample } from "@/components/api-example";
import { DocsRoadmap } from "@/components/docs-roadmap";
import { Roadmap } from "@/components/roadmap";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatItIs />
      <WhatItIsNot />
      <PatternByTask />
      <AdversarialDebateSection />
      <BenchmarksRationale />
      <ExamplesGallery />
      <DesignPrinciples />
      <ApiExample />
      <DocsRoadmap />
      <Roadmap />
    </>
  );
}
