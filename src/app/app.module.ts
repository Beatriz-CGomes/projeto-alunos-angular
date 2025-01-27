import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/banners/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContainerComponent } from './shared/container/container.component';
import { CardComponent } from './shared/cards/card/card.component';
import { CardCursoComponent } from './shared/cards/card-curso/card-curso.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule} from '@angular/common/http';
import { CursosComponent } from './pages/home/cursos/cursos.component'

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContainerComponent,
    CardComponent,
    CardCursoComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
