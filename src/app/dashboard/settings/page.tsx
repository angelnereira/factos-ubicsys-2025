import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Application Settings</CardTitle>
          <CardDescription>Manage your application preferences here. This section is under construction.</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">More settings will be available soon.</p>
        </CardContent>
      </Card>
    </div>
  );
}
