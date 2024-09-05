import { Component } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    constructor(private dbzService:DbzService) {

    }

    get getCharacters():ICharacter[] {
        return [...this.dbzService.characters];
    }


    onNewCharacter(character:ICharacter): void{
        this.dbzService.onNewCharacter(character)
    }   
    
    onDeleteCharacter(id:string):void{
        this.dbzService.onDeleteCharacter(id)
    }
}