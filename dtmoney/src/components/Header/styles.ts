import styled from 'styled-components';


export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1128px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #FFF; 
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        /*
            Funciona como complemento, dizendo que toda vez que o filtro for acionado,
            terá uma transição de 0.2s (para o hover neste caso)
         */
        transition: filter 0.2s;

        //Filtro para mudar o claridade do botão quando no hover do mouse
        &:hover{
            filter: brightness(0.9)
        }

    }
`;