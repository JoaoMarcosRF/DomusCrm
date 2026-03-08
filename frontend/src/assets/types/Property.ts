export interface Property {
    id: number
    description : string
    type: "CASA" | "TERRENO" |"COMERCIAL"
    finalidad: string
    price : number
    title : string
    area: number
    image : string
    status: "ATIVO" | "INATIVO"
    bedrooms: number
    registration_date : number
    parking_space : number
    bathroom : number
}