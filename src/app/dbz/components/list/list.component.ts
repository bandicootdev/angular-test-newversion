import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
})
export class ListDbzComponent { 
  
  @Input()
  public characterList : ICharacter[] = [];
  
  @Output()
  public onDeleteCharacter:EventEmitter<string>=new EventEmitter();


  public getCharacterIndex(id?:string) {
    this.onDeleteCharacter.emit(id);
  }
}
