<template>
  <header class="header">
    <div class="logo-section">
      <router-link to="/" class="logo-link">
        <h1 class="logo-main text-highlight">ESPORTS NEWS</h1>
        <p class="logo-sub text-secondary">Electronic Esport News</p>
      </router-link>
    </div>

    <div class="hamburger-menu" @click="toggleMobileMenu">
      <div class="bar" :class="{ 'open': isMobileMenuOpen }"></div>
      <div class="bar" :class="{ 'open': isMobileMenuOpen }"></div>
      <div class="bar" :class="{ 'open': isMobileMenuOpen }"></div>
    </div>

    <nav class="nav-section desktop-nav">
      <router-link to="/" class="nav-item">HOME</router-link>
      <router-link to="/freefire" class="nav-item">FREEFIRE</router-link>
      <router-link to="/rov" class="nav-item">ROV</router-link>
      <router-link to="/valorant" class="nav-item">VALORANT</router-link>
      <button class="theme-toggle desktop-only" @click="toggleTheme">
        <font-awesome-icon :icon="currentTheme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'" class="theme-icon" />
      </button>
    </nav>

    <div class="mobile-menu-overlay" v-show="isMobileMenuOpen" :class="{ 'open': isMobileMenuOpen }" @click="closeMobileMenu"></div>

    <transition name="slide-fade">
      <nav class="nav-section mobile-nav" v-if="isMobileMenuOpen">
          <router-link to="/" class="nav-item" @click="closeMobileMenu">HOME</router-link>
          <router-link to="/freefire" class="nav-item" @click="closeMobileMenu">FREEFIRE</router-link>
          <router-link to="/rov" class="nav-item" @click="closeMobileMenu">ROV</router-link>
          <router-link to="/valorant" class="nav-item" @click="closeMobileMenu">VALORANT</router-link>
          <button class="mobile-button mobile-only" @click="toggleTheme">
            <font-awesome-icon :icon="currentTheme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'" class="theme-icon" />
            <span>{{ currentTheme === 'light' ? 'DARK MODE' : 'LIGHT MODE' }}</span>
          </button>
      </nav>
    </transition>
  </header>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

library.add(faMoon, faSun);

export default {
  name: 'Header',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      isMobileMenuOpen: false,
      currentTheme: 'light' // Default theme
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
    toggleTheme() {
      this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', this.currentTheme);
    }
  },
  mounted() {
    // Set initial theme based on system preference or saved setting
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.currentTheme = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.currentTheme = 'dark';
    }
    document.documentElement.setAttribute('data-theme', this.currentTheme);

    // Close mobile menu if window is resized above mobile breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900 && this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
    });
  },
  watch: {
    currentTheme(newTheme) {
      localStorage.setItem('theme', newTheme);
    }
  }
};
</script>

<style scoped>
.header {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--shadow-base);
  position: fixed; /* Fixed header */
  width: 100%; /* Full width */
  top: 0;
  left: 0;
  z-index: 1000; /* Ensure it stays on top */
  box-sizing: border-box; /* Include padding in width calculation */
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logo-link {
  text-decoration: none;
  color: inherit;
}

.logo-main {
  font-size: 2.2em;
  font-weight: 700;
  margin: 0;
  line-height: 1;
  letter-spacing: 2px;
}

.logo-sub {
  font-size: 0.8em;
  margin: 5px 0 0 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav-section {
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav-item {
  color: var(--color-text-primary);
  text-decoration: none;
  font-size: 1.1em;
  position: relative;
  transition: color 0.3s ease;
}

.nav-item::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0;
  height: 2px;
  background-color: var(--color-highlight);
  transition: width 0.3s ease;
}

.nav-item:hover::after,
.nav-item.router-link-exact-active::after {
  width: 100%;
}

.nav-item:hover {
  color: var(--color-highlight);
}

.nav-item.router-link-exact-active {
  color: var(--color-highlight);
}

/* Theme Toggle Button */
.theme-toggle {
  background: none;
  border: none;
  color: var(--color-text-primary);
  font-size: 1.4em;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle:hover {
  color: var(--color-highlight);
  transform: scale(1.1);
}

.theme-icon {
  pointer-events: none; /* Prevent icon from interfering with click */
}

/* Hamburger Menu */
.hamburger-menu {
  display: none; /* Hidden by default on desktop */
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  z-index: 1001; /* Ensure it's above the overlay */
}

.hamburger-menu .bar {
  width: 100%;
  height: 3px;
  background-color: var(--color-text-primary);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.hamburger-menu .bar:nth-child(1).open {
  transform: translateY(8px) rotate(45deg);
}

.hamburger-menu .bar:nth-child(2).open {
  opacity: 0;
}

.hamburger-menu .bar:nth-child(3).open {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile Navigation Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  cursor: pointer;
  opacity: 0; /* Start hidden */
  visibility: hidden; /* Start hidden */
  transition: opacity 0.3s ease-out, visibility 0.3s ease-out;
}

.mobile-menu-overlay.open {
  opacity: 1;
  visibility: visible;
}

/* Mobile Navigation */
.mobile-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background-color: var(--color-bg-secondary);
  padding-top: 80px; /* Space for header content */
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.4);
  z-index: 999;
  align-items: flex-start;
  gap: 10px; /* Reduced gap for more compact menu */
  /* transform and transition properties are now handled by Vue's <transition> component */
}

.mobile-nav .nav-item {
  width: 100%;
  padding: 15px 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 1.3em;
  box-sizing: border-box; /* Include padding in width */
}

.mobile-nav .nav-item:last-child {
  border-bottom: none;
}

/* Mobile theme toggle */
.theme-toggle.mobile-only {
  display: none; /* Hidden by default */
}

.mobile-button {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 15px 25px;
  background: none;
  border: none;
  color: var(--color-text-primary);
  font-size: 1.2em;
  cursor: pointer;
}

.mobile-button span {
  margin-left: 10px;
  font-family: Kanit;
}

/* Responsive adjustments */
@media (max-width: 900px) { /* Tablet size and below */
  .header {
    padding: 15px 25px;
  }
  .logo-main {
    font-size: 2em;
  }
  .logo-sub {
    font-size: 0.7em;
  }
  .nav-section.desktop-nav {
    display: none; /* Hide desktop nav */
  }
  .hamburger-menu {
    display: flex; /* Show hamburger */
  }
  .theme-toggle.desktop-only {
    display: none; /* Hide desktop theme toggle */
  }
  .theme-toggle.mobile-only {
    display: flex; /* Show mobile theme toggle */
    padding: 15px 25px; /* Adjust padding for consistency with nav items */
    width: 100%;
    box-sizing: border-box; /* Include padding in width */
    justify-content: flex-start;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05); /* Add border for consistency */
  }
}

@media (max-width: 600px) { /* Mobile size and below */
  .header {
    padding: 10px 20px;
  }
  .logo-main {
    font-size: 1.8em;
  }
  .logo-sub {
    font-size: 0.6em;
  }
  .hamburger-menu {
    width: 25px;
    height: 18px;
  }
  .mobile-nav {
    width: 200px; /* Smaller width for smaller screens */
  }
}

/* General fade animation (if used elsewhere, otherwise can be removed) */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
  opacity: 1;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Slide-fade transition for mobile menu */
.slide-fade-enter-active {
  transition: transform 0.3s ease-out;
  opacity: 1;
}

.slide-fade-leave-active {
  transition: transform 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%); /* Start off-screen, end off-screen */
}
</style>