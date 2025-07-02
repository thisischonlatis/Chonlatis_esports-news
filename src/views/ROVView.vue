<template>
  <div class="game-view-content card-base fade-in">
    <h2 class="text-highlight">ROV News</h2>
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
          title: "APL 2025 การแข่งขันนานาชาติ: รอบ Swiss Stage กำลังดำเนินอยู่",
          date: "วันที่ 2 กรกฎาคม 2568",
          source: "Garena RoV Thailand",
          content: [
            "การแข่งขัน RoV Pro League (APL) 2025 กำลังอยู่ในช่วงรอบ Swiss Stage (วันที่ 26 มิถุนายน - 6 กรกฎาคม) โดยมี 5 ทีมไทยเข้าร่วมแข่งขัน",
            "รอบ Quarter Finals จะจัดขึ้นในวันที่ 10-13 กรกฎาคม และรอบ Semi & Grand Final ในวันที่ 19-20 กรกฎาคม"
          ],
          link: "https://www.youtube.com/watch?v=YOUR_ROV_APL_LINK", // Please replace with actual link
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=ROV+APL+2025" // Placeholder image
        },
        {
          title: "หลุดข้อมูล Rework Skill Sinestrea: อาจมีการลบสกิลคืนชีพ",
          date: "วันที่ 30 มิถุนายน 2568",
          source: "AbGamingZ - YouTube",
          content: [
            "มีข่าวหลุดและข้อมูลเกี่ยวกับการปรับสกิล (Rework) ของฮีโร่ Sinestrea ในซีซัน 35 ซึ่งอาจมีการลบสกิลคืนชีพเดิมออกไป",
            "การปรับปรุงครั้งนี้คาดว่าจะส่งผลต่อรูปแบบการเล่นของ Sinestrea อย่างมีนัยสำคัญ"
          ],
          link: "https://www.youtube.com/watch?v=YOUR_SINESTREA_LEAK_LINK", // Please replace with actual link
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=Sinestrea+Rework" // Placeholder image
        },
        {
          title: "RoV T-POP MVP Showmatch: รายละเอียดการเข้าร่วม",
          date: "วันที่ 28 มิถุนายน 2568",
          source: "RoV Official",
          content: [
            "มีการเผยแพร่รายละเอียดสำหรับการเข้าร่วมงาน RoV T-POP MVP Showmatch ซึ่งเป็นกิจกรรมพิเศษที่แฟนๆ จะได้พบกับดาราและผู้เล่นมืออาชีพ"
          ],
          link: "https://rov.in.th/contents",
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=ROV+T-POP+Showmatch" // Placeholder image
        },
        {
          title: "ปรับสมดุลฮีโร่และเปิดตัวฮีโร่ใหม่ 'Heino'",
          date: "วันที่ 5 มิถุนายน 2568",
          source: "RoV Official",
          content: [
            "มีการปรับสมดุลฮีโร่ประจำวันที่ 5 มิถุนายน 2568 ซึ่งรวมถึงการเปลี่ยนแปลงความสามารถของฮีโร่หลายตัว เพื่อให้เกิดความหลากหลายในการเล่นมากขึ้น",
            "นอกจากนี้ยังมีการเปิดตัวฮีโร่ใหม่ชื่อ 'Heino' ในการอัปเดตเดียวกัน"
          ],
          link: "https://rov.in.th/patch-notes",
          image: "https://via.placeholder.com/400x200/404040/FFFFFF?text=Heino+New+Hero" // Placeholder image
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