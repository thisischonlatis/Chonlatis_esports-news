<template>
  <div class="home-page-layout fade-in">
    <section class="hero-section">
      <div class="hero-content">
        <h2 class="hero-title text-highlight">ESPORTS NEWS</h2>
        <p class="hero-subtitle text-primary">แหล่งรวมข่าวสารล่าสุดของวงการเกมอีสปอร์ต</p>
        <p class="hero-tagline text-secondary">ส่งมอบประสบการณ์อีสปอร์ตที่ยอดเยี่ยมที่สุด</p>
      </div>
    </section>

    <section class="latest-news-summary-section container-padding">
      <div class="latest-news-summary card-base fade-in-up">
        <h3 class="text-highlight summary-title">ข่าวเด่นประจำสัปดาห์</h3>
        <ul>
          <li>Free Fire: โค้ดแลกรางวัล Garena Free Fire Max ประจำวันที่ 2 กรกฎาคม</li>
          <li>ROV: APL 2025 การแข่งขันนานาชาติ รอบ Swiss Stage กำลังดำเนินอยู่</li>
          <li>Valorant: บทวิเคราะห์อัตราการเลือกใช้ Agent Tejo จากกรุงเทพฯ ถึงโตรอนโต</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.home-page-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 0; /* Header handles top spacing */
}

.hero-section {
  width: 100%;
  padding: 100px 20px; /* Increased padding for more vertical space */
  text-align: center;
  margin-bottom: 50px; /* Space before next section */
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
}

.hero-title {
  font-size: 4.5em;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow:
    0 0 130px hsl(330, 80%, 60%), /* Wider, less intense inner glow */
    0 0  hsla(330, 80%, 60%, 0.3), /* Even wider glow */
    0 0 0 hsla(330, 80%, 60%, 0.15); /* Faintest, largest glow for the "fading" effect */
  line-height: 1.1; /* Adjust line height for better appearance */
}

.hero-subtitle {
  font-size: 1.8em;
  margin-bottom: 15px;
  color: var(--color-text-primary);
}

.hero-tagline {
  font-size: 1.2em;
  color: var(--color-text-secondary);
}

.latest-news-summary-section {
  width: 100%;
  max-width: 1000px;
  margin-bottom: 50px;
  text-align: center;
}

.latest-news-summary {
  background-color: var(--color-bg-tertiary);
  padding: 40px;
  text-align: left;
  margin: 0 auto; /* Center the card */
  max-width: 800px; /* Max width for the summary card */
}

.summary-title {
  font-size: 2.5em;
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
}

.latest-news-summary ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.latest-news-summary li {
  font-size: 1.2em;
  color: var(--color-text-primary);
  margin-bottom: 10px;
  padding-left: 15px;
  position: relative;
}

.latest-news-summary li::before {
  content: '•'; /* Custom bullet point */
  color: var(--color-highlight);
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Responsive adjustments */
@media (max-width: 900px) { /* Tablet size and below */
  .hero-section {
    padding: 80px 20px; /* Adjust padding for tablet */
  }
  .hero-title {
    font-size: 3.8em;
  }
  .hero-subtitle {
    font-size: 1.5em;
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
  .latest-news-summary h3 {
    font-size: 2em;
  }
  .latest-news-summary li {
    font-size: 1.1em;
  }
}

@media (max-width: 600px) { /* Mobile size and below */
  .hero-section {
    padding: 70px 15px; /* Adjust padding for mobile */
  }
  .hero-title {
    font-size: 2.2em; /* Adjusted for smaller screens */
    margin-bottom: 15px;
  }
  .hero-subtitle {
    font-size: 1.2em; /* Adjusted for readability */
  }
  .hero-tagline {
    font-size: 1em; /* Adjusted for readability */
  }
  .latest-news-summary-section {
    padding: 40px 10px; /* More padding adjustment for mobile */
  }
  .latest-news-summary {
    padding: 25px;
  }
  .summary-title {
    font-size: 1.8em;
  }
  .latest-news-summary li {
    font-size: 1em;
  }
}
</style>