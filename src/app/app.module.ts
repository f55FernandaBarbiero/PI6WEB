import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppHeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LivrosComponent } from './livros/livros.component';
import { ContactComponent } from './contact/contact.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { LivrosListagemComponent } from './livros/livros-listagem/livros-listagem.component';
import { SobreComponent } from './sobre/sobre.component';
import { LivrosEditComponent } from './livros/livros-edit/livros-edit.component';
import { AuthService } from './servicos/auth.service';
import { CadastroService } from './servicos/cadastro.service';
import { AuthGuard } from './servicos/auth-guard.service';
import { NotFoundComponent } from './error-pages/not-found.component';
import { ForbiddenComponent } from './error-pages/forbidden.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { EditUsuarioComponent } from './minha-conta/altera-dados/altera-dados.component';
import { AlteraSenhaComponent } from './minha-conta/altera-senha/altera-senha.component';
import { MenuUsuarioComponent } from './minha-conta/menu-usuario/menu-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    FooterComponent,
    NavBarComponent,
    HomeComponent,
    LivrosComponent,
    SobreComponent,
    ContactComponent,
    CadastroComponent,
    LoginComponent,
    LivrosListagemComponent,
    LivrosEditComponent,
    NotFoundComponent,
    ForbiddenComponent,
    MinhaContaComponent,
    EditUsuarioComponent,
    AlteraSenhaComponent,
    MenuUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService, CadastroService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
