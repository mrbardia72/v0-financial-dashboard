"use client"

import { ArrowLeft, Globe, CheckCircle, XCircle, Send, Eye, Settings, Trash2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

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
    <div className="min-h-screen bg-gray-50 dark:bg-[#0F0F12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Crawl Management</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage your website crawling operations and monitor their status
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-[#1F1F23] rounded-lg p-6 shadow-sm border border-gray-200 dark:border-[#2A2A2E]">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Sites</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{activeSites}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1F1F23] rounded-lg p-6 shadow-sm border border-gray-200 dark:border-[#2A2A2E]">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
                <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Inactive Sites</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{inactiveSites}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1F1F23] rounded-lg p-6 shadow-sm border border-gray-200 dark:border-[#2A2A2E]">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Sites</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{crawlSites.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1F1F23] rounded-lg p-6 shadow-sm border border-gray-200 dark:border-[#2A2A2E]">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                <Send className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Articles Found</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{totalArticles}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Crawl Sites Table */}
        <div className="bg-white dark:bg-[#1F1F23] rounded-lg shadow-sm border border-gray-200 dark:border-[#2A2A2E] overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-[#2A2A2E]">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Crawl Sites</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-[#2A2A2E]">
              <thead className="bg-gray-50 dark:bg-[#0F0F12]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Website
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Telegram Channel
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Last Crawl
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Articles
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-[#1F1F23] divide-y divide-gray-200 dark:divide-[#2A2A2E]">
                {crawlSites.map((site) => (
                  <tr key={site.id} className="hover:bg-gray-50 dark:hover:bg-[#2A2A2E] transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="p-2 bg-gray-100 dark:bg-[#2A2A2E] rounded-lg mr-3">
                          <Globe className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{site.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{site.url}</div>
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
                        <span className="text-sm text-gray-900 dark:text-white font-mono">{site.telegramChannel}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {site.lastCrawl}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{site.articlesFound}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
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
    </div>
  )
}
