import { InterceptorService } from './services/interceptor.service';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MiTablaComponent } from './personas/mi-tabla/mi-tabla.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MiFormularioComponent } from './personas/mi-formulario/mi-formulario.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarFormularioComponent } from './personas/editar-formulario/editar-formulario.component';

import { MostrarComponent } from './Clientes/mostrar/mostrar.component';
import { AgregarComponent } from './Clientes/agregar/agregar.component';
import { ModificarComponent } from './Clientes/modificar/modificar.component';

import { MostrarEntrenadorComponent } from './Entrenador/mostrar-entrenador/mostrar-entrenador.component';
import { AgregarEntrenadorComponent } from './Entrenador/agregar-entrenador/agregar-entrenador.component';
import { ModificarEntrenadorComponent } from './Entrenador/modificar-entrenador/modificar-entrenador.component';

import { LoginFormularioComponent } from './public/login-formulario/login-formulario.component';

import { MostarDietasComponent } from './Dietas/mostar-dietas/mostar-dietas.component';
import { AgregarDietasComponent } from './Dietas/agregar-dieta/agregar-dietas.component';
import { ModificarDietasComponent } from './Dietas/modificar-dietas/modificar-dietas.component';

import { MostrarEntrenosComponent } from './Entrenos/mostrar-entrenos/mostrar-entrenos.component';
import { AgregarEntrenosComponent } from './Entrenos/agregar-entrenos/agregar-entrenos.component';
import { ModificarEntrenosComponent } from './Entrenos/modificar-entrenos/modificar-entrenos.component';

import { MostrarProgresosComponent } from './Progresos/mostrar-progresos/mostrar-progresos.component';
import { AgregarProgresosComponent } from './Progresos/agregar-progresos/agregar-progresos.component';
import { ModificarProgresosComponent } from './Progresos/modificar-progresos/modificar-progresos.component';

import { FormularioAgregarRutinasComponent } from './rutinas/formulario-agregar-rutinas/formulario-agregar-rutinas.component';
import { FormularioModificarRutinasComponent } from './rutinas/formulario-modificar-rutinas/formulario-modificar-rutinas.component';
import { MostrarTablaRutinasComponent } from './rutinas/mostrar-tabla-rutinas/mostrar-tabla-rutinas.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MiTablaComponent,
    MiFormularioComponent,
    EditarFormularioComponent,
    MostrarComponent,
    AgregarComponent,
    ModificarComponent,

    MostrarEntrenadorComponent,
    AgregarEntrenadorComponent,
    ModificarEntrenadorComponent,

    LoginFormularioComponent,

    MostarDietasComponent,
    AgregarDietasComponent,
    ModificarDietasComponent,

    MostrarEntrenosComponent,
    AgregarEntrenosComponent,
    ModificarEntrenosComponent,

    MostrarProgresosComponent,
    AgregarProgresosComponent,
    ModificarProgresosComponent,

    FormularioAgregarRutinasComponent,
    FormularioModificarRutinasComponent,
    MostrarTablaRutinasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
