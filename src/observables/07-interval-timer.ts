import { interval, timer } from 'rxjs';

const observer = {
  next: val => console.log('next:', val),
  complete: () => console.log('complete')
}

const interval$ = interval(1000);
const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5);

const timer$ = timer(hoyEn5);

console.log('Inicnio');
//interval$.subscribe( observer );
timer$.subscribe( observer )
console.log('Fin');