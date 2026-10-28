document.addEventListener("DOMContentLoaded", () => {
    // Data de início do namoro (Ano, Mês-1, Dia, Hora, Minuto, Segundo)
    const startDate = new Date(2023, 9, 28, 20, 20, 0);

    const $ = (id) => document.getElementById(id);
    const hoursHand = document.querySelector(".hours");
    const minutesHand = document.querySelector(".minutes");
    const secondsHand = document.querySelector(".seconds");
    const pad = (n) => String(n).padStart(2, "0");

    const meses = ["janeiro","fevereiro","março","abril","maio","junho","julho",
                   "agosto","setembro","outubro","novembro","dezembro"];
    $("since").textContent =
        `desde ${startDate.getDate()} de ${meses[startDate.getMonth()]} de ${startDate.getFullYear()}`;

    // Diferença de calendário exata (anos, meses, dias, horas, minutos, segundos)
    function diffCalendar(from, to) {
        let y = to.getFullYear() - from.getFullYear();
        let m = to.getMonth() - from.getMonth();
        let d = to.getDate() - from.getDate();
        let h = to.getHours() - from.getHours();
        let min = to.getMinutes() - from.getMinutes();
        let s = to.getSeconds() - from.getSeconds();

        if (s < 0)   { s += 60; min--; }
        if (min < 0) { min += 60; h--; }
        if (h < 0)   { h += 24; d--; }
        if (d < 0)   { d += new Date(to.getFullYear(), to.getMonth(), 0).getDate(); m--; }
        if (m < 0)   { m += 12; y--; }
        return { y, m, d, h, min, s };
    }

    function update() {
        const now = new Date();
        const t = diffCalendar(startDate, now);

        $("c-years").textContent = t.y;
        $("c-months").textContent = t.m;
        $("c-days").textContent = t.d;
        $("c-hours").textContent = pad(t.h);
        $("c-minutes").textContent = pad(t.min);
        $("c-seconds").textContent = pad(t.s);
        $("l-years").textContent = t.y === 1 ? "ano" : "anos";
        $("l-months").textContent = t.m === 1 ? "mês" : "meses";
        $("l-days").textContent = t.d === 1 ? "dia" : "dias";

        // Mensagem especial em aniversários e "mesversários"
        const sameDay = now.getDate() === startDate.getDate();
        let msg = "";
        if (sameDay && now.getMonth() === startDate.getMonth() && t.y > 0) {
            msg = `Hoje completamos ${t.y} ${t.y === 1 ? "ano" : "anos"}.`;
        } else if (sameDay) {
            msg = "Feliz mesversário.";
        }
        $("milestone").textContent = msg;

        // Relógio analógico com a hora atual
        const s = now.getSeconds(), m = now.getMinutes(), h = now.getHours();
        secondsHand.style.transform = `translateX(-50%) rotate(${s * 6}deg)`;
        minutesHand.style.transform = `translateX(-50%) rotate(${(m + s / 60) * 6}deg)`;
        hoursHand.style.transform   = `translateX(-50%) rotate(${((h % 12) + m / 60) * 30}deg)`;
    }

    update();
    setInterval(update, 1000);
});
