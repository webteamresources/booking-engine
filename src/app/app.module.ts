import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule  } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { SubNavbarComponent } from './header/sub-navbar/sub-navbar.component';
import { BannerComponent } from './header/banner/banner.component';
import { WidgetComponent } from './widget/widget.component';
import { FooterComponent } from './footer/footer.component';
import { FloatingBtnsComponent } from './header/floating-btns/floating-btns.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    SubNavbarComponent,
    BannerComponent,
    WidgetComponent,
    FooterComponent,
    FloatingBtnsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
