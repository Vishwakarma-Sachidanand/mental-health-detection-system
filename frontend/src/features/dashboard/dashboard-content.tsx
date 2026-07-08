"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import {
  Activity,
  Users,
  TrendingUp,
  Target,
} from "lucide-react";
import { SectionHeader, staggerContainer, fadeInUp } from "@/components/common/motion";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Sidebar } from "@/components/layout/sidebar";
import { StatisticsCard } from "@/components/cards/statistics-card";
import { ChartCard } from "@/components/cards/chart-card";
import { LoadingSkeleton } from "@/components/common/loading-skeleton";
import { Badge } from "@/components/ui/badge";
import { getDashboardData } from "@/services/dashboard.service";
import type { DashboardData } from "@/types";
import { GridBackground } from "@/components/common/animated-background";

export function DashboardContent() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDashboardData().then((d) => {
      setData(d);
      setLoading(false);
    });
  }, []);

  if (loading || !data) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8 space-y-6">
          <LoadingSkeleton variant="hero" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <LoadingSkeleton key={i} />
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <LoadingSkeleton variant="chart" />
            <LoadingSkeleton variant="chart" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="relative flex-1">
        <GridBackground />
        <div className="relative p-4 sm:p-8">
          <Breadcrumb items={[{ label: "Dashboard" }]} className="mb-6" />

          <SectionHeader
            badge="Analytics"
            title="Dashboard"
            description="Monitor prediction trends, emotion distributions, and system performance."
            align="left"
            className="mb-8"
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-8">
            <StatisticsCard
              title="Total Predictions"
              value={data.totalPredictions.toLocaleString()}
              change={data.weeklyGrowth}
              icon={Activity}
            />
            <StatisticsCard
              title="Avg. Confidence"
              value={`${data.avgConfidence}%`}
              change={2.3}
              icon={Target}
            />
            <StatisticsCard
              title="Active Users"
              value={data.activeUsers}
              change={8.1}
              icon={Users}
            />
            <StatisticsCard
              title="Weekly Growth"
              value={`${data.weeklyGrowth}%`}
              change={data.weeklyGrowth}
              icon={TrendingUp}
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-2 mb-8">
            <ChartCard
              title="Emotion Distribution"
              description="Breakdown of detected emotions across all predictions"
            >
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data.emotionDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {data.emotionDistribution.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0F172A",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "8px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-2 flex flex-wrap justify-center gap-3">
                  {data.emotionDistribution.map((item) => (
                    <div key={item.name} className="flex items-center gap-1.5 text-xs">
                      <div
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-muted-foreground">
                        {item.name} ({item.value}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ChartCard>

            <ChartCard
              title="Weekly Analysis"
              description="Daily prediction volume and stress levels"
            >
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.weeklyAnalysis}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="day" tick={{ fill: "#94a3b8", fontSize: 12 }} />
                    <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0F172A",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar
                      dataKey="predictions"
                      fill="#2563EB"
                      radius={[4, 4, 0, 0]}
                      name="Predictions"
                    />
                    <Bar
                      dataKey="stress"
                      fill="#9333EA"
                      radius={[4, 4, 0, 0]}
                      name="Stress Index"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>
          </div>

          <ChartCard
            title="Monthly Trend"
            description="Prediction volume growth over time"
            className="mb-8"
          >
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.monthlyTrend}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="month" tick={{ fill: "#94a3b8", fontSize: 12 }} />
                  <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0F172A",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#2563EB"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard title="Recent Predictions">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left text-muted-foreground">
                    <th className="pb-3 pr-4 font-medium">Type</th>
                    <th className="pb-3 pr-4 font-medium">Emotion</th>
                    <th className="pb-3 pr-4 font-medium">Stress</th>
                    <th className="pb-3 pr-4 font-medium">Depression</th>
                    <th className="pb-3 pr-4 font-medium">Confidence</th>
                    <th className="pb-3 font-medium">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {data.recentPredictions.map((pred) => (
                    <tr
                      key={pred.id}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-3 pr-4">
                        <Badge variant="outline" className="capitalize">
                          {pred.type}
                        </Badge>
                      </td>
                      <td className="py-3 pr-4">{pred.emotion}</td>
                      <td className="py-3 pr-4">{pred.stress}</td>
                      <td className="py-3 pr-4">{pred.depression}</td>
                      <td className="py-3 pr-4 text-green-400">
                        {pred.confidence}%
                      </td>
                      <td className="py-3 text-muted-foreground">
                        {new Date(pred.timestamp).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ChartCard>
        </div>
      </div>
    </div>
  );
}
