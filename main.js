function createGame(player1, hour, player2) {
    return `
    <li>
      <img src="./assets/icon=${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon=${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4

function createCard(date, day, games) {
    delay = delay + 0.4
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
    createCard("20/11", "Domingo", createGame("qatar", "13:00", "ecuador")) +
    createCard(
        "21/11",
        "segunda",
        createGame("senegal", "13:00", "netherlands")
    ) +
    createCard(
        "21/11",
        "segunda",
        createGame("england", "10:00", "iran") +
        createGame("united states", "16:00", "wales")
    ) +
    createCard(
        "22/11",
        "terça",
        createGame("argentina", "7:00", "saudi arabia") +
        createGame("denmark", "10:00", "tunisia")
    ) +
    createCard(
        "22/11",
        "terça",
        createGame("mexico", "13:00", "poland") +
        createGame("france", "16:00", "australia")
    ) +
    createCard(
        "23/11",
        "quarta",
        createGame("morocco", "7:00", "croatia") +
        createGame("germany", "10:00", "japan")
    ) +
    createCard(
        "23/11",
        "quarta",
        createGame("spain", "13:00", "costa rica") +
        createGame("belgium", "16:00", "canada")
    ) +
    createCard(
        "24/11",
        "quinta",
        createGame("switzerland", "7:00", "cameroon") +
        createGame("uruguay", "10:00", "south korea")
    ) +
    createCard(
        "24/11",
        "quinta",
        createGame("portugal", "13:00", "ghana") +
        createGame("brazil", "16:00", "serbia")
    ) +
    createCard(
        "25/11",
        "sexta",
        createGame("wales", "7:00", "iran") +
        createGame("qatar", "10:00", "senegal")
    )