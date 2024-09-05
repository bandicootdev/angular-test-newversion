import { Injectable } from "@angular/core";
import { ICharacter } from "../interfaces/character.interface";
import {v7 as uuid} from 'uuid';

@Injectable({
    providedIn:'root'
})

export class DbzService {
    public characters:ICharacter[]=[
        {
            id:uuid(),
            name:'Krillin',
            power:1000
        },
        {
            id:uuid(),
            name:'Goku',
            power: 9500
        },
        {
            id:uuid(),
            name:'Trunks',
            power:6500
        }
      ];
    
      onNewCharacter(character:ICharacter):void{
        const newCharacter:ICharacter = {...character, id:uuid()}
        this.characters.push(newCharacter);
      }
    
      onDeleteCharacter(id:string):void{
        const characterIndex:number= this.checkCharacterById(id);
        this.characters.splice(characterIndex ,1);
        this.characters=this.characters.filter((character)=> character.id !== id);
        
      }

      checkCharacterById(id:string):number{
        const characterindex = this.characters.findIndex((character)=> character.id === id);
        if(characterindex === undefined || characterindex === -1) throw new Error('Character not exists');
        return characterindex;
      }
}