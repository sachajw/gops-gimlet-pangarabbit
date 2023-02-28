import { Spinner } from "./repositories";

const RefreshRepos = ({ added, deleted, repositoriesRefreshing, installationURL }) => {
  return (
    <div className="p-6 bg-white overflow-hidden shadow rounded-lg space-y-4">
      <div>
        {repositoriesRefreshing ?
          <Spinner />
          :
          <>
            <RenderRepos
              color="green"
              repos={added}
            />
            <RenderRepos
              color="red"
              repos={deleted}
            />
            <div className="py-2 flex flex-wrap">
              { added?.length === 0 && deleted?.length === 0 &&
              <p className="text-sm text-gray-800">No new repositories found. Repository list is up to date.</p>
              }
              Missing a repository? You may need to grant Gimlet access to more repositories on the <a
                href={installationURL}
                rel="noreferrer"
                target="_blank"
                className="mt-1 text-sm text-gray-500 hover:text-gray-600">Github application installation settings</a>.
            </div>
          </>
        }
      </div>
    </div >)
};

const RenderRepos = ({ repos, color }) => {
  if (!repos) {
    return null
  }

  const colors = {
    green: "text-green-600",
    red: "text-red-600"
  }

  return (
    <ul className={`px-6 text-sm list-disc ${colors[color]} font-bold`}>
      {repos.map(repo => <li key={repo}>{repo}</li>)}
    </ul>
  )
};

export default RefreshRepos;