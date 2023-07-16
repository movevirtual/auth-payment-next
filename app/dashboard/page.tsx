"use client";
import React from "react";
import Dropzone from "react-dropzone";
import { FilePlus } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { Users2 } from "lucide-react";
import { GitPullRequestDraft } from "lucide-react";

function page() {
  return (
    <div className="max-w-5xl mx-auto py-10 lg:py-20 px-10 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-y-5 items-center justify-between gap-x-7">
        <div className="p-5 w-full border border-slate-400/20 dark:border-zinc-200/10 rounded-sm flex flex-col gap-y-2">
          {" "}
          <div className="flex items-center gap-x-1">
            <GitPullRequestDraft className="h-5 w-5 text-green-500" />
            <h3 className="text-base font-medium">Draft</h3>
          </div>
          <p className="text-2xl font-bold text-primary">2</p>
        </div>
        <div className="p-5 w-full border border-slate-400/20 dark:border-zinc-200/10 rounded-sm flex flex-col gap-y-2">
          <div className="flex items-center gap-x-1">
            <Users2 className="h-5 w-5 text-green-500" />
            <h3 className="text-base font-medium">Waiting</h3>
          </div>
          <p className="text-2xl font-bold text-primary">2</p>
        </div>
        <div className="p-5 w-full border border-slate-400/20 dark:border-zinc-200/10 rounded-sm flex flex-col gap-y-2">
          <div className="flex items-center gap-x-1">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <h3 className="text-base font-medium">Completed</h3>
          </div>
          <p className="text-2xl font-bold text-primary">1</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 pt-10">
        <h2 className=" text-primary font-medium text-lg">
          Please upload your PDF 👇🏼
        </h2>
        <div>
          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <div>
                <section className="p-20 w-full border border-dashed hover:border-green-500 flex items-center justify-center cursor-pointer">
                  <div
                    className="flex flex-col gap-y-2 items-center justify-center"
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    <FilePlus className="h-10 w-10 font-medium text-slate-500/50" />
                    <p className="text-slate-500/50">
                      Upload a new PDF document
                    </p>
                  </div>
                </section>
                <p className="text-xs pt-1 text-red-500 font-semibold">
                  Only PDF files are allowed ✔
                </p>
              </div>
            )}
          </Dropzone>
        </div>
      </div>
    </div>
  );
}

export default page;
