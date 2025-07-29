<template>
  <div class="game-view-content card-base fade-in">
    <h2 class="text-highlight">FREE FIRE</h2>
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
          title: "Free Fire x Squid Game: กิจกรรมครบรอบ 8 ปีสุดเซอร์ไพรส์",
          date: "วันที่ 25 มิถุนายน 2568",
          source: "Garena Free Fire Thailand",
          content: [
            "Garena Free Fire ประกาศความร่วมมือครั้งสำคัญกับซีรีส์ยอดนิยม Squid Game จาก Netflix เตรียมจัดกิจกรรมครบรอบ 8 ปีสุดยิ่งใหญ่",
            "แฟนๆ สามารถตั้งตารอคอนเทนต์พิเศษและโหมดเกมที่ได้รับแรงบันดาลใจจากซีรีส์ดังระดับโลกได้เร็วๆ นี้"
          ],
          link: "https://ff.garena.com/th/news/",
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=Free+Fire+x+Squid+Game" // Placeholder image
        },
        {
          title: "Free Fire MAX Esports กลับมาในอินเดีย พร้อมเงินรางวัล 1 ล้านรูปี",
          date: "วันที่ 1 กรกฎาคม 2568",
          source: "Esports Insider",
          content: [
            "Free Fire MAX esports เตรียมกลับมาจัดการแข่งขันในอินเดียอีกครั้งหลังจากหยุดไปสามปี โดยมีการเปิดลงทะเบียนสำหรับ TEZ Free Fire Max India Cup (TEZ FFMIC) ในวันที่ 7 กรกฎาคม 2568",
            "ทัวร์นาเมนต์นี้มีเงินรางวัลรวมสูงถึง 1 ล้านรูปี (ประมาณ 450,000 บาท)"
          ],
          link: "https://esportsinsider.com/2025/07/free-fire-max-esports-returns-to-india-following-three-year-hiatus",
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=FF+Esports+India" // Placeholder image
        },
        {
          title: "เปิดตัวแผนที่ใหม่ 'Solara' เริ่มต้นการเฉลิมฉลองครบรอบ 8 ปี",
          date: "วันที่ 20 พฤษภาคม 2568",
          source: "Garena Free Fire",
          content: [
            "Free Fire ได้เปิดตัวแผนที่ใหม่ล่าสุด 'Solara' ซึ่งถือเป็นแผนที่แรกในรอบสามปีที่ผ่านมา และเป็นส่วนหนึ่งของการเฉลิมฉลองครบรอบ 8 ปีของเกม",
            "แผนที่นี้มาพร้อมกับกลไกการเล่นใหม่ๆ และสภาพแวดล้อมที่แตกต่างออกไป"
          ],
          link: "https://ff.garena.com/th/news/",
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=Solara+Map" // Placeholder image
        },
        {
          title: "โค้ดแลกรางวัล Garena Free Fire Max ประจำวันที่ 2 กรกฎาคม",
          date: "วันที่ 2 กรกฎาคม 2568",
          source: "Business Standard",
          content: [
            "Garena Free Fire Max ได้ปล่อยโค้ดแลกรางวัลใหม่ล่าสุดสำหรับวันที่ 2 กรกฎาคม 2568 ผู้เล่นสามารถใช้โค้ดเหล่านี้เพื่อรับเพชรฟรี สกินตัวละคร และไอเท็มในเกมอื่นๆ อีกมากมาย",
            "โปรดทราบว่าโค้ดเหล่านี้มีจำนวนจำกัดและมีอายุการใช้งานสั้น ดังนั้นควรรีบใช้ทันที"
          ],
          link: "https://www.business-standard.com/technology/tech-news/garena-free-fire-max-here-are-july-2-redeem-codes-to-win-diamonds-skins-125070200192_1.html",
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=FF+Redeem+Codes" // Placeholder image
        },
        {
          title: "Free Fire World Series Southeast Asia 2025 Spring: ประกาศการแข่งขัน",
          date: "วันที่ 23 เมษายน 2568",
          source: "Garena Free Fire Esports",
          content: [
            "มีการประกาศการแข่งขัน Free Fire World Series Southeast Asia (FFWS SEA) 2025 Spring ซึ่งเป็นการแข่งขันระดับภูมิภาคที่สำคัญสำหรับทีมในเอเชียตะวันออกเฉียงใต้"
          ],
          link: "https://ff.garena.com/th/news/",
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=FFWS+SEA+2025" // Placeholder image
        },
        {
          title: "Free Fire กลับเข้าร่วม Esports World Cup สำหรับปี 2025",
          date: "วันที่ 12 กุมภาพันธ์ 2568",
          source: "Esports World Cup",
          content: [
            "Free Fire ได้รับการยืนยันให้เป็นหนึ่งในเกมที่จะมีการแข่งขันในงาน Esports World Cup ประจำปี 2025 ซึ่งเป็นทัวร์นาเมนต์อีสปอร์ตระดับโลกครั้งใหญ่"
          ],
          link: "https://esports.gg/news/free-fire/free-fire-returns-to-esports-world-cup/",
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=FF+Esports+World+Cup" // Placeholder image
        },
        {
          title: "ทีม Fluxo จากบราซิล คว้าแชมป์ FFWS Global Finals 2024",
          date: "วันที่ 28 พฤศจิกายน 2567",
          source: "FFWS Official",
          content: [
            "ทีม Fluxo ตัวแทนจากบราซิล โชว์ฟอร์มได้อย่างยอดเยี่ยมและคว้าแชมป์ Free Fire World Series Global Finals 2024 ไปครอง",
            "ชัยชนะครั้งนี้เป็นการตอกย้ำความแข็งแกร่งของภูมิภาคบราซิลในเวที Free Fire ระดับโลก"
          ],
          link: "https://ffws.garena.com/",
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=Fluxo+FFWS+2024" // Placeholder image
        },
        {
          title: "อัปเดตเกม Free Fire: แพทช์วันที่ 21 พฤษภาคม 2568",
          date: "วันที่ 21 พฤษภาคม 2568",
          source: "Garena Free Fire",
          content: [
            "มีการอัปเดตเกมครั้งสำคัญเมื่อวันที่ 21 พฤษภาคม 2568 ซึ่งรวมถึงการปรับสมดุลอาวุธ ตัวละคร และการแก้ไขข้อผิดพลาดต่างๆ เพื่อประสบการณ์การเล่นที่ดีขึ้น"
          ],
          link: "https://ff.garena.com/th/news/",
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=FF+Patch+Update" // Placeholder image
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