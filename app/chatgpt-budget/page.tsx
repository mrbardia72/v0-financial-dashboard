"use client"

import { DollarSign, Calendar, CheckCircle, BarChart3, Target, Lightbulb, TrendingUp } from "lucide-react"
import Layout from "@/components/kokonutui/layout"
import Link from "next/link"

export default function ChatGPTBudgetPage() {
  return (
    <Layout>
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4"
            >
              {/* ArrowLeft className="w-4 h-4" /> */}
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-primary" />
              ChatGPT Budget Analysis Report
            </h1>
            <p className="text-muted-foreground mt-2">
              Comprehensive analysis of your ChatGPT API usage and budget status
            </p>
          </div>

          <div className="space-y-6">
            {/* Top Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Budget Status */}
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-6 border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-800 dark:text-green-300">Budget Status</h3>
                      <p className="text-sm text-green-600 dark:text-green-400">Safe</p>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-green-800 dark:text-green-300 mb-2">$0.6850</div>
                  <p className="text-green-600 dark:text-green-400">Remaining Budget</p>
                </div>
              </div>

              {/* Time Remaining */}
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                      <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">Time Remaining</h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400">Until budget depletion</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-800 dark:text-blue-300">35</div>
                      <p className="text-xs text-blue-600 dark:text-blue-400">Days</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-800 dark:text-blue-300">5.0</div>
                      <p className="text-xs text-blue-600 dark:text-blue-400">Weeks</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-800 dark:text-blue-300">1.2</div>
                      <p className="text-xs text-blue-600 dark:text-blue-400">Months</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-700 dark:text-blue-400">End Date: Saturday, November 3, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Statistics */}
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-muted-foreground" />
                Cost Statistics
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-muted rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-foreground mb-1">$0.0180</div>
                  <p className="text-sm text-muted-foreground">Daily Cost</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-foreground mb-1">$0.0234</div>
                  <p className="text-sm text-muted-foreground">Weekend Cost</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-foreground mb-1">$0.1368</div>
                  <p className="text-sm text-muted-foreground">Weekly Cost</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-foreground mb-1">$0.5923</div>
                  <p className="text-sm text-muted-foreground">Monthly Cost</p>
                </div>
              </div>
            </div>

            {/* Request Statistics */}
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="bg-purple-50 dark:bg-purple-900/10 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-6 flex items-center gap-2">
                  <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  Request Statistics
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-purple-800 dark:text-purple-300 mb-2">685</div>
                    <p className="text-purple-600 dark:text-purple-400">Remaining Requests</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-purple-800 dark:text-purple-300 mb-2">22</div>
                    <p className="text-purple-600 dark:text-purple-400">Suggested Daily Limit</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optimization Recommendations */}
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="bg-yellow-50 dark:bg-yellow-900/10 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
                <h3 className="text-xl font-semibold text-yellow-800 dark:text-yellow-300 mb-6 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  Optimization Recommendations
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Your budget is in good condition</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Try to reduce weekend usage for better cost management</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">To save costs, break long texts into smaller chunks</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Monitor your daily usage to stay within budget limits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
