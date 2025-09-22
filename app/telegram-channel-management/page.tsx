"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit } from "lucide-react"
import Layout from "@/components/kokonutui/layout"

interface TelegramChannel {
  id: number
  channelId: string
  chatId: string
  name: string
  status: "Active" | "Inactive"
}

export default function TelegramChannelManagement() {
  const [channels, setChannels] = useState<TelegramChannel[]>([
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
  ])

  const toggleStatus = (id: number) => {
    setChannels(
      channels.map((channel) =>
        channel.id === id ? { ...channel, status: channel.status === "Active" ? "Inactive" : "Active" } : channel,
      ),
    )
  }

  const activeChannels = channels.filter((channel) => channel.status === "Active").length
  const inactiveChannels = channels.filter((channel) => channel.status === "Inactive").length

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Telegram Channel Management</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Manage and monitor your Telegram channels</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Channels</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{channels.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Channels</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{activeChannels}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Inactive Channels</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{inactiveChannels}</div>
            </CardContent>
          </Card>
        </div>

        {/* Channels Table */}
        <Card>
          <CardHeader>
            <CardTitle>Telegram Channels</CardTitle>
            <CardDescription>View and manage all your Telegram channels</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Channel ID</TableHead>
                  <TableHead>Chat ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Edit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {channels.map((channel) => (
                  <TableRow key={channel.id}>
                    <TableCell className="font-mono text-sm">{channel.channelId}</TableCell>
                    <TableCell className="font-mono text-sm">{channel.chatId}</TableCell>
                    <TableCell className="font-medium">{channel.name}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" onClick={() => toggleStatus(channel.id)} className="p-0 h-auto">
                        <Badge
                          variant={channel.status === "Active" ? "default" : "secondary"}
                          className={`cursor-pointer transition-colors ${
                            channel.status === "Active"
                              ? "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-100"
                              : "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-100"
                          }`}
                        >
                          {channel.status}
                        </Badge>
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Link href={`/edit-telegram-channel/${channel.id}`}>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
