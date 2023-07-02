import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "inicio" },
  {
    path: "inicio",
    loadChildren: () =>
      import("../inicio/inicio.module").then(
        (m) => m.InicioModule
      ),
  },
  {
    path: "sensores",
    loadChildren: () =>
      import("../sensores/sensores.module").then(
        (m) => m.SensoresModule
      ),
  },
  {
    path: "usuarios",
    loadChildren: () =>
      import("../usuarios/usuarios.module").then(
        (m) => m.UsuariosModule
      ),
  },
  {
    path: "areas",
    loadChildren: () =>
      import("../areas/areas.module").then(
        (m) => m.AreasModule
      ),
  },
  {
    path: "culturas",
    loadChildren: () =>
      import("../culturas/culturas.module").then(
        (m) => m.CulturasModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
