"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"
import Layout from "@/components/kokonutui/layout"

interface TelegramChannel {
  id: number
  channelId: string
  chatId: string
  name: string
  status: "Active" | "Inactive"
}

export default function EditTelegramChannel() {
  const params = useParams()
  const router = useRouter()
  const [showAlert, setShowAlert] = useState(false)
  const [formData, setFormData] = useState({
    channelId: "",
    chatId: "",
    name: "",
  })

  // Sample data - in a real app, this would come from an API
  const sampleChannels: TelegramChannel[] = [
    {
      id: 1,
      channelId: "@tech_news_channel",
      chatId: "-1001234567890",
      name: "Tech News Channel",
      status: "Active",
    },
    {
      id: 2,
      channelId: "@business_updates",
      chatId: "-1001234567891",
      name: "Business Updates",
      status: "Inactive",
    },
    {
      id: 3,
      channelId: "@daily_reports",
      chatId: "-1001234567892",
      name: "Daily Reports",
      status: "Active",
    },
    {
      id: 4,
      channelId: "@news_alerts",
      chatId: "-1001234567893",
      name: "News Alerts",
      status: "Active",
    },
    {
      id: 5,
      channelId: "@market_analysis",
      chatId: "-1001234567894",
      name: "Market Analysis",
      status: "Inactive",
    },
  ]

  useEffect(() => {
    const channelId = Number.parseInt(params.id as string)
    const channel = sampleChannels.find((c) => c.id === channelId)

    if (channel) {
      setFormData({
        channelId: channel.channelId,
        chatId: channel.chatId,
        name: channel.name,
      })
    }
  }, [params.id])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your API
    console.log("Updated channel data:", formData)

    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
      router.push("/telegram-channel-management")
    }, 2000)
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
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Edit Telegram Channel</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Update your Telegram channel information</p>
        </div>

        {showAlert && (
          <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
            <AlertDescription className="text-green-800 dark:text-green-200">
              Telegram channel updated successfully!
            </AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Channel Information</CardTitle>
            <CardDescription>Update the details for your Telegram channel</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="channelId">Telegram Channel ID</Label>
                <Input
                  id="channelId"
                  name="channelId"
                  type="text"
                  value={formData.channelId}
                  onChange={handleInputChange}
                  placeholder="@your_channel_name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="chatId">Chat ID Number</Label>
                <Input
                  id="chatId"
                  name="chatId"
                  type="text"
                  value={formData.chatId}
                  onChange={handleInputChange}
                  placeholder="-1001234567890"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Channel display name"
                  required
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1">
                  Update Channel
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/telegram-channel-management")}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
