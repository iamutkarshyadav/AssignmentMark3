import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar, Crown, Plus } from "lucide-react";
import { toast } from "sonner";

export default function Index() {
  const [period, setPeriod] = useState<"1m" | "3m" | "1y">("3m");

  return (
    <Layout>
      {/* Create invoice card */}
      <div className="mt-4 rounded-3xl bg-white/70 p-4 shadow-sm ring-1 ring-black/5 backdrop-blur">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-500 to-violet-500 p-[2px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
              <Plus className="h-7 w-7 text-transparent [background:linear-gradient(135deg,#de67ff,#6b5cff)] [-webkit-background-clip:text]" />
            </div>
          </div>
          <h2 className="mt-4 text-center text-2xl font-extrabold leading-tight text-violet-600">
            Create New Invoice
          </h2>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            Start by creating and sending new invoice
          </p>
          <p className="mt-3 text-center text-sm font-medium text-fuchsia-600">
            Or Upload an existing invoice and set payment reminder
          </p>

          {/* Time period section */}
          <Card className="mt-5 rounded-2xl border border-violet-100 bg-white/90 p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-foreground/80">
                Time Period
              </div>
              <div className="text-xs text-muted-foreground">
                dd:mm:yyyy - dd:mm:yyyy
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Segment active={period === "1m"} onClick={() => setPeriod("1m")}>
                1Month
              </Segment>
              <Segment active={period === "3m"} onClick={() => setPeriod("3m")}>
                3Months
              </Segment>
              <Segment active={period === "1y"} onClick={() => setPeriod("1y")}>
                <Crown className="mr-1 h-4 w-4" /> 1Year
              </Segment>

              <Button
                type="button"
                onClick={() => toast("Open custom date picker")}
                variant="outline"
                className="ml-1 inline-flex h-9 items-center gap-2 rounded-full border-violet-200 bg-white px-4 text-sm text-foreground/80 hover:bg-violet-50"
              >
                <Calendar className="h-4 w-4" /> Custom
              </Button>
            </div>
          </Card>
        </div>
      </div>
      {/* Summary cards */}
      <div className="mx-auto mt-5 grid grid-cols-2 gap-3">
        <SummaryCard title="Total Earnings" value="$1,25,000" wide />
        <SummaryCard title="Payment Awaited" value="$25,000" />
        <SummaryCard title="Payment Overdue" value="$25,000" />
      </div>

      {/* Income Trend chart */}
      <div className="mx-auto mt-4 rounded-2xl border border-violet-100 bg-white p-4 shadow-sm">
        <h3 className="text-[15px] font-semibold text-foreground/80">
          Income Trend
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Your monthly income and growth for the last 6 months.
        </p>
        <ChartBlock />
      </div>

      {/* Invoice list */}
      <div className="mx-auto mt-5 space-y-3">
        <InvoiceRow
          title="Client Name"
          sub="₹1,25,000, Due: 2024-06-15"
          right={
            <button
              type="button"
              onClick={() => toast("Update status clicked")}
              className="rounded-full bg-gradient-to-tr from-fuchsia-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white"
            >
              Update Status ▾
            </button>
          }
        />
        <InvoiceRow
          title="Client Name"
          sub="₹1,25,000, Due: 2024-06-15"
          right={
            <StatusPill color="slate" onClick={() => toast("Marked as Unpaid")}>
              Unpaid
            </StatusPill>
          }
        />
        <InvoiceRow
          title="Income Trend"
          sub="₹1,25,000, Due: 2024-06-15"
          right={
            <StatusPill
              color="rose"
              tone="soft"
              onClick={() => toast("Dispute opened")}
            >
              Disputed
            </StatusPill>
          }
          highlight
        />
        <InvoiceRow
          title="Income Trend"
          sub="₹1,25,000, Due: 2024-06-15"
          right={
            <StatusPill color="green" onClick={() => toast("Payment recorded")}>
              Paid
            </StatusPill>
          }
        />
        <InvoiceRow
          title="Income Trend"
          sub="₹1,25,000, Due: 2024-06-15"
          right={
            <StatusPill color="green" onClick={() => toast("Payment recorded")}>
              Paid
            </StatusPill>
          }
        />
        <InvoiceRow
          title="Income Trend"
          sub="₹1,25,000, Due: 2024-06-15"
          right={
            <StatusPill color="amber" tone="soft">
              Partially Paid
            </StatusPill>
          }
        />
        <InvoiceRow
          title="Income Trend"
          sub="₹1,25,000, Due: 2024-06-15"
          right={
            <StatusPill color="green" onClick={() => toast("Payment recorded")}>
              Paid
            </StatusPill>
          }
        />
        <InvoiceRow
          title="Income Trend"
          sub="₹1,25,000, Due: 2024-06-15"
          right={<StatusPill color="rose">Overdue</StatusPill>}
          trailing="bell"
          onBell={() => toast("Reminder set")}
        />
        <InvoiceRow
          title="Income Trend"
          sub="₹1,25,000, Due: 2024-06-15"
          right={
            <StatusPill color="amber" tone="soft">
              Awaited
            </StatusPill>
          }
          trailing="bell"
          onBell={() => toast("Reminder set")}
        />
        <InvoiceRow
          title="Income Trend"
          sub="₹1,25,000, Due: 2024-06-15"
          right={
            <StatusPill color="zinc" tone="soft">
              Draft
            </StatusPill>
          }
          trailing="edit"
          onEdit={() => toast("Edit draft")}
        />
        <InvoiceRow
          title="Income Trend"
          sub="₹1,25,000, Due: 2024-06-15"
          right={
            <StatusPill color="green" onClick={() => toast("Payment recorded")}>
              Paid
            </StatusPill>
          }
        />
      </div>
    </Layout>
  );
}

function Segment({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex h-9 items-center rounded-full px-4 text-sm font-medium transition-colors",
        active
          ? "bg-gradient-to-tr from-fuchsia-500 to-violet-500 text-white shadow-sm"
          : "border border-violet-200 bg-white text-foreground/80 hover:bg-violet-50",
      )}
    >
      {children}
    </button>
  );
}

function SummaryCard({
  title,
  value,
  wide = false,
}: {
  title: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-violet-100 bg-white/90 px-5 py-4 shadow-sm",
        wide ? "col-span-2" : "col-span-1",
      )}
    >
      <div className="text-[17px] font-semibold text-muted-foreground">
        {title}
      </div>
      <div className="mt-1 text-3xl font-extrabold text-violet-700">
        {value}
      </div>
    </div>
  );
}

import { Bell, Pencil } from "lucide-react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const chartData = [
  { name: "Jan", income: 3.2, growth: 40 },
  { name: "Feb", income: 4.8, growth: 55 },
  { name: "Mar", income: 6.8, growth: 30 },
  { name: "Apr", income: 2.6, growth: -60 },
  { name: "May", income: 5.0, growth: 65 },
  { name: "Jun", income: 0.2, growth: -100 },
];

function ChartBlock() {
  return (
    <div className="relative mt-2 h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={chartData}
          margin={{ left: 10, right: 30, top: 10, bottom: 18 }}
        >
          <CartesianGrid stroke="#e9e5ff" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "#666" }}
            tickLine={false}
            axisLine={{ stroke: "#ddd" }}
          />
          <YAxis
            yAxisId="left"
            tickFormatter={(v) => `$${v}k`}
            domain={[0, 8]}
            tick={{ fontSize: 12, fill: "#666" }}
            tickLine={false}
            axisLine={{ stroke: "#ddd" }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickFormatter={(v) => `${v}%`}
            domain={[-100, 100]}
            tick={{ fontSize: 12, fill: "#8b0000" }}
            tickLine={false}
            axisLine={{ stroke: "#8b0000" }}
          />
          <Tooltip cursor={{ fill: "rgba(124,58,237,0.08)" }} />
          <Bar
            yAxisId="left"
            dataKey="income"
            fill="#7c3aed"
            radius={[6, 6, 0, 0]}
            barSize={28}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="growth"
            stroke="#80361c"
            strokeWidth={3}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute bottom-1 left-2 flex items-center gap-6 rounded-md bg-white/80 px-2 py-1 text-sm">
        <div className="flex items-center gap-2 text-foreground/80">
          <span className="h-3 w-3 rounded-sm bg-[#7c3aed]"></span> income
        </div>
        <div className="flex items-center gap-2 text-foreground/80">
          <span className="h-3 w-3 rounded-full border-2 border-[#80361c]"></span>{" "}
          momGrowth
        </div>
      </div>
    </div>
  );
}

function InvoiceRow({
  title,
  sub,
  right,
  highlight,
  trailing,
  onBell,
  onEdit,
}: {
  title: string;
  sub: string;
  right: React.ReactNode;
  highlight?: boolean;
  trailing?: "bell" | "edit" | undefined;
  onBell?: () => void;
  onEdit?: () => void;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-2xl border bg-white px-4 py-4 shadow-sm",
        highlight ? "border-rose-100 bg-rose-50/40" : "border-violet-100",
      )}
    >
      <div className="min-w-0">
        <div className="text-[15px] font-semibold text-foreground/90">
          {title}
        </div>
        <div className="text-sm text-muted-foreground">{sub}</div>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        {right}
        {trailing === "bell" && (
          <button
            type="button"
            aria-label="Reminder"
            onClick={onBell}
            className="rounded-full p-1.5 hover:bg-violet-50"
          >
            <Bell className="h-5 w-5 text-muted-foreground/70" />
          </button>
        )}
        {trailing === "edit" && (
          <button
            type="button"
            aria-label="Edit"
            onClick={onEdit}
            className="rounded-full p-1.5 hover:bg-violet-50"
          >
            <Pencil className="h-5 w-5 text-muted-foreground/70" />
          </button>
        )}
      </div>
    </div>
  );
}

function StatusPill({
  children,
  color,
  tone = "solid",
  onClick,
}: {
  children: React.ReactNode;
  color: "green" | "amber" | "rose" | "slate" | "zinc";
  tone?: "solid" | "soft";
  onClick?: () => void;
}) {
  const colorClasses: Record<string, { solid: string; soft: string }> = {
    green: {
      solid: "bg-emerald-400 text-white",
      soft: "bg-emerald-100 text-emerald-700",
    },
    amber: {
      solid: "bg-amber-400 text-white",
      soft: "bg-amber-100 text-amber-700",
    },
    rose: {
      solid: "bg-rose-400 text-white",
      soft: "bg-rose-100 text-rose-700",
    },
    slate: {
      solid: "bg-slate-200 text-slate-700",
      soft: "bg-slate-100 text-slate-700",
    },
    zinc: {
      solid: "bg-zinc-300 text-zinc-700",
      soft: "bg-zinc-200 text-zinc-700",
    },
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold cursor-pointer select-none",
        colorClasses[color][tone],
        tone === "soft" && "ring-1 ring-black/5",
      )}
    >
      {children}
    </button>
  );
}
