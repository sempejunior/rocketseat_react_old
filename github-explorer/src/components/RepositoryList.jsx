import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: "unform",
    description: "Forms in React",
    link: 'https://github.com/sempejunior'
}

export function RepositoryList() {

    return (
        <section className="repository-list">

            <h1>Lista de repositórios</h1>

            <ul>

                <RepositoryItem
                    name={repository.name}
                    description={repository.description}
                    link={repository.link} />
                <RepositoryItem
                    name={repository.name}
                    description={repository.description}
                    link={repository.link} />
                <RepositoryItem
                    name={repository.name}
                    description={repository.description}
                    link={repository.link} />

            </ul>

        </section>

    );

};