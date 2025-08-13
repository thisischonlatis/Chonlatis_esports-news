<template>
  <div class="home-page-layout">
    <section class="hero-section">
      <div class="hero-content">
        <h2 class="hero-title text-highlight fade-in">ESPORTS NEWS</h2>
        <p class="hero-subtitle text-primary">แหล่งรวมข่าวสารล่าสุดของวงการเกมอีสปอร์ต</p>
        <p class="hero-tagline text-secondary">ส่งมอบประสบการณ์อีสปอร์ตที่ยอดเยี่ยมที่สุด</p>
      </div>
    </section>

    <div class="featured-news-container card-base fade-in container-padding">
      <h2 class="section-title text-highlight">ข่าวเด่นประจำสัปดาห์</h2>
      <div class="news-list">
        <div 
          v-for="(article, index) in featuredArticles" 
          :key="index" 
          class="news-item"
          :style="{ 'animation-delay': `${index * 0.15}s` }"
        >
          <div class="news-article card-inner-style fade-in-up-staggered">
            <img 
              :src="article.image" 
              :alt="article.title" 
              class="news-image"
              loading="lazy"
            >
            <h3>{{ article.title }}</h3>
            <p class="news-meta text-secondary">
              <span class="news-source">แหล่งที่มา: {{ article.source }}</span>
            </p>
            <div class="news-content">
              <p>{{ article.content }}</p>
            </div>
            <a 
              :href="article.link" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="read-more"
            >
              อ่านเพิ่มเติม <span class="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      featuredArticles: [
        {
          title: "APL 2025 เตรียมเปิดศึกรอบรองฯ–ชิงฯ ที่ BITEC Live",
          source: "ROV Esports Thailand",
          image: "https://cdn.oneesports.co.th/cdn-data/sites/3/2025/06/APL-2025.png",
          content: "การีนาเตรียมจัดการแข่งขัน Arena of Valor Premier League 2025(APL 2025) รอบรองชนะเลิศและรอบชิงชนะเลิศในกรุงเทพมหานคร วันที่ 19–20 กรกฎาคมนี้",
          link: "https://rov.in.th/proleague"
        },
        {
          title: "Team Heretics ชนะ Esports World Cup 2025",
          source: "en.wikipedia.org",
          image: "https://www.thespike.gg/_next/image?url=https%3A%2F%2Fcdn.thespike.gg%2F.KC%252FTeam%2520Heretics%2520win%2520EWC_1752425836672.png&w=1920&q=75",
          content: "Team Heretics พลิกชนะ Fnatic ในรอบชิง 3–2 (reverse sweep) ในการแข่งขัน Esports World Cup 2025 ที่ริยาดห์",
          link: "https://en.wikipedia.org/wiki/2025_Esports_World_Cup_%E2%80%93_Valorant"
        },
        {
          title: "Free Fire จับมือ Blue Lock เปิดตัวชุดบันเดิลตัวละครหลักจากอนิเมะ",
          source: "workpointtoday.com",
          image: "https://cdn.oneesports.co.th/cdn-data/sites/3/2024/11/unnamed-2-1024x555.jpg",
          content: "เกม Free Fire ของ Garena ได้ร่วมมือกับอนิเมะชื่อดังอย่าง Blue Lock เพื่อจัดกิจกรรมที่เต็มไปด้วยรางวัลสุดพิเศษ",
          link: "https://workpointtoday.com/garena-freefire/"
        },
      ]
    };
  }
};
</script>

<style scoped>
/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUpStaggered {
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

.fade-in-up-staggered {
  animation: fadeInUpStaggered 0.8s ease-out forwards;
}

/* Home Layout */
.home-page-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

/* Hero Section Styles */
.hero-section {
  width: 100%;
  padding: 100px 20px;
  text-align: center;
  margin-bottom: 50px;
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
    0 0 130px hsl(330, 80%, 60%),
    0 0 hsla(330, 80%, 60%, 0.3),
    0 0 0 hsla(330, 80%, 60%, 0.15);
  line-height: 1.1;
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

/* Featured News Section Styles */
.featured-news-container {
  width: 100%;
  max-width: 1200px;
  margin-top: 50px;
}

.section-title {
  font-size: 2.5em;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
}

.news-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.news-item {
  width: 350px;
}

.news-article {
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius-medium);
  overflow: hidden;
  box-shadow: var(--shadow-base);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.news-article:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.news-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid var(--color-highlight);
}

.news-article h3 {
  font-size: 1.5em;
  color: var(--color-text-primary);
  margin: 20px 20px 10px;
  line-height: 1.3;
}

.news-meta {
  margin: 0 20px;
  font-size: 0.9em;
}

.news-content {
  padding: 0 20px 20px;
  flex-grow: 1;
}

.news-content p {
  font-size: 1em;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.read-more {
  display: block;
  text-align: center;
  padding: 12px 25px;
  text-decoration: none;
  font-weight: bold;
  color: var(--color-highlight);
  border-top: 1px solid var(--border-color);
  transition: background-color 0.3s ease;
}

.read-more:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.arrow {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.read-more:hover .arrow {
  transform: translateX(5px);
}

@media (max-width: 1024px) {
  .news-list {
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 400px;
  }
  .hero-title {
    font-size: 3em;
  }
  .hero-subtitle {
    font-size: 1.2em;
  }
  .hero-tagline {
    font-size: 1em;
  }

  .news-list {
    flex-direction: column;
    align-items: center;
  }
  .news-item {
    width: 90%;
  }
}
</style>