"use client"

import { RotateCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useColorStore } from "@/stores/color.store"

import { colorOptions } from "../constants/colors"

function ColorPicker() {
  const { color, setColor, resetColor } = useColorStore()
  const isCustomized = color !== null

  return (
    <div className="flex items-center gap-2">
      <Select value={color || ""} onValueChange={setColor}>
        <SelectTrigger className="w-50">
          <SelectValue placeholder="Select a color" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Color Palette</SelectLabel>
            {colorOptions.map((colorOption) => (
              <SelectItem key={colorOption.class} value={colorOption.class}>
                <div className="flex items-center gap-2">
                  <div
                    className="size-4 rounded-full border"
                    style={{ backgroundColor: colorOption.primary500 }}
                  />
                  {colorOption.name}
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {isCustomized && (
        <Button
          variant="ghost"
          size="icon"
          onClick={resetColor}
          aria-label="Reset to default"
          title="Reset to default"
        >
          <RotateCcw className="size-4" />
        </Button>
      )}
    </div>
  )
}

export { ColorPicker }
