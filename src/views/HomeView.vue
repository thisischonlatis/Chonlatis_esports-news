<template>
  <div class="home-page-layout fade-in">
    <section class="hero-section">
      <div class="hero-content">
        <h2 class="hero-title text-highlight">ESPORTS NEWS</h2>
        <p class="hero-subtitle text-primary">แหล่งรวมข่าวสารล่าสุดของวงการเกมอีสปอร์ต</p>
        <p class="hero-tagline text-secondary">ส่งมอบประสบการณ์อีสปอร์ตที่ยอดเยี่ยมที่สุด</p>
      </div>
    </section>

    <section class="latest-news-summary-section container-padding">
      <div class="latest-news-summary card-base fade-in-up">
        <h3 class="text-highlight summary-title">อัปเดตเด่นประจำสัปดาห์</h3>
        <ul>
          <li>Free Fire: โค้ดแลกรางวัล Garena Free Fire Max ประจำวันที่ 2 กรกฎาคม</li>
          <li>ROV: APL 2025 การแข่งขันนานาชาติ รอบ Swiss Stage กำลังดำเนินอยู่</li>
          <li>Valorant: บทวิเคราะห์อัตราการเลือกใช้ Agent Tejo จากกรุงเทพฯ ถึงโตรอนโต</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
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

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: 0.3s; /* Delay for the summary card */
  opacity: 0; /* Start hidden */
}


.home-page-layout {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px); /* Adjust based on your header height to ensure space */
  width: 100%;
  padding: 0;
  font-family: 'Kanit', sans-serif;
  background-color: var(--color-bg-primary); /* ใช้สีพื้นหลังหลัก */
  color: var(--color-text-primary); /* ใช้สีข้อความหลัก */
}

.hero-section {
  position: relative;
  top: -100px;
  flex-grow: 1; /* Makes the hero section take up available space */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* ปรับ padding-top เพิ่มขึ้นอีกเล็กน้อย */
  padding: 90px 20px 60px; /* Header height + desired bottom padding */
  background: linear-gradient(135deg, var(--color-bg-primary) 0%, #0d0d1e 100%); /* ไล่สีพื้นหลัง */
  position: relative; /* สำหรับ pseudo-element */
  overflow: hidden; /* ซ่อนส่วนเกินของ pseudo-element */
}

/* เพิ่ม effect คล้ายดาว/จุดในพื้นหลัง */
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, rgba(233, 69, 96, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.2;
  z-index: 0;
}


.hero-content {
  position: relative; /* ให้เนื้อหาอยู่เหนือ pseudo-element */
  z-index: 1;
  max-width: 800px;
}

.hero-title {
  font-size: 5.5em; /* ขนาดใหญ่พิเศษ */
  margin-bottom: 20px;
  line-height: 1.1;
  font-weight: 900; /* ตัวหนามาก */
  text-transform: uppercase; /* ตัวพิมพ์ใหญ่ */
  letter-spacing: 3px; /* เพิ่มระยะห่างตัวอักษร */
}

.hero-subtitle {
  font-size: 1.8em; /* ขนาดใหญ่ขึ้น */
  margin-bottom: 15px;
  opacity: 0.9;
  font-weight: 500;
}

.hero-tagline {
  font-size: 1.1em; /* ขนาดปกติ */
  margin-bottom: 40px;
  opacity: 0.7;
}

.latest-news-summary-section {
  position: relative;
  top: -50px; /* ยกขึ้นเล็กน้อยเพื่อให้ดูต่อ
  background-color: var(--color-bg-primary); /* พื้นหลังส่วนสรุปข่าว */
  padding: 80px 20px; /* เพิ่ม padding */
  display: flex;
  justify-content: center;
  align-items: center;
}

.latest-news-summary {
  width: 100%;
  max-width: 700px; /* จำกัดความกว้าง */
  padding: 40px; /* เพิ่ม padding ด้านใน */
  text-align: left;
  border-radius: var(--border-radius-medium);
  background-color: #181A20; /* สีเทาอมน้ำเงินเข้มขึ้นเล็กน้อย (จากคำขอก่อนหน้า) */
  box-shadow: var(--shadow-base);
  border: 1px solid var(--border-color);
}

.latest-news-summary h3 {
  font-size: 2.5em; /* ขนาดหัวข้อสรุป */
  margin-bottom: 30px;
  text-align: center;
  font-weight: 700;
  text-shadow: var(--shadow-text);
  color: #64D9EF; /* สีฟ้าอ่อนที่สดใส (จากคำขอก่อนหน้า) */
}

.latest-news-summary ul {
  list-style: none; /* ไม่มีหัวข้อรายการ */
  padding: 0;
  margin: 0;
}

.latest-news-summary li {
  font-size: 1.2em; /* ขนาดรายการ */
  margin-bottom: 20px; /* เพิ่มระยะห่างระหว่างรายการ */
  padding-left: 25px; /* เว้นระยะจากไอคอน */
  position: relative;
  line-height: 1.6;
  color: var(--color-text-primary);
}

.latest-news-summary li::before {
  content: '★'; /* ใช้ดาวแทน bullet point */
  color: var(--color-highlight); /* สีดาว - ยังคงใช้สี highlight เดิม */
  position: absolute;
  left: 0;
  font-size: 1.2em;
  line-height: 1.2;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 4.8em;
  }
  .hero-subtitle {
    font-size: 1.7em;
  }
}

@media (max-width: 900px) {
  .home-page-layout {
    min-height: calc(100vh - 170px); /* Adjust for tablet header height */
  }
  .hero-section {

  }
  .hero-title {
    font-size: 3.8em;
  }
  .hero-subtitle {
    font-size: 1.5em;
  }
  .hero-tagline {
    font-size: 1em;
  }
  .latest-news-summary-section {
    padding: 60px 15px;
  }
  .latest-news-summary {
    padding: 35px;
  }
  .latest-news-summary h3 {
    font-size: 2em;
  }
  .latest-news-summary li {
    font-size: 1.1em;
  }
}

@media (max-width: 600px) {
  .home-page-layout {
    min-height: calc(100vh - 220px); /* Adjust for mobile header height */
  }
  .hero-section {

  }
  .hero-title {
    font-size: 2.8em;
    margin-bottom: 15px;
  }
  .hero-subtitle {
    font-size: 1.2em;
  }
  .hero-tagline {
    font-size: 0.9em;
  }
  .latest-news-summary-section {
    padding: 40px 10px;
  }
  .latest-news-summary {
    padding: 25px;
  }
  .latest-news-summary h3 {
    font-size: 1.8em;
    margin-bottom: 20px;
  }
  .latest-news-summary li {
    font-size: 1em;
  }
  .latest-news-summary li::before {
    font-size: 1em;
  }
}

@media (max-width: 400px) {
  .hero-title {
    font-size: 2.2em;
  }
  .hero-subtitle {
    font-size: 1em;
  }
  .hero-tagline {
    font-size: 0.8em;
  }
  .latest-news-summary {
    padding: 20px;
  }
  .latest-news-summary h3 {
    font-size: 1.5em;
  }
  .latest-news-summary li {
    font-size: 0.9em;
  }
}
</style>