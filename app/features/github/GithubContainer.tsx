import { Repo, User } from './types'

export interface GithubContainerProps {
    user: User;
    repos: Repo[];
}

export function GithubContainer ({ user, repos }: GithubContainerProps) {
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <div className='p-10 bg-slate-500 lg:min-h-screen lg:flex lg:flex-col lg:items-center'>
                    <img src={user.avatar_url} alt={user.login} width="200" className='rounded-full m-5'/>
                    <h1 className='m-5 text-2xl'>{user.login}</h1>
                    <blockquote className='text-1xl'>{user.bio}</blockquote>
                    <span>{repos.length}</span>
                </div>
                <div className='lg:col-span-3 p-10'>
                    <ul>
                        {repos.map((repo) => (
                            <li key={repo.id} className='p-2 border-b border-gray-300'>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className='text-blue-500'>
                                    {repo.full_name}
                                </a>
                                <p className='text-sm text-gray-600'>{repo.description}</p>
                                <p className='text-sm text-gray-600 mt-5'>{repo.language}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}