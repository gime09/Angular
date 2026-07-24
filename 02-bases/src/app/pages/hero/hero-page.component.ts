
import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  // 1. Crear las dos señales con los valores iniciales
  name = signal('Ironman');
  age = signal(45);

  // 2. Señal computada (Se actualiza sola si cambia el nombre o la edad)
  heroDescription = computed(() => `${ this.name() } - ${ this.age() }`);

  // 3. Método changeHero
  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  // 4. Método resetForm
  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  // 5. Método changeAge
  changeAge() {
    this.age.set(60);
  }

  // EXTRA: Nombre capitalizado sin crear una nueva señal
  get capitalizedName(): string {
    return this.name().toUpperCase();
  }
}
