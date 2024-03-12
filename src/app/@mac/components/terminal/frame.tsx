"use client";

// components
import { TopBar } from "./top-bar";
import { Input } from "@/components/ui/input";
// hooks
import { useState } from "react";
// utils
import { cn } from "@/lib/utils";
import { getResponse } from "./util";

type History = {
  command: string;
  response: string;
};

export const Frame = () => {
  const [command, setCommand] = useState("");
  const [histories, setHistories] = useState<History[]>([
    { command: "type `commands` to show all commands available", response: "" },
  ]);

  const sendCommand = (input: string) => {
    const response = getResponse(input.split(" "));
    setHistories([...histories, { command: input, response: response }]);
  };

  return (
    <div
      className={cn(
        "relative w-[680px] top-12 bg-gray5/80 backdrop-blur-lg max-w-screen-md rounded-lg overflow-hidden"
      )}
    >
      <TopBar />
      <div
        id={"response"}
        className={cn(
          "h-[400px] overflow-hidden overflow-y-scroll px-4 text-sm font-mono"
        )}
      >
        <div className={cn("py-1")}>
          {histories.map((history, index) => {
            return (
              <div key={`command-${index}`} className={cn("leading-snug")}>
                <div>
                  <span className={cn("text-green pr-2 font-semibold")}>
                    &gt;
                  </span>
                  {history.command}
                </div>
                <div dangerouslySetInnerHTML={{ __html: history.response }} />
                <br />
              </div>
            );
          })}
        </div>
        <div className={cn("pb-1 space-y-px font-semibold")}>
          <div className={cn("text-nowrap")}>~/dong</div>
          <div className={cn("flex space-x-2")}>
            <span className={cn("text-green")}>&gt;</span>
            <div className={cn("w-full")}>
              <Input
                autoFocus
                value={command}
                onKeyDown={(key) => {
                  if (key.code == "Enter") {
                    sendCommand(command);
                    setCommand("");
                    setTimeout(() => {
                      const response = document.getElementById("response");
                      if (response) {
                        response.scrollTop = response.scrollHeight - 400;
                      }
                    }, 1);
                  }
                }}
                onChange={(value) => setCommand(value.currentTarget.value)}
                className={cn(
                  "w-full h-max min-w-0 p-0 bg-transparent dark:bg-transparent border-0 rounded-none resize-none"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
