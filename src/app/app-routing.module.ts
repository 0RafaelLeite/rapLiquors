import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { TopPageComponent } from './pages/top-page/top-page.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { ItensComponent } from './components/itens/itens.component';
import { LowerPageComponent } from './pages/lower-page/lower-page.component';
import { AuthGuard } from './services/auth.guard';


export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "top-page", component: TopPageComponent },
      { path: "", component: NavBarComponent },
      { path: "nav-bar", component: NavBarComponent },
      { path: "carrinho", component: CarrinhoComponent },
      { path: "pedidos", component: PedidosComponent },
      { path: "populares", component: ItensComponent },
      { path: "lower", component: LowerPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
