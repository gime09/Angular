
import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

// @Injectable({providedIn: 'root'})


const loadFromLocalStorage = (): Character[] => {
  const character = localStorage.getItem('characters');


  return character ? JSON.parse(character) : [];
}


@Injectable({  providedIn: 'root'})

export class DragonballService {

  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));

  });

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }

}

// crear la misma instacia del servicio
