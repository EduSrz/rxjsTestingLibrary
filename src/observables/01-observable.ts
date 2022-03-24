import { Observable, Observer } from 'rxjs';

const observer:Observer<any> = {
  next: valor => console.log('siguiente [next]: ', valor),
  error: error => console.error('error [obs]:', error),
  complete: () => console.info('complete [obs]')
}

const obs$ = new Observable<string>( subs => {
  subs.next('Hola');
  subs.next('Mundo');

  subs.next('Hola');
  subs.next('Mundo');

  //Forzar un error
  // const a = undefined;
  // a.nombre = 'Fernando'

  subs.complete();

  subs.next('Hola');
  subs.next('Mundo');

} );

obs$.subscribe( observer );

// obs$.subscribe(
//   valor => console.log('next: ', valor),
//   error => console.error('error: ', error),
//   () => console.info('complete')
// );