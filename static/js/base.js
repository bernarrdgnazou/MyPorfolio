// Initialiser Vanta.js
const vantaEffect = VANTA.NET({
  el: '#vanta-background', // ID de l'élément où l'effet sera appliqué
  color: 0x64ffda, // Couleur principale
  backgroundColor: 0x0a192f, // Couleur de fond
  points: 12, // Nombre de points
  maxDistance: 20, // Distance maximale entre les points
});

// Nettoyer l'effet lors de la fermeture de la page
window.addEventListener('beforeunload', () => {
  vantaEffect.destroy();
});

// Initialiser GSAP
gsap.from('h1', {
  duration: 1.5,
  opacity: 0,
  y: -50,
  ease: 'power2.out',
});

gsap.from('.btn', {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.2, // Délai entre chaque élément
});

// Initialiser AOS
AOS.init({
  duration: 1000, // Durée des animations
  once: true, // Les animations ne se jouent qu'une fois
});



import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialiser AOS
AOS.init({
  duration: 1000, // Durée des animations
  once: true, // Les animations ne se jouent qu'une fois
});

