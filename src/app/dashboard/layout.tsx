import type { ReactNode } from "react"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { AppHeader } from "@/components/layout/app-header"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { FoliosProvider } from "@/app/lib/folios-context"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <FoliosProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <AppHeader />
          <main className="flex-1 p-4 md:p-6 lg:p-8 bg-secondary/50">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </FoliosProvider>
  )
}
