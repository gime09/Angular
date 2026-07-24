
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  standalone: true,
  selector: 'dragonball-character-add',
  templateUrl: './character-add.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  @Output() newCharacter = new EventEmitter<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const character: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    this.newCharacter.emit(character);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
