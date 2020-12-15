import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PartfooterComponent } from './partfooter/partfooter.component';
import { PartnavComponent } from './partnav/partnav.component';
import { PartmenuComponent } from './partmenu/partmenu.component';
import { HttpClientModule } from '@angular/common/http';
import { PartjumbotronComponent } from './partjumbotron/partjumbotron.component';
import { PartbreadcrumbComponent } from './partbreadcrumb/partbreadcrumb.component';
import { RecursiveTreeComponent } from './playground/recursive-tree/recursive-tree.component';
import { MycomponentComponent } from './shared/components/mycomponent/mycomponent.component';
import { MydirectiveDirective } from './shared/directives/mydirective.directive';
import { MypipePipe } from './shared/pipes/mypipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CategoryPageComponent,
    ProductPageComponent,
    CartPageComponent,
    ContactPageComponent,
    PartfooterComponent,
    PartnavComponent,
    PartmenuComponent,
    PartfooterComponent,
    PartjumbotronComponent,
    PartbreadcrumbComponent,
    RecursiveTreeComponent,
    MycomponentComponent,
    MydirectiveDirective,
    MypipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
