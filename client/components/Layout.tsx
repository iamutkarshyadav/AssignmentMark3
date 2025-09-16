import { PropsWithChildren } from "react";
import { BatteryFull, ChevronLeft, SignalHigh, Wifi } from "lucide-react";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

export default function Layout({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "min-h-svh w-full bg-gradient-to-b from-fuchsia-100 via-pink-100 to-violet-100",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[430px] px-4 pb-12">
        {/* Status bar */}
        <div className="flex items-center justify-between pt-3 text-[13px] font-semibold text-foreground/80">
          <div>9:41</div>
          <div className="flex items-center gap-2 opacity-80">
            <SignalHigh className="h-4 w-4" />
            <Wifi className="h-4 w-4" />
            <BatteryFull className="h-4 w-4" />
          </div>
        </div>
        {/* App bar */}
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-foreground/80">
            <ChevronLeft className="h-5 w-5" />
            <span>Back</span>
          </div>
          <h1 className="text-base font-semibold text-foreground">Dashboard</h1>
          <div className="h-8 w-8 rounded-full bg-black/5" aria-hidden></div>
        </div>
        {children}
        {/* Global footer */}
        <Footer />
      </div>
    </div>
  );
}
