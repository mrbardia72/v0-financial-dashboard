"use client"

import { useState } from "react"
import { Edit, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Layout from "@/components/kokonutui/layout"

interface Job {
  id: string
  name: string
  schedule: string
}

export default function JobManagement() {
  const [jobs] = useState<Job[]>([
    {
      id: "1",
      name: "Daily News Crawl",
      schedule: "Every day at 6:00 AM",
    },
    {
      id: "2",
      name: "Weekly Report Generation",
      schedule: "Every Monday at 9:00 AM",
    },
    {
      id: "3",
      name: "Database Cleanup",
      schedule: "Every Sunday at 2:00 AM",
    },
    {
      id: "4",
      name: "Email Notifications",
      schedule: "Every 2 hours",
    },
    {
      id: "5",
      name: "Backup Process",
      schedule: "Every day at 11:30 PM",
    },
  ])

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Job Management</h1>
          <p className="text-muted-foreground">Manage and monitor your scheduled jobs and automation tasks.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-1">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{jobs.length}</div>
              <p className="text-xs text-muted-foreground">Scheduled automation tasks</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Jobs</CardTitle>
            <CardDescription>View and manage all your scheduled jobs.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Name</TableHead>
                  <TableHead>Schedule</TableHead>
                  <TableHead>Edit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.name}</TableCell>
                    <TableCell>{job.schedule}</TableCell>
                    <TableCell>
                      <Link href={`/edit-job/${job.id}`}>
                        <Button variant="ghost" size="sm">
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
