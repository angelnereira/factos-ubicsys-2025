import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Configuración</h1>
      <Card>
        <CardHeader>
          <CardTitle>Configuración de la Aplicación</CardTitle>
          <CardDescription>Administre sus preferencias de la aplicación aquí. Esta sección está en construcción.</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">Más configuraciones estarán disponibles pronto.</p>
        </CardContent>
      </Card>
    </div>
  );
}
