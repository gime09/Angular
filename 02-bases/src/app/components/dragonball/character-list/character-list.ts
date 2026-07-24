import { Component, Input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  standalone: true,
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterListComponent {
  @Input() characters: Character[] = [];
  @Input() listName = '';
}
