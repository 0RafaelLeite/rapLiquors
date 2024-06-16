import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CarrinhoComponent } from './pages/home/components/carrinho/carrinho.component';
import { PedidosComponent } from './pages/home/components/pedidos/pedidos.component';
import { ContaComponent } from './pages/home/components/conta/conta.component';
import { TopPageComponent } from './pages/home/components/top-page/top-page.component';
import { NavBarComponent } from './pages/home/components/nav-bar/nav-bar.component';
import { PopularesComponent } from './pages/home/components/populares/populares.component';
import { LowerPageComponent } from './pages/home/components/lower-page/lower-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BeveragesComponent } from './components/beverages/beverages.component';
import { UsersComponent } from './components/users/users.component';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      CarrinhoComponent,
      PedidosComponent,
      ContaComponent,
      TopPageComponent,
      NavBarComponent,
      PopularesComponent,
      LowerPageComponent,
      SignupComponent,
      BeveragesComponent,
      UsersComponent,
      OrdersComponent
      
    ],
    imports: [
      BrowserModule,
      RouterModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  