import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header-components/header/header.component';
import { BestProductComponent } from './Components/header-components/best-product/best-product.component';
import { ProductComponent } from './Components/body/product/product.component';
import { BrandComponent } from './Components/body/brand/brand.component';
import { IssueComponent } from './Components/body/issue/issue.component';
import { FooterComponent } from './Components/footer/footer/footer.component';
import { FooterMenuComponent } from './Components/footer/footer-menu/footer-menu.component';
import { MenuComponent } from './Components/header-components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BestProductComponent,
    ProductComponent,
    BrandComponent,
    IssueComponent,
    FooterComponent,
    FooterMenuComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
