import { Component } from '@angular/core';
import { appRouterProviders } from './app.routes';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RouterModule } from "@angular/router";


@Component({
selector: 'app-root',
standalone: true,
imports: [HeaderComponent, FooterComponent, RouterModule],
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {}