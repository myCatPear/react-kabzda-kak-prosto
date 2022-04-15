import {
    updateCompanyTitle,
    moveUser,
    moveUserToOtherHouse,
    removeBook,
    updateBook,
    upgradeBooks,
    upgradeUserLaptop,
    UserWithBookType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";

test('change address', () => {
    let user:UserWithLaptopType = {
        name:'Denis',
        hair:32,
        address: {
            city:'Minsk',
            house:12
        },
        laptop: {
            title:'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop to macbook', () => {
    let user:UserWithLaptopType = {
        name:'Denis',
        hair:32,
        address: {
            city:'Minsk',
            house:12
        },
        laptop: {
            title:'ZenBook'
        }
    }

    const userCopy = upgradeUserLaptop(user, 'Macbook')


    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
})

test('upgrade house', () => {
    let user:UserWithLaptopType & UserWithBookType = {
        name:'Denis',
        hair:32,
        address: {
            city:'Minsk',
            house:12
        },
        laptop: {
            title:'ZenBook'
        },
        books: [
            'css', 'js', 'html', 'react'
        ]
    }

    const userCopy = moveUserToOtherHouse(user, 99)


    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
})

test('upgrade books', () => {
    let user:UserWithLaptopType & UserWithBookType = {
        name:'Denis',
        hair:32,
        address: {
            city:'Minsk',
            house:12
        },
        laptop: {
            title:'ZenBook'
        },
        books: [
            'css', 'js', 'html', 'react'
        ]
    }

    const userCopy = upgradeBooks(user, ['ts', 'REST-API'])

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('REST-API')
})

test('upgrade js to ts', () => {
    let user:UserWithLaptopType & UserWithBookType = {
        name:'Denis',
        hair:32,
        address: {
            city:'Minsk',
            house:12
        },
        laptop: {
            title:'ZenBook'
        },
        books: [
            'css', 'js', 'html', 'react'
        ]
    }

    const userCopy = updateBook(user,'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[1]).toBe('ts')
})

test('remove js', () => {
    let user:UserWithLaptopType & UserWithBookType = {
        name:'Denis',
        hair:32,
        address: {
            city:'Minsk',
            house:12
        },
        laptop: {
            title:'ZenBook'
        },
        books: [
            'css', 'js', 'html', 'react'
        ]
    }

    const userCopy = removeBook(user,'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books.length).toBe(3)
    expect(userCopy.books[1]).toBe('html')
})

test('user with companies', () => {
    let user:UserWithLaptopType & WithCompaniesType = {
        name:'Denis',
        hair:32,
        address: {
            city:'Minsk',
            house:12
        },
        laptop: {
            title:'ZenBook'
        },
        companies: [
            {id:1, title:'EPAM'},
            {id:2, title:'it-incubator'}
        ]
    }

    const userCopy = updateCompanyTitle(user,1,'epam')
    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('epam')

})