import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Api, GithubContainer, loaderData } from "~/features/github";



export const loader: LoaderFunction = async ({ params }) => {
    return {
        user: await Api.getGithubUser(params.username),
        repos: await Api.getGithubRepos(params.username),
    }
};

export function ErrorBoundary() {
    return <h3>Erro!</h3>
}

export default function () {
    const { user, repos } = useLoaderData<loaderData>();

    return (
        <div>
            <GithubContainer user={user} repos={repos} />

        </div>
    );
}