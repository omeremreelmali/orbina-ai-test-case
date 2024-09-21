import Map from "@/components/Map/Map";
import RightArea from "@/sections/Dashboard/RightArea";
import SidebarDashboard from "@/sections/Dashboard/Sidebar";
import { Box } from "@radix-ui/themes";
import React from "react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Box className="w-full md:w-2/6 lg:w-1/6 lg:h-screen py-10 px-8">
        <SidebarDashboard />
      </Box>
      <Box className="w-full md:w-4/6 lg:w-5/6 bg-graybg  lg:h-screen py-10 px-8">
        <RightArea />
      </Box>
    </div>
  );
}
