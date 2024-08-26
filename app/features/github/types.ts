export interface User {
    login: string
    avatar_url: string
    html_url: string
    bio: string
}

export interface Repo {
    id: number,
    full_name: string,
    stargazers_count: number,
    html_url: string,
    description: string,
    language: string
}

export interface loaderData {
    user: User;
    repos: Repo[];
}
