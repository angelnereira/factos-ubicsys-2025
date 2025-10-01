"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, Gauge, Search, Settings, FileQuestion, FileBarChart2 } from "lucide-react"

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function AppSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path || (path !== '/dashboard' && pathname.startsWith(path))

  const navItems = [
    { href: "/dashboard", icon: Gauge, label: "Principal" },
    { href: "/dashboard/invoices/new", icon: FileText, label: "Nueva Factura" },
    { href: "/dashboard/invoices/status", icon: FileQuestion, label: "Estado de Factura" },
    { href: "/dashboard/consult/ruc", icon: Search, label: "Consulta RUC/DV" },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3">
            <div className="p-2 bg-accent rounded-lg">
                <FileBarChart2 className="text-accent-foreground" />
            </div>
            <h1 className="text-xl font-semibold text-sidebar-foreground">FacturaPro</h1>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {navItems.map((item) => (
             <SidebarMenuItem key={item.href}>
                <SidebarMenuButton 
                  asChild
                  className={cn(isActive(item.href) && "bg-accent text-accent-foreground hover:bg-accent/90")}
                >
                  <Link href={item.href}>
                    <item.icon />
                    {item.label}
                  </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <Card className="bg-sidebar-accent/50 border-sidebar-border text-sidebar-foreground">
          <CardHeader className="p-4">
            <CardDescription>Folios Restantes</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
             <div className="text-3xl font-bold">4,821</div>
          </CardContent>
        </Card>
        <Separator className="my-4"/>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  className={cn(isActive("/dashboard/settings") && "bg-accent text-accent-foreground hover:bg-accent/90")}
                >
                    <Link href="/dashboard/settings">
                        <Settings />
                        Configuración
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
