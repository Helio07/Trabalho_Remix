import invariant from 'tiny-invariant';
import { Repo } from './types';


export const getGithubUser = async (username?: string) => {

    invariant(username, 'username is required');

    const res = await fetch(`https://api.github.com/users/${username}`, {

    });

    const { login, avatar_url, html_url, bio } = await res.json();

    if (!res.ok) {
        throw new Response("Failed to fetch user data", { status: res.status });
    }

    return { login, avatar_url, html_url, bio };
};

export const getGithubRepos = async (username?: string) => {
    invariant(username, 'username is required');

    const res = await fetch(`https://api.github.com/users/${username}/repos`, {

    });

    return (await res.json()).map(
        ({ id, full_name, stargazers_count, html_url, language, description }: Repo) =>({
            id, full_name, stargazers_count, html_url, language, description 
        })
    )
}