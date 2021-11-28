import { ModificarProgresosComponent } from './Progresos/modificar-progresos/modificar-progresos.component';

import { MostarDietasComponent } from './Dietas/mostar-dietas/mostar-dietas.component';
import { ModificarDietasComponent } from './Dietas/modificar-dietas/modificar-dietas.component';
import { AgregarDietasComponent } from './Dietas/agregar-dieta/agregar-dietas.component';

import { AuthGuard } from './auth.guard';
import { LoginFormularioComponent } from './public/login-formulario/login-formulario.component';

import { MostrarEntrenadorComponent } from './Entrenador/mostrar-entrenador/mostrar-entrenador.component';
import { AgregarEntrenadorComponent } from './Entrenador/agregar-entrenador/agregar-entrenador.component';
import { ModificarEntrenadorComponent } from './Entrenador/modificar-entrenador/modificar-entrenador.component';

import { ModificarComponent } from './Clientes/modificar/modificar.component';
import { AgregarComponent } from './Clientes/agregar/agregar.component';
import { MostrarComponent } from './Clientes/mostrar/mostrar.component';

import { EditarFormularioComponent } from './personas/editar-formulario/editar-formulario.component';
import { MiTablaComponent } from './personas/mi-tabla/mi-tabla.component';
import { MiFormularioComponent } from './personas/mi-formulario/mi-formulario.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MostrarEntrenosComponent } from './Entrenos/mostrar-entrenos/mostrar-entrenos.component';
import { AgregarEntrenosComponent } from './Entrenos/agregar-entrenos/agregar-entrenos.component';
import { ModificarEntrenosComponent } from './Entrenos/modificar-entrenos/modificar-entrenos.component';

import { MostrarProgresosComponent } from './Progresos/mostrar-progresos/mostrar-progresos.component';
import { AgregarProgresosComponent } from './Progresos/agregar-progresos/agregar-progresos.component';

const routes: Routes = [
  {path: '', component:  LoginFormularioComponent},
  {path: 'login', component:  LoginFormularioComponent},

  {path: 'personas', component:  MiTablaComponent, canActivate:[AuthGuard]},
  {path: 'agregar', component: MiFormularioComponent},
  {path: 'edit/:id', component: EditarFormularioComponent},

  {path: 'Clientes', component: MostrarComponent, canActivate:[AuthGuard]},
  {path: 'agregarClientes', component: AgregarComponent},
  {path: 'editar/:id', component: ModificarComponent},

  {path: 'Entrenador', component: MostrarEntrenadorComponent, canActivate:[AuthGuard]},
  {path: 'agregar-Entrenador', component: AgregarEntrenadorComponent},
  {path: 'editar-Entrenador/:id', component: ModificarEntrenadorComponent},

  {path: 'Dietas', component: MostarDietasComponent, canActivate:[AuthGuard]},
  {path: 'agregar-Dietas', component: AgregarDietasComponent},
  {path: 'editar-Dietas/:id', component: ModificarDietasComponent},

  {path: 'Entrenos', component: MostrarEntrenosComponent, canActivate:[AuthGuard]},
  {path: 'agregar-Entrenos', component: AgregarEntrenosComponent},
  {path: 'editar-Entrenos/:id', component: ModificarEntrenosComponent},

  {path: 'Progresos', component: MostrarProgresosComponent, canActivate:[AuthGuard]},
  {path: 'agregar-Progresos', component: AgregarProgresosComponent},
  {path: 'editar-Progresos/:id', component: ModificarProgresosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
