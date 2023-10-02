// Modern javascript from the beginning - YT course(Traversy media)

const library = [
    {
        tital: "new",
        author: "Prashant",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        tital: "new1",
        author: "Prashant1",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        tital: "new2",
        author: "Prashant2",
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
]

library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

const {title:firstBook} = library[0]

console.log(library)