const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  // Active le mode sombre basé sur la classe
  darkMode: 'class',

  // Purge les classes CSS inutilisées en production
  content: [
    './templates/**/*.html', // Fichiers HTML dans le dossier templates
    './static/js/**/*.js',   // Fichiers JavaScript dans le dossier static/js
  ],

  // Options de personnalisation
  theme: {
    extend: {
      // Couleurs personnalisées (futuristes et paradisiaques)
      colors: {
        'primary': '#64ffda', // Cyan néon
        'secondary': '#0a192f', // Bleu nuit profond
        'accent': '#ff6347', // Orange vif
        'paradise-blue': '#00e5ff', // Bleu paradisiaque
        'paradise-pink': '#ff00ff', // Rose paradisiaque
        'paradise-purple': '#9400d3', // Violet paradisiaque
        'dark': '#0a192f', // Fond sombre
        'light': '#ccd6f6', // Texte clair
        'neon-green': '#39ff14', // Vert néon
        'neon-yellow': '#fff01f', // Jaune néon
      },
      // Polices personnalisées (futuristes)
      fontFamily: {
        sans: ['Orbitron', ...defaultTheme.fontFamily.sans], // Police technologique
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono], // Police pour le code
      },
      // Animations personnalisées (fluides et futuristes)
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'neon-glow': 'neon-glow 2s ease-in-out infinite alternate',
      },
      // Keyframes pour les animations personnalisées
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'neon-glow': {
          '0%': { boxShadow: '0 0 5px #64ffda, 0 0 10px #64ffda, 0 0 20px #64ffda' },
          '100%': { boxShadow: '0 0 10px #64ffda, 0 0 20px #64ffda, 0 0 40px #64ffda' },
        },
      },
      // Effets de texte (futuristes)
      textShadow: {
        'neon': '0 0 5px #64ffda, 0 0 10px #64ffda, 0 0 20px #64ffda',
      },
    },
  },

  // Plugins supplémentaires
  plugins: [
    require('daisyui'), // Intègre DaisyUI
    require('@tailwindcss/typography'), // Ajoute des styles typographiques
    require('@tailwindcss/forms'), // Ajoute des styles pour les formulaires
    require('tailwindcss-animate'), // Ajoute des animations personnalisées
      require('tailwindcss-text-fill-stroke'),
  ],

  // Configuration de DaisyUI (optionnel)
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#64ffda", // Cyan néon
          "secondary": "#0a192f", // Bleu nuit profond
          "accent": "#ff6347", // Orange vif
          "neutral": "#1f2937", // Gris foncé
          "base-100": "#0a192f", // Fond sombre
          "info": "#3b82f6", // Bleu info
          "success": "#10b981", // Vert succès
          "warning": "#f59e0b", // Jaune avertissement
          "error": "#ef4444", // Rouge erreur
        },
      },
    ],
  },
};