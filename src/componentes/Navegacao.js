import './Navegacao.css';

function Navegacao(){

    return(

        <section className='navegacao'>

            
                <ul className='navegacao__links'>
                    <li><img className='imagem__menu' src="./imagem/annie-spratt-O1TNdLNvJLM-unsplash.jpg"/>
                        <a className='icone' href="#">Manuais</a></li>
                    <li><img className='imagem__menu' src="./imagem/acton-crawford-O2Q_b_NN6qw-unsplash.jpg"/>
                    <a  className='icone' href="#">Manutenção Preventiva e Corretiva</a></li>
                    <li><img className='imagem__menu' src="./imagem/IMG_1372.jpg"/><a  className='icone' href="#">Equipamentos</a></li>
                    <li><img className='imagem__menu' src="./imagem/IMG_1379.jpg"/><a  className='icone' href="#">Estoque e Insumos</a></li>
                </ul>
           
        </section>
        

    )
}

export default Navegacao;