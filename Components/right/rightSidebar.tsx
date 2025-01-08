// src/components/DataStyleSelection/DataStyleSelection.tsx

"use client";

import { Slider } from "@/Components/ui/slider";

export default function RightSidebar() {


  return (
    <div className="w-1/5 mx-2">
      {/* Personal Details Area */}
      <div id="form-personal" className="mb-2">
        <div className="my-2">
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
        <div className="my-2">
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
        <div className="my-2">
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
      </div>
    </div>
  );
}
