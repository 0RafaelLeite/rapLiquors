import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CarrinhoComponent } from './pages/home/components/carrinho/carrinho.component';
import { PedidosComponent } from './pages/home/components/pedidos/pedidos.component';
import { ContaComponent } from './pages/home/components/conta/conta.component';
import { TopPageComponent } from './pages/home/components/top-page/top-page.component';
import { NavBarComponent } from './pages/home/components/nav-bar/nav-bar.component';
import { ItensComponent } from '../app/itens/itens.component';
import { LowerPageComponent } from './pages/home/components/lower-page/lower-page.component';

export const routes: Routes = [
    {path: "", redirectTo: "/login", pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "signup", component: SignupComponent},
    {
      path: "home", component: HomeComponent,
        children: [
            {path: "top-page", component: TopPageComponent},
            {path: "", component: NavBarComponent},
            {path: "nav-bar", component: NavBarComponent},
            {path: "carrinho", component: CarrinhoComponent},
            {path: "pedidos", component: PedidosComponent},
            {path: "conta", component: ContaComponent},
            {path: "populares", component: ItensComponent},
            {path: "lower", component: LowerPageComponent},
            
        ],
    },
  ]

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }