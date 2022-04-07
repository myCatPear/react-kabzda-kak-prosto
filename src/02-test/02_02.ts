export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

type AddressType = {
    number?:number
    street: StreetType
}

type StreetType = {
    title:string
}

////////////

type GovernmentBuildings = {
    type:"HOSPITAL" | "FIRE-STATION"
    budget:number
    staffCount:number
    address: AddressType
}



/////////////

export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildings>
    citizensNumber: number
}