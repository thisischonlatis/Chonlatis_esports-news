<template>
  <div class="home-page-layout">
    <section class="hero-section">
      <div class="hero-content">
        <h2 class="hero-title text-highlight">ESPORTS NEWS</h2>
        <p class="hero-subtitle">Your source for the latest updates in competitive gaming.</p>
        <p class="hero-tagline text-secondary">We deliver the greatest esports experience.</p>
      </div>
      </section>

    <section class="latest-news-summary-section">
      <div class="latest-news-summary card-base">
        <h3 class="text-highlight">อัปเดตเด่นประจำสัปดาห์</h3>
        <ul>
          <li>Free Fire: เตรียมพบกับโหมดใหม่และกิจกรรมฉลองครบรอบ 7 ปี</li>
          <li>ROV: การแข่งขัน RoV Pro League Summer 2025 กำลังเข้มข้น!</li>
          <li>Valorant: เผยข้อมูล Agent คนใหม่และแผนที่ที่จะเข้ามาใน Episode 10</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page-layout {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px); /* Adjust based on your header height to ensure space */
  width: 100%;
  padding: 0;
  font-family: Kanit;
}

.hero-section {
  flex-grow: 1; /* Makes the hero section take up available space */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  text-align: center;
  width: 100%;
  padding: 60px 20px; /* Add padding to prevent content from touching edges */
  padding-top: calc(80px + 60px); /* Header height + desired top padding */
  /* The 80px should match the approx. height of your header on desktop */
}

.hero-content {
  max-width: 800px;
  margin-bottom: 50px; /* Space between hero text and next section/buttons */
  animation: fadeIn 1s ease-out; /* Basic fade-in animation */
}

.hero-title {
  font-size: 5em; /* Larger font size for hero title */
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.8em;
  margin-bottom: 15px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--color-text-primary);
}

.hero-tagline {
  font-size: 1.1em;
  color: var(--color-text-secondary);
  font-style: italic;
  opacity: 0.8;
}

/* Optional: Styles for hero buttons if you uncomment them */
/* .hero-actions {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}

.btn {
  padding: 12px 25px;
  border-radius: var(--border-radius-medium);
  font-size: 1.1em;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-primary {
  background-color: var(--color-highlight);
  color: var(--color-text-primary);
}

.btn-primary:hover {
  background-color: var(--color-highlight-darker);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.4);
}

.btn-secondary {
  background-color: transparent;
  border: 1px solid var(--color-text-secondary);
  color: var(--color-text-secondary);
}

.btn-secondary:hover {
  border-color: var(--color-highlight);
  color: var(--color-highlight);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.2);
} */


.latest-news-summary-section {
  padding: 80px 20px; /* Padding for the section */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}

.latest-news-summary {
  max-width: 900px;
  width: 100%;
  padding: 50px;
  background-color: var(--color-bg-tertiary);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.03);
}

.latest-news-summary h3 {
  font-size: 1.8em;
  color: var(--color-highlight);
  margin-bottom: 20px;
  font-weight: 700;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
}

.latest-news-summary ul {
  list-style-type: none;
  padding-left: 0;
}

.latest-news-summary li {
  font-size: 1.1em;
  margin-bottom: 12px;
  line-height: 1.6;
  position: relative;
  padding-left: 25px;
  color: var(--color-text-primary);
}

.latest-news-summary li::before {
  content: "•";
  color: var(--color-highlight);
  font-size: 1.5em;
  position: absolute;
  left: 0;
  top: 0;
  line-height: 1;
}

/* Keyframe for basic fade-in */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 4.5em;
  }
  .hero-subtitle {
    font-size: 1.6em;
  }
}

@media (max-width: 900px) {
  .home-page-layout {
    min-height: calc(100vh - 170px); /* Adjust for tablet header height */
  }
  .hero-section {
    padding-top: calc(170px + 40px); /* Header height + desired top padding */
    padding-bottom: 40px;
  }
  .hero-title {
    font-size: 3.5em;
  }
  .hero-subtitle {
    font-size: 1.4em;
  }
  .hero-tagline {
    font-size: 1em;
  }
  .latest-news-summary-section {
    padding: 60px 15px;
  }
  .latest-news-summary {
    padding: 35px;
  }
}

@media (max-width: 600px) {
  .home-page-layout {
    min-height: calc(100vh - 220px); /* Adjust for mobile header height */
  }
  .hero-section {
    padding-top: calc(220px + 30px); /* Header height + desired top padding */
    padding-bottom: 30px;
  }
  .hero-title {
    font-size: 2.5em;
    margin-bottom: 15px;
  }
  .hero-subtitle {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  .hero-tagline {
    font-size: 0.9em;
  }
  .latest-news-summary-section {
    padding: 40px 10px;
  }
  .latest-news-summary {
    padding: 25px;
  }
  .latest-news-summary h3 {
    font-size: 1.5em;
  }
  .latest-news-summary li {
    font-size: 1em;
  }
}

@media (max-width: 400px) {
  .hero-section {
    padding-top: calc(220px + 20px);
  }
  .hero-title {
    font-size: 2em;
  }
  .hero-subtitle {
    font-size: 1em;
  }
  .latest-news-summary {
    padding: 20px;
  }
  .latest-news-summary li {
    font-size: 0.9em;
  }
}
</style>