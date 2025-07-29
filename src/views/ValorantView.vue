<template>
  <div class="game-view-content card-base fade-in">
    <h2 class="text-highlight">VALORANT</h2>
    <div class="news-list">
      <div 
        v-for="(article, index) in articles" 
        :key="index" 
        class="news-item"
        :style="{ 'animation-delay': `${index * 0.15}s` }"
      >
        <div class="news-article card-inner-style fade-in-up-staggered">
          <img 
            :src="article.image" 
            :alt="article.title" 
            class="news-image" 
            v-if="article.image"
            loading="lazy"
          >
          <h3>{{ article.title }}</h3>
          <p class="news-meta text-secondary">
            <span class="news-date">{{ article.date }}</span> 
            <span class="meta-separator">|</span>
            <span class="news-source">แหล่งที่มา: {{ article.source }}</span>
          </p>
          <div class="news-content">
            <p v-for="(paragraph, pIndex) in article.content" :key="pIndex">{{ paragraph }}</p>
          </div>
          <a 
            :href="article.link" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="read-more" 
            v-if="article.link"
          >
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
          title: "VALORANT Patch Notes 11.00: อัปเดตเอเจนท์, แผนที่ Corrode ใหม่ และอื่นๆ",
          date: "วันที่ 24 มิถุนายน 2568",
          source: "VALORANT Official",
          content: [
            "แพทช์ 11.00 ได้นำเสนอการอัปเดตสำคัญสำหรับเอเจนท์ต่างๆ รวมถึงแผนที่ใหม่ชื่อ Corrode และการปรับการหมุนเวียนของแผนที่",
            "รายละเอียดเพิ่มเติมเกี่ยวกับฟีเจอร์ใหม่และการปรับสมดุลทั้งหมดสามารถดูได้ในบันทึกแพทช์ฉบับเต็ม"
          ],
          link: "https://playvalorant.com/th-th/news/game-updates/",
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=Valorant+Patch+11.00" // Placeholder image
        },
        {
          title: "VALORANT Games Changers Pacific 2025 กลับมาอีกครั้ง",
          date: "วันที่ 26 มิถุนายน 2568",
          source: "VALORANT Esports",
          content: [
            "การแข่งขัน VALORANT Game Changers Pacific จะกลับมาจัดขึ้นอีกครั้งในปีนี้ เพื่อส่งเสริมและสนับสนุนวงการอีสปอร์ตสำหรับผู้เล่นหญิง"
          ],
          link: "https://valorantesports.com/en-us/news",
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=Game+Changers+Pacific" // Placeholder image
        },
        {
          title: "VCT Pacific Stage 2: เพลงประจำการแข่งขันและบัตรเข้าชม",
          date: "วันที่ 23 มิถุนายน 2568",
          source: "VALORANT Esports",
          content: [
            "มีการเปิดเผยข้อมูลเกี่ยวกับเพลงประจำการแข่งขัน VCT Pacific Stage 2 และการเปิดขายบัตรเข้าชมในเร็วๆ นี้",
            "แฟนๆ สามารถเตรียมตัวพบกับการแข่งขันที่ดุเดือดและเพลงประกอบอันเร้าใจ"
          ],
          link: "https://valorantesports.com/en-us/news",
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=VCT+Pacific+Stage+2" // Placeholder image
        },
        {
          title: "โชว์แมตช์แผนที่ใหม่ Corrode: Team Tarik ปะทะ Team Toast",
          date: "วันที่ 22 มิถุนายน 2568",
          source: "VALORANT Official",
          content: [
            "มีการจัดการแข่งขันโชว์แมตช์พิเศษบนแผนที่ใหม่ Corrode โดยมี Team Tarik และ Team Toast มาประชันฝีมือกัน",
            "แมตช์นี้เปิดโอกาสให้ผู้เล่นได้เห็นกลยุทธ์และการเล่นบนแผนที่ใหม่ก่อนเปิดให้เล่นจริง"
          ],
          link: "https://playvalorant.com/th-th/news/game-updates/",
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=Corrode+Showmatch" // Placeholder image
        },
        {
          title: "Paper Rex คว้าแชมป์ VALORANT Masters Toronto",
          date: "วันที่ 17 มิถุนายน 2568",
          source: "GosuGamers",
          content: [
            "ทีม Paper Rex จากภูมิภาค APAC สามารถคว้าตำแหน่งแชมป์ VALORANT Masters Toronto ได้สำเร็จ สร้างประวัติศาสตร์ให้กับวงการอีสปอร์ตในภูมิภาค"
          ],
          link: "https://www.gosugamers.net/valorant/news",
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=Paper+Rex+Champions" // Placeholder image
        },
        {
          title: "VALORANT Patch Notes 10.11: รางวัล Premier และ Death Cam ใหม่",
          date: "วันที่ 10 มิถุนายน 2568",
          source: "VALORANT Official",
          content: [
            "แพทช์ 10.11 มีการเพิ่มรางวัลใหม่สำหรับโหมด Premier และปรับปรุง Death Cam เพื่อแสดงเอฟเฟกต์ปิดฉากของสกินได้อย่างชัดเจนยิ่งขึ้น",
            "นอกจากนี้ยังมีการเปลี่ยนแปลงเพลงบนหน้า Career อีกด้วย"
          ],
          link: "https://playvalorant.com/th-th/news/game-updates/",
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=Valorant+Patch+10.11" // Placeholder image
        },
        {
          title: "การแข่งขัน Masters Toronto Grand Finals และการเปิดเผยแผนที่",
          date: "วันที่ 16 มิถุนายน 2568",
          source: "VALORANT Esports",
          content: [
            "การแข่งขัน VALORANT Masters Toronto เข้าสู่รอบ Grand Finals และมีการจัดโชว์แมตช์พร้อมเปิดเผยแผนที่ใหม่ในช่วงสุดสัปดาห์นั้น"
          ],
          link: "https://valorantesports.com/en-us/news",
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=Masters+Toronto+Finals" // Placeholder image
        },
        {
          title: "Tejo's rise and fall: อัตราการเลือกใช้ Agent Tejo จากกรุงเทพฯ ถึงโตรอนโต",
          date: "วันที่ 28 มิถุนายน 2568",
          source: "TheSpike.gg",
          content: [
            "บทความวิเคราะห์แนวโน้มการเลือกใช้ Agent Tejo ในการแข่งขันระดับมืออาชีพ ตั้งแต่ VCT Bangkok ไปจนถึง Masters Toronto",
            "แสดงให้เห็นถึงการเปลี่ยนแปลงของเมต้าเกมและผลกระทบต่อ Agent ตัวนี้"
          ],
          link: "https://www.thespike.gg/",
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=Agent+Tejo+Analysis" // Placeholder image
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