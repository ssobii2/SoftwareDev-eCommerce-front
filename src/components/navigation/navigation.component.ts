import { Component } from '@angular/core';
import { User } from 'src/models/user.model';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
    /**
     * The logged in user. Null, if there is no logged in user.
     */
    public user?: User = {
        firstName: 'John',
        lastName: 'Doe'
    };

    /**
     * Get the display name of the logged in user. First name abbreviated (e.g. John Doe -> J. Doe).
     * @returns
     */
    public getDisplayName(): string {
        let name: string = '';

        if (this.user) {
            name = this.user.firstName[0].toUpperCase();
            name += '. ';
            name += this.user.lastName;
        }

        return name;
    }
}
