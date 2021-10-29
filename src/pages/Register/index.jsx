import Input from '../../components/input'
import RichInput from '../../components/richInput'
import Button from '../../components/button'
import CustomSelect from '../../components/select'
import './style.scss'
import Checkbox from '../../components/checkbox'
import File from '../../components/file'
import { useState } from 'react'
import { postApi } from '../../apis/apis'
import apiUrls from '../../apis/apiUrls'

const Register = () => {
  const [values, setValues] = useState({
    name: '', birthday: '', cpf: '', profession: '', rnumber: '', instagram: '', email: '', mobile: '', tel: '', cep: '', addr: '', complement: '', city: '', projName: '', projDesc: '', projType: 0, link:''
  })
  const [errors, setErrors] = useState({
    name: '', birthday: '', cpf: '', profession: '', rnumber: '', instagram: '', email: '', mobile: '', tel: '', cep: '', addr: '', complement: '', city: '', projName: '', projDesc: '', check: '', projType: '', link:''
  })
  const [checked, setChecked] = useState(false)
  const info = {
    name: { title: 'nome completo', nullable: false },
    birthday: { title: 'nascimento', nullable: false },
    cpf: { title: 'cpf', nullable: false },
    profession: { title: 'profissao', nullable: false },
    rnumber: { title: 'n de registro', nullable: false },
    instagram: { title: '@instagram', nullable: false },
    email: { title: 'e-mail', nullable: false },
    mobile: { title: 'celular', nullable: false },
    tel: { title: 'telefone fixo', nullable: false },
    cep: { title: 'CEP', nullable: false },
    addr: { title: 'endereco, numero', nullable: false },
    complement: { title: 'complemento', nullable: true },
    city: { title: 'cidade, estado', nullable: false },
    projName: { title: 'nome de projeto', nullable: false },
    projDesc: { title: 'Breve descritivo do projeto', nullable: false },
    link: {title: 'Link', nullable: true}
  }
  const validateEmail = (email) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase())
  const _setValues = (name, value) => {
    setValues((prevValues) => {
      prevValues[name] = value
      return { ...prevValues }
    })
  }
  const _setErrors = (name, value) => {
    setErrors((prevErrors) => {
      prevErrors[name] = value
      return { ...prevErrors }
    })
  }

  const onChange = (name, value) => {
    _setValues(name, value)
    if (value) _setErrors(name, '')
  }
  const onCheckboxChange = (checked) => {
    if (checked)
      _setErrors('check', '')
    setChecked(checked)
  }
  const onProjTypeChange = (value) => {
    if (value.value > 0) _setErrors('projType', '')
    _setValues('projType', value.value)
  }
  const onPickFile = (e) => {
    console.log(e)
  }
  const onSubmit = async () => {
    for (var key in info) {
      if (!values[key] && !info[key].nullable) {
        return _setErrors(key, `${info[key].title} é obrigatório.`)
      } else {
        _setErrors(key, '')
      }
    }
    if (!validateEmail(values.email)) return _setErrors('email', 'Formato do endereço de e-mail é inválido.')
    if (values.projType == 0) return _setErrors('projType', 'Selecione o tipo.')
    if (values.projDesc.length > 400) return _setErrors('projDesc', 'O Breve descritivo do projeto deve ter no máximo 400 caracteres.')
    if (!checked) return _setErrors('check', 'Aceite este acordo.')

    const res = await postApi(`${apiUrls.contestRegister}`, values, false)
  }
  return (
    <div className='jurors'>
      <div className='app-row'>
        <div className='app-col'>
          <div className='h-72'></div>
          <div className='datas'>
            <p className='app-title'>DADOS PESSOAIS</p>
            <div className='h-20'></div>
            <Input placeholder='nome completo*'
              onChange={(e) => onChange('name', e.target.value)} error={errors.name} />
            <div className='app-row stretch'>
              <div className='app-col'>
                <Input placeholder='nascimento*'
                  onChange={(e) => onChange('birthday', e.target.value)} error={errors.birthday} />
              </div>
              <div className='app-col'>
                <Input placeholder='cpf*'
                  onChange={(e) => onChange('cpf', e.target.value)} error={errors.cpf} />
              </div>
            </div>
            <div className='app-row stretch'>
              <div className='app-col'>
                <Input placeholder='profissao*'
                  onChange={(e) => onChange('profession', e.target.value)} error={errors.profession} />
              </div>
              <div className='app-col'>
                <Input placeholder='n de registro*'
                  onChange={(e) => onChange('rnumber', e.target.value)} error={errors.rnumber} />
              </div>
            </div>
            <div className='app-row stretch'>
              <div className='app-col'>
                <Input placeholder='@instagram*'
                  onChange={(e) => onChange('instagram', e.target.value)} error={errors.instagram} />
              </div>
              <div className='app-col'>
                <Input placeholder='e-mail*'
                  onChange={(e) => onChange('email', e.target.value)} error={errors.email} />
              </div>
            </div>
            <div className='app-row stretch'>
              <div className='app-col'>
                <Input placeholder='celular*'
                  onChange={(e) => onChange('mobile', e.target.value)} error={errors.mobile} />
              </div>
              <div className='app-col'>
                <Input placeholder='telefone fixo*'
                  onChange={(e) => onChange('tel', e.target.value)} error={errors.tel} />
              </div>
            </div>
          </div>

          <div className='cep'>
            <div className='app-row stretch'>
              <div className='app-col'>
                <Input placeholder='CEP*'
                  onChange={(e) => onChange('cep', e.target.value)} error={errors.cep} />
              </div>
              <div className='app-col'></div>
            </div>
            <Input placeholder='endereco, numero*'
              onChange={(e) => onChange('addr', e.target.value)} error={errors.addr} />
            <div className='app-row stretch'>
              <div className='app-col'>
                <Input placeholder='complemento'
                  onChange={(e) => onChange('complement', e.target.value)} error={errors.complement} />
              </div>
              <div className='app-col'>
                <Input placeholder='cidade, estado*'
                  onChange={(e) => onChange('city', e.target.value)} error={errors.city} />
              </div>
            </div>
          </div>
        </div>
        <div className='app-col'>
          <div className='h-72'></div>
          <div className='informations'>
            <p className='app-title'>INFORMACOES DO PROJETO</p>
            <div className='h-20'></div>
            <CustomSelect options={[
              { value: 0, 'label': 'Outdoor' },
              { value: 1, 'label': 'Residencial' },
              { value: 2, 'label': 'Corporativo' }
            ]} onChange={onProjTypeChange} />
            <p className='error'>{errors.projType}</p>
            <div className='app-row stretch'>
              <div className='app-col'>
                <Input placeholder='nome de projeto*'
                  onChange={(e) => onChange('projName', e.target.value)} error={errors.projName} />
              </div>
              <div className='app-col'>
              </div>
            </div>
            <div className='app-row stretch'>
              <RichInput onChange={(e) => onChange('projDesc', e.target.value)} error={errors.projDesc} />
            </div>
          </div>
          <div className='app-row stretch'>
            <div className='w-full'>
              <Input placeholder='Link'
              onChange={(e)=>onChange('link', e.target.value)} error = {errors.link} />
              {/* <File onChange={onPickFile} />
              <p className='text'>
                Enviar 1(um) arquivo no formato .zip com as imagens reais do projeto (de 3 a 5 fotos), nos formatos (jeg, png).
                <br />Max 30mb
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className='app-row'>
        <div className='app-col'>
          <Checkbox onChange={onCheckboxChange}
            label='Autorizo a coleta dos meus dados pessoeis para cadastro nos programas de relacionamento Agave.<br />
            Aceito receber comunicacoes sobre as marcas e produtos Agave via e-mail ou WhatsApp.'
            error={errors.check}
          />

        </div>
        <div className='app-col'>
          <Button className='m-0' title='ENVIAR' onClick={onSubmit} />
        </div>
      </div>
    </div>

  )
}

export default Register