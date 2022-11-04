function createGame(player1, hour, player2) {
    return `
        <li><img src="./assets/icon-${player1}.svg" alt="icone da bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="icone da bandeira do ${player2}">
        </li>
    `
}

let delay = -0.4

function createCard(date, day, games) {
    delay += 0.4
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML =
    createCard("24/11", "segunda",
        createGame("brazil", "16:00", "serbia") +
        createGame("brazil", "16:00", "serbia") +
        createGame("brazil", "16:00", "serbia")
    ) +
    createCard("13/12", "sábado",
        createGame("switzerland", "13:00", "brazil") +
        createGame("brazil", "16:00", "cameroon") +
        createGame("brazil", "16:00", "cameroon")
    ) +
    createCard("13/12", "sábado",
        createGame("brazil", "16:00", "cameroon") +
        createGame("brazil", "16:00", "cameroon") +
        createGame("brazil", "16:00", "cameroon")
    )