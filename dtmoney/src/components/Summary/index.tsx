import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from "./styles";

export function Summary (){
    return(
        <Container>
            <div>
                <header>
                    <img src={incomeImg} alt="Entradas" />
                    <p>Entradas</p>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <img src={outcomeImg} alt="Saidas" />
                    <p>Saídas</p>
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <img src={totalImg} alt="Total" />
                    <p>Total</p>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}