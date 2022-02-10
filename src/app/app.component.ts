import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgSimpleSidebarService, SimpleSidebarItem, SimpleSidebarPosition } from 'ng-simple-sidebar';
import { Theme, MenuOptions, NgxMatMenuService } from 'ngx-mat-menu';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'pecas';

    themeSidebar: Theme;
    themeHeader: Theme;
    arrMenuOptions: MenuOptions[];
    headerText: string;
    badgeColor: any;
    loginRoute: string;
    headerIcon: string;
    srcLogo: string;
    heightLogo: string;
    widthLogo: string;

    constructor(
        private router: Router,
        private menuService: NgxMatMenuService,
    ) {
        this.themeSidebar = { background: "#ff7f00ff", color: "white" };
        this.themeHeader = { background: "white", color: "gray" };
        this.arrMenuOptions = [
            { id: 0, title: "Início", icon: 'home', route: "home" }, // example component to navigate
        ];
        this.heightLogo = '50px';
        this.srcLogo = "assets/imagens/moto-logo2.png";
    }
    
    ngOnInit(): void {
        this.menuService.changeMenu(true);
    }

    logout() {
        this.router.navigate(['']);
    }
}
