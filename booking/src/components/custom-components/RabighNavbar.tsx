import { HamburgerIcon } from "@/components/icons/HamburgerIcon ";
import { RabighLogo } from "@/components/icons/RabighLogo ";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { defaultNavigationLinks } from "@/constants/navbar/NavBarCons";
import { cn } from "@/lib/utils";
import type { RabighNavbarProps } from "@/types/navbartypes/NavBatTypes";
import React, { useEffect, useRef, useState } from "react";
import { Switch } from "../ui/switch";

export const RabighNavbar = React.forwardRef<HTMLElement, RabighNavbarProps>(
  (
    {
      className,
      logo = <RabighLogo />,
      navigationLinks = defaultNavigationLinks,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768);
        }
      };
      checkWidth();
      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) resizeObserver.observe(containerRef.current);
      return () => resizeObserver.disconnect();
    }, []);

    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      },
      [ref]
    );

    return (
      <header
        ref={combinedRef}
        className={cn(
          "sticky top-0 z-50 w-full bg-[#F5F0E8] shadow-sm [&_*]:no-underline",
          className
        )}
        {...props}
      >
        <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-4 px-4 md:px-6 py-2 md:py-0">
          {/* Left - Logo & Mobile Menu */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            {isMobile && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="group h-10 w-10 hover:bg-gray-100"
                    variant="ghost"
                    size="icon"
                  >
                    <HamburgerIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-56 p-2">
                  <NavigationMenu className="max-w-none">
                    <NavigationMenuList className="flex flex-col items-start gap-1">
                      {navigationLinks.map((link, index) => (
                        <NavigationMenuItem key={index} className="w-full">
                          <button
                            onClick={(e) => e.preventDefault()}
                            className={cn(
                              "flex w-full items-center px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-100 cursor-pointer no-underline",
                              link.active
                                ? "text-[#C4A053] font-semibold"
                                : "text-gray-700 hover:text-[#C4A053]"
                            )}
                          >
                            {link.label}
                          </button>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            )}

            <button
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-2 cursor-pointer"
            >
              {logo}
            </button>
          </div>

          {/* Center - Desktop Navigation */}
          {!isMobile && (
            <NavigationMenu className="flex flex-1 justify-center">
              <NavigationMenuList className="flex gap-2 md:gap-4">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <button
                      onClick={(e) => e.preventDefault()}
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm md:text-base font-medium transition-colors hover:text-[#C4A053] focus:outline-none cursor-pointer no-underline",
                        link.active
                          ? "text-[#C4A053] font-semibold"
                          : "text-gray-700"
                      )}
                    >
                      {link.label}
                    </button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          )}

          {/* Right - Currency / Language / Button */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-3 w-full md:w-auto justify-between md:justify-end mt-2 md:mt-0">
            <div className="flex items-center gap-2 md:gap-3 flex-wrap">
              <div className="relative inline-block">
                <Switch
                  id="SAR"
                  className="h-6 w-20 bg-[#8B9D83] data-[state=checked]:bg-[#C4A053]"
                />
                <label
                  htmlFor="SAR"
                  className="absolute inset-0 flex items-center justify-center text-xs md:text-sm font-medium text-white pointer-events-none"
                >
                  SAR
                </label>
              </div>

              <div className="relative inline-block">
                <Switch
                  id="ENG"
                  className="h-6 w-20 bg-[#8B9D83] data-[state=checked]:bg-[#C4A053]"
                />
                <label
                  htmlFor="ENG"
                  className="absolute inset-0 flex items-center justify-center text-xs md:text-sm font-medium text-white pointer-events-none"
                >
                  ENG
                </label>
              </div>
            </div>

            <Button
              size="default"
              className="bg-white text-[#8B9D83] border border-[#8B9D83] font-medium px-4 md:px-8 py-2 md:py-2.5 shadow-none mt-2 md:mt-0"
              onClick={(e) => e.preventDefault()}
            >
              Book Now
            </Button>
          </div>
        </div>
      </header>
    );
  }
);

RabighNavbar.displayName = "RabighNavbar";
