"use client"

import type React from "react"

import { useState } from "react"
import Layout from "@/components/kokonutui/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

export default function AddTelegramChannelPage() {
  const [formData, setFormData] = useState({
    channelId: "",
    chatId: "",
    name: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Show success message
    setShowSuccess(true)

    // Reset form
    setFormData({
      channelId: "",
      chatId: "",
      name: "",
    })

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 5000)
  }

  const handleCancel = () => {
    setFormData({
      channelId: "",
      chatId: "",
      name: "",
    })
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Add Telegram Channel</h1>
          <p className="text-muted-foreground">Register a new Telegram channel for monitoring</p>
        </div>

        {showSuccess && (
          <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
            <AlertDescription className="text-green-800 dark:text-green-200">
              Telegram channel successfully registered!
            </AlertDescription>
          </Alert>
        )}

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Channel Information</CardTitle>
            <CardDescription>Enter the details for the Telegram channel you want to add</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="channelId">Telegram Channel ID</Label>
                <Input
                  id="channelId"
                  name="channelId"
                  type="text"
                  placeholder="@channel_username or -1001234567890"
                  value={formData.channelId}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="chatId">Chat ID Number</Label>
                <Input
                  id="chatId"
                  name="chatId"
                  type="text"
                  placeholder="-1001234567890"
                  value={formData.chatId}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Channel Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter channel display name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1">
                  Add Channel
                </Button>
                <Button type="button" variant="outline" onClick={handleCancel} className="flex-1 bg-transparent">
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
