/**
 * genre, name, developer team, publisher, yearReleased, copies sold
 */

const videogames = [
    {
        id: 'fps1',
        genre: 'fps',
        name: 'call of duty black ops',
        creator: 'treyarch studios',
        publisher: 'activision',
        ReleaseDate: new Date('November 9, 2010'),
        CopiesSold: '25 million',
    },
    {
        id: 'rpg1',
        name: 'elden ring',
        genre: 'rpg',
        creator: 'fromsoftware',
        publisher: 'bandai namco',
        ReleaseDate: new Date('February 25, 2022'),
        CopiesSold: '28.6 million'
    },
    {
        id: 'action adventure1',
        name: 'hollow knight',
        genre: 'action-adventure',
        creator: 'Team cherry',
        publisher: 'Team cherry',
        ReleaseDate: new Date('February 24, 2017'),
        CopiesSold: '3 million'
    },
    {
        id: 'action adventure2',
        name: 'Batman arkham knight',
        genre: 'action-adventure',
        creator: 'Rocksteady studios',
        publisher: 'warner bros games',
        ReleaseDate: new Date('June 23, 2015'),
        CopiesSold: '7 milion'
    },
    {
        id: 'action adventure3',
        genre: 'action-adventure',
        name: 'Uncharted 4 thief End',
        creator: 'Naughty dog',
        publisher: 'playstation studios',
        ReleaseDate: new Date('May 9, 2016'),
        CopiesSold: '18 million'
    },
    {
        id: 'action adventure4',
        genre: 'action-adventure',
        name: 'sekiro shadows die twice',
        creator: 'fromsoftware',
        publisher: 'bandai namco',
        ReleaseDate: new Date('March 22, 2019'),
        CopiesSold: '10 million'
    },
    {
        id: 'rpg2',
        genre: 'rpg',
        name: 'Assassins creed origins',
        creator: 'Ubisoft Montreal',
        publisher: 'Ubisoft',
        ReleaseDate: new Date('October 27, 2017'),
        CopiesSold: '10 million'
    },
    {
        id: 'fps2',
        genre: 'fps',
        name: 'Doom eternal',
        creator: 'id software',
        publisher: 'Bethesda Softworks',
        ReleaseDate: new Date('March 20, 2020'),
        CopiesSold: '6 million'
    },
    {
        id: 'horror1',
        genre: 'horror',
        name: 'Resident evil 7',
        creator: 'Capcom',
        publisher: 'Capcom',
        ReleaseDate: new Date('January 24, 2017'),
        CopiesSold: '14.4 milion'
    },
    {
        id: 'horror2',
        genre: 'horror',
        name: 'Outlast',
        creator: 'Red Barrels',
        publisher: 'Red Barrels',
        ReleaseDate: new Date('June 14, 2014'),
        CopiesSold: '15 million'
    },
    {
        id: 'fps3',
        genre: 'fps',
        name: 'Gunfire reborn',
        creator: 'Duoyi Games',
        publisher: 'Duoyi Network',
        ReleaseDate: new Date('November 17, 2021'),
        CopiesSold: '2 million'
    },
    {
        id: 'rpg3',
        genre: 'rpg',
        name: 'Dark souls',
        creator: 'FromSoftware',
        publisher: 'bandai namco',
        ReleaseDate: new Date('September 22, 2011'),
        CopiesSold: '11 milion'
    },
    {
        id: 'fps4',
        genre: 'fps',
        name: 'Borderlands 2',
        creator: 'Gearbox',
        publisher: '2k',
        ReleaseDate: new Date('September 18, 2012'),
        CopiesSold: '26 million'
    },
    {
        id: 'action adventure5',
        genre: 'action-adventure',
        name: 'x-men origins wolverine',
        creator: 'Raven Studios',
        publisher: 'Activison',
        ReleaseDate: new Date('Aprli 9, 2009'),
        CopiesSold: '17 million'
    },
    {
        id: 'action adventure6',
        genre: 'action-adventure',
        name: 'Spiderman',
        creator: 'insonamic games',
        publisher: 'Playstation studios',
        ReleaseDate: new Date('September 7 , 2018'),
        CopiesSold: '20 million'
    },
    {
        id: 'horror3',
        genre: 'horror',
        name: 'Slient hill 2',
        creator: 'Bloober Team',
        publisher: 'Konami Digital',
        ReleaseDate: new Date('September 25, 2001'),
        CopiesSold: '1 million'
    },
    {
        id: 'rpg4',
        genre: 'rpg',
        name: 'The Elder Scrolls v skyrim',
        creator: 'Bethesda game studios',
        publisher: 'Bethesda softworks',
        ReleaseDate: new Date('November 11, 2011'),
        CopiesSold: '60 million'
    },
    {
        id: 'action adventure7',
        genre: 'action-adventure',
        name: 'The legend of zelda breath of the wild',
        creator: 'Nintendo EPD',
        publisher: 'Nintendo',
        ReleaseDate: new Date('March 3 , 2017'),
        CopiesSold: '34.32 million'
    },
    {
        id: 'fps5',
        genre: 'fps',
        name: ' Doom 2016',
        creator: 'id Software',
        publisher: 'Bethesda softworks',
        ReleaseDate: new Date('May 13, 2016'),
        CopiesSold: '2 million'
    },
    {
        id: 'horror4',
        genre: 'horror',
        name: 'The Evil Within',
        creator: 'Tango GameWorks',
        publisher: 'Bethesda Softworks',
        ReleaseDate: new Date('October 14, 2014'),
        CopiesSold: '1.21 million'
    },
    {
        id: 'rpg5',
        genre: 'rpg',
        name: "Baldur's Gate 3",
        creator: 'Larin Studios',
        publisher: 'Larin studio',
        ReleaseDate: new Date('August 23, 2023'),
        CopiesSold: '15 million'
    },
    {
        id: 'action adventure8',
        genre: 'action-adventure',
        name: 'Batman arkham city',
        creator: 'Rocksteady studios',
        publisher: 'warner bros games',
        ReleaseDate: new Date('October 18, 2011'),
        CopiesSold: '12.5 million'
    },
    {
        id: 'action adventure9',
        genre: 'action-adventure',
        name: 'God of War 2018',
        creator: 'Santa Monica Studio',
        publisher: 'Playstation studios',
        ReleaseDate: new Date('April 20, 2018'),
        CopiesSold: '23 million'
    },
    {
        id: 'rpg6',
        name: 'Fallout new vegas',
        genre: 'rpg',
        creator: 'Obsidian Entertainment',
        publisher: 'Bethesda Softworks',
        ReleaseDate: new Date('November 9, 2010'),
        CopiesSold: '25 million'
    },
    {
        id: 'fps6',
        genre: 'fps',
        name: 'overwatch',
        creator: 'Blizzard Team 4',
        publisher: 'activision blizzard',
        ReleaseDate: new Date('October 19, 2010'),
        CopiesSold: '11.6 million'
    },
    {
        id: 'action-adventure10',
        genre: 'action-adventure',
        name: 'Ratchet & Clank: Rift Apart',
        creator: 'Insomniac Games',
        publisher: 'Playstation Studios',
        ReleaseDate: new Date('June 11, 2021'),
        CopiesSold: '3 million'
    },
    {
        id: 'fps7',
        name: 'Call of duty modern warfare 2',
        genre: 'fps',
        creator: 'Infinity ward',
        publisher: 'activision',
        ReleaseDate: new Date('November 10, 2009'),
        CopiesSold: '22.7 million'
    },
    {
        id: 'rpg7',
        name: 'The Outer World',
        genre: 'rpg',
        creator: 'Obsidian Entertainment',
        publisher: 'Private Division',
        ReleaseDate: new Date('October 25, 2019'),
        CopiesSold: '5 million'
    },
]

const row = document.getElementById('row')
const buildCards =(Obj)=> {


    // row.innerHTML = ''

    const column = document.createElement('div')
    column.classList.add('col')

    const card = document.createElement('div')
    card.classList.add('card', 'h-100')
    card.setAttribute('id', `card-${Obj.id}`)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const cardHeader = document.createElement('div')
    cardHeader.classList.add('text-capitalize', 'display-7')
    cardHeader.classList.add('card-header')

    const cardFooter = document.createElement('div')
    cardFooter.classList.add('card-footer')

    cardFooter.innerHTML = `
        <p class="card-text">ReleaseDate: ${Obj.ReleaseDate.toDateString()}</p>
        <p class="card-text">CopiesSold: ${Obj.CopiesSold}</p>`

    const name = document.createElement('h2')
    name.classList.add('text-capitalize', 'display-7')
    name.innerText = Obj.name

    const genre = document.createElement('h2')
    genre.classList.add('text-capitalize', 'display-7' )
    genre.innerText = Obj.genre

    const creator = document.createElement('h3')
    creator.classList.add('text-capitalize', 'display-7', 'list-group', 'list-group-flush')
    creator.innerText = Obj.creator

    const publisher = document.createElement('h3')
    publisher.classList.add('text-capitalize', 'display-7', 'list-group', 'list-group-flush')
    publisher.innerText = Obj.publisher

    cardHeader.appendChild(name)
    cardHeader.appendChild(genre)

    cardBody.appendChild(creator)
    cardBody.appendChild(publisher)

    card.appendChild(cardHeader)

    card.appendChild(cardBody)
    card.appendChild(cardFooter)
    column.appendChild(card)

    row.appendChild(column)
    
}

// buildCards(videogames[0])

// videogames.forEach(videogame => buildCards(videogame) )

const loadCards =(arr)=> {
    arr.forEach(item => buildCards(item))
}

const loadBtn = document.getElementById('loadBtn')

loadBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    row.innerHTML = ''
    const genre = document.getElementById('genre').value

    const cards = videogames.filter(card => card.genre == genre )

    loadCards(cards)
})

let actionadventurevideogames = videogames.filter(videogame => videogame.genre == 'action adventure')

