import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CarrinhoComponent } from './pages/home/components/carrinho/carrinho.component';
import { PedidosComponent } from './pages/home/components/pedidos/pedidos.component';
import { ContaComponent } from './pages/home/components/conta/conta.component';
import { TopPageComponent } from './pages/home/components/top-page/top-page.component';
import { NavBarComponent } from './pages/home/components/nav-bar/nav-bar.component';

export const routes: Routes = [
    {path: "", redirectTo: "/login", pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {
      path: "home", component: HomeComponent,
        children: [
            {path: "top-page", component: TopPageComponent},
            {path: "", component: NavBarComponent},
            {path: "nav-bar", component: NavBarComponent},
            {path: "carrinho", component: CarrinhoComponent},
            {path: "pedidos", component: PedidosComponent},
            {path: "conta", component: ContaComponent},
        ],
    },
  ]

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }