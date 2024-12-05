"use client";

import { useState, useEffect } from "react";
import MissionSummary from "@/components/custom/mission-summary";

interface MissionData {
  id: string;
  location: string;
  date: string;
  timeRange: string;
  building: string;
  category: string;
  role: string;
}

const fetchMissionData = async (): Promise<MissionData> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    id: "LAUBRI240903",
    location: "Saint Laurent",
    date: "3rd September 2024",
    timeRange: "7am to 7pm",
    building: "Saint Laurent",
    category: "DIY",
    role: "Maintenance agent",
  };
};

export default function Home() {
  const [missionData, setMissionData] = useState<MissionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMissionData = async () => {
      try {
        const data = await fetchMissionData();
        setMissionData(data);
      } catch (err) {
        setError("Failed to fetch mission data");
        console.error("Error fetching mission data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadMissionData();
  }, []);

  return (
    <div className="flex items-center justify-items-center min-h-screen w-[100%]">
      <div className="flex-1 flex items-center justify-center">
        {loading && (
          <div className="text-gray-500">Loading mission data...</div>
        )}

        {error && <div className="text-red-500">{error}</div>}

        {missionData && !loading && !error && (
          <MissionSummary {...missionData} />
        )}
      </div>
    </div>
  );
}
