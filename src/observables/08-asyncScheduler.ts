import { asyncScheduler } from 'rxjs';

const saludar = () => console.log('Hola Mundo');
const saludar2 = nombre => console.log(`Hola ${nombre}`);

//asyncScheduler.schedule( saludar, 2000 );
//asyncScheduler.schedule( saludar2, 2000, 'Eduardo' );

const subs = asyncScheduler.schedule( function(state) {
  console.log('state', state);
  this.schedule( state + 1, 1000 );
}, 3000, 0);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000)

asyncScheduler.schedule( () => {
  subs.unsubscribe();
}, 6000 )

/* const observer = {
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
console.log('Fin'); */