import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ContaComponent } from './pages/conta/conta.component';
import { TopPageComponent } from './pages/top-page/top-page.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { LowerPageComponent } from './pages/lower-page/lower-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ItensComponent } from './components/item/item.component';
import { UsersComponent } from './components/users/users.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ItemService } from './components/item/item.service';

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
      LowerPageComponent,
      SignupComponent,
      ItensComponent,
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
    providers: [ItemService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
