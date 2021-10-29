import React from 'react';
import { Button, Avatar } from '../../components'
import './style.scss'
const Jurors = () => {
  return (
    <div className='home'>
      <div className='h-72' />
      <p className='title'>JURADOS:</p>
      <div className='profiles'>
        <Avatar imgUrl="/avatars/1.png" name='Cuilherme Torres' />
        <Avatar imgUrl="/avatars/2.png" name='Jayme Bernardo' />
        <Avatar imgUrl="/avatars/3.jpg" name='Tania Verri' />
      </div>
      <div className='category'>
        <p className='title'>CATEGORIAS:</p>
        <div className='projects'>
          <p className='desc'><b>Projeto Residencial</b> - Premio Poltrona Diz por Sergio Rodrigues.</p>
          <p className='desc'><b>Projeto corporativo</b> - Premio Poltrona Shell por estudiobola.</p>
          <p className='desc'><b>Projeto outdoor</b> - Premio Balanco Pendulo por Ruy Ohtake para Tidelli.</p>
        </div>
      </div>
      <div className='premio'>
        <img className='premio-img' src='/assets/premio.png' />
        <div className='buttons'>
          <Button link={true} href='/rule' className='w-120' title='REGULAMENTO' />
          <Button link={true} href='/register' className='w-120' title='INSCRICAO' />
        </div>
      </div>
    </div>
  );
}

export default Jurors;