<template>
  <header class="header">
    <div class="logo-section">
      <router-link to="/" class="logo-link">
        <h1 class="logo-main">ESPORTS NEWS</h1>
        <p class="logo-sub text-secondary">Electronic Esport News</p>
      </router-link>
    </div>
    <nav class="nav-section">
      <router-link to="/" class="nav-item">HOME</router-link>
      <router-link to="/freefire" class="nav-item">FREEFIRE</router-link>
      <router-link to="/rov" class="nav-item">ROV</router-link>
      <router-link to="/valorant" class="nav-item">VALORANT</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: var(--color-bg-primary); /* Darkest background for header */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 40px; /* นี้คือส่วนที่กำหนดความสูงหลัก */
  color: var(--color-text-primary);
  flex-wrap: wrap;

  /* Fixed Header Styles */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: var(--shadow-primary);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05); /* Subtle bottom border */
}

.logo-section {
  text-align: left;
  flex-shrink: 0;
}

.logo-link {
  text-decoration: none;
  color: inherit; /* Inherit color from parent */
  display: block;
}

.logo-main {
  font-size: 2.5em; /* Slightly smaller for cleaner look */
  margin: 0;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--color-highlight); /* Highlight color for main logo */
}

.logo-sub {
  font-size: 0.9em;
  margin: 0;
  opacity: 0.9;
  font-weight: 400;
}

.nav-section {
  display: flex;
  gap: 30px; /* Adjust gap */
  flex-wrap: wrap;
  justify-content: flex-end;
}

.nav-item {
  color: var(--color-text-secondary); /* Softer initial color */
  text-decoration: none;
  font-size: 1.1em; /* Slightly smaller */
  font-weight: 400; /* Regular weight */
  padding: 8px 0; /* Add padding for click area */
  transition: color 0.3s ease, transform 0.2s ease, background-color 0.3s ease; /* Smooth transitions */
  position: relative;
}

.nav-item::after { /* Underline effect from awayfromus.dev */
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
  transform: translateY(-2px); /* Slight lift on hover */
}

.nav-item:hover::after {
  width: 100%;
}

.router-link-exact-active.nav-item {
  color: var(--color-highlight) !important; /* Force highlight color */
  font-weight: 500; /* Medium weight for active */
}
.router-link-exact-active.nav-item::after {
  width: 100%; /* Active link always has underline */
}


/* --- Responsive Styles for Header --- */

@media (max-width: 900px) {
  .header {
    padding: 15px 25px;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .logo-main {
    font-size: 2em;
  }

  .logo-sub {
    font-size: 0.8em;
  }

  .nav-section {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    width: 100%;
  }

  .nav-item {
    font-size: 1em;
    padding: 5px 0;
    width: 100%;
  }

  .nav-item::after { /* Make underline less prominent on mobile if desired */
    height: 1px;
  }
}

@media (max-width: 600px) {
  .header {
    padding: 12px 15px;
  }

  .logo-main {
    font-size: 1.8em;
  }

  .logo-sub {
    font-size: 0.7em;
  }

  .nav-item {
    font-size: 0.95em;
  }
}
</style>