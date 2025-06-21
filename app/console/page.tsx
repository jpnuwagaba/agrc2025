"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, EyeOff, Users, Calendar, Mail, Phone, Building, Globe } from "lucide-react"

interface RegistrationData {
  id: string
  registration_date: string
  ticket_type: string
  prefix: string
  first_name: string
  last_name: string
  email: string
  organization: string
  nationality: string
  country_code: string
  phone: string
  industry_sector: string
  gender: string
}

export default function ConsolePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState("")
  const [registrations, setRegistrations] = useState<RegistrationData[]>([])
  const [loading, setLoading] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [stats, setStats] = useState({
    total: 0,
    eastAfrican: 0,
    international: 0,
    thisWeek: 0,
  })

  // Check if already authenticated on mount
  useEffect(() => {
    const authenticated = sessionStorage.getItem("console_authenticated")
    if (authenticated === "true") {
      setIsAuthenticated(true)
      fetchRegistrations()
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "agrc@2025") {
      setIsAuthenticated(true)
      sessionStorage.setItem("console_authenticated", "true")
      setLoginError("")
      fetchRegistrations()
    } else {
      setLoginError("Invalid password. Please try again.")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem("console_authenticated")
    setRegistrations([])
    setPassword("")
  }

  const fetchRegistrations = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/console/registrations")
      if (response.ok) {
        const data = await response.json()
        setRegistrations(data.registrations)
        calculateStats(data.registrations)
      } else {
        console.error("Failed to fetch registrations")
      }
    } catch (error) {
      console.error("Error fetching registrations:", error)
    } finally {
      setLoading(false)
    }
  }

  const calculateStats = (data: RegistrationData[]) => {
    const total = data.length
    const eastAfrican = data.filter((reg) => reg.ticket_type === "East African").length
    const international = data.filter((reg) => reg.ticket_type === "Non-East African").length

    // Calculate registrations from this week
    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
    const thisWeek = data.filter((reg) => new Date(reg.registration_date) >= oneWeekAgo).length

    setStats({ total, eastAfrican, international, thisWeek })
  }

  const downloadCSV = async () => {
    setDownloading(true)
    try {
      const response = await fetch("/api/console/download")
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.style.display = "none"
        a.href = url
        a.download = `agrc2025-registrations-${new Date().toISOString().split("T")[0]}.csv`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      } else {
        console.error("Failed to download CSV")
      }
    } catch (error) {
      console.error("Error downloading CSV:", error)
    } finally {
      setDownloading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getTicketTypeBadge = (ticketType: string) => {
    return ticketType === "East African" ? (
      <Badge variant="secondary" className="bg-pigment_green/20 text-pigment_green">
        East African
      </Badge>
    ) : (
      <Badge variant="outline" className="border-chili_red text-chili_red">
        International
      </Badge>
    )
  }

  // Login Form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-dark_green">Administrator Console</CardTitle>
            <CardDescription>AGRC2025 EALAN Conference</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter administrator password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>
              {loginError && <p className="text-sm text-red-600">{loginError}</p>}
              <Button type="submit" className="w-full bg-pigment_green hover:bg-pigment_green/90">
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-dark_green">Administrator Console</h1>
              <p className="text-sm text-gray-600">AGRC2025 EALAN Conference Registration Management</p>
            </div>
            <Button onClick={handleLogout} variant="outline">
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-pigment_green">{stats.total}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">East African</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-pigment_green">{stats.eastAfrican}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">International</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-chili_red">{stats.international}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-dark_green">{stats.thisWeek}</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Registered Users</CardTitle>
                <CardDescription>Complete list of conference registrations</CardDescription>
              </div>
              <Button
                onClick={downloadCSV}
                disabled={downloading}
                className="bg-pigment_green hover:bg-pigment_green/90"
              >
                <Download className="w-4 h-4 mr-2" />
                {downloading ? "Downloading..." : "Download CSV"}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pigment_green"></div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Name</th>
                      <th className="text-left p-3 font-semibold">Email</th>
                      <th className="text-left p-3 font-semibold">Phone</th>
                      <th className="text-left p-3 font-semibold">Organization</th>
                      <th className="text-left p-3 font-semibold">Nationality</th>
                      <th className="text-left p-3 font-semibold">Type</th>
                      <th className="text-left p-3 font-semibold">Registered</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map((registration) => (
                      <tr key={registration.id} className="border-b hover:bg-gray-50">
                        <td className="p-3">
                          <div className="flex flex-col">
                            <span className="font-medium">
                              {registration.prefix} {registration.first_name} {registration.last_name}
                            </span>
                            {registration.gender && (
                              <span className="text-sm text-gray-500">{registration.gender}</span>
                            )}
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-gray-400" />
                            <span className="text-sm">{registration.email}</span>
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-gray-400" />
                            <span className="text-sm">
                              {registration.country_code} {registration.phone}
                            </span>
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <Building className="h-4 w-4 text-gray-400" />
                              <span className="text-sm">{registration.organization || "N/A"}</span>
                            </div>
                            {registration.industry_sector && (
                              <span className="text-xs text-gray-500 mt-1">{registration.industry_sector}</span>
                            )}
                          </div>
                        </td>
                        <td className="p-3">
                          <span className="text-sm">{registration.nationality}</span>
                        </td>
                        <td className="p-3">{getTicketTypeBadge(registration.ticket_type)}</td>
                        <td className="p-3">
                          <span className="text-sm text-gray-600">{formatDate(registration.registration_date)}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {registrations.length === 0 && (
                  <div className="text-center py-8 text-gray-500">No registrations found</div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
