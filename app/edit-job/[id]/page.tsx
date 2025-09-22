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
import { Checkbox } from "@/components/ui/checkbox"
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
    selectedDays: [] as string[],
    time: "",
    status: "active" as "active" | "inactive",
  })

  const weekdays = [
    { id: "monday", label: "Monday" },
    { id: "tuesday", label: "Tuesday" },
    { id: "wednesday", label: "Wednesday" },
    { id: "thursday", label: "Thursday" },
    { id: "friday", label: "Friday" },
    { id: "saturday", label: "Saturday" },
    { id: "sunday", label: "Sunday" },
  ]

  // Generate time options (24-hour format)
  const timeOptions = []
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
      timeOptions.push(timeString)
    }
  }

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
        selectedDays: ["monday", "tuesday", "wednesday", "thursday", "friday"], // Default to weekdays
        time: "09:00",
        status: foundJob.status,
      })
    }
  }, [params.id])

  const handleDayChange = (dayId: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, selectedDays: [...formData.selectedDays, dayId] })
    } else {
      setFormData({ ...formData, selectedDays: formData.selectedDays.filter((day) => day !== dayId) })
    }
  }

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
          <form onSubmit={handleSubmit} className="space-y-6">
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

            <div className="space-y-4">
              <Label>Schedule</Label>

              <div className="space-y-3">
                <div>
                  <Label className="text-sm font-medium">Days of Week</Label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {weekdays.map((day) => (
                      <div key={day.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={day.id}
                          checked={formData.selectedDays.includes(day.id)}
                          onCheckedChange={(checked) => handleDayChange(day.id, checked as boolean)}
                        />
                        <Label htmlFor={day.id} className="text-sm font-normal">
                          {day.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      {timeOptions.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
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
