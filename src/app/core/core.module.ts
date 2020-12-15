import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FooterComponent } from './footer/footer.component';
import { GuardsComponent } from './guards/guards.component';
import { HttpComponent } from './http/http.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';
import { MocksComponent } from './mocks/mocks.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [AuthenticationComponent, FooterComponent, GuardsComponent, HttpComponent, InterceptorsComponent, MocksComponent, HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
