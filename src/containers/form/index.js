import React, { Component } from 'react'
import { observer } from 'mobx-react';

import form from '../../stores/Form'

import TextInput from '../../components/fields/TextInput'
import CPFInput from '../../components/fields/CPFInput'
import DateInput from '../../components/fields/DateInput'
import PswdInput from '../../components/fields/PswdInput'

@observer
export default class Form extends Component {

  renderPrivacyPolitcs() {
    return (
      <div className={`privacy ${form.getPrivacyError ? 'error' : ''}`}>
        <div className="check check-privacy">
          <input type="checkbox" id="check" onChange={() => form.changePrivacy()}/>
          <label htmlFor="check"></label>
        </div>
        <div className="text">
          <p>Li e estou de acordo com a <a href="javascript:">Política de Privacidade</a> e a <a href="javascript:">Política de Uso de Informações</a>.</p>
        </div>
      </div>
    )
  }

  renderInputs() {
    return (
      <div>
        <TextInput label="E-mail" placeholder="Escreva seu nome completo" name="email" onChange={form.changeEmail} value={form.email} errorMessage={form.getEmailError} />
        <div className="double-column">
          <CPFInput label="CPF" placeholder="999.999.999-99" name="cpf" onChange={form.changeCpf} value={form.cpf} errorMessage={form.getCpfError} />
          <DateInput label="Data de nascimento" placeholder="21/12/1990" name="date" onChange={form.changeDate} value={form.date} errorMessage={form.getDateError} />
        </div>
        <PswdInput label="Senha" placeholder="Cadastre uma senha" name="password" onChange={form.changePassword} value={form.password} errorMessage={form.getPasswordError} />
        { this.renderPrivacyPolitcs() }
        <button type="button" className="btn-register" onClick={() => form.create()}>Cadastrar</button>
      </div>
    )
  }
  
  render() {
    return (
      <div className="form">
        <div className={`msg msg-success ${form.registered ? 'show' : ''}`}>
          <p>Parabéns! Cadastro realizado com sucesso!</p>
        </div>
        <div className="container">
          <div className="body">
            <div className="intro">
              <h1>Criar meu cadastro</h1>
              <h3>Para acompanhar sua contratação de crédito você utilizará seu e-mail e CPF.</h3>
            </div>
            { this.renderInputs() }
          </div>
          <div className="footer">
            <p>Já fiz meu cadastro. <a href="javascript:">Entrar agora.</a></p>
          </div>
        </div>
      </div>
    )
  }
}