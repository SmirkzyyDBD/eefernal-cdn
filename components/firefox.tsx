"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";

export function FirefoxWarningDialog() {
  const [isFirefox, setIsFirefox] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if the browser is Firefox
    const isFirefoxBrowser =
      typeof window !== "undefined" &&
      navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

    if (isFirefoxBrowser) {
      setIsFirefox(true);
      setOpen(true);
    }
  }, []);

  if (!isFirefox) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md border-red-500/50 z-[9999]">
        <DialogHeader className="flex flex-col items-center">
          <AlertTriangle className="h-12 w-12 text-red-500 mb-2" />
          <DialogTitle className="text-xl text-red-500">
            Browser Not Supported
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-center">
          <p className="mb-4">
            We&apos;ve detected that you&apos;re using Firefox. Unfortunately,
            Firefox is not supported due to compatibility issues.
          </p>
          <p className="font-medium">
            For the best experience, please use Chrome, Brave or another
            Chromium-based browser.
          </p>
        </DialogDescription>
        <DialogFooter>
          <Button
            className="w-full"
            variant="default"
            onClick={() => setOpen(false)}
          >
            I understand.
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
