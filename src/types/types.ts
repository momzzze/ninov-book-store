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

export type Genre = {
    name: string
}

export type GenreWithId={
    name: string,
    _id: string
}

export type Author = {
    firstName: string,
    lastName: string,
    imageUrl: string,
    birthDate: string,
    biography: string,
    genres: string[]
}

export type Book = {
    name: string,
}