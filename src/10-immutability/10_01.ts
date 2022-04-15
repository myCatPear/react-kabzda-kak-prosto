export type UserType = {
    name:string
    hair:number
    address:{city:string, house:number}
}

export type LaptopType = {
    title:string
}

export type UserWithLaptopType = UserType & {
    laptop:LaptopType
}

export type UserWithBookType = UserType & {
    books:string[]
}

export type WithCompaniesType = {
    companies:{id:number, title:string}[]
}

export function moveUser(u:UserWithLaptopType, city:string) {
    return {
        ...u,
        address:{...u.address, city}
    }

}

export function moveUserToOtherHouse(u:UserWithLaptopType & UserWithBookType, house:number) {
    return {
        ...u,
        address:{...u.address, house}
    }

}

export function upgradeUserLaptop(u:UserWithLaptopType, laptop:string) {
    return {
        ...u,
       laptop:{...u.laptop, title:laptop}
    }

}

export function upgradeBooks(u:UserWithLaptopType & UserWithBookType, books:string[]) {
    return {
        ...u,
       books: [...u.books, ...books]
    }

}

export function updateBook(u:UserWithLaptopType & UserWithBookType, oldBook:string, newBook:string) {
    return {
        ...u,
        books: u.books.map(b => b === oldBook ? b = newBook : b)
    }

}

export function removeBook(u:UserWithLaptopType & UserWithBookType, book:string) {
    return {
        ...u,
        books: u.books.filter(b => b !== book)
    }

}

export function updateCompanyTitle(u:UserWithLaptopType & WithCompaniesType, id:number, newTitle:string) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, title:newTitle} : c)
    }

}