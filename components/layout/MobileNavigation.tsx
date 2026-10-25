"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PrimaryNavigation } from "@/components/layout/PrimaryNavigation";

function focusableItems(container: HTMLElement | null) {
  if (!container) {
    return [];
  }

  return [
    ...container.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
  ];
}

export function MobileNavigation() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const dialogRef = useRef<HTMLDivElement>(null);

  function closeMenu() {
    setOpenPath(null);
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    const previouslyFocused = document.activeElement;
    const items = focusableItems(dialogRef.current);
    items[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = focusableItems(dialogRef.current);
      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="relative z-50 inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-md border border-brand-navy/15 bg-mist text-brand-navy"
        aria-expanded={open}
        aria-controls={open ? "mobile-navigation" : undefined}
        onClick={() => setOpenPath(open ? null : pathname)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {open ? (
        <>
          <div
            className="fixed inset-0 z-30 bg-brand-navy/40"
            aria-hidden="true"
            onClick={closeMenu}
          />
          <div
            ref={dialogRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="absolute inset-x-0 top-full z-40 border-b border-brand-navy/15 bg-paper px-4 py-4 shadow-soft"
          >
            <PrimaryNavigation variant="mobile" onNavigate={closeMenu} />
          </div>
        </>
      ) : null}
    </div>
  );
}
