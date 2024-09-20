"use client";

import { Modal } from "@/components/Modal/Modal";
import SelectCity from "@/components/SelectCity";
import { Box } from "@radix-ui/themes";

import React, { useState } from "react";

export default function SidebarDashboard() {
  return (
    <Box>
      <SelectCity />
    </Box>
  );
}
