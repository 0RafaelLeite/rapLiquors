import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ContaComponent } from './pages/conta/conta.component';
import { TopPageComponent } from './pages/top-page/top-page.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { ItensComponent } from './components/item/item.component';
import { LowerPageComponent } from './pages/lower-page/lower-page.component';

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