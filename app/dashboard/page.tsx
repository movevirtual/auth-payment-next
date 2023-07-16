"use client";
import React from "react";
import Dropzone from "react-dropzone";

function page() {
  return (
    <div className="max-w-5xl mx-auto py-10 lg:py-20 px-10 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-y-5 items-center justify-between gap-x-7">
        <div className="p-5 w-full border border-slate-400/20 dark:border-zinc-200/10 rounded-md flex flex-col gap-y-2">
          <h3 className="text-base font-medium">Draft</h3>
          <p className="text-xl font-bold text-primary">2</p>
        </div>
        <div className="p-5 w-full border border-slate-400/20 dark:border-zinc-200/10 rounded-md flex flex-col gap-y-2">
          <h3 className="text-base font-medium">Draft</h3>
          <p className="text-xl font-bold text-primary">2</p>
        </div>
        <div className="p-5 w-full border border-slate-400/20 dark:border-zinc-200/10 rounded-md flex flex-col gap-y-2">
          <h3 className="text-base font-medium">Draft</h3>
          <p className="text-xl font-bold text-primary">1</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 pt-10">
        <h2 className=" text-primary font-medium text-lg">
          Please upload your PDF
        </h2>
        <div>
          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section className="p-20 w-full border border-dashed flex items-center justify-center">
                <div className="" {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p className="text-slate-500/50">
                    Drag 'n' drop some files here, or click to select files
                  </p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
      </div>
    </div>
  );
}

export default page;
