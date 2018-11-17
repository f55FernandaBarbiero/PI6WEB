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
    LivrosEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService, CadastroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
