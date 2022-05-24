
export function RepositoryItem(props) {

    return (

        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>{props.description }</p>
            <a href={props.link}>
                Acessar Repositories
            </a>

        </li>


    );


}