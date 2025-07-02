<template>
  <div class="game-view-content card-base fade-in">
    <h2 class="text-highlight">Free Fire News</h2>
    <div class="news-list">
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
  opacity: 0; /* Start hidden */
  animation: fadeInUpStaggered 0.6s ease-out forwards;
}

/* Apply staggered delay using index (requires JS or a preprocessor for full automation) */
/* For simplicity, you can manually add animation-delay based on index in template if needed,
   or use a library like AOS (Animate On Scroll) for more advanced staggering.
   Here, we'll just apply the base animation to all. */
/* Example for manual staggering (can be added in template):
   :style="{ 'animation-delay': (index * 0.1) + 's' }"
*/

/* Global variables for consistency */
:root {
  --color-primary: #1a1a2e; /* Dark background */
  --color-secondary: #16213e; /* Slightly lighter background for cards */
  --color-highlight: #e94560; /* Accent color for highlights */
  --color-text-primary: #e0e0e0; /* Light text for readability */
  --color-text-secondary: #a0a0a0; /* Secondary text color */
  --shadow-light: 0 4px 15px rgba(0, 0, 0, 0.4);
  --shadow-hover: 0 8px 25px rgba(0, 0, 0, 0.6);
  --border-radius-small: 8px;
  --border-radius-medium: 15px;
}

.game-view-content {
  max-width: 1200px;
  margin: auto;
  padding: 50px 20px; /* Added horizontal padding for smaller screens */
  text-align: center;
  font-family: 'Kanit', sans-serif; /* Ensure Kanit is imported/available */
  background-color: var(--color-primary);
  color: var(--color-text-primary);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-light);
}

h2 {
  font-size: 3.5em; /* Slightly larger heading */
  margin-bottom: 40px;
  color: var(--color-highlight);
  font-weight: 700;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.8); /* Stronger text shadow */
  letter-spacing: 1px;
}

.news-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjusted minmax for better flow */
  gap: 30px;
  justify-content: center;
  text-align: left;
}

.news-article {
  background-color: var(--color-secondary);
  padding: 30px;
  border-radius: var(--border-radius-medium);
  border: 1px solid rgba(255, 255, 255, 0.05); /* Slightly more visible border */
  box-shadow: var(--shadow-light);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  display: flex; /* Flexbox for internal layout */
  flex-direction: column;
}

.news-article:hover {
  transform: translateY(-10px); /* More pronounced lift effect */
  box-shadow: var(--shadow-hover);
  background-color: #1a2744; /* Slightly lighter on hover */
}

.news-image {
  width: 100%;
  height: 200px; /* Fixed height for consistency */
  object-fit: cover; /* Ensures image covers the area without distortion */
  border-radius: var(--border-radius-small);
  margin-bottom: 20px; /* Increased margin below image */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Clearer image border */
}

.news-article h3 {
  font-size: 2em; /* Larger article titles */
  color: var(--color-text-primary);
  margin-bottom: 15px; /* Increased margin below title */
  font-weight: 700;
  transition: color 0.3s ease;
  line-height: 1.3;
}

.news-article:hover h3 {
  color: var(--color-highlight);
}

.news-meta {
  font-size: 0.9em; /* Slightly larger meta text */
  color: var(--color-text-secondary);
  margin-bottom: 20px;
  font-style: italic;
  opacity: 0.8;
}

.news-article p {
  font-size: 1.05em; /* Slightly larger body text */
  line-height: 1.8; /* Improved line height for readability */
  margin-bottom: 25px; /* Increased margin below paragraphs */
  color: var(--color-text-primary);
  flex-grow: 1; /* Allows paragraphs to take available space */
}

.read-more {
  display: inline-flex;
  align-items: center;
  margin-top: auto; /* Pushes "Read More" to the bottom */
  color: var(--color-highlight);
  text-decoration: none;
  font-weight: 600; /* Bolder text */
  transition: color 0.3s ease, transform 0.2s ease;
  font-size: 1.1em;
}

.read-more:hover {
  color: #ff6b82; /* Brighter highlight on hover */
  transform: translateX(5px); /* More noticeable arrow movement */
}

.read-more .arrow {
  margin-left: 8px; /* Increased space for arrow */
  transition: transform 0.2s ease;
}

.read-more:hover .arrow {
  transform: translateX(5px);
}

/* Responsive Styles */
@media (max-width: 900px) {
  .game-view-content {
    padding: 40px 20px;
  }
  h2 {
    font-size: 3em;
    margin-bottom: 30px;
  }
  .news-list {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
  }
  .news-article {
    padding: 25px;
  }
  .news-image {
    height: 180px;
  }
  .news-article h3 {
    font-size: 1.7em;
  }
  .news-article p {
    font-size: 1em;
  }
}

@media (max-width: 600px) {
  .game-view-content {
    padding: 30px 15px;
  }
  h2 {
    font-size: 2.5em;
    margin-bottom: 25px;
  }
  .news-list {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .news-article {
    padding: 20px;
  }
  .news-image {
    height: 160px;
    margin-bottom: 15px;
  }
  .news-article h3 {
    font-size: 1.4em;
    margin-bottom: 10px;
  }
  .news-article p {
    font-size: 0.95em;
    margin-bottom: 15px;
  }
  .news-meta {
    font-size: 0.8em;
  }
  .read-more {
    font-size: 1em;
  }
}

@media (max-width: 400px) {
  .game-view-content {
    padding: 20px 10px;
  }
  h2 {
    font-size: 2em;
  }
  .news-article {
    padding: 15px;
  }
  .news-image {
    height: 140px;
  }
  .news-article h3 {
    font-size: 1.2em;
  }
  .news-article p {
    font-size: 0.9em;
  }
}
</style>