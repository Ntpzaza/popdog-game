let score = 0;
const dog = document.getElementById("dog");
const scoreDisplay = document.getElementById("score");
// const barkSound = document.getElementById("bark-sound"); // ลบบรรทัดนี้หรือคอมเมนต์ไว้

dog.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;

  dog.src = "dog2.png"; // เปลี่ยนภาพเป็นหมาอ้าปาก
  // barkSound.currentTime = 0; // ลบบรรทัดนี้หรือคอมเมนต์ไว้
  // barkSound.play();          // ลบบรรทัดนี้หรือคอมเมนต์ไว้

  setTimeout(() => {
    dog.src = "dog1.png"; // กลับเป็นภาพปกติ
  }, 100);
});