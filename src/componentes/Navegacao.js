import './Navegacao.css';

function Navegacao(){

    return(

        <section className='navegacao'>

            
                <ul className='navegacao__links'>
                    <li><a className='icone' href="#">Manuais</a></li>
                    <li><a  className='icone' href="#">Manutenção Preventiva e Corretiva</a></li>
                    <li><a  className='icone' href="#">Equipamentos</a></li>
                    <li><a  className='icone' href="#">Estoque e Insumos</a></li>
                </ul>
           
        </section>
        

    )
}

export default Navegacao;