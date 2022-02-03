import React, { useState } from 'react'

import MaskedInput from 'react-text-mask'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import * as S from './styled'

export const Subscribe = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhonenumber] = useState('')
  const [option, setOption] = useState('Outro')
  const [cargo, setCargo] = useState('')

  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
  const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID

  const hubspotApi = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`

  const handleSubmit = (evt) => {
    evt.preventDefault()
    var xhr = new XMLHttpRequest()
    var url = hubspotApi
    var data = {
      fields: [
        {
          name: 'email',
          value: email
        },
        {
          name: 'firstname',
          value: name
        },
        {
          name: 'phone',
          value: phone
        },
        {
          name: 'segmento',
          value: option
        },
        {
          name: 'jobtitle',
          value: cargo
        }
      ],
      context: {
        pageUri: 'https://tractian-ebon.vercel.app/',
        pageName: 'Formuário Página Principal'
      }
    }
    var final_data = JSON.stringify(data)

    xhr.open('POST', url)
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        toast.success('Mensagem enviada com sucesso!')
      } else if (xhr.readyState === 4 && xhr.status === 403) {
        toast.error('Ooops! Acesso Proibido.')
      } else if (xhr.readyState === 4 && xhr.status === 404) {
        toast.warn('Ooops! Servidor não encontrado.')
      } else if (xhr.readyState === 4 && xhr.status === 400) {
        toast.info('Ooops! Há algo de errado com seu email.')
      }
    }
    // Sends the request
    xhr.send(final_data)
  }

  return (
    <S.Section>
      <S.Content>
        <S.TextsAreaLeftWrapper>
          <h2>
            Nomeada solução favorita de CMMS e OEE no ranking da Capterra 2021
          </h2>
        </S.TextsAreaLeftWrapper>

        <S.SubscribeWrapper>
          <S.TextsWrapper>
            <h3>Melhore os seus processos de manutenção</h3>
            <p>Preencha o formulário para uma demonstração.</p>
          </S.TextsWrapper>
          <S.LogoWrapper id="form">
            <img src="/img/logo.svg" alt="Logo" />
          </S.LogoWrapper>
          <S.Form onSubmit={handleSubmit}>
            <ToastContainer />
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Cargo"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              required
            />
            <MaskedInput
              mask={[
                '(',
                /[1-9]/,
                /\d/,
                ')',
                ' ',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/
              ]}
              type="tel"
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhonenumber(e.target.value)}
              required
              render={(ref, props) => <input ref={ref} {...props} />}
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <S.RadioWrapper>
              <b>O que mais te interessou nas nossas soluções?</b>
              <ul>
                <li>
                  <input
                    type="radio"
                    name="gender"
                    value={'Monitoramento Online e Sensores'}
                    onChange={(e) => setOption(e.target.value)}
                  />
                  Monitoramento Online e Sensores
                </li>
                <li>
                  <input
                    type="radio"
                    value="Software de Gestão da Manutenção e PCM"
                    name="gender"
                    onChange={(e) => setOption(e.target.value)}
                  />
                  Software de Gestão da Manutenção e PCM
                </li>
                <li>
                  <input
                    type="radio"
                    value="Todas as Soluções"
                    name="gender"
                    onChange={(e) => setOption(e.target.value)}
                  />
                  Todas as Soluções
                </li>
                <li>
                  <input
                    type="radio"
                    value="Outro"
                    name="gender"
                    onChange={(e) => setOption(e.target.value)}
                  />
                  Outro
                </li>
              </ul>
            </S.RadioWrapper>

            <S.ButtonWrapper>
              <button type="submit" value="Enviar">
                Enviar
              </button>
            </S.ButtonWrapper>
          </S.Form>
        </S.SubscribeWrapper>
      </S.Content>
    </S.Section>
  )
}
export default Subscribe
