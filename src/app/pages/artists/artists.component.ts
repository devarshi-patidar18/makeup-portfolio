import { Component } from '@angular/core';


@Component({
selector: 'app-artists',
standalone: true,
templateUrl: './artists.component.html',
styleUrls: ['./artists.component.css']
})
export class ArtistsComponent {
artists = [
{name:'Shefali (Head Artist)', info:'Certified artist - bridal & fashion', phone:'+'},
{name:'Anita', info:'Hair specialist', phone:'+'},
{name:'Riya', info:'Party & glam', phone:'+'}
];
}