"use client"

import { ArrowLeft, Send, Users, MessageCircle, TrendingUp, ExternalLink, Hash } from "lucide-react"
import Link from "next/link"
import Layout from "@/components/kokonutui/layout"

export default function TelegramChannelsPage() {
  const channels = [
    {
      id: 1,
      name: "Tech News Daily",
      username: "@technewsdaily",
      subscribers: 45200,
      description: "Latest technology news and updates from around the world",
      category: "Technology",
      status: "Active",
      lastPost: "2 hours ago",
      engagement: "High",
    },
    {
      id: 2,
      name: "Business Insights",
      username: "@businessinsights",
      subscribers: 32800,
      description: "Business analysis, market trends, and financial insights",
      category: "Business",
      status: "Active",
      lastPost: "5 hours ago",
      engagement: "Medium",
    },
    {
      id: 3,
      name: "Health & Wellness",
      username: "@healthwellness",
      subscribers: 28500,
      description: "Health tips, wellness advice, and medical news",
      category: "Health",
      status: "Active",
      lastPost: "1 day ago",
      engagement: "High",
    },
    {
      id: 4,
      name: "Crypto Updates",
      username: "@cryptoupdates",
      subscribers: 67300,
      description: "Cryptocurrency news, market analysis, and trading insights",
      category: "Finance",
      status: "Active",
      lastPost: "30 minutes ago",
      engagement: "Very High",
    },
    {
      id: 5,
      name: "Educational Content",
      username: "@educationalcontent",
      subscribers: 19400,
      description: "Learning resources, tutorials, and educational materials",
      category: "Education",
      status: "Active",
      lastPost: "3 hours ago",
      engagement: "Medium",
    },
    {
      id: 6,
      name: "Travel Adventures",
      username: "@traveladventures",
      subscribers: 41600,
      description: "Travel guides, destination reviews, and adventure stories",
      category: "Travel",
      status: "Active",
      lastPost: "6 hours ago",
      engagement: "High",
    },
    {
      id: 7,
      name: "Food & Recipes",
      username: "@foodrecipes",
      subscribers: 35900,
      description: "Delicious recipes, cooking tips, and food photography",
      category: "Food",
      status: "Active",
      lastPost: "4 hours ago",
      engagement: "High",
    },
    {
      id: 8,
      name: "Sports News",
      username: "@sportsnews",
      subscribers: 52100,
      description: "Latest sports news, match results, and player updates",
      category: "Sports",
      status: "Active",
      lastPost: "1 hour ago",
      engagement: "Very High",
    },
  ]

  const getEngagementColor = (engagement: string) => {
    switch (engagement) {
      case "Very High":
        return "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
      case "High":
        return "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
      case "Medium":
        return "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"
      default:
        return "text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20"
    }
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Technology: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20",
      Business: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20",
      Health: "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20",
      Finance: "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20",
      Education: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20",
      Travel: "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20",
      Food: "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20",
      Sports: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20",
    }
    return colors[category as keyof typeof colors] || "text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20"
  }

  return (
    <Layout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>

            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <Send className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Telegram Channels</h1>
            </div>
            <p className="text-muted-foreground">Manage and monitor all your Telegram channels</p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <Hash className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-muted-foreground">Total Channels</span>
              </div>
              <span className="text-2xl font-bold text-foreground">24</span>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-sm font-medium text-muted-foreground">Total Subscribers</span>
              </div>
              <span className="text-2xl font-bold text-foreground">322.8K</span>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-medium text-muted-foreground">Active Channels</span>
              </div>
              <span className="text-2xl font-bold text-foreground">24</span>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <span className="text-sm font-medium text-muted-foreground">Avg Engagement</span>
              </div>
              <span className="text-2xl font-bold text-foreground">High</span>
            </div>
          </div>

          {/* Channels List */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">All Channels</h2>
              <p className="text-muted-foreground mt-1">Complete list of managed Telegram channels</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Channel
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Subscribers
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Engagement
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Last Post
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {channels.map((channel) => (
                    <tr key={channel.id} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg flex-shrink-0">
                            <Send className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{channel.name}</div>
                            <div className="text-sm text-muted-foreground">{channel.username}</div>
                            <div className="text-xs text-muted-foreground mt-1 max-w-xs">{channel.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(channel.category)}`}
                        >
                          {channel.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="font-semibold text-foreground">{channel.subscribers.toLocaleString()}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getEngagementColor(channel.engagement)}`}
                        >
                          {channel.engagement}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-muted-foreground">{channel.lastPost}</span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
