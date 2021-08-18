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
import { UserComponent } from './Components/header-components/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './Components/home/home.component';

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
    UserComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
