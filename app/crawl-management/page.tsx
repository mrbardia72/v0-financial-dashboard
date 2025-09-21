"use client"

import { ArrowLeft, Globe, CheckCircle, XCircle, Send, Eye, Settings, Trash2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Layout from "@/components/kokonutui/layout"

export default function CrawlManagementPage() {
  const [crawlSites] = useState([
    {
      id: 1,
      url: "https://techcrunch.com",
      name: "TechCrunch",
      status: "active",
      telegramChannel: "@tech_news_fa",
      lastCrawl: "2 minutes ago",
      articlesFound: 15,
      category: "Technology",
    },
    {
      id: 2,
      url: "https://www.bbc.com/news",
      name: "BBC News",
      status: "active",
      telegramChannel: "@world_news_fa",
      lastCrawl: "5 minutes ago",
      articlesFound: 23,
      category: "News",
    },
    {
      id: 3,
      url: "https://www.theverge.com",
      name: "The Verge",
      status: "inactive",
      telegramChannel: "@tech_updates_fa",
      lastCrawl: "2 hours ago",
      articlesFound: 8,
      category: "Technology",
    },
    {
      id: 4,
      url: "https://www.wired.com",
      name: "Wired",
      status: "active",
      telegramChannel: "@tech_news_fa",
      lastCrawl: "1 minute ago",
      articlesFound: 12,
      category: "Technology",
    },
    {
      id: 5,
      url: "https://www.reuters.com",
      name: "Reuters",
      status: "active",
      telegramChannel: "@world_news_fa",
      lastCrawl: "3 minutes ago",
      articlesFound: 31,
      category: "News",
    },
    {
      id: 6,
      url: "https://www.engadget.com",
      name: "Engadget",
      status: "inactive",
      telegramChannel: "@tech_updates_fa",
      lastCrawl: "1 day ago",
      articlesFound: 0,
      category: "Technology",
    },
    {
      id: 7,
      url: "https://www.cnn.com",
      name: "CNN",
      status: "active",
      telegramChannel: "@world_news_fa",
      lastCrawl: "4 minutes ago",
      articlesFound: 19,
      category: "News",
    },
    {
      id: 8,
      url: "https://www.mashable.com",
      name: "Mashable",
      status: "active",
      telegramChannel: "@tech_news_fa",
      lastCrawl: "6 minutes ago",
      articlesFound: 7,
      category: "Technology",
    },
  ])

  const activeSites = crawlSites.filter((site) => site.status === "active").length
  const inactiveSites = crawlSites.filter((site) => site.status === "inactive").length
  const totalArticles = crawlSites.reduce((sum, site) => sum + site.articlesFound, 0)

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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

          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                <Send className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Articles Found</p>
                <p className="text-2xl font-bold text-foreground">{totalArticles}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Crawl Sites Table */}
        <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Crawl Sites</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Website
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Telegram Channel
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Last Crawl
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Articles
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Actions
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
                        <div>
                          <div className="text-sm font-medium text-foreground">{site.name}</div>
                          <div className="text-sm text-muted-foreground">{site.url}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          site.status === "active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                            : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                        }`}
                      >
                        {site.status === "active" ? (
                          <CheckCircle className="h-3 w-3 mr-1" />
                        ) : (
                          <XCircle className="h-3 w-3 mr-1" />
                        )}
                        {site.status === "active" ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Send className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="text-sm text-foreground font-mono">{site.telegramChannel}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{site.lastCrawl}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-foreground">{site.articlesFound}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-muted-foreground hover:text-foreground">
                          <Settings className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
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
