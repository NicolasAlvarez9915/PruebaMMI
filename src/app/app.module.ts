import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { MaterialModule } from './Shared/Modules/Material/material.module';
import {MatToolbarModule} from "@angular/material/toolbar";
import { HomeComponent } from './core/components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from "@angular/material/tabs";
import { TabPromotorCasaComponent } from './core/components/home/components/tab-promotor-casa/tab-promotor-casa.component';
import { SoyPromotorComponent } from './core/components/home/components/soy-promotor/soy-promotor.component';
import {CasaDeProductoComponent} from "./Core/components/Home/components/casa-de-producto/casa-de-producto.component";
import { FooterComponent } from './core/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TabPromotorCasaComponent,
    SoyPromotorComponent,
    CasaDeProductoComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        NgbModule,
        MatTabsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
