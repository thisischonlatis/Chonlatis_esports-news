<template>
  <div class="game-view-content card-base fade-in">
    <h2 class="text-highlight">VALORANT</h2>
    <div class="news-list">
      <div v-for="(article, index) in articles" :key="index" class="news-item"
        :style="{ 'animation-delay': `${index * 0.15}s` }">
        <div class="news-article card-inner-style fade-in-up-staggered">
          <img v-if="article.image" :src="article.image" :alt="article.title" class="news-image" loading="lazy">
          <h3>{{ article.title }}</h3>
          <p class="news-meta text-secondary">
            <span class="news-date">{{ article.date }}</span>
            <span class="meta-separator">|</span>
            <span class="news-source">แหล่งที่มา: {{ article.source }}</span>
          </p>
          <div class="news-content">
            <p v-for="(paragraph, pIndex) in article.content" :key="pIndex">{{ paragraph }}</p>
          </div>
          <a v-if="article.link" :href="article.link" target="_blank" rel="noopener noreferrer" class="read-more">
            อ่านเพิ่มเติม <span class="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          title: "Governor คัมแบ็กวงการ ร่วมทัพ Winthrop ลุย Stage 3",
          date: "30 มิถุนายน 2025",
          source: "playvalorant.com",
          image: "https://cdn.oneesports.co.th/cdn-data/sites/3/2025/03/Governor_-1024x589.png",
          content: [
            "อดีตผู้เล่น TALON คืนสังเวียน",
            "ปีเตอร์ “Governor” โน นักแข่งเกม VALORANT ชาวเกาหลีใต้ ตัดสินใจกลับมาลงแข่งขันอีกครั้งในนามทีม Winthrop University หลังพักการแข่งขันไปสองเดือนเนื่องจากปัญหาสุขภาพ ทั้งอาการชาที่มือและผลกระทบด้านสภาพจิตใจ"
          ],
          link: "https://playvalorant.com/en-us/news/tags/patch-notes/"
        },
        {
          title: "alecks เผยชื่อบุคคลสำคัญที่ช่วยให้ Paper Rex ผงาดแชมป์",
          date: "25 มิถุนายน 2025",
          source: "playvalorant.com",
          image: "https://cdn.oneesports.co.th/cdn-data/sites/3/2025/06/alecks-Paper-Rex-1024x557.png",
          content: [
            "ลมใต้ปีกของ W Gaming",
            "Alexandre “alecks” Sallé โค้ชของทีม Paper Rex เปิดเผยชื่ออีกหนึ่งบุคคลสำคัญที่มีส่วนอย่างมากในการช่วยทีมคว้าแชมป์ระดับ Masters มาครองครั้งแรก"
          ],
          link: "https://playvalorant.com/en-us/news/"
        },
        {
          title: "Server Manila เตรียมเปิดให้บริการใน Valorant",
          date: "1 สิงหาคม 2025",
          source: "playvalorant.com",
          image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/f75de473d1afa82a50fb7ee5a5fadfc5e89a1d08-1920x1080.jpg?auto=format&fit=fill&q=80&w=1082",
          content: [
            "Riot Games ประกาศเปิด Server ใหม่ที่ Manila เพื่อรองรับผู้เล่นในภูมิภาค SEA",
            "ลดปัญหา latency และปรับปรุงคุณภาพการเล่น",
            "คาดว่าจะเปิดให้บริการเต็มรูปแบบในเดือนสิงหาคม 2025"
          ],
          link: "https://playvalorant.com/en-us/news/"
        },
        {
          title: "Paper Rex คว้าแชมป์ VCT Masters Toronto 2025",
          date: "15 มิถุนายน 2025",
          source: "valorantesports.com",
          image: "https://spoiw.evsu.edu.ph/wp-content/uploads/2025/06/PRX-BANNER-1024x589.png",
          content: [
            "การแข่งขัน VCT Masters Toronto จัดขึ้นระหว่างวันที่ 7–22 มิถุนายน 2025",
            "ทีม Paper Rex เอาชนะ Fnatic ในรอบชิงชนะเลิศ 3–1",
            "ผู้เล่น MVP คือ Jason 'f0rsakeN' Susanto และมีการเปิดตัวแมปใหม่ 'Corrode'"
          ],
          link: "https://en.wikipedia.org/wiki/2025_Valorant_Champions_Tour%3A_Toronto_Masters"
        },
        {
          title: "Team Heretics ชนะ Esports World Cup 2025",
          date: "12 กรกฎาคม 2025",
          source: "en.wikipedia.org",
          image: "https://www.thespike.gg/_next/image?url=https%3A%2F%2Fcdn.thespike.gg%2F.KC%252FTeam%2520Heretics%2520win%2520EWC_1752425836672.png&w=1920&q=75",
          content: [
            "การแข่งขัน Esports World Cup 2025 จัดขึ้นที่ริยาดห์ ประเทศซาอุดีอาระเบีย ระหว่างวันที่ 8–13 กรกฎาคม 2025",
            "Team Heretics พลิกชนะ Fnatic ในรอบชิง 3–2 (reverse sweep)",
            "ผู้เล่นยอดเยี่ยม (MVP) คือ Mert 'Wo0t' Alkan"
          ],
          link: "https://en.wikipedia.org/wiki/2025_Esports_World_Cup_%E2%80%93_Valorant"
        },
        {
          title: "Patch 11.00 Act 4 – แมปใหม่ Corrode และปรับ Agent",
          date: "24 มิถุนายน 2025",
          source: "playvalorant.com",
          image: "https://media.discordapp.net/attachments/931798588210696252/1405147862274412586/GuI88qOXkAAFuQn.jpg?ex=689dc56c&is=689c73ec&hm=806641ae4ea786ce16bb410b32ac87f0e358cfdc4f3d925104dec3b598d196ce&=&format=webp",
          content: [
            "แพตช์ 11.00 Act 4 เพิ่มแมปใหม่ 'Corrode' และปรับ Agent หลายตัว",
            "Waylay และ Omen ได้บัพ, Reyna, Neon และ Phoenix ถูกเนิร์ฟ",
            "Sova ถูกเนิร์ฟใน Act 4 ด้วย Recon Bolt ที่สามารถถูกตรวจจับง่ายขึ้น"
          ],
          link: "https://playvalorant.com/en-us/news/tags/patch-notes/"
        },
        {
          title: "ข่าวกิจกรรม Game Changers และ Americas LCQ",
          date: "5 สิงหาคม 2025",
          source: "valorantesports.com",
          image: "https://cdn.sanity.io/images/dsfx7636/news/1ad335b09e4ea5df094cd13912a299933a1356d3-1920x1080.jpg",
          content: [
            "เปิดตัว Game Changers Championship 2025 และ Americas LCQ",
            "Masters Bangkok มีการโชว์แมตช์ Grand Finals และเปิดตัว Agent ใหม่",
            "Server Manila จะเปิดให้บริการใน Valorant ในเดือนสิงหาคม 2025"
          ],
          link: "https://valorantesports.com/en-US/news"
        },
        {
          title: "VCT Masters Bangkok 2025 – Agent ใหม่และโชว์แมตช์",
          date: "10 กุมภาพันธ์ 2025",
          source: "playvalorant.com",
          image: "https://cdn.oneesports.co.th/cdn-data/sites/3/2025/02/VALORANT-Masters-Bangkok-2025-%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99.png",
          content: [
            "เปิดตัว Agent ใหม่ใน Masters Bangkok 2025",
            "มีโชว์แมตช์ในรอบ Grand Finals",
            "ทีมยอดนิยมจากภูมิภาคเอเชียเข้าร่วมแข่งขัน"
          ],
          link: "https://playvalorant.com/en-us/news/"
        }
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
  opacity: 0;
  animation: fadeInUpStaggered 0.6s ease-out forwards;
}

/* Color Variables */
:root {
  --color-primary: #1a1a2e;
  --color-secondary: #16213e;
  --color-highlight: #e94560;
  --color-highlight-darker: #d13354;
  --color-text-primary: #e0e0e0;
  --color-text-secondary: #a0a0a0;
  --shadow-light: 0 4px 15px rgba(0, 0, 0, 0.4);
  --shadow-hover: 0 8px 25px rgba(0, 0, 0, 0.6);
  --border-radius-small: 8px;
  --border-radius-medium: 15px;
  --transition-fast: 0.2s ease;
  --transition-medium: 0.3s ease;
}

.game-view-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
  text-align: center;
  font-family: 'Kanit', sans-serif;
  background-color: var(--color-primary);
  color: var(--color-text-primary);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-light);
}

h2 {
  font-size: 3.5rem;
  margin-bottom: 40px;
  color: var(--color-highlight);
  font-weight: 700;
  text-shadow:
    0 0 20px hsla(330, 80%, 60%, 0.5),
    0 0 40px hsla(330, 80%, 60%, 0.3),
    0 0 60px hsla(330, 80%, 60%, 0.15);
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
}

h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: var(--color-highlight);
  border-radius: 3px;
}

.news-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  padding: 0;
  margin-top: 50px;
  align-items: start;
}

.news-item {
  display: flex;
  flex-direction: column;
}

.news-article {
  padding: 25px;
  background: var(--color-secondary);
  border-radius: var(--border-radius-medium);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all var(--transition-medium);
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  position: relative;
  overflow: hidden;
}

.news-article:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.news-image {
  width: 100%;
  object-fit: cover;
  border-radius: var(--border-radius-small);
  margin-bottom: 20px;
  transition: transform var(--transition-medium), box-shadow var(--transition-medium);
  /* เพิ่ม box-shadow ที่เข้ากับธีม */
  box-shadow:
    0 4px 24px 0 rgba(233, 69, 96, 0.25), /* สีแดง highlight */
    0 2px 8px 0 rgba(26, 26, 46, 0.18);    /* สีพื้นหลังเข้ม */
}

.news-article h3 {
  font-size: 1.8rem;
  color: var(--color-highlight);
  margin: 0 0 12px 0;
  font-weight: 600;
  line-height: 1.3;
}

.news-meta {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.meta-separator {
  opacity: 0.6;
}

.news-content {
  margin-bottom: 15px;
  flex-grow: 1;
}

.news-content p {
  font-size: 1.05rem;
  color: var(--color-text-primary);
  margin-bottom: 12px;
  line-height: 1.6;
}

.read-more {
  display: inline-flex;
  align-items: center;
  color: var(--color-highlight);
  font-weight: 600;
  margin-top: 10px;
  text-decoration: none;
  transition: color var(--transition-fast);
  align-self: flex-start;
}

.read-more:hover {
  color: var(--color-highlight-darker);
  text-decoration: underline;
}

.arrow {
  font-size: 1.2em;
  margin-left: 8px;
  transition: transform var(--transition-fast);
}

.read-more:hover .arrow {
  transform: translateX(5px);
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .news-list {
    gap: 25px;
  }
  
  .news-article {
    padding: 20px;
  }
}

@media (max-width: 768px) {
  h2 {
    font-size: 2.8rem;
    margin-bottom: 30px;
  }
  
  .news-list {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .news-article h3 {
    font-size: 1.6rem;
  }
  
  .news-content p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .game-view-content {
    padding: 30px 15px;
  }
  
  h2 {
    font-size: 2.2rem;
  }
  
  .news-list {
    grid-template-columns: 1fr;
  }
  
  .news-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  
  .meta-separator {
    display: none;
  }
}
</style>