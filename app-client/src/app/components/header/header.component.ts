import { Component, Input} from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  // isMaster: boolean = true;
  // isCandidate: boolean = true;

  user: string;
  
  @Input() Title: string;

  constructor(private httpService: HttpService, private router: Router) { }

  onLogout() {
    this.httpService.logout();
    this.router.navigate(['/login'])
  }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('currentUser'));
  }
  
}
