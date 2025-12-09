import { Component } from '@angular/core';


@Component({
    selector: 'app-services',
    standalone: true,
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent {
    services = [
        { title: 'Bridal Makeup', desc: 'Full bridal look with trials' },
        { title: 'Party Makeup', desc: 'Glam looks for parties & events' },
        { title: 'Photoshoot Makeup', desc: 'Studio and outdoor shoots' },
        { title: 'Hair Styling', desc: 'Curls, updos, extensions & more' },
        { title: 'Makeup Training', desc: 'Beginner to advanced course with certification' },
    ];
}