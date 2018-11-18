import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicos/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogoff()
  {
    this.authService.Logoff();
  }
}
