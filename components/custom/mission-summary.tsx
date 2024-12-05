import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Building2,
  Calendar,
  Building,
  FileText,
  User,
  Trash2,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

interface MissionSummaryProps {
  id: string;
  location: string;
  date: string;
  timeRange: string;
  building: string;
  category: string;
  role: string;
}

const MissionSummary = ({
  id,
  location,
  date,
  timeRange,
  building,
  category,
  role,
}: MissionSummaryProps) => {
  return (
    <Card className="w-full max-w-md bg-[#DCEEF4]">
      <CardContent className="pt-6 pb-0">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-900">
              Mission summary
            </h3>
            <div className="text-sm text-black">ID #{id}</div>
          </div>

          <div className="space-y-3">
            {/* Location */}
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-black" />
              <span className="font-bold">{location}</span>
            </div>
            <Separator className="my-4 bg-[#C9D9DD]" />

            {/* Date & Time */}
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-black" />
              <div className="font-bold">
                <div>{date}</div>
                <div>{timeRange}</div>
              </div>
            </div>
             <Separator className="my-4 bg-[#C9D9DD]" />

            {/* Building */}
            <div className="flex items-center gap-3">
              <Building className="h-5 w-5 text-black" />
              <span className="font-bold">{building}</span>
            </div>
             <Separator className="my-4 bg-[#C9D9DD]" />
            {/* Category */}
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-black" />
              <span className="font-bold">{category}</span>
            </div>
             <Separator className="my-4 bg-[#C9D9DD]" />
            {/* Role */}
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-black" />
              <span className="font-bold">{role}</span>
            </div>
          </div>

          <button className="top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"></button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end pb-0">
        <Button variant={"ghost"} className="p-0">
          <Trash2 className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MissionSummary;
