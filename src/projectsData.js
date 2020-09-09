export const projectsList = {
    sportsscraper: {
        title: "SportsScraper",
        description: "This is my sports project",
        slides: [{
            image: "./assets/screenshots/sportsscraper/sportsscraper1.png",
            bigCaption: "LOGIN PAGE",
            littleCaption: 'Users log in to access their profile'
        },
        {
            image: "./assets/screenshots/sportsscraper/sportsscraper2.png",
            bigCaption: "PICK YOUR LEAGUES",
            littleCaption: 'Users select which leagues/sports they want to follow'
        },
        {
            image: "./assets/screenshots/sportsscraper/sportsscraper3.png",
            bigCaption: "USER DASHBOARD",
            littleCaption: "The user dashboard contains the daily games schedule and news from all the leagues the user selected to follow, as well as shortcut links to players that user has chosen to follow"
        },
        {
            image: "./assets/screenshots/sportsscraper/sportsscraper4.png",
            bigCaption: "LEAGUE HOME PAGE",
            littleCaption: "Every league has a home page that contains the day's news, current team standings, daily games schedule, and league statistical leaders"
        },
        {
            image: "./assets/screenshots/sportsscraper/sportsscraper5.png",
            bigCaption: "LEAGUE HOME PAGE (CONT.)",
            littleCaption: 'The top 3 players in various statistical categories'
        },
        {
            image: "./assets/screenshots/sportsscraper/sportsscraper6.png",
            bigCaption: "PLAYER INDEX",
            littleCaption: 'All the players in a particular league, can be searched by name or team'
        },
        {
            image: "./assets/screenshots/sportsscraper/sportsscraper7.png",
            bigCaption: "SELECTED PLAYER",
            littleCaption: 'When you select a player from the index you will be presented with a modal displaying his statistics, and a link to take you to that players news page'
        },
        {
            image: "./assets/screenshots/sportsscraper/sportsscraper8.png",
            bigCaption: "PLAYER NEWS PAGE",
            littleCaption: 'This page uses webscraping to gather daily news blurbs about the player from Rotoworld.com and displays the players statistics. Users can also follow a player to have a shortcut to the player on their dashboard'
        },
    ],
        buttons: [
            {
            name: 'View Demo',
            image: './assets/logos/youtube-icon.svg',
            link: 'https://www.youtube.com/watch?v=27T709q_nN4'},
            {name: 'GitHub',
            image: './assets/logos/github.svg',
            link: 'https://github.com/kh45/my-final-project-frontend'}
    ]
    },
    pokemonTCG: {
        title: "PokemonTCG",
        description: "This is my sports project",
        slides: [
            {
                image: "./assets/screenshots/pokemon/pokemon1.png",
                bigCaption: "LOGIN PAGE",
                littleCaption: 'Users can login to access their saved profile'
            },
            {
                image: "./assets/screenshots/pokemon/pokemon2.png",
                bigCaption: "CREATE DECK",
                littleCaption: 'Users create decks for themselves by selecting two types of pokemon and naming the deck. Decks persist in a users profile after logging out'
            },
            {
                image: "./assets/screenshots/pokemon/pokemon3.png",
                bigCaption: "NEW DECK CREATED",
                littleCaption: 'When a user creates a new deck, 60 random cards are pulled from the PokeMon API using the two types selected by the user. After being generated the 60 cards are displayed'
            },
            {
                image: "./assets/screenshots/pokemon/pokemon4.png",
                bigCaption: "SELECTED CARD",
                littleCaption: 'Users can scroll through their decks and select a specific card to get a better look'
            },
            {
                image: "./assets/screenshots/pokemon/pokemon5.png",
                bigCaption: "ROCK GYM LEADER",
                littleCaption: 'Users can select a gym leader to battle. Gym Leaders have decks full of pokemon type corresponding to their gym type. Page background will change depending on Gym Leader that was selected'
            },
            {
                image: "./assets/screenshots/pokemon/pokemon6.png",
                bigCaption: "GRASS GYM LEADER",
                littleCaption: "Users will battle gym leaders by selecting attacks and doing damage to the Pokemon's HP. First trainer to knock out 6 pokemon wins. Gameplay board displays every move after it is made and how many pokemon remaining"
            }
        ],
        buttons: [
            {
            name: 'View Demo',
            image: './assets/logos/youtube-icon.svg',
            link: 'https://www.youtube.com/watch?v=oUA-xZwkMVM'},
            {name: 'GitHub',
            image: './assets/logos/github.svg',
            link: 'https://github.com/kh45/PokeMonTCG-frontend'}
        ,
        {name: 'Website',
        image: './assets/logos/internet.svg',
        link: 'https://nboober.github.io/PokeMonTCG-frontend/',
        fixer: "fixer"},
    ]},
    nightlife2: {
        title: "Nightlife",
        description: "This is my sports project",
        slides: [
            {
                image: "./assets/screenshots/nightlife/nightlife1.png",
                bigCaption: "First Slide Label",
                littleCaption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                image: "./assets/screenshots/nightlife/nightlife2.png",
                bigCaption: "First Slide Label",
                littleCaption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                image: "./assets/screenshots/nightlife/nightlife3.png",
                bigCaption: "First Slide Label",
                littleCaption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                image: "./assets/screenshots/nightlife/nightlife4.png",
                bigCaption: "First Slide Label",
                littleCaption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            }],
        buttons: [
            {
            name: 'View Demo',
            image: './assets/logos/youtube-icon.svg',
            link: 'https://www.youtube.com/watch?v=oQcT3UKBWFQ'},
            {name: 'GitHub',
            image: './assets/logos/github.svg',
            link: 'https://github.com/kh45/mod-4-project-frontend'
        }]
    },
    uefaGame: {
        title: "UEFA CHAMPIONS MEMORY",
        description: "This is my sports project",
        slides: [
            {
                image: "./assets/screenshots/uefa/uefa1.png",
                bigCaption: "STARTING BOARD",
                littleCaption: 'Users flip cards to reveal a football club logo'
            },
            {
                image: "./assets/screenshots/uefa/uefa2.png",
                bigCaption: "FIRST REVEAL",
                littleCaption: 'If user does not guess correctly cards will return to face down position'
            },
            {
                image: "./assets/screenshots/uefa/uefa3.png",
                bigCaption: "TRY TO BEAT YOUR HIGH SCORE",
                littleCaption: 'Users try to match all 10 pairs in the least amount of moves and time'
            },
            {
                image: "./assets/screenshots/uefa/uefa4.png",
                bigCaption: "WINNING BOARD",
                littleCaption: 'When all 10 pairs are found user will be told how many turns they took. Try to beat your high score'
            }
        ],
        buttons: [
            {
            name: 'GitHub',
            image: './assets/logos/github.svg',
            link: 'https://github.com/kh45/coding-challenge-14'}
            ,{name: 'Website',
            image: './assets/logos/internet.svg',
            link: 'https://kh45.github.io/coding-challenge-14/'
        }]
    }
}