// components
import Image from "next/image";
import { CaseStudyTitle } from "@/components/case-study-title";
import { InviewTransition } from "@/components/inview-transition";
// utils
import { cn } from "@/lib/utils";

const CSRonePage = () => (
  <div className={cn("w-full md:w-4/5 m-auto")}>
    <CaseStudyTitle title="CSRone" label="NLP/ LLM Research" />

    <div
      className={cn(
        "w-3/4 md:w-full h-[40dvh] m-auto space-y-2 text-center",
        "flex flex-col justify-center place-items-center"
      )}
    >
      <div className={cn("text-xl md:text-2xl text-gray")}>
        Optimizing workflow with the power of
      </div>
      <div className={cn("md:text-5xl font-medium max-md:hidden")}>
        Large Language Model
      </div>
      <div className={cn("text-5xl font-medium md:hidden")}>LLM</div>
    </div>

    <div className="w-full h-[40dvh] min-h-[240px] bg-gray5 flex place-items-center">
      <Image
        src={"/projects/csrone.png"}
        alt=""
        width={200}
        height={200}
        className={cn("m-auto drop-shadow-2xl")}
      />
    </div>

    <div className={cn("h-[10dvh]")} />

    <div
      className={cn(
        "w-5/6 md:w-full md:max-w-[800px] max-md:m-auto space-y-20"
      )}
    >
      <InviewTransition className={cn("text-pretty text-2xl md:text-3xl")}>
        We analyze companies' CSR reports and
        <br className={cn("max-md:hidden")} /> make effort to build an ESG
        database in Taiwan.
      </InviewTransition>

      <div
        className={cn(
          "md:w-11/12 max-md:text-sm lg:text-lg text-pretty space-y-4"
        )}
      >
        <div>
          CSR has gained significant importance as stakeholders prioritize
          ethical, social, and environmental factors when evaluating companies.
          However, manually analyzing extensive CSR reports to extract key
          information can be laborious.
        </div>
        <div>
          Our research intends to explore the utilization of large language
          models, to automate the analysis of CSR reports. By leveraging the
          capabilities of NLP and LLMs , we aim to efficiently extract key
          insights from CSR reports and generate concise summaries regarding the
          disclosure of CSR indices.
        </div>
      </div>
    </div>

    <div className={cn("h-[10dvh]")} />
  </div>
);

export default CSRonePage;
