import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LivrosComponent } from './livros/livros.component';
import { ContactComponent } from './contact/contact.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { LivrosEditComponent } from './livros/livros-edit/livros-edit.component';
import { LivrosListagemComponent } from './livros/livros-listagem/livros-listagem.component';
import { AuthGuard } from './servicos/auth-guard.service';
import { NotFoundComponent } from './error-pages/not-found.component';
import { ForbiddenComponent } from './error-pages/forbidden.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { EditUsuarioComponent } from './minha-conta/altera-dados/altera-dados.component';
import { AlteraSenhaComponent } from './minha-conta/altera-senha/altera-senha.component';
import { MenuUsuarioComponent } from './minha-conta/menu-usuario/menu-usuario.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'livros', component: LivrosComponent, canActivate: [AuthGuard], children:[
    {path: '', component: LivrosListagemComponent, pathMatch: "full"},
    {path: 'novo', component: LivrosEditComponent},
    {path: 'edit/:id', component: LivrosEditComponent}
  ]},
  {path: 'sobre', component: SobreComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'minha-conta', component: MinhaContaComponent, canActivate: [AuthGuard], children:[
    {path: '', component: MenuUsuarioComponent, pathMatch: "full"},
    {path: 'altera-dados', component: EditUsuarioComponent},
    {path: 'altera-senha', component: AlteraSenhaComponent},
  ]},
  {path: '404', component: NotFoundComponent},
  {path: 'acesso-negado', component: ForbiddenComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
