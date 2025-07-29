<template>
  <div class="game-view-content card-base fade-in">
    <h2 class="text-highlight">ARENA OF VALOR</h2> <div class="news-list">
      <div v-for="(article, index) in articles" :key="index" class="news-article card-inner-style fade-in-up-staggered">
        <img :src="article.image" :alt="article.title" class="news-image" v-if="article.image">
        <h3>{{ article.title }}</h3>
        <p class="news-meta text-secondary">{{ article.date }} | แหล่งที่มา: {{ article.source }}</p>
        <p v-for="(paragraph, pIndex) in article.content" :key="pIndex">{{ paragraph }}</p>
        <a :href="article.link" target="_blank" rel="noopener noreferrer" class="read-more" v-if="article.link">อ่านเพิ่มเติม <span class="arrow">→</span></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        // ข้อมูลข่าวสารของ ROV
        // ตัวอย่าง:
        {
          title: "APL 2025 การแข่งขันนานาชาติ: รอบ Swiss Stage กำลังดำเนินอยู่",
          date: "วันที่ 2 กรกฎาคม 2568",
          source: "Garena RoV Thailand",
          image: "https://via.placeholder.com/600x400/FF5733/FFFFFF?text=ROV+APL", // ตัวอย่างรูปภาพ
          content: [
            "การแข่งขัน RoV Pro League (APL) 2025 กำลังอยู่ในช่วงรอบ Swiss Stage ที่เข้มข้น เหล่าทีมชั้นนำจากทั่วโลกกำลังขับเคี่ยวกันเพื่อผ่านเข้าสู่รอบต่อไป",
            "แฟนๆ RoV สามารถรับชมการแข่งขันได้ทุกวันผ่านช่องทางหลักของ Garena RoV Thailand และไม่พลาดทุกแมตช์สำคัญ"
          ],
          link: "https://example.com/rov-apl-news"
        },
        {
          title: "Patch Update ล่าสุด: ปรับสมดุลฮีโร่และไอเทม",
          date: "วันที่ 28 มิถุนายน 2568",
          source: "RoV Official",
          image: "https://via.placeholder.com/600x400/33FF57/FFFFFF?text=ROV+Patch", // ตัวอย่างรูปภาพ
          content: [
            "แพทช์อัปเดตใหม่ล่าสุดของ RoV ได้นำเสนอการปรับสมดุลครั้งใหญ่ของฮีโร่และไอเทมหลายชิ้น โดยมีเป้าหมายเพื่อเพิ่มความหลากหลายในการเล่นและแก้ปัญหาเมต้าปัจจุบัน",
            "ผู้เล่นควรศึกษาการเปลี่ยนแปลงเหล่านี้เพื่อปรับกลยุทธ์และเพิ่มโอกาสในการคว้าชัยชนะ"
          ],
          link: "https://example.com/rov-patch-notes"
        },
        {
          title: "กิจกรรมใหม่ในเกม: สะสมสกิน Limited Edition",
          date: "วันที่ 20 มิถุนายน 2568",
          source: "RoV In-Game Events",
          image: "https://via.placeholder.com/600x400/3366FF/FFFFFF?text=ROV+Event", // ตัวอย่างรูปภาพ
          content: [
            "RoV จัดกิจกรรมพิเศษให้ผู้เล่นได้สะสมสกิน Limited Edition สุดหายาก เพียงแค่ทำภารกิจในเกมให้สำเร็จตามที่กำหนด",
            "อย่าพลาดโอกาสที่จะเป็นเจ้าของสกินสุดพิเศษเหล่านี้ เพราะมีให้สะสมเพียงช่วงเวลากิจกรรมเท่านั้น!"
          ],
          link: "https://example.com/rov-new-event"
        }
      ],
    };
  },
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
    0 0 20px hsla(330, 80%, 60%, 0.5), /* Wider, less intense inner glow */
    0 0 40px hsla(330, 80%, 60%, 0.3), /* Even wider glow */
    0 0 60px hsla(330, 80%, 60%, 0.15); /* Faintest, largest glow for the "fading" effect */
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
  background: var(--color-bg-tertiary);
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

/* เอาขอบชมพูข้างบนออก */
/* .news-article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--color-highlight);
} */

.news-article:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
  /* เอาขอบแดงตอน hover ออก */
  /* border-color: rgba(233, 69, 96, 0.2); */
}

.news-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--border-radius-small);
  margin-bottom: 20px;
  transition: transform var(--transition-medium);
}

.news-article:hover .news-image {
  transform: scale(1.02);
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
  
  .news-image {
    height: 180px;
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