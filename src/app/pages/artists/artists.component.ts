import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";


@Component({
selector: 'app-artists',
standalone: true,
templateUrl: './artists.component.html',
styleUrls: ['./artists.component.css'],
imports: [RouterLink]
})
export class ArtistsComponent {
artists = [
{name:'Shefali (Head Artist)', info:'Certified artist - bridal & fashion', phone:'+'},
{name:'Anita', info:'Hair specialist', phone:'+'},
{name:'Riya', info:'Party & glam', phone:'+'}
];
}