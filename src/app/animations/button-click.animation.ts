import { animation, animate, keyframes, style } from '@angular/animations';

export const buttonClickAnimation = animation([
    animate('{{ time }} ease-out', keyframes([
        style({ transform: 'scale({{ firstScale }})', offset: 0 }),
        style({ transform: 'scale({{ secondScale }})', offset: 0.5 }),
        style({ transform: 'scale({{ firstScale }})', offset: 1 })
    ]))
]);
