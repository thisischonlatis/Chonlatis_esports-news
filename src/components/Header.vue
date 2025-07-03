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

    <nav class="nav-section desktop-nav" style="margin-right: 5%;">
      <router-link to="/" class="nav-item">HOME</router-link>
      <router-link to="/freefire" class="nav-item">FREEFIRE</router-link>
      <router-link to="/rov" class="nav-item">ROV</router-link>
      <router-link to="/valorant" class="nav-item">VALORANT</router-link>
    </nav>

    <div class="mobile-menu-overlay" v-if="isMobileMenuOpen" @click="closeMobileMenu"></div>

    <nav class="nav-section mobile-nav" v-if="isMobileMenuOpen">
        <router-link to="/" class="nav-item">HOME</router-link>
        <router-link to="/freefire" class="nav-item">FREEFIRE</router-link>
        <router-link to="/rov" class="nav-item">ROV</router-link>
        <router-link to="/valorant" class="nav-item">VALORANT</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      if (this.isMobileMenuOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      document.body.classList.remove('no-scroll');
    }
  },
  watch: {
    '$route'() {
      if (this.isMobileMenuOpen) {
        // ยังคงมี setTimeout เผื่อไว้สำหรับการปิดจาก route change เพื่อหลีกเลี่ยง race conditions
        setTimeout(() => {
          this.closeMobileMenu();
        }, 50);
      }
    }
  },
  beforeUnmount() {
    document.body.classList.remove('no-scroll');
  }
};
</script>

<style scoped>
/* Header.vue Styles */
.header {
  background-color: var(--color-bg-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 40px;
  color: var(--color-text-primary);
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: var(--shadow-header);
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logo-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.logo-main {
  font-family: 'Kanit', sans-serif;
  font-size: 2.2em;
  font-weight: 700;
  color: var(--color-highlight); /* สีชมพู highlight */
  margin: 0;
  line-height: 1;
}

.logo-sub {
  font-family: 'Kanit', sans-serif;
  font-size: 0.7em;
  font-weight: 400;
  margin-top: 2px;
  opacity: 0.8;
}

/* Desktop Navigation */
.nav-section {
  display: flex;
  gap: 30px;
}

.nav-item {
  font-family: 'Kanit', sans-serif;
  font-size: 1.1em;
  font-weight: 400;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
  padding-bottom: 5px;
  position: relative;
}

.nav-item::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-highlight);
  transition: width 0.3s ease;
}

.nav-item:hover {
  color: var(--color-highlight);
  transform: translateY(-2px);
}

.nav-item:hover::after {
  width: 100%;
}

.router-link-exact-active.nav-item {
  color: var(--color-highlight) !important;
  font-weight: 500;
}
.router-link-exact-active.nav-item::after {
  width: 100%;
}


/* --- Mobile Styles --- */

.desktop-nav {
  display: flex;
}
.hamburger-menu {
  display: none;
}
.mobile-nav {
  display: none;
}


@media (max-width: 900px) {
  .header {
    padding: 15px 25px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  }

  .logo-main {
    font-size: 2em;
  }

  .desktop-nav {
    display: none;
  }

  .hamburger-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    cursor: pointer;
    z-index: 1001;
    padding: 5px;
    margin-right: 5%;
  }

  .hamburger-menu .bar {
    width: 100%;
    height: 3px;
    background-color: var(--color-text-primary);
    transition: all 0.3s ease-in-out;
    border-radius: 2px;
    position: relative;
    margin-right: 5%;
  }

  /* Hamburger to X animation */
  .hamburger-menu .bar:nth-child(2).open {
    opacity: 0;
  }
  .hamburger-menu .bar:nth-child(1).open {
    transform: translateY(6px) rotate(45deg);
  }
  .hamburger-menu .bar:nth-child(3).open {
    transform: translateY(-11px) rotate(-45deg);
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
    margin-right: 5%;
  }

  /* Mobile Navigation (No slide transition) */
  .mobile-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100vh;
    background-color: var(--color-bg-secondary);
    padding-top: 80px;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.4);
    z-index: 999;
    align-items: flex-start;
    gap: 20px;
    /* When v-if is false, it's not in DOM. When v-if is true, it appears. */
    /* No explicit transform is needed for instant appearance, as v-if handles display */
  }

  .mobile-nav .nav-item {
    width: 100%;
    padding: 15px 25px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    font-size: 1.3em;
  }
  .mobile-nav .nav-item:last-child {
    border-bottom: none;
  }
}

/* Further responsive adjustments for smaller screens */
@media (max-width: 600px) {
  .header {
    padding: 10px 15px;
  }
  .logo-main {
    font-size: 1.8em;
  }
  .logo-sub {
    font-size: 0.65em;
  }
  .mobile-nav {
    width: 220px;
  }
}
</style>