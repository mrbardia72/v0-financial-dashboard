"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Plus, Globe, LinkIcon, CheckCircle } from "lucide-react"
import Layout from "@/components/kokonutui/layout"
import Link from "next/link"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function CreateCrawlPage() {
  const [formData, setFormData] = useState({
    mainWebsite: "",
    latestArticleLink: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Creating crawl with data:", formData)
    setIsSubmitting(false)

    setShowSuccessAlert(true)

    setTimeout(() => {
      setShowSuccessAlert(false)
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
            <p className="text-muted-foreground mt-2">Set up a new crawl for website monitoring</p>
          </div>

          {showSuccessAlert && (
            <div className="mb-6">
              <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  Message successfully registered
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* Form */}
          <div className="bg-card rounded-lg shadow-sm border border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="mainWebsite" className="block text-sm font-medium text-foreground mb-2">
                  Main Website
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    type="url"
                    id="mainWebsite"
                    name="mainWebsite"
                    value={formData.mainWebsite}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                    placeholder="https://example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="latestArticleLink" className="block text-sm font-medium text-foreground mb-2">
                  Latest Article Link
                </label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    type="url"
                    id="latestArticleLink"
                    name="latestArticleLink"
                    value={formData.latestArticleLink}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                    placeholder="https://example.com/latest-article"
                    required
                  />
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
                      Submitting...
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
