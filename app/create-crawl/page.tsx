"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Plus, Globe, MessageCircle, Clock, AlertCircle } from "lucide-react"
import Layout from "@/components/kokonutui/layout"
import Link from "next/link"

export default function CreateCrawlPage() {
  const [formData, setFormData] = useState({
    websiteUrl: "",
    crawlName: "",
    telegramChannel: "",
    crawlInterval: "60",
    maxPages: "100",
    keywords: "",
    isActive: true,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Creating crawl with data:", formData)
    setIsSubmitting(false)

    // Reset form or redirect
    alert("Crawl created successfully!")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <Layout>
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/dashboard"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-foreground">Create New Crawl</h1>
            <p className="text-muted-foreground mt-2">Set up a new website crawling configuration</p>
          </div>

          {/* Form */}
          <div className="bg-card rounded-lg shadow-sm border border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="crawlName" className="block text-sm font-medium text-foreground mb-2">
                    Crawl Name
                  </label>
                  <input
                    type="text"
                    id="crawlName"
                    name="crawlName"
                    value={formData.crawlName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                    placeholder="Enter crawl name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="websiteUrl" className="block text-sm font-medium text-foreground mb-2">
                    Website URL
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input
                      type="url"
                      id="websiteUrl"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="https://example.com"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Telegram Channel */}
              <div>
                <label htmlFor="telegramChannel" className="block text-sm font-medium text-foreground mb-2">
                  Telegram Channel
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <select
                    id="telegramChannel"
                    name="telegramChannel"
                    value={formData.telegramChannel}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                    required
                  >
                    <option value="">Select Telegram Channel</option>
                    <option value="tech-news">Tech News Channel</option>
                    <option value="business-updates">Business Updates</option>
                    <option value="sports-news">Sports News</option>
                    <option value="entertainment">Entertainment Channel</option>
                    <option value="science-tech">Science & Technology</option>
                  </select>
                </div>
              </div>

              {/* Crawl Settings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="crawlInterval" className="block text-sm font-medium text-foreground mb-2">
                    Crawl Interval (minutes)
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <select
                      id="crawlInterval"
                      name="crawlInterval"
                      value={formData.crawlInterval}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                    >
                      <option value="15">15 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="120">2 hours</option>
                      <option value="360">6 hours</option>
                      <option value="720">12 hours</option>
                      <option value="1440">24 hours</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="maxPages" className="block text-sm font-medium text-foreground mb-2">
                    Max Pages per Crawl
                  </label>
                  <input
                    type="number"
                    id="maxPages"
                    name="maxPages"
                    value={formData.maxPages}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                    placeholder="100"
                    min="1"
                    max="1000"
                  />
                </div>
              </div>

              {/* Keywords */}
              <div>
                <label htmlFor="keywords" className="block text-sm font-medium text-foreground mb-2">
                  Keywords (optional)
                </label>
                <textarea
                  id="keywords"
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                  placeholder="Enter keywords separated by commas (e.g., technology, AI, programming)"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Only articles containing these keywords will be crawled and sent to Telegram
                </p>
              </div>

              {/* Status */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isActive"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
                />
                <label htmlFor="isActive" className="ml-2 text-sm font-medium text-foreground">
                  Start crawling immediately after creation
                </label>
              </div>

              {/* Warning */}
              <div className="bg-yellow-950/20 border border-yellow-800/30 rounded-md p-4">
                <div className="flex">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-yellow-300">Important Notes</h3>
                    <div className="mt-2 text-sm text-yellow-200">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Make sure the website allows crawling (check robots.txt)</li>
                        <li>High frequency crawling may impact website performance</li>
                        <li>Ensure your Telegram channel is properly configured</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4">
                <Link
                  href="/crawl-management"
                  className="px-6 py-2 border border-border rounded-md text-muted-foreground hover:bg-accent transition-colors"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                      Creating...
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 mr-2" />
                      Create Crawl
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
