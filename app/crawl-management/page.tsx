"use client"

import { ArrowLeft, Globe, CheckCircle, XCircle, Edit } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Layout from "@/components/kokonutui/layout"

export default function CrawlManagementPage() {
  const [crawlSites, setCrawlSites] = useState([
    {
      id: 1,
      mainWebsite: "https://techcrunch.com",
      latestArticle: "AI Revolution in 2024: What's Next?",
      updateDate: "2024-01-15 14:30",
      status: "active",
    },
    {
      id: 2,
      mainWebsite: "https://www.bbc.com/news",
      latestArticle: "Global Climate Summit Reaches Agreement",
      updateDate: "2024-01-15 13:45",
      status: "active",
    },
    {
      id: 3,
      mainWebsite: "https://www.theverge.com",
      latestArticle: "New Smartphone Features Unveiled",
      updateDate: "2024-01-14 16:20",
      status: "inactive",
    },
    {
      id: 4,
      mainWebsite: "https://www.wired.com",
      latestArticle: "Cybersecurity Trends for 2024",
      updateDate: "2024-01-15 12:15",
      status: "active",
    },
    {
      id: 5,
      mainWebsite: "https://www.reuters.com",
      latestArticle: "Economic Markets Show Strong Growth",
      updateDate: "2024-01-15 11:30",
      status: "active",
    },
    {
      id: 6,
      mainWebsite: "https://www.engadget.com",
      latestArticle: "Gaming Console Wars Continue",
      updateDate: "2024-01-13 09:45",
      status: "inactive",
    },
  ])

  const toggleStatus = (id: number) => {
    setCrawlSites((prevSites) =>
      prevSites.map((site) =>
        site.id === id ? { ...site, status: site.status === "active" ? "inactive" : "active" } : site,
      ),
    )
  }

  const activeSites = crawlSites.filter((site) => site.status === "active").length
  const inactiveSites = crawlSites.filter((site) => site.status === "inactive").length

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Crawl Management</h1>
          <p className="text-muted-foreground mt-2">Manage your website crawling operations and monitor their status</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Active Sites</p>
                <p className="text-2xl font-bold text-foreground">{activeSites}</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
                <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Inactive Sites</p>
                <p className="text-2xl font-bold text-foreground">{inactiveSites}</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Sites</p>
                <p className="text-2xl font-bold text-foreground">{crawlSites.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Crawl Sites</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Main Website
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Latest Article
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Update Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody className="bg-card divide-y divide-border">
                {crawlSites.map((site) => (
                  <tr key={site.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="p-2 bg-muted rounded-lg mr-3">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="text-sm font-medium text-foreground">{site.mainWebsite}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-foreground max-w-xs truncate">{site.latestArticle}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{site.updateDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => toggleStatus(site.id)}
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 cursor-pointer ${
                          site.status === "active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/30"
                            : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/30"
                        }`}
                      >
                        {site.status === "active" ? (
                          <CheckCircle className="h-3 w-3 mr-1" />
                        ) : (
                          <XCircle className="h-3 w-3 mr-1" />
                        )}
                        {site.status === "active" ? "Active" : "Inactive"}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link
                        href={`/edit-crawl/${site.id}`}
                        className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 rounded-md text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors"
                      >
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}
