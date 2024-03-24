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

export type GenreWithId={
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
    name: string,
}

export type BookWithId = {
    name: string,
    _id: string
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
