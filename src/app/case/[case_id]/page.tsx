import React from "react";
import { caseData } from "@/data/court_cases_by_ai";
import Back from "@/components/Back";

export default async function CasePage({
  params,
}: {
  params: Promise<{ case_id: string }>;
}) {
  const { case_id } = await params;
  const caseDetails = caseData.find((item) => item.case_id === case_id);
  if (!caseDetails) {
    return <div>Case not found</div>;
  }
  return (
    <main className="bg-accent-foreground min-h-screen w-full">
      <section className="flex h-screen items-center justify-center">
        <div className="w-full">
          <div className="container mx-auto px-4">
            {/* Details */}
            <Back />
            <div className="mt-3 flex flex-col gap-3">
              <h1 className="mb-3 font-serif text-5xl font-bold text-amber-500">
                {caseDetails.case_title}
              </h1>
              <div className="flex items-center gap-5">
                <p className="rounded-full bg-amber-700 px-6 py-2 text-xs font-medium text-white">
                  {caseDetails.case_type}
                </p>
                <p className="rounded-full bg-amber-700 px-6 py-2 text-xs font-medium text-white">
                  {caseDetails.court.name}
                </p>
                <p className="rounded-full bg-amber-700 px-6 py-2 text-xs font-medium text-white">
                  {caseDetails.court.jurisdiction}
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 border-t-2 border-amber-500 pt-5">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-bold text-white">Summary</h2>
                    <h3 className="text-muted-foreground max-w-xl leading-loose font-medium">
                      {caseDetails.summary}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-bold text-white">Outcome</h2>
                    <h3 className="text-muted-foreground max-w-xl leading-loose font-medium">
                      {caseDetails.outcome}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-bold text-white">
                      Next Hearing
                    </h2>
                    <h3 className="text-muted-foreground max-w-xl leading-loose font-medium">
                      {caseDetails.next_hearing !== undefined
                        ? caseDetails.next_hearing
                        : "No upcoming hearings"}
                    </h3>
                    <h2 className="text-2xl font-bold text-white">Judge</h2>
                    <h3 className="text-muted-foreground max-w-xl leading-loose font-medium">
                      {caseDetails.judge}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
