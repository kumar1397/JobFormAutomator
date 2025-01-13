// src/components/DataStyleSelection/DataStyleSelection.tsx

"use client";

import { Slider } from "@/components/ui/slider";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  usefontSize,
  usefontWeight,
  useMargin,
  usefontFamily,
} from "@/app/store";
export default function RightSidebar() {
  const { sizeValue, setsizeValue } = usefontSize();
  const handleFontSizeChange = (newValue: number[]) => {
    setsizeValue(newValue);
  };
  const { weightValue, setweightValue } = usefontWeight();
  const handleFontWeightChange = (newValue: number[]) => {
    setweightValue(newValue);
  };
  const { marginValue, setmarginValue } = useMargin();
  const handleMarginChange = (newValue: number[]) => {
    setmarginValue(newValue);
  };
  const { position, setPosition } = usefontFamily();

  return (
    <div className="w-1/5 mx-2">
      <div id="form-personal" className="mb-2">
        {/* font size */}
        <div className="my-2">
          <Slider
            value={sizeValue}
            onValueChange={handleFontSizeChange}
            max={100}
            step={1}
          />
        </div>
        {/* font weight */}
        <div className="my-2">
        <Slider
            value={weightValue}
            onValueChange={handleFontWeightChange}
            max={100}
            step={1}
          />
        </div>
        {/* margin */}
        <div className="my-2">
        <Slider
            value={marginValue}
            onValueChange={handleMarginChange}
            max={100}
            step={1}
          />
        </div>
        <div>
          <button className="mx-2 my-5">Print</button>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Bottom
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  Right
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
