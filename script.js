document.addEventListener("DOMContentLoaded", function() {
    // Data de início do namoro (Ano, Mês-1, Dia, Hora, Minuto, Segundo)
    const startDate = new Date(2023, 9, 28, 20, 20, 0); 

    const hoursHand = document.querySelector(".hours");
    const minutesHand = document.querySelector(".minutes");
    const secondsHand = document.querySelector(".seconds");

    // Elementos do contador
    const elYears = document.getElementById("years");
    const elMonths = document.getElementById("months");
    const elDays = document.getElementById("days");
    const elHours = document.getElementById("hours");
    const elMinutes = document.getElementById("minutes");
    const elSeconds = document.getElementById("seconds");

    function updateClock() {
        const now = new Date();
        const diff = now.getTime() - startDate.getTime();

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);

        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        let remainingDays = now.getDate() - startDate.getDate();

        if (remainingDays < 0) {
            months--;
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            remainingDays = prevMonth.getDate() + remainingDays;
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        const remainingHours = hours % 24;
        const remainingMinutes = minutes % 60;
        const remainingSeconds = seconds % 60;

        // Atualiza os blocos do contador
        if (elYears) elYears.textContent = String(years).padStart(2, '0');
        if (elMonths) elMonths.textContent = String(months).padStart(2, '0');
        if (elDays) elDays.textContent = String(remainingDays).padStart(2, '0');
        if (elHours) elHours.textContent = String(remainingHours).padStart(2, '0');
        if (elMinutes) elMinutes.textContent = String(remainingMinutes).padStart(2, '0');
        if (elSeconds) elSeconds.textContent = String(remainingSeconds).padStart(2, '0');

        // Atualizar ponteiros do relógio analógico
        const currentSeconds = now.getSeconds();
        const currentMinutes = now.getMinutes();
        const currentHours = now.getHours();

        const secondsDegrees = (currentSeconds / 60) * 360;
        const minutesDegrees = ((currentMinutes + currentSeconds / 60) / 60) * 360;
        const hoursDegrees = ((currentHours + currentMinutes / 60) / 12) * 360;

        // Evita animação indesejada ao passar do segundo 59 para o 0
        secondsHand.style.transition = currentSeconds === 0 ? 'none' : 'transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44)';
        
        secondsHand.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;
        minutesHand.style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`;
        hoursHand.style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`;
    }

    setInterval(updateClock, 1000);
    updateClock();
});