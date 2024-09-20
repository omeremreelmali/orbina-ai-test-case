import Map from "@/components/Map/Map";
import RightArea from "@/sections/Dashboard/RightArea";
import SidebarDashboard from "@/sections/Dashboard/Sidebar";
import { Box } from "@radix-ui/themes";
import React from "react";

export default function DashboardPage() {
  return (
    <div className="flex ">
      <Box className="w-1/6 h-screen py-10 px-8">
        <SidebarDashboard />
      </Box>
      <Box className="w-5/6 bg-graybg h-screen py-10 px-8">
        <RightArea />
      </Box>
    </div>
  );
}
