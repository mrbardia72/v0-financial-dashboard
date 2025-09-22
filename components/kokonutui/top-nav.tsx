"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "../theme-toggle"

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function TopNav() {
  const pathname = usePathname()

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Labdon", href: "/dashboard" }]

    // Always add Dashboard as second level
    if (pathname !== "/dashboard") {
      breadcrumbs.push({ label: "Dashboard", href: "/dashboard" })
    }

    // Handle specific routes with proper hierarchy
    if (pathname === "/dashboard") {
      breadcrumbs.push({ label: "Overview" })
    } else if (pathname === "/create-crawl") {
      breadcrumbs.push({ label: "Crawl Management", href: "/crawl-management" })
      breadcrumbs.push({ label: "Create Crawl" })
    } else if (pathname === "/crawl-management") {
      breadcrumbs.push({ label: "Crawl Management" })
    } else if (pathname.startsWith("/edit-crawl/")) {
      breadcrumbs.push({ label: "Crawl Management", href: "/crawl-management" })
      breadcrumbs.push({ label: "Edit Crawl" })
    } else if (pathname === "/add-telegram-channel") {
      breadcrumbs.push({ label: "Telegram Channel Management", href: "/telegram-channel-management" })
      breadcrumbs.push({ label: "Add Channel" })
    } else if (pathname === "/telegram-channel-management") {
      breadcrumbs.push({ label: "Telegram Channel Management" })
    } else if (pathname.startsWith("/edit-telegram-channel/")) {
      breadcrumbs.push({ label: "Telegram Channel Management", href: "/telegram-channel-management" })
      breadcrumbs.push({ label: "Edit Channel" })
    } else if (pathname === "/chatgpt-budget") {
      breadcrumbs.push({ label: "Reports & Analytics", href: "#" })
      breadcrumbs.push({ label: "ChatGPT Budget" })
    } else if (pathname === "/telegram-channels") {
      breadcrumbs.push({ label: "Channel Management", href: "#" })
      breadcrumbs.push({ label: "Telegram Channels" })
    } else {
      // Fallback for any other routes
      const segments = pathname.split("/").filter(Boolean)
      const lastSegment = segments[segments.length - 1]
      const displayName = lastSegment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
      breadcrumbs.push({ label: displayName })
    }

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <nav className="px-3 sm:px-6 flex items-center justify-between bg-white dark:bg-[#0F0F12] border-b border-gray-200 dark:border-[#1F1F23] h-full">
      <div className="font-medium text-sm flex items-center space-x-1 truncate max-w-[70%] overflow-hidden">
        {breadcrumbs.map((item, index) => (
          <div key={`${item.label}-${index}`} className="flex items-center shrink-0">
            {index > 0 && <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400 mx-1 shrink-0" />}
            {item.href ? (
              <Link
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors truncate"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 dark:text-gray-100 truncate">{item.label}</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-4 ml-auto">
        <ThemeToggle />
      </div>
    </nav>
  )
}
