import React, { ReactNode } from "react";

interface TooltipProps {
    children: ReactNode;
    content: string;
}

export function Tooltip({ children, content }: TooltipProps) {
    return (
        <div className="group/tooltip relative flex justify-center">
            {children}
            <span className="pointer-events-none absolute bottom-full mb-2 flex flex-col items-center opacity-0 transition-opacity duration-200 group-hover/tooltip:opacity-100 z-50">
                <span className="whitespace-nowrap rounded-md bg-stone-800 px-2.5 py-1.5 text-xs font-medium text-white shadow-md border border-stone-700">
                    {content}
                </span>
                <span className="h-0 w-0 border-x-4 border-t-[6px] border-x-transparent border-t-stone-800" />
            </span>
        </div>
    );
}
