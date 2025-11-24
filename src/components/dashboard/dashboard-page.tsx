"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, LogOut } from "lucide-react"
import DashboardLayout from "@/components/dashboard/dashboard-layout"

export default function DashboardPage() {
  const [currentSection, setCurrentSection] = useState<"plan" | "certificates" | "buy" | "settings">("plan")

  const navItems = [
    { id: "plan", label: "Your plan" },
    { id: "certificates", label: "Certificates" },
    { id: "buy", label: "Buy certificate" },
    { id: "settings", label: "Settings" },
  ]

  const handleLogout = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  window.location.href = "/"; // optional redirect
}


  return (
    <div className="min-h-screen text-black bg-background">
      <header className="border-b border-border bg-card">
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <nav className="flex flex-col gap-2 mt-8">
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant={currentSection === item.id ? "default" : "ghost"}
                      className="justify-start"
                      onClick={() => setCurrentSection(item.id as any)}
                    >
                      {item.label}
                    </Button>
                  ))}
                  <Button variant="ghost" className="justify-start text-destructive mt-auto">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="hidden md:flex md:w-64 border-r border-border flex-col bg-card">
          <nav className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentSection === item.id ? "default" : "ghost"}
                className="justify-start"
                onClick={() => setCurrentSection(item.id as any)}
              >
                {item.label}
              </Button>
            ))}
          </nav>
          <Button variant="ghost" className="justify-start text-destructive mx-4 mt-auto mb-4" onClick={()=>handleLogout()}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          <DashboardLayout section={currentSection} />
        </main>
      </div>
    </div>
  )
}
