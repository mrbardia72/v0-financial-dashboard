"use client"

import type React from "react"

import { ArrowLeft, Save, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Layout from "@/components/kokonutui/layout"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

export default function EditCrawlPage() {
  const params = useParams()
  const router = useRouter()
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    mainWebsite: "",
    latestArticle: "",
  })

  // Sample data - in a real app, this would come from an API
  const crawlSites = [
    {
      id: 1,
      mainWebsite: "https://techcrunch.com",
      latestArticle: "AI Revolution in 2024: What's Next?",
    },
    {
      id: 2,
      mainWebsite: "https://www.bbc.com/news",
      latestArticle: "Global Climate Summit Reaches Agreement",
    },
    {
      id: 3,
      mainWebsite: "https://www.theverge.com",
      latestArticle: "New Smartphone Features Unveiled",
    },
    {
      id: 4,
      mainWebsite: "https://www.wired.com",
      latestArticle: "Cybersecurity Trends for 2024",
    },
    {
      id: 5,
      mainWebsite: "https://www.reuters.com",
      latestArticle: "Economic Markets Show Strong Growth",
    },
    {
      id: 6,
      mainWebsite: "https://www.engadget.com",
      latestArticle: "Gaming Console Wars Continue",
    },
  ]

  useEffect(() => {
    const siteId = Number.parseInt(params.id as string)
    const site = crawlSites.find((s) => s.id === siteId)
    if (site) {
      setFormData({
        mainWebsite: site.mainWebsite,
        latestArticle: site.latestArticle,
      })
    }
  }, [params.id])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
    }, 5000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/crawl-management"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Crawl Management
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Edit Crawl</h1>
          <p className="text-muted-foreground mt-2">Update the crawl configuration for this website</p>
        </div>

        {/* Success Alert */}
        {showSuccess && (
          <Alert className="mb-6 border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
            <AlertDescription className="text-green-800 dark:text-green-200">
              Crawl configuration updated successfully!
            </AlertDescription>
          </Alert>
        )}

        {/* Form */}
        <div className="bg-card rounded-lg shadow-sm border border-border p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="mainWebsite" className="block text-sm font-medium text-foreground mb-2">
                Main Website
              </label>
              <input
                type="url"
                id="mainWebsite"
                name="mainWebsite"
                value={formData.mainWebsite}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="latestArticle" className="block text-sm font-medium text-foreground mb-2">
                Latest Article Link
              </label>
              <input
                type="url"
                id="latestArticle"
                name="latestArticle"
                value={formData.latestArticle}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://example.com/latest-article"
                required
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                <Save className="h-4 w-4 mr-2" />
                Update Crawl
              </button>
              <Link
                href="/crawl-management"
                className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
              >
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
