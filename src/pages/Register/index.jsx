import Input from '../../components/input'
import RichInput from '../../components/richInput'
import Button from '../../components/button'
import CustomSelect from '../../components/select'
import { isMobile } from 'react-device-detect';
import './style.scss'
import Checkbox from '../../components/checkbox'
import { Tooltip } from 'reactstrap';
import { useState } from 'react'
import { postApi } from '../../apis/apis'
import apiUrls from '../../apis/apiUrls'

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [submitButtonText, setSubmitButtonText] = useState('ENVIAR');
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [values, setValues] = useState({
    name: '', birthday: '', cpf: '', profession: '', number: '', instagram: '', email: '', mobile: '', tel: '', cep: '', addr: '', complement: '', city: '', projName: '', projDesc: '', projType: 0, linkCloud: ''
  })
  const [errors, setErrors] = useState({
    name: '', birthday: '', cpf: '', profession: '', number: '', instagram: '', email: '', mobile: '', tel: '', cep: '', addr: '', complement: '', city: '', projName: '', projDesc: '', check: '', checkTerm: '', projType: '', linkCloud: ''
  })
  const [checked, setChecked] = useState(false)
  const [checkedTerm, setCheckedTerm] = useState(false)
  const info = {
    name: { title: 'nome completo', nullable: false },
    birthday: { title: 'nascimento', nullable: false },
    cpf: { title: 'cpf', nullable: false },
    profession: { title: 'profissao', nullable: false },
    number: { title: 'n de registro', nullable: false },
    instagram: { title: '@instagram', nullable: false },
    email: { title: 'e-mail', nullable: false },
    mobile: { title: 'celular', nullable: false },
    tel: { title: 'telefone fixo', nullable: false },
    cep: { title: 'CEP', nullable: false },
    addr: { title: 'endereco, numero', nullable: false },
    complement: { title: 'complemento', nullable: true },
    city: { title: 'cidade, estado', nullable: false },
    projName: { title: 'nome de projeto', nullable: false },
    projDesc: { title: 'breve descritivo do projeto', nullable: false },
    linkCloud: { title: 'Link', nullable: true }
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

  const onCheckboxTermChange = (checkedTerm) => {
    if (checkedTerm)
      _setErrors('check', '')
    setCheckedTerm(checkedTerm)
  }

  const onProjTypeChange = (value) => {
    if (value.value > 0) _setErrors('projType', '')
    _setValues('projType', value.value)
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
    if (values.projDesc.length > 400) return _setErrors('projDesc', 'O descritivo do projeto deve ter no máximo 400 caracteres.')
    if (!checked) return _setErrors('check', 'Obrigatório aceitar o acordo para participar.')

    setLoading(true);

    const res = await postApi(`${apiUrls.contestRegister}`, values)
    console.log(res)

    if (res.id) {
      setSubmitButtonText('ENVIADO!');
    } else {
      setSubmitButtonText('ERRO ):');
    }
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
                <Input placeholder='profissão*'
                  onChange={(e) => onChange('profession', e.target.value)} error={errors.profession} />
              </div>
              <div className='app-col'>
                <Input placeholder='n° de registro*'
                  onChange={(e) => onChange('number', e.target.value)} error={errors.number} />
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

          <p className='app-title text-uppercase'>Endereço</p>

          <div className='cep'>
            <div className='app-row stretch'>
              <div className='app-col'>
                <Input placeholder='CEP*'
                  onChange={(e) => onChange('cep', e.target.value)} error={errors.cep} />
              </div>
              <div className='app-col'></div>
            </div>
            <Input placeholder='endereço, número*'
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
            <p className='app-title'>INFORMAÇÕES DO PROJETO</p>
            <div className='h-20'></div>
            <CustomSelect options={[
              { value: 'outdoor', 'label': 'Outdoor' },
              { value: 'residencial', 'label': 'Residencial' },
              { value: 'corporativo', 'label': 'Corporativo' }
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
            <div
              className='w-full'
              id="TooltipExample"
            >
              <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipExample" toggle={() => setTooltipOpen(!tooltipOpen)}>
                Link drive (dropbox, google drive, icloud) com as imagens reais do projeto (de 3 a 5 fotos), nos formatos (jpeg ou png).
              </Tooltip>
              {
                isMobile && (
                  <small>Link drive (dropbox, google drive, icloud) com as imagens reais do projeto (de 3 a 5 fotos), nos formatos (jpeg ou png).</small>
                )
              }

            <Checkbox
              onChange={onCheckboxChange}
              label='Confirmo o envio do termo assinado.'
              error={errors.check}
            />
            

            <Checkbox
              onChange={onCheckboxTermChange}
              label='Autorizo a coleta dos meus dados pessoais para cadastro nos programas de relacionamento Agave.
              Aceito receber comunicações sobre as marcas e produtos Agave via e-mail ou WhatsApp.
              Reconheço que li e aceito todos os termos do “Regulamento” disponibilizado '
              error={errors.check}
              link={true}
            />
            </div>
          </div>
        </div>
      </div>
      <div className='app-row'>
        <div className='app-col'>

        </div>
        <div className='app-col'>
          <Button className='m-0' title={submitButtonText} onClick={onSubmit} />
        </div>
      </div>
    </div>

  )
}

export default Register