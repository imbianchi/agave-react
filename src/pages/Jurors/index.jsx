import React from 'react';
import { Button, Avatar } from '../../components'
import './style.scss'
const Jurors = () => {
  return (
    <div className='home'>
      <div className='h-40' />
      <div className="jurors-avatar">
        <p className='title'>JURADOS:</p>
        <div className='profiles'>
          <a target="_blank" href="https://instagram.com/guilhermetorres?utm_medium=copy_link" rel="noreferrer">
            <Avatar imgUrl="/avatars/designer-guilherme.jpeg" name='Guilherme Torres' />
          </a>
          <a target="_blank" href="https://instagram.com/jaymebernardo?utm_medium=copy_link" rel="noreferrer">
            <Avatar imgUrl="/avatars/designer-jayme.jpg" name='Jayme Bernardo' />
          </a>
          <a target="_blank" href="https://instagram.com/taniaverri?utm_medium=copy_link" rel="noreferrer">
            <Avatar imgUrl="/avatars/designer-tania.gif" name='Tania Verri' />
          </a>
        </div>
      </div>
      <div className='category'>
        <p className='title'>CATEGORIAS:</p>
        <div className='projects'>
          <p className='desc'><b>Projeto Residencial</b> - Prêmio Poltrona Diz por Sergio Rodrigues.</p>
          <p className='desc'><b>Projeto Corporativo</b> - Prêmio Poltrona Shell por estudiobola.</p>
          <p className='desc'><b>Projeto Outdoor</b> - Prêmio Balanço Pêndulo por Ruy Ohtake para Tidelli.</p>
        </div>
      </div>
      <div className='premio'>
        <div>
          <img className='premio-img' src='/assets/premio.png' />
          <p>
            Projetos com mobiliário e objetos Agave Casa são por natureza irreverentes, sofisticados e esbanjam originalidade.
          </p>
          <p>
            Esse é seu momento de mostrar para o mercado o resultado dessa combinação incrível: <strong>Seu talento + peças Agave Casa</strong>.
          </p>
        </div>
        <div className='buttons'>
          <Button link={true} href='/premioagave/rule' className='w-120' title='REGULAMENTO' />
          <Button link={true} href='/premioagave/register' className='w-120' title='INSCRIÇÃO' />
        </div>
      </div>
    </div>
  );
}

export default Jurors;