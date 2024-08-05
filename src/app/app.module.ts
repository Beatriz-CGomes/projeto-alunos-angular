import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { GridComponent } from './shared/grid/grid.component';
import { FooterComponent } from './shared/main/footer/footer.component';
import { BannerComponent } from './shared/banners/banner/banner.component';
import { CardAlunoComponent } from './shared/cards/card-aluno/card-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GridComponent,
    FooterComponent,
    BannerComponent,
    CardAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
