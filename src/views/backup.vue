<template>
  <div class="game-view-content card-base fade-in">
    <h2 class="text-highlight">ARENA OF VALOR</h2>
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
            :style="{ '--glow-color': article.glowColor }"
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
          title: "Talon ดึง TLN Psocute เสริมแกร่งตำแหน่ง Mid Lane",
          date: "10 สิงหาคม 2025",
          source: "ROV Esports Thailand",
          image: "https://scontent.fbkk30-1.fna.fbcdn.net/v/t39.30808-6/495323365_1128299145978502_4972043091410809908_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bhSvz4lSe_sQ7kNvwGaVI-x&_nc_oc=AdnOHccMjDr4H0yn1BpHnQfrqzB-R3ViwbJHej5I02nY7GGHAL5YOLhV6OGldkMrP40&_nc_zt=23&_nc_ht=scontent.fbkk30-1.fna&_nc_gid=jxhV7r6G1mQfgoj4Y95diw&oh=00_AfXvv7aV1lspeVG3imQLwlpWKASAg9H01WpmL-3OE_eAsA&oe=68A255D1",
          glowColor: "#e94560", // สีแดงจากรูป
          content: [
            "ทีม Talon ปรับทัพดึง TLN Psocute มารับตำแหน่ง Mid Lane เตรียมลุยศึก RoV Pro League ฤดูกาลใหม่",
            "การปรับตัวครั้งนี้มีเป้าหมายเพื่อเพิ่มความแข็งแกร่งและยกระดับการเล่นในระดับอาชีพ"
          ],
          link: "https://www.facebook.com/ROVTHeSports/posts/1105199931621757"
        },
        {
          title: "Bacon Time ปรับตำแหน่งป่าเตรียมศึกใหญ่",
          date: "5 สิงหาคม 2025",
          source: "iPhoneMod",
          image: "https://www.iphonemod.net/wp-content/uploads/2024/07/updates-rov-team-line-ups-pro-league-2024-winter7-cover-758x426.jpg",
          glowColor: "#4a90e2", // สีน้ำเงินจากรูป
          content: [
            "Bacon Time ปล่อย AlmondP และให้ TaoX มารับตำแหน่งป่า ก่อนจะซื้อ Bboss กลับมาเล่นแทน",
            "เป็นการปรับทีมครั้งสำคัญเพื่อลุย RoV Pro League ฤดูหนาว"
          ],
          link: "https://www.iphonemod.net/updates-rov-team-line-ups-pro-league-2024-winter.html"
        },
        {
          title: "FS คว้าชัยนัดเปิดสนาม APL 2025",
          date: "23 พฤษภาคม 2025",
          source: "Garena RoV Thailand",
          image: "https://media.discordapp.net/attachments/931798588210696252/1405136584558252173/1755080865104.jpg?ex=689dbaeb&is=689c696b&hm=54e26672d1754e635f3d515c717543bda4791c6e0f616d9403512ab7e7733505&=&format=webp&width=1116&height=628",
          glowColor: "#ffa500", // สีส้มจากภาพ YouTube
          content: [
            "FS เอาชนะคู่แข่งจากเวียดนามด้วยสกอร์ 3-1 ในรอบ Wildcard",
            "ทำให้พวกเขาเข้าใกล้รอบ Swiss Stage มากขึ้น"
          ],
          link: "https://www.youtube.com/watch?v=YEPKChV_uAs"
        },
        {
          title: "Super RoV Day! อัปเดตใหญ่ 31 กรกฎาคม 2025",
          date: "31 กรกฎาคม 2025",
          source: "ROV.in.th",
          image: "https://cdn-webth.garenanow.com/webth/cdn/rov/non-events/official/20250708/332de42e-c701-4962-840d-a926bef67c53.png",
          glowColor: "#800080", // สีม่วงจากภาพ YouTube
          content: [
            "อัปเดตใหญ่ปรับสมดุลฮีโร่ ไอเทม และเพิ่มระบบใหม่ เช่น ฟังก์ชันแปลงเสียงพูดเป็นข้อความ",
            "ฮีโร่ใหม่ Goverra และโหมด Clone Nightmare พร้อมให้เล่นแล้ว!"
          ],
          link: "https://rov.in.th/patch-notes"
        },
        {
          title: "Goverra ฮีโร่ใหม่มาแรงในแพตช์ล่าสุด",
          date: "2 สิงหาคม 2025",
          source: "Play Store",
          image: "https://example.com/goverra.jpg",
          glowColor: "#8b008b", // สีม่วงเข้มจากสมมติ
          content: [
            "Goverra ฮีโร่สายไฟท์เตอร์มาพร้อมสกิล Burst Damage สูง และท่า Ultimate ที่พลิกเกมได้",
            "เป็นหนึ่งในฮีโร่ที่ผู้เล่นต้องลองในซีซั่นนี้"
          ],
          link: "https://play.google.com/store/apps/details?id=com.garena.game.kgth"
        },
        {
          title: "PSG คว้าตั๋วเข้าสู่รอบ Swiss Stage APL 2025",
          date: "24 พฤษภาคม 2025",
          source: "Garena RoV Thailand",
          image: "https://example.com/psg-win.jpg",
          glowColor: "#00b7eb", // สีฟ้าจากสมมติ
          content: [
            "PSG เอาชนะคู่แข่งจากอินโดนีเซีย 3-0 ทำให้ผ่านเข้าสู่รอบ Swiss Stage ได้สำเร็จ",
            "นับเป็นการกลับมาที่แข็งแกร่งของทีม PSG"
          ],
          link: "https://www.facebook.com/ROVTH/posts/1017075920636025"
        },
        {
          title: "RoV Thailand Esports Premier League 2025 เปิดฉาก",
          date: "15 กรกฎาคม 2025",
          source: "Garena RoV Thailand",
          image: "https://example.com/tepl2025.jpg",
          glowColor: "#ff4500", // สีส้มแดงจากสมมติ
          content: [
            "การแข่งขัน TEPL 2025 ได้เริ่มต้นขึ้นโดยมีทีมชั้นนำจากทั่วประเทศเข้าร่วม",
            "เพื่อชิงเงินรางวัลรวมและสิทธิ์เข้า RoV Pro League ปีหน้า"
          ],
          link: "https://www.youtube.com/c/garenarovthailand"
        },
        {
          title: "Valhein ได้รับการปรับสมดุลครั้งใหญ่",
          date: "1 สิงหาคม 2025",
          source: "ROV.in.th",
          image: "https://example.com/valhein-balance.jpg",
          glowColor: "#ffd700", // สีเหลืองจากสมมติ
          content: [
            "Valhein ได้รับการปรับสกิลให้มีพลังโจมตีพื้นฐานสูงขึ้น แต่ลดอัตราการยิงคริติคอล",
            "การเปลี่ยนแปลงนี้ทำให้สมดุลการเล่นดีขึ้นในเลนแครี่"
          ],
          link: "https://rov.in.th/patch-notes"
        },
        {
          title: "โหมด Spectate ใหม่เปิดใช้งานแล้ว",
          date: "3 สิงหาคม 2025",
          source: "ROV.in.th",
          image: "https://example.com/spectate-mode.jpg",
          glowColor: "#00ff7f", // สีเขียวจากสมมติ
          content: [
            "โหมด Spectate ใหม่ช่วยให้ผู้เล่นติดตามการแข่งขันได้ง่ายขึ้น",
            "มีระบบกล้องอัตโนมัติและการเลือกมุมมองอิสระ"
          ],
          link: "https://rov.in.th/patch-notes/beta-36"
        },
        {
          title: "FS และ PSG เผชิญหน้ากันในรอบ Swiss Stage",
          date: "27 พฤษภาคม 2025",
          source: "Garena RoV Thailand",
          image: "https://example.com/fs-vs-psg.jpg",
          glowColor: "#ff69b4", // สีชมพูจากสมมติ
          content: [
            "สองทีมไทยต้องมาเจอกันเองในรอบ Swiss Stage ของ APL 2025",
            "เกมนี้ถูกคาดหวังว่าจะเป็นหนึ่งในแมตช์ที่ดุเดือดที่สุด"
          ],
          link: "https://www.youtube.com/watch?v=WenC5arPey8"
        }
      ]
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
  height: 200px;
  object-fit: cover;
  border-radius: var(--border-radius-small);
  margin-bottom: 20px;
  transition: transform var(--transition-medium), box-shadow var(--transition-medium);
  /* แสงเรืองตามสีของรูป */
  box-shadow: 0 0 10px var(--glow-color, rgba(255, 255, 255, 0.5)),
              0 0 20px var(--glow-color, rgba(255, 255, 255, 0.3));
}

.news-article:hover .news-image {
  transform: scale(1.02);
  box-shadow: 0 0 15px var(--glow-color, rgba(255, 255, 255, 0.7)),
              0 0 30px var(--glow-color, rgba(255, 255, 255, 0.4));
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