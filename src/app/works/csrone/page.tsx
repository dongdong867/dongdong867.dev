// components
import Image from "next/image";
import { CaseStudyTitle } from "@/components/case-study-title";
import { InviewTransition } from "@/components/inview-transition";
// utils
import { cn } from "@/lib/utils";

const CSRonePage = () => (
  <div>
    <CaseStudyTitle title="CSRone" label="NLP/ LLM Research" />

    <div
      className={cn(
        "m-auto h-[40dvh] w-3/4 space-y-2 text-center md:w-full",
        "flex flex-col place-items-center justify-center"
      )}
    >
      <div className={cn("text-xl text-gray md:text-2xl")}>
        Optimizing workflow with the power of
      </div>
      <div className={cn("font-medium max-md:hidden md:text-5xl")}>
        Large Language Model
      </div>
      <div className={cn("text-5xl font-medium md:hidden")}>LLM</div>
    </div>

    <div
      className={cn(
        "h-[40dvh] min-h-[240px] w-full md:w-5/6",
        "m-auto flex place-items-center bg-gray5"
      )}
    >
      <Image
        src={"/projects/csrone.png"}
        alt=""
        width={200}
        height={200}
        className={cn("m-auto drop-shadow-2xl")}
      />
    </div>

    <div className={cn("h-[10dvh]")} />

    <div className={cn("m-auto w-full md:w-5/6")}>
      <div
        className={cn(
          "w-5/6 space-y-20 max-md:m-auto md:ml-20 md:max-w-[800px]"
        )}
      >
        <InviewTransition className={cn("text-pretty text-2xl md:text-3xl")}>
          We analyze companies&apos; CSR reports and
          <br className={cn("max-md:hidden")} /> make effort to build an ESG
          database in Taiwan.
        </InviewTransition>

        <div
          className={cn(
            "space-y-4 text-pretty max-md:text-sm md:w-11/12 lg:text-lg"
          )}
        >
          <div>
            CSR has gained significant importance as stakeholders prioritize
            ethical, social, and environmental factors when evaluating
            companies. However, manually analyzing extensive CSR reports to
            extract key information can be laborious.
          </div>
          <div>
            Our research intends to explore the utilization of large language
            models, to automate the analysis of CSR reports. By leveraging the
            capabilities of NLP and LLMs, we aim to efficiently extract key
            insights from CSR reports and generate concise summaries regarding
            the disclosure of CSR indices.
          </div>
        </div>
      </div>
    </div>

    <div className={cn("h-[10dvh]")} />
  </div>
);

export default CSRonePage;
