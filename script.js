let score = 0;
let highScore = 0; // ตัวแปรสำหรับคะแนนสูงสุด

const dog = document.getElementById("dog");
const scoreDisplay = document.getElementById("score");
const highScoreDisplay = document.getElementById("highScore"); // อ้างอิงถึง element แสดงคะแนนสูงสุด

// โหลดคะแนนสูงสุดเมื่อหน้าเว็บโหลดเสร็จ
window.onload = () => {
  const storedHighScore = localStorage.getItem("popdogHighScore"); // ดึงค่าจาก localStorage
  if (storedHighScore !== null) { // ตรวจสอบว่ามีค่าเก็บไว้หรือไม่
    highScore = parseInt(storedHighScore); // แปลง string กลับเป็นตัวเลข
    highScoreDisplay.textContent = highScore; // แสดงคะแนนสูงสุดที่โหลดมา
  }
};

dog.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;

  // ตรวจสอบและอัปเดตคะแนนสูงสุด
  if (score > highScore) {
    highScore = score;
    highScoreDisplay.textContent = highScore;
    localStorage.setItem("popdogHighScore", highScore); // บันทึกคะแนนสูงสุดลง localStorage
  }

  dog.src = "dog2.png"; // เปลี่ยนภาพเป็นหมาอ้าปาก

  // ตั้งเวลาให้เปลี่ยนภาพกลับไปเป็นปกติหลังจาก 100 มิลลิวินาที
  setTimeout(() => {
    dog.src = "dog1.png"; // กลับเป็นภาพปกติ
  }, 100);
});