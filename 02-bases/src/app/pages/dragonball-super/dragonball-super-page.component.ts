
import { Component, inject } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  standalone: true,
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [
    CharacterAddComponent,
    CharacterListComponent
  ],
})
export class DragonballSuperPageComponent {

  public dragonballService = inject(DragonballService);

  addCharacter(character: Character) {
    this.dragonballService.addCharacter(character);
  }

  characters() {
    return this.dragonballService.characters();
  }
}
