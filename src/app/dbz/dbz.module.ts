import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListDbzComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainPageComponent, ListDbzComponent, AddCharacterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[MainPageComponent]
})
export class DbzModule { }
