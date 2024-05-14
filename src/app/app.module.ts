import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CarrinhoComponent } from './pages/home/components/carrinho/carrinho.component';
import { PedidosComponent } from './pages/home/components/pedidos/pedidos.component';
import { ContaComponent } from './pages/home/components/conta/conta.component';
import { TopPageComponent } from './pages/home/components/top-page/top-page.component';
import { NavBarComponent } from './pages/home/components/nav-bar/nav-bar.component';


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
    ],
    imports: [
      BrowserModule,
      RouterModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  