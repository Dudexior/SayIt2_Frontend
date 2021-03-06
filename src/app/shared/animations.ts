import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';

export const slideHeight = trigger('slideHeight', [
  state('void', style({
    height: '0px',
    overflow: 'hidden'
  })),
  state('*', style({
    height: '*',
    overflow: 'hidden'
  })),

  transition('* <=> void', [
    animate(200)
  ])
]);

export const staggerScale = trigger('staggerScale', [
  transition('* => *', [
    query(':enter', [
      style({ transform: 'scale(0)' }),
      stagger(100, animate(400, style({ transform: 'scale(1)' })))
    ]),
    query(':leave', animate(50, style({ transform: 'scale(0)' })), {
      optional: true
    })
  ])
]);

export const opacityInOut = trigger('opacityInOut', [
  state('void', style({
    opacity: 0
  })),
  state('*', style({
    opacity: 1,
  })),

  transition('* <=> void', [
    animate(200)
  ])
]);

export const scaleInOut = trigger('scaleInOut', [
  state('void', style({
    transform: 'scale(0)'
  })),
  state('*', style({
    transform: 'scale(1)'
  })),

  transition('* <=> void', [
    animate(200)
  ])
]);

export const cookiesSlide = trigger('cookiesSlide', [
  state('void', style({
    bottom: '-100px'
  })),
  state('*', style({
    bottom: '50px'
  })),

  transition('* <=> void', [
    animate(400)
  ])
]);
