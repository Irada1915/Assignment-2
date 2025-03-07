document.addEventListener("DOMContentLoaded", () => {
  // Создаем синтезатор
  const synth = new Tone.Synth().toDestination();

  // Карта соответствий клавиш и нот
  const noteMap = {
      Do: "C4",
      DoSharp: "C#4",
      Re: "D4",
      ReSharp: "D#4",
      Mi: "E4",
      Fa: "F4",
      FaSharp: "F#4",
      Sol: "G4",
      SolSharp: "G#4",
      La: "A4",
      SiSharp: "A#4",
      Si: "B4"
  };

  // Получаем все клавиши
  document.querySelectorAll(".key").forEach((key) => {
      key.addEventListener("mousedown", () => {
          const note = key.getAttribute("data-sound"); // Берем ноту из data-sound
          if (noteMap[note]) {
              synth.triggerAttackRelease(noteMap[note], "8n"); // Воспроизводим звук
          } else {
              console.error("Звук не найден:", note);
          }
      });
  });
});


