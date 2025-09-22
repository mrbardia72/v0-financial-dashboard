"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

interface Job {
  id: string
  name: string
  schedule: string
  status: "active" | "inactive"
  lastRun: string
  nextRun: string
}

export default function EditJob() {
  const params = useParams()
  const router = useRouter()
  const [showSuccess, setShowSuccess] = useState(false)
  const [job, setJob] = useState<Job | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    schedule: "",
    status: "active" as "active" | "inactive",
  })

  // Mock data - in real app this would come from API
  const mockJobs: Job[] = [
    {
      id: "1",
      name: "Daily News Crawl",
      schedule: "Every day at 6:00 AM",
      status: "active",
      lastRun: "2024-01-15 06:00:00",
      nextRun: "2024-01-16 06:00:00",
    },
    {
      id: "2",
      name: "Weekly Report Generation",
      schedule: "Every Monday at 9:00 AM",
      status: "active",
      lastRun: "2024-01-15 09:00:00",
      nextRun: "2024-01-22 09:00:00",
    },
    {
      id: "3",
      name: "Database Cleanup",
      schedule: "Every Sunday at 2:00 AM",
      status: "inactive",
      lastRun: "2024-01-14 02:00:00",
      nextRun: "2024-01-21 02:00:00",
    },
    {
      id: "4",
      name: "Email Notifications",
      schedule: "Every 2 hours",
      status: "active",
      lastRun: "2024-01-15 14:00:00",
      nextRun: "2024-01-15 16:00:00",
    },
    {
      id: "5",
      name: "Backup Process",
      schedule: "Every day at 11:30 PM",
      status: "inactive",
      lastRun: "2024-01-14 23:30:00",
      nextRun: "2024-01-15 23:30:00",
    },
  ]

  useEffect(() => {
    const foundJob = mockJobs.find((j) => j.id === params.id)
    if (foundJob) {
      setJob(foundJob)
      setFormData({
        name: foundJob.name,
        schedule: foundJob.schedule,
        status: foundJob.status,
      })
    }
  }, [params.id])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      router.push("/job-management")
    }, 2000)
  }

  if (!job) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Job</h1>
        <p className="text-muted-foreground">Update job configuration and scheduling settings.</p>
      </div>

      {showSuccess && (
        <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertDescription className="text-green-800 dark:text-green-200">
            Job updated successfully! Redirecting to job management...
          </AlertDescription>
        </Alert>
      )}

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Job Configuration</CardTitle>
          <CardDescription>Modify the job settings and schedule below.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Job Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter job name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="schedule">Schedule</Label>
              <Input
                id="schedule"
                value={formData.schedule}
                onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                placeholder="e.g., Every day at 6:00 AM"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value: "active" | "inactive") => setFormData({ ...formData, status: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit">Update Job</Button>
              <Button type="button" variant="outline" onClick={() => router.push("/job-management")}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
