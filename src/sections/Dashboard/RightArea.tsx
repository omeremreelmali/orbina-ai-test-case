"use client";

import { Button } from "@headlessui/react";
import styles from "@/sections/Dashboard/styles/Dashboard.module.css";
import React, { useState } from "react";
import TodayWeather from "./today/TodayWeather";
import WeeklyWeather from "./weekly/WeeklyWeather";

export default function RightArea() {
  const [tab, setTab] = useState<"today" | "week">("week");

  return (
    <div>
      <div className={`${styles.tabs} flex gap-4 mb-4`}>
        <Button
          className={`${tab === "today" ? styles.buttonActive : ""}`}
          onClick={() => setTab("today")}
        >
          Bugün
        </Button>
        <Button
          className={`${tab === "week" ? styles.buttonActive : ""}`}
          onClick={() => setTab("week")}
        >
          5 Günlük
        </Button>
      </div>
      {tab === "today" ? <TodayWeather /> : null}
      {tab === "week" ? <WeeklyWeather /> : null}
    </div>
  );
}
