"use client"

import {
  MessageSquare,
  Send,
  FileText,
  Headphones,
  Users,
  UserPlus,
  UserMinus,
  Clock,
  Zap,
  AlertTriangle,
  TrendingUp,
  CheckCircle,
  Database,
  Search,
  Activity,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function () {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Management Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Overview of system statistics and information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg">
              <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">15,847</span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users</h3>
          <p className="text-xs text-green-600 dark:text-green-400 mt-1">+12.5% from last month</p>
        </div>

        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
              <UserPlus className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">1,234</span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Total New Users</h3>
          <p className="text-xs text-green-600 dark:text-green-400 mt-1">+89 this week</p>
        </div>

        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
              <UserMinus className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">456</span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users Left</h3>
          <p className="text-xs text-red-600 dark:text-red-400 mt-1">-2.1% churn rate</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="/chatgpt-budget">
          <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23] cursor-pointer hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">$0.69</span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Remaining ChatGPT Cost</h3>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">35 days remaining</p>
          </div>
        </Link>

        <Link href="/telegram-channels">
          <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23] cursor-pointer hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <Send className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">24</span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Telegram Channels Count</h3>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">+2 new channels</p>
          </div>
        </Link>

        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
              <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">1,247</span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Articles</h3>
          <p className="text-xs text-green-600 dark:text-green-400 mt-1">+18 today</p>
        </div>

        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
              <Headphones className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">89</span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Podcasts</h3>
          <p className="text-xs text-green-600 dark:text-green-400 mt-1">+3 this week</p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <Zap className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          Auto Vacuum Monitoring - Article Table
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Vacuum Status */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Latest Vacuum Status</h3>

            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/10 rounded-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-sm text-green-700 dark:text-green-400">Duration</span>
              </div>
              <span className="font-semibold text-green-800 dark:text-green-300">33.85ms</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
              <span className="text-sm text-blue-700 dark:text-blue-400">Last Run</span>
              <span className="font-semibold text-blue-800 dark:text-blue-300">Sep 20, 23:56</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                <span className="text-sm text-yellow-700 dark:text-yellow-400">Status</span>
              </div>
              <span className="font-semibold text-yellow-800 dark:text-yellow-300">Clean</span>
            </div>
          </div>

          {/* Table Statistics */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Current Table Stats</h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col p-3 bg-green-50 dark:bg-green-900/10 rounded-lg">
                <span className="text-xs text-green-700 dark:text-green-400">Live Tuples</span>
                <span className="font-bold text-green-800 dark:text-green-300">104</span>
              </div>
              <div className="flex flex-col p-3 bg-red-50 dark:bg-red-900/10 rounded-lg">
                <span className="text-xs text-red-700 dark:text-red-400">Dead Tuples</span>
                <span className="font-bold text-red-800 dark:text-red-300">0</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg">
              <span className="text-sm text-purple-700 dark:text-purple-400">Dead Percentage</span>
              <span className="font-semibold text-purple-800 dark:text-purple-300">0.00%</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col p-3 bg-gray-50 dark:bg-[#1A1A1E] rounded-lg">
                <span className="text-xs text-gray-600 dark:text-gray-400">Table Size</span>
                <span className="font-semibold text-gray-900 dark:text-white">0.13 MB</span>
              </div>
              <div className="flex flex-col p-3 bg-gray-50 dark:bg-[#1A1A1E] rounded-lg">
                <span className="text-xs text-gray-600 dark:text-gray-400">Index Size</span>
                <span className="font-semibold text-gray-900 dark:text-white">0.02 MB</span>
              </div>
            </div>
          </div>

          {/* Vacuum History & Performance */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Vacuum History</h3>

            <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
              <span className="text-sm text-blue-700 dark:text-blue-400">Manual Vacuums</span>
              <span className="font-semibold text-blue-800 dark:text-blue-300">4</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/10 rounded-lg">
              <span className="text-sm text-orange-700 dark:text-orange-400">Auto Vacuums</span>
              <span className="font-semibold text-orange-800 dark:text-orange-300">0</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-indigo-50 dark:bg-indigo-900/10 rounded-lg">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm text-indigo-700 dark:text-indigo-400">DB Size</span>
              </div>
              <span className="font-semibold text-indigo-800 dark:text-indigo-300">8.50 MB</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-cyan-50 dark:bg-cyan-900/10 rounded-lg">
              <span className="text-sm text-cyan-700 dark:text-cyan-400">Free Space</span>
              <span className="font-semibold text-cyan-800 dark:text-cyan-300">0.85 MB</span>
            </div>

            <div className="p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-xs font-medium text-green-700 dark:text-green-400">Recommendation</span>
              </div>
              <p className="text-xs text-green-600 dark:text-green-500">
                Table is clean - daily vacuum check recommended
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Database Performance Monitoring */}
      <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <Database className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          Database Performance Monitoring - Article Table
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Record Operations */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Record Operations</h3>

            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/10 rounded-lg">
              <span className="text-sm text-green-700 dark:text-green-400">Inserted Records</span>
              <span className="font-semibold text-green-800 dark:text-green-300">57</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-blue-700 dark:text-blue-400">Updated Records</span>
              </div>
              <span className="font-semibold text-blue-800 dark:text-blue-300">0</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg">
              <span className="text-sm text-yellow-700 dark:text-yellow-400">Deleted Records</span>
              <span className="font-semibold text-yellow-800 dark:text-yellow-300">11</span>
            </div>

            <div className="p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-xs font-medium text-green-700 dark:text-green-400">Status</span>
              </div>
              <p className="text-xs text-green-600 dark:text-green-500">Excellent! No unnecessary updates</p>
            </div>
          </div>

          {/* Active/Inactive Records */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Record Status</h3>

            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/10 rounded-lg">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-sm text-green-700 dark:text-green-400">Active Records</span>
              </div>
              <span className="font-semibold text-green-800 dark:text-green-300">104</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#1A1A1E] rounded-lg">
              <span className="text-sm text-gray-600 dark:text-gray-400">Inactive Records</span>
              <span className="font-semibold text-gray-900 dark:text-white">0</span>
            </div>

            <div className="p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-xs font-medium text-green-700 dark:text-green-400">Health Status</span>
              </div>
              <p className="text-xs text-green-600 dark:text-green-500">Active data in healthy condition</p>
            </div>

            <div className="p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-xs font-medium text-green-700 dark:text-green-400">Inactive Status</span>
              </div>
              <p className="text-xs text-green-600 dark:text-green-500">No inactive records found</p>
            </div>
          </div>

          {/* Scan Performance & Recommendations */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Scan Performance</h3>

            <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/10 rounded-lg">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-red-600 dark:text-red-400" />
                <span className="text-sm text-red-700 dark:text-red-400">Sequential Scans</span>
              </div>
              <span className="font-semibold text-red-800 dark:text-red-300">47</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/10 rounded-lg">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-red-600 dark:text-red-400" />
                <span className="text-sm text-red-700 dark:text-red-400">Index Scans</span>
              </div>
              <span className="font-semibold text-red-800 dark:text-red-300">0</span>
            </div>

            <div className="p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-2 mb-1">
                <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
                <span className="text-xs font-medium text-red-700 dark:text-red-400">Critical Issue</span>
              </div>
              <p className="text-xs text-red-600 dark:text-red-500">High sequential scans - missing proper index</p>
            </div>

            <div className="p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-2 mb-1">
                <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
                <span className="text-xs font-medium text-red-700 dark:text-red-400">No Index Usage</span>
              </div>
              <p className="text-xs text-red-600 dark:text-red-500">Must add indexes immediately!</p>
            </div>

            <div className="p-3 bg-orange-50 dark:bg-orange-900/10 rounded-lg border border-orange-200 dark:border-orange-800">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span className="text-xs font-medium text-orange-700 dark:text-orange-400">Optimization</span>
              </div>
              <p className="text-xs text-orange-600 dark:text-orange-500">Create indexes for frequent queries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
