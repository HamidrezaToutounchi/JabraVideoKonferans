import React from "react";

export default function JabraLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Official Jabra GN Yellow Badge */}
      <div className="bg-[#FFD100] text-slate-950 px-2.5 py-1 rounded-md font-sans flex flex-col justify-center shadow-sm border border-amber-400/50 hover:bg-[#FACC15] transition-colors">
        <div className="flex items-baseline space-x-1 leading-none">
          <span className="font-black text-lg tracking-tight" style={{ letterSpacing: "-0.03em" }}>
            Jabra
          </span>
          <span className="font-bold text-[11px] tracking-tight text-slate-800">
            GN
          </span>
        </div>
        {/* Jabra GN signature audio wave mark */}
        <div className="flex items-center space-x-[2px] mt-[3px]">
          <span className="w-[3px] h-[2px] bg-slate-950 rounded-[1px]"></span>
          <span className="w-[3px] h-[2px] bg-slate-950 rounded-[1px]"></span>
          <span className="w-[3px] h-[2px] bg-slate-950 rounded-[1px]"></span>
          <span className="w-[3px] h-[2px] bg-slate-950 rounded-[1px]"></span>
          <span className="w-[3px] h-[2px] bg-slate-950 rounded-[1px]"></span>
          <span className="flex-1 h-[2px] bg-slate-950 rounded-[1px] min-w-[14px]"></span>
        </div>
      </div>
    </div>
  );
}
