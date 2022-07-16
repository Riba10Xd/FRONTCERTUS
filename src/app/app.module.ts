import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarpersonaComponent } from './listarpersona/listarpersona.component';
import { HttpClientModule} from '@angular/common/http';
import { RegistrarpersonaComponent } from './registrarpersona/registrarpersona.component';
import { FormsModule } from '@angular/forms';
import { ModificarpersonaComponent } from './modificarpersona/modificarpersona.component';
import { DeletepersonaComponent } from './deletepersona/deletepersona.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarpersonaComponent,
    RegistrarpersonaComponent,
    ModificarpersonaComponent,
    DeletepersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
