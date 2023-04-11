// Library imports
import { useRef, useEffect } from "react"
import { cx } from "classix"

// Project imports
import { DesktopNav } from "./DesktopNav"
import { MobileNav } from "./MobileNav"
import { ThemeToggle } from "./ThemeToggle"
import { clamp, setProperty, removeProperty } from "utils/style"

const navItems = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Projects", href: "#" },
  { text: "Hobbies", href: "#" },
]

/**
 * @requires client:load
 */
export function Header() {
  const headerRef = useRef<HTMLDivElement>(null)

  function updateStyles() {
    const downDelay = 0
    const upDelay = 64

    const { top, height } =
      headerRef.current?.getBoundingClientRect() as DOMRect
    const scrollY = clamp(
      window.scrollY,
      0,
      document.body.scrollHeight - window.innerHeight
    )

    if (scrollY < downDelay) {
      setProperty("--header-height", `${downDelay + height}px`)
      setProperty("--header-mb", `${-downDelay}px`)
    } else if (top + height < -upDelay) {
      const offset = Math.max(height, scrollY - upDelay)
      setProperty("--header-height", `${offset}px`)
      setProperty("--header-mb", `${height - offset}px`)
    } else if (top === 0) {
      setProperty("--header-height", `${scrollY + height}px`)
      setProperty("--header-mb", `${-scrollY}px`)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", updateStyles, { passive: true })
    window.addEventListener("resize", updateStyles)
    return () => {
      window.removeEventListener("scroll", updateStyles)
      window.removeEventListener("resize", updateStyles)
    }
  }, [])
  return (
    <header className={cx("mb-[--header-mb] h-[--header-height]")}>
      <div ref={headerRef} className="sticky top-0 z-10 h-12 pt-4">
        <div className="flex">
          <div className="flex-1"></div>
          <DesktopNav
            navItems={navItems}
            className="pointer-events-auto hidden md:block"
          />
          <div className="flex flex-1 items-center justify-end">
            <MobileNav
              navItems={navItems}
              className="pointer-events-auto mr-4 md:hidden"
            />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
