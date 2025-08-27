document.addEventListener("DOMContentLoaded", function() {
    // Defina a data de início do namoro aqui (Ano, Mês-1, Dia, Hora, Minuto, Segundo)
    const startDate = new Date(2023, 10, 28, 0, 0, 0); // Exemplo: 1º de janeiro de 2024, 00:00:00

    const hoursHand = document.querySelector(".hours");
    const minutesHand = document.querySelector(".minutes");
    const secondsHand = document.querySelector(".seconds");
    const timeTogetherElement = document.getElementById("time-together");

    function updateClock() {
        const now = new Date();
        const diff = now.getTime() - startDate.getTime();

        // Calcular anos, meses, dias, horas, minutos, segundos
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const years = Math.floor(days / 365.25); // Aproximação para anos bissextos

        const remainingDays = days % 365.25;
        const remainingHours = hours % 24;
        const remainingMinutes = minutes % 60;
        const remainingSeconds = seconds % 60;

        timeTogetherElement.textContent = 
            `Estamos juntos há: ${years} ano, ${Math.floor(remainingDays)} dias, ${remainingHours} horas, ${remainingMinutes} minutos e ${remainingSeconds} segundos.`;

        // Atualizar ponteiros do relógio analógico
        // O relógio analógico aqui representa segundos, minutos e horas do tempo atual, não do tempo de namoro
        const currentSeconds = now.getSeconds();
        const currentMinutes = now.getMinutes();
        const currentHours = now.getHours();

        const secondsDegrees = (currentSeconds / 60) * 360;
        const minutesDegrees = ((currentMinutes + currentSeconds / 60) / 60) * 360;
        const hoursDegrees = ((currentHours + currentMinutes / 60) / 12) * 360;

        secondsHand.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;
        minutesHand.style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`;
        hoursHand.style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`;
    }

    // Atualiza o relógio a cada segundo
    setInterval(updateClock, 1000);
    updateClock(); // Chama a função uma vez para exibir o tempo imediatamente
});

