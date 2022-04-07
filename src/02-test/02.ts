type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechType = {
    id:number
    title:string
}


const student: StudentType = {
    id: 1,
    name: "Denis",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus",
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "JavaScript"
        },
        {
            id: 4,
            title: "React"
        }
    ]
}
console.log(student.age)
