export interface Project{
    name:string,
    description:string,
    stacks:string[],
    github:string,
    live:string
}

export interface Message {
    message?: string,
    error?: string
}