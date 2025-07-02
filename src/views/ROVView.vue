<template>
  <div class="game-view-content card-base">
    <h2 class="text-highlight">ROV News</h2>
    <div class="news-list">
      <div v-for="(article, index) in articles" :key="index" class="news-article card-inner-style">
        <h3>{{ article.title }}</h3>
        <p class="news-meta text-secondary">{{ article.date }} | แหล่งที่มา: {{ article.source }}</p>
        <p v-for="(paragraph, pIndex) in article.content" :key="pIndex">{{ paragraph }}</p>
        <a href="#" class="read-more">อ่านเพิ่มเติม <span class="arrow">→</span></a>
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
          title: "RoV Pro League Summer 2025: รอบ Playoffs กำลังระเบิดความมันส์!",
          date: "วันที่ 8 มิถุนายน 2568",
          source: "Garena RoV Thailand",
          content: [
            "การแข่งขัน RoV Pro League (RPL) Summer 2025 ได้เข้าสู่รอบ Playoffs อย่างเป็นทางการแล้ว หลังจากที่ 4 ทีมแกร่งได้พิสูจน์ฝีมือผ่านรอบเก็บคะแนนมาได้อย่างยอดเยี่ยม การแข่งขันในรอบนี้จะเข้มข้นยิ่งขึ้นด้วยรูปแบบ Double Elimination แฟนๆ RoV เตรียมพร้อมรับชมการปะทะเดือดเพื่อชิงความเป็นที่หนึ่งและสิทธิ์ในการเข้าร่วม AWC 2025!",
            "แมตช์ต่อไปจะเริ่มขึ้นในวันเสาร์นี้ ถ่ายทอดสดผ่านช่องทางหลักของ Garena RoV Thailand."
          ]
        },
        {
          title: "เปิดตัวฮีโร่ใหม่ \"Krixi Awakened\" เตรียมมาสร้างความปั่นป่วนใน Patch หน้า",
          date: "วันที่ 5 มิถุนายน 2568",
          source: "Garena RoV Thailand",
          content: [
            "เตรียมพบกับการเปลี่ยนแปลงครั้งใหญ่ของฮีโร่ขวัญใจหลายๆ คน \"Krixi\" ที่จะได้รับการอัปเกรดเป็น \"Krixi Awakened\" ในแพทช์อัปเดตถัดไป การอัปเกรดนี้จะมาพร้อมกับสกิลใหม่และโมเดลที่สวยงามยิ่งขึ้น สร้างมิติใหม่ให้กับรูปแบบการเล่นของ Krixi และอาจส่งผลต่อ Metagame ในอนาคต",
            "รายละเอียดสกิลและวันอัปเดตอย่างเป็นทางการจะประกาศให้ทราบอีกครั้ง."
          ]
        },
        {
          title: "AWC 2025: RoV International Championship ประกาศสนามและเงินรางวัล!",
          date: "วันที่ 1 มิถุนายน 2568",
          source: "Garena RoV",
          content: [
            "งาน RoV International Championship (AWC) 2025 ซึ่งเป็นการแข่งขันระดับโลกที่ใหญ่ที่สุด ของเกม RoV ได้ประกาศรายละเอียดสำคัญแล้ว โดยจะจัดขึ้นที่ [...] และมีเงินรางวัลรวมสูงถึง [...] ล้านบาท ซึ่งดึงดูดทีมชั้นนำจากทั่วโลกให้มารวมตัวกัน."
          ]
        },
        {
          title: "อัปเดตระบบ Ranked Season ใหม่ พร้อมรางวัลสุดพิเศษ!",
          date: "วันที่ 25 พฤษภาคม 2568",
          source: "Garena RoV",
          content: [
            "RoV เตรียมอัปเดตระบบ Ranked Season ใหม่ที่จะเริ่มในเดือนหน้า โดยจะมีการปรับเปลี่ยนระบบคะแนนใหม่ที่ยุติธรรมมากขึ้น และเพิ่มรางวัลพิเศษสำหรับผู้เล่นที่สามารถขึ้นถึง Rank สูงสุด",
            "ผู้เล่นที่สามารถขึ้นถึง Tier Mythic จะได้รับสกินฮีโร่พิเศษและเฟรมโปรไฟล์สุดเอ็กซ์คลูซีฟ"
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Keep the existing styles */
.game-view-content {
  max-width: 1200px;
  margin: auto;
  padding: 50px;
  text-align: center;
  font-family: Kanit;
}

h2 {
  font-size: 3em;
  margin-bottom: 40px;
  color: var(--color-highlight);
  font-weight: 700;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
}

.news-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  justify-content: center;
  text-align: left;
}

.news-article {
  background-color: var(--color-bg-secondary);
  padding: 30px;
  border-radius: var(--border-radius-medium);
  border: 1px solid rgba(255, 255, 255, 0.03);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.news-article:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
  background-color: var(--color-bg-primary);
}

.news-article h3 {
  font-size: 1.8em;
  color: var(--color-text-primary);
  margin-bottom: 10px;
  font-weight: 700;
  transition: color 0.3s ease;
}

.news-article:hover h3 {
  color: var(--color-highlight);
}

.news-meta {
  font-size: 0.8em;
  color: var(--color-text-secondary);
  margin-bottom: 15px;
  font-style: italic;
}

.news-article p {
  font-size: 1em;
  line-height: 1.7;
  margin-bottom: 20px;
  color: var(--color-text-primary);
}

.read-more {
  display: inline-flex;
  align-items: center;
  margin-top: 10px;
  color: var(--color-highlight);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: var(--color-highlight-darker);
}

.read-more .arrow {
  margin-left: 5px;
  transition: transform 0.2s ease;
}

.read-more:hover .arrow {
  transform: translateX(3px);
}

/* Responsive Styles */
@media (max-width: 900px) {
  .game-view-content {
    padding: 30px;
    max-width: 95%;
  }
  h2 {
    font-size: 2.5em;
    margin-bottom: 30px;
  }
  .news-list {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
  }
  .news-article {
    padding: 25px;
  }
  .news-article h3 {
    font-size: 1.5em;
  }
  .news-article p {
    font-size: 0.95em;
  }
}

@media (max-width: 600px) {
  .game-view-content {
    padding: 20px;
  }
  h2 {
    font-size: 2em;
    margin-bottom: 25px;
  }
  .news-list {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .news-article {
    padding: 20px;
  }
  .news-article h3 {
    font-size: 1.3em;
  }
  .news-article p {
    font-size: 0.9em;
  }
  .news-meta {
    font-size: 0.75em;
  }
}

@media (max-width: 400px) {
  .game-view-content {
    padding: 15px;
  }
  h2 {
    font-size: 1.8em;
  }
  .news-article {
    padding: 15px;
  }
  .news-article h3 {
    font-size: 1.1em;
  }
  .news-article p {
    font-size: 0.85em;
  }
}
</style>