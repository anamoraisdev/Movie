export interface Person {
    adult: boolean,
    gender: number,
    id: number,
    known_for: known_for[]
    known_for_department: string,
    name: string,
    popularity: number,
    profile_path: string
}

export interface known_for{
    original_title: string,
    id: number
}
export interface PropsPerson{
    person: Person
}