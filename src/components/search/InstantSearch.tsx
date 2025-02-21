import { useResourcifyStore } from "../../store/resourcify"

export const InstantSearch = () => {
  const results = useResourcifyStore(store => store.results)

  return (
    results.length > 0 && (
      <ul className="absolute top-full left-0 z-50 w-full mt-2 border border-brd-dark rounded-xl overflow-hidden">
        {
          results?.map(({name, link, usage}) => (
            <li key={name}>
              <article>
                <a
                  className="group flex justify-between items-center px-4 py-3 bg-lightend dark:bg-darkend hover:bg-action-light dark:hover:bg-action-dark"
                  href={`${link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${name} (opens in a new tab)`}
                >
                  <div className="flex items-center text-darkend/90 dark:text-lightend/90">
                    <h3>{name}</h3>
                    <svg className="indicator" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
                  </div>

                  <div>
                    {usage === 5 && (<span className="badge-xs bg-badge-trending">trending</span>)}
                    {usage === 4 && (<span className="badge-xs bg-badge-popular">popular</span>)}
                  </div>
                </a>
              </article>
            </li>
          )).slice(0, 6)
        }
      </ul>
    )
  )
}