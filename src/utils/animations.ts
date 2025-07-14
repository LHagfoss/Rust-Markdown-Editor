import { gsap } from 'gsap';

interface MenuElements {
  menu: HTMLDivElement;
  links: HTMLUListElement;
  footer: HTMLDivElement;
}

export const initializeMenuState = (elements: MenuElements) => {
  gsap.set([elements.links.children, elements.footer], {
    opacity: 0,
    y: 50,
  });
};

export const openMenu = (elements: MenuElements) => {
  const tl = gsap.timeline();

  tl.to(elements.menu, {
    clipPath: 'circle(150% at calc(100% + 2.5rem) -2.5rem)',
    duration: 1.5,
    ease: 'power4.inOut',
  })
    .to(elements.links.children, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.1,
      ease: 'power2.out',
    }, '-=0.5')
    .to(elements.footer, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    }, '-=0.2');

  return tl;
};

export const closeMenu = (elements: MenuElements) => {
  const tl = gsap.timeline();

  gsap.set([elements.links.children, elements.footer], {
    opacity: 1,
    y: 0,
  });

  tl.to([...Array.from(elements.links.children)].reverse(), {
    y: -50,
    opacity: 0,
    duration: 0.3,
    stagger: 0.05,
    ease: 'power2.in',
  })
    .to(elements.footer, {
      y: -30,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
    }, '<0.2')
    .to(elements.menu, {
      clipPath: 'circle(0% at calc(100% + 2.5rem) -2.5rem)',
      duration: 1.5,
      ease: 'power3.inOut',
    }, '>-=0.3');

  return tl;
};