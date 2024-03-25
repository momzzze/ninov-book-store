export type LoginUserData = {
    email: string,
    password: string
}

export type RegisterUserData = {
    email: string,
    username: string,
    password: string,
    rePassword: string
}
// -------------------Genre-------------------
export type Genre = {
    name: string
}

export type GenreWithId = {
    name: string,
    _id: string
}
// -------------------Author-------------------
export type Author = {
    firstName: string,
    lastName: string,
    imageUrl: string,
    birthDate: string,
    biography: string,
    genres: string[]
}

export type AuthorWithId = {
    firstName: string,
    lastName: string,
    imageUrl: string,
    birthDate: string,
    biography: string,
    genres: string[],
    _id: string
}


// -------------------Book-------------------
export type Book = {
    title: string,
    description: string,
    imageUrl: string,
    publishedDate: string,
    price: number,
    pages: number,
    availableQuantity: number,
    genre: string,
    author: string,
    publisher: string,
}

export type BookWithId = {
    title: string,
    description: string,
    imageUrl: string,
    publishedDate: string,
    price: number,
    pages: number,
    availableQuantity: number,
    genre: string,
    author: string,
    publisher: string,
    _id: string
}

export type PopulatedBook ={
    _id: string,
    title: string,
    description: string,
    imageUrl: string,
    publishedDate: string,
    price: number,
    pages: number,
    availableQuantity: number,
    genre: GenreWithId,
    author: AuthorWithId,
    publisher: PublisherWithId,
}

// -------------------Shipper-------------------
export type Shipper = {
    name: string,
    phoneNumber: string
}

export type ShipperWithId = {
    name: string,
    phoneNumber: string,
    _id: string
}

// -------------------Publisher-------------------
export type Publisher = {
    name: string,
}

export type PublisherWithId = {
    name: string,
    _id: string
}