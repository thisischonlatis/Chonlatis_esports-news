<template>
  <div class="game-view-content card-base fade-in">
    <h2 class="text-highlight">FREE FIRE</h2>
    <div class="news-list">
      <div v-for="(article, index) in articles" :key="index" class="news-item"
        :style="{ 'animation-delay': `${index * 0.15}s` }">
        <div class="news-article card-inner-style fade-in-up-staggered">
          <img :src="article.image" :alt="article.title" class="news-image" v-if="article.image" loading="lazy">
          <h3>{{ article.title }}</h3>
          <p class="news-meta text-secondary">
            <span class="news-date">{{ article.date }}</span>
            <span class="meta-separator">|</span>
            <span class="news-source">แหล่งที่มา: {{ article.source }}</span>
          </p>
          <div class="news-content">
            <p v-for="(paragraph, pIndex) in article.content" :key="pIndex">{{ paragraph }}</p>
          </div>
          <a :href="article.link" target="_blank" rel="noopener noreferrer" class="read-more" v-if="article.link">
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
          title: "Free Fire IDOL SS2 : Content Stars ชิงรางวัลกว่า 7 ล้าน",
          date: "2 กันยายน 2025",
          image: "https://cdn.oneesports.co.th/cdn-data/sites/3/2024/09/455271164_1092372932304716_5472692170205115027_n-1024x541.jpg",
          source: "เขียนโดย pitisak chot",
          content: [
            "Free Fire เฟ้นหาดาวคอนเทนต์คนใหม่",
            "(กรุงเทพฯ, 2 กันยายน 2567) – ดาวดวงใหม่อาจเป็นคุณ! Free Fire ต่อยอดความสำเร็จจาก Free Fire IDOL ที่สร้างไอดอลหน้าใหม่ในวงการเกมกว่า 30 ชีวิต กลับมาครั้งนี้ Free Fire เล่นใหญ่กว่าเดิม ด้วยรางวัลมูลค่ารวมกว่า 7,000,000 บาท พร้อมกิจกรรมพิเศษอัดแน่นกับน้อง ๆ ดาวดวงใหม่ และโอกาสในการร่วมงานกับ Garena Free Fire เปิดรับสมัครแล้ววันนี้ถึงวันที่ 9 ก.ย. 67 ที่เว็บไซต์ https://ffidol.freefire.in.th/"
          ],
          link: "https://workpointtoday.com/garena-freefire/?utm_source=chatgpt.com"
        },
        {
          title: "Buriram United ยกเลิกสัญญาผู้เล่น Free Fire แอบอ้างชื่อสโมสร",
          date: "24 กันยายน 2025",
          image: "https://cdn.oneesports.co.th/cdn-data/sites/3/2024/09/459124674_490817963717247_1451420524827279600_n-1-1024x541.jpg",
          source: "เขียนโดย pitisak chot",
          content: [
            "Buriram United แถลงการณ์ยกเลิกสัญญากับผู้เล่นทีม Free Fire",
            "Buriram United ออกแถลงการณ์ยกเลิกสัญญากับ ภูวิศ หนูสังข์ หรือ Phuna นักกีฬาของทีม Free Fire จากการใช้ชื่อสโมสรแอบอ้างเพื่อประโยชน์ในกิจการส่วนตัวจนทำให้ทีมเสื่อมเสีย"
          ],
          link: "https://workpointtoday.com/garena-freefire/?utm_source=chatgpt.com"
        },
        {
          title: "Free Fire คว้าลิขสิทธิ์ “หมูเด้ง” เกมแรก เปิดตัวไอเทมเอ็กซ์คลูซีฟ",
          date: "16 ตุลาคม 2025",
          image: "https://cdn.oneesports.co.th/cdn-data/sites/3/2024/10/unnamed-12-1024x576.jpg",
          source: "เขียนโดย pitisak chot",
          content: [
            "Free Fire เกมออนไลน์ระดับโลก คว้าลิขสิทธิ์ “หมูเด้ง” เป็นเกมแรก",
            "Free Fire เกมแบทเทิลรอยัลบนมือถือชั้นนำระดับโลกจากการีนา จับมือกับองค์การสวนสัตว์แห่งประเทศไทยฯ คว้าลิขสิทธิ์ “หมูเด้ง” ลูกฮิปโปแคระสุดน่ารัก อย่างเป็นทางการเป็นเกมแรก และเตรียมแจกไอเทมหมูเด้งสุดเอ็กซ์คลูซีฟภายในเกมเพื่อเอาใจผู้เล่นทั่วโลก โดยเริ่มต้นที่ประเทศไทยในเดือนพฤศจิกายนนี้!"
          ],
          link: "https://workpointtoday.com/garena-freefire/?utm_source=chatgpt.com"
        },
        {
          title: "Free Fire x Blue Lock เปิดตัวชุดบันเดิลตัวละครหลักจากอนิเมะ",
          date: "21 พฤศจิกายน 2025",
          image: "https://cdn.oneesports.co.th/cdn-data/sites/3/2024/11/unnamed-2-1024x555.jpg",
          source: "เขียนโดย peerawut",
          content: [
            "เกม Free Fire ของ Garena ได้ร่วมมือกับอนิเมะชื่อดังอย่าง Blue Lock เพื่อจัดกิจกรรมที่เต็มไปด้วยรางวัลสุดพิเศษ โดยมีตั้งแต่ชุดตัวละครไปจนถึงสกินอาวุธและอีโมตสุดพิเศษ",
            "โดยการร่วมมือระหว่าง Free Fire และ Blue Lock ครั้งนี้ถือเป็นความฝันที่เป็นจริงสำหรับแฟนๆ ทั้งของเกมและอนิเมะ ซึ่งมาพร้อมกับไอเทมสุดพิเศษมากมาย รวมถึงชุดบันเดิลของสองตัวละครเอกจากอนิเมะ"
          ],
          link: "https://workpointtoday.com/garena-freefire/?utm_source=chatgpt.com"
        },
        {
          title: "Fluxo คว้าแชมป์ Free Fire World Series Global Finals 2024",
          date: "27 สิงหาคม 2025",
          image: "https://cdn.oneesports.co.th/cdn-data/sites/3/2024/11/unnamed-14-1-1024x576.jpg",
          source: "เขียนโดย pitisak chot",
          content: [
            "ชัยชนะของทีม Fluxo ถือเป็นการคว้าแชมป์ครั้งที่สองติดต่อกันของบราซิลในเวทีระดับโลกของ Free Fire World Series",
          ],
          link: "https://workpointtoday.com/garena-freefire/?utm_source=chatgpt.com"
        },
        {
          title: "FFWS SEA 2025 Fall: รอบเก็บคะแนนเริ่มแล้ว!",
          date: "13 สิงหาคม 2025",
          image: "https://media.discordapp.net/attachments/931798588210696252/1405150947444916224/fiimg_frag1.jpg?ex=689dc84c&is=689c76cc&hm=a0a889d33d49cfc65869667c69f8295c6c5b263c8c286264b0b7d870d0413cbd&=&format=webp&width=1115&height=628",
          source: "Workpoint Today",
          content: [
            "การแข่งขัน FFWS SEA 2025 Fall ได้เริ่มขึ้นแล้ว โดยมีทีมชั้นนำจากภูมิภาคเอเชียตะวันออกเฉียงใต้เข้าร่วมชิงชัย.",
            "แฟน ๆ สามารถรับชมการถ่ายทอดสดได้ที่ช่อง YouTube ของ Free Fire Esports Thailand."
          ],
          link: "https://workpointtoday.com/garena-freefire/?utm_source=chatgpt.com"
        },
        {
          title: "การปรับปรุงสงครามแคลนในอัปเดตล่าสุด",
          date: "30 กรกฎาคม 2025",
          image: "https://i.ytimg.com/vi/crt4co84xak/maxresdefault.jpg",
          source: "Garena Free Fire",
          content: [
            "มีการปรับปรุงระบบสงครามแคลน เช่น การเพิ่มทางเข้าข่าวแคลนใหม่ การปรับปรุงกฎคะแนน และการเพิ่มไฮไลท์สมาชิกแคลนที่มีอันดับสูงสุด."
          ],
          link: "https://ff.garena.com/th/article/patch-note-ob42------1277/?utm_source=chatgpt.com"
        },
        {
          title: "ภาพทีเซอร์อนิเมะ Free Fire เผยโฉมแล้ว",
          date: "13 สิงหาคม 2025",
          image: "https://i.ytimg.com/vi/kCJyRH2IxUw/maxresdefault.jpg",
          source: "Garena Free Fire",
          content: [
            "KADOKAWA ได้เผยโฉมภาพทีเซอร์และตัวอย่างของอนิเมะ Garena Free Fire อย่างเป็นทางการ."
          ],
          link: "https://ff.garena.com/th/?utm_source=chatgpt.com"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
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
    0 4px 24px 0 rgba(233, 69, 96, 0.25),
    /* สีแดง highlight */
    0 2px 8px 0 rgba(26, 26, 46, 0.18);
  /* สีพื้นหลังเข้ม */
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