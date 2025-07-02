<template>
  <div class="game-view-content card-base">
    <h2 class="text-highlight">Free Fire News</h2>
    <div class="news-list">
      <div v-for="(article, index) in articles" :key="index" class="news-article card-inner-style">
        <h3>{{ article.title }}</h3>
        <p class="news-meta text-secondary">{{ article.date }} | แหล่งที่มา: {{ article.source }}</p>
        <p v-for="(paragraph, pIndex) in article.content" :key="pIndex">{{ paragraph }}</p>
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
          title: "Free Fire ฉลองครบรอบ 8 ปี พร้อมเปิดตัวโหมด Battle Royale 2.0",
          date: "วันที่ 15 มิถุนายน 2568",
          source: "Garena Free Fire Thailand",
          content: [
            "Garena ประกาศโหมด Battle Royale 2.0 ที่จะมาพร้อมระบบกราฟิกใหม่ทั้งหมดและกลไกการเล่นที่ล้ำสมัยกว่าเดิม โดยจะเปิดตัวในเดือนสิงหาคม 2568 เพื่อฉลองครบรอบ 8 ปีของเกม",
            "โหมดนี้จะมีการเปลี่ยนแปลงระบบวงแหวนไฟที่ปรับตัวตามสถานการณ์จริง และเพิ่มยานพาหนะทางอากาศเป็นครั้งแรก"
          ]
        },
        {
          title: "Free Fire World Championship 2025 ประกาศเงินรางวัลสูงสุด 5 ล้านดอลลาร์",
          date: "วันที่ 10 มิถุนายน 2568",
          source: "FFWC Official",
          content: [
            "การแข่งขัน Free Fire World Championship 2025 จะมีเงินรางวัลรวมสูงถึง 5 ล้านดอลลาร์สหรัฐ นับเป็นการแข่งขันที่มีเงินรางวัลสูงที่สุดในประวัติศาสตร์เกมมือถือ",
            "รอบคัดเลือกจะเริ่มในเดือนกันยายน 2568 โดยประเทศไทยจะได้โควต้า 3 ทีม"
          ]
        },
        {
          title: "อัปเดต OB48 เปิดตัวฮีโร่ใหม่ 'Neon' พร้อมระบบความสามารถผสม",
          date: "วันที่ 5 มิถุนายน 2568",
          source: "Garena Free Fire",
          content: [
            "แพทช์ OB48 จะนำเสนอตัวละครใหม่ 'Neon' ที่มีความสามารถพิเศษในการสร้างกำแพงพลังงานและดูดซับความเสียหาย ทีมที่ใช้ Neon ร่วมกับตัวละครอื่นจะได้โบนัสความสามารถพิเศษ",
            "นอกจากนี้ยังมีการปรับสมดุลอาวุธทั้งหมดและเพิ่มระบบสังเกตการณ์ใหม่ในโหมดแร้งค์"
          ]
        },
        {
          title: "ทีม Thai Pride คว้าแชมป์ Free Fire SEA Championship 2025",
          date: "วันที่ 1 มิถุนายน 2568",
          source: "Garena Esports TH",
          content: [
            "ทีมไทยอย่าง Thai Pride สามารถคว้าแชมป์การแข่งขัน Free Fire SEA Championship 2025 ได้สำเร็จ หลังการแข่งขันดุเดือด 4 วันเต็ม",
            "นี่คือแชมป์ระดับภูมิภาคครั้งที่ 3 ของทีมไทยในปี 2568 และจะได้สิทธิ์เข้าแข่งขัน Free Fire World Championship โดยอัตโนมัติ"
          ]
        },
        {
          title: "Free Fire เปิดตัวแมพใหม่ 'Cyber Metro' พื้นที่เมืองอนาคต",
          date: "วันที่ 28 พฤษภาคม 2568",
          source: "Garena Free Fire",
          content: [
            "แมพใหม่ 'Cyber Metro' จะเป็นแมพธีมเมืองอนาคตที่มีระบบขนส่งความเร็วสูงและอาคารที่สามารถเปลี่ยนแปลงโครงสร้างได้ระหว่างเกม",
            "แมพนี้จะเริ่มให้เล่นได้ในเดือนกรกฎาคม 2568 พร้อมโหมดพิเศษที่ผู้เล่นสามารถแฮกระบบต่างๆ ในเกมได้"
          ]
        },
        {
          title: "Free Fire ร่วมมือกับ Netflix นำเสนอสกินละครดังระดับโลก",
          date: "วันที่ 20 พฤษภาคม 2568",
          source: "Garena Free Fire",
          content: [
            "Free Fire ประกาศความร่วมมือกับ Netflix เพื่อนำเสนอสกินตัวละครจากซีรีส์ดังอย่าง Stranger Things, The Witcher และ Squid Game ในเกม",
            "กิจกรรมนี้จะเริ่มในเดือนพฤศจิกายน 2568 พร้อมกับโหมดเกมพิเศษที่ได้รับแรงบันดาลใจจากซีรีส์เหล่านี้"
          ]
        },
        {
          title: "ระบบ Clan War 2.0 อัปเดตใหญ่ พร้อมลีดเดอร์บอร์ดระดับโลก",
          date: "วันที่ 15 พฤษภาคม 2568",
          source: "Garena Free Fire",
          content: [
            "ระบบ Clan War จะได้รับการอัปเกรดครั้งใหญ่ในเดือนสิงหาคม 2568 โดยจะเพิ่มโหมดแข่งขันเฉพาะสำหรับคลับและลีดเดอร์บอร์ดระดับโลก",
            "คลับที่ติดอันดับจะได้รับสิทธิ์เข้าร่วมการแข่งขัน Clan Masters Championship ที่มีเงินรางวัลรวม 1 ล้านดอลลาร์"
          ]
        },
        {
          title: "Free Fire เปิดตัวฟีเจอร์ 'AI Squadmate' ผู้เล่นสมทบปัญญาประดิษฐ์",
          date: "วันที่ 10 พฤษภาคม 2568",
          source: "Garena Free Fire",
          content: [
            "ฟีเจอร์ใหม่ 'AI Squadmate' จะอนุญาตให้ผู้เล่นสามารถเพิ่มบอทที่มีความสามารถใกล้เคียงผู้เล่นจริงเข้าไปในทีมได้",
            "ระบบ AI นี้จะเรียนรู้รูปแบบการเล่นของผู้เล่นและปรับตัวให้เหมาะสม โดยจะเปิดให้ทดลองใช้ในเดือนกันยายน 2568"
          ]
        },
        {
          title: "Free Fire MAX อัปเดตกราฟิก Unreal Engine 5.2 สุดล้ำ",
          date: "วันที่ 5 พฤษภาคม 2568",
          source: "Garena Free Fire",
          content: [
            "Free Fire MAX จะอัปเกรดกราฟิกด้วย Unreal Engine 5.2 ในเดือนธันวาคม 2568 ซึ่งจะทำให้เกมมีความสมจริงมากขึ้นทั้งในส่วนของแสง เงา และพื้นผิว",
            "การอัปเดตนี้จะรองรับอุปกรณ์รุ่นใหม่เท่านั้น โดยจะมีการแจ้งเตือนให้ผู้เล่นทราบล่วงหน้า"
          ]
        },
        {
          title: "Free Fire เปิดระบบคริปโตเคอร์เรนซีครั้งแรกในเกม Battle Royale",
          date: "วันที่ 1 พฤษภาคม 2568",
          source: "Garena Free Fire",
          content: [
            "Free Fire จะเป็นเกม Battle Royale เกมแรกที่นำระบบสกุลเงินดิจิทัล 'FF Coin' มาใช้ในเกม โดยผู้เล่นสามารถซื้อขายไอเท็มระหว่างกันได้อย่างปลอดภัย",
            "ระบบนี้จะเริ่มทดลองใช้ในบางประเทศก่อนในเดือนตุลาคม 2568 และขยายไปทั่วโลกในปี 2569"
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