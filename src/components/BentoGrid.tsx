import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | ReactNode;
    description?: string | ReactNode;
    header?: ReactNode;
    icon?: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-2xl group/bento hover:shadow-lg hover:shadow-slate-200/80 transition-all duration-300 p-6 bg-white border border-gray-200 hover:border-red-200 justify-between flex flex-col space-y-4",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-1 transition-transform duration-200">
                {icon}
                <div className="font-bold text-slate-900 text-lg mt-3 mb-2">
                    {title}
                </div>
                <div className="text-slate-600 text-sm leading-relaxed">
                    {description}
                </div>
            </div>
        </div>
    );
};
