import { observable, action, computed } from 'mobx'

class Form {
    @observable email = null
    @observable cpf = null
	@observable date = null
	@observable password = null
	@observable privacy = false
	@observable registered = false
	@observable showErrors = false
	
	constructor() {
        this.changeEmail = this.changeEmail.bind(this)
        this.changeCpf = this.changeCpf.bind(this)
        this.changeDate = this.changeDate.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.create = this.create.bind(this)
	}

	@action changeEmail(value) {
    	this.email = value
	}

	@action changeCpf(value) {
    	this.cpf = value
	}

	@action changeDate(value) {
    	this.date = value
	}

	@action changePassword(value) {
    	this.password = value
	}

	@action changePrivacy() {
    	this.privacy = !this.privacy
	}
	
    @computed get getEmailError() {
    	if (this.showErrors) {
    		if (!this.email) {
    			return 'O campo e-mail é obrigatório'
    		}
    	}
        
    	return null
	}
	
	@computed get getCpfError() {
    	if (this.showErrors) {
    		if (!this.cpf) {
    			return 'O campo CPF é obrigatório'
    		}
    	}
        
    	return null
	}
	
	@computed get getDateError() {
    	if (this.showErrors) {
    		if (!this.date) {
    			return 'O campo data é obrigatório'
    		}
    	}
        
    	return null
	}
	
	@computed get getPasswordError() {
    	if (this.showErrors) {
    		if (!this.password) {
    			return 'O campo senha é obrigatório'
    		}
    	}
        
    	return null
	}
	
	@computed get getPrivacyError() {
    	if (this.showErrors) {
    		if (!this.privacy) {
    			return 'error'
    		}
    	}
        
    	return null
	}

	@action create() {
		this.showErrors = true
    	if(this.verifyEmptyValues()) {
			this.registered = true
			this.showErrors = false
		}
		
		return null
    }
	
	@action verifyEmptyValues() {
		if (
			this.email &&
			this.cpf &&
			this.date &&
			this.password &&
			this.privacy
		) {
			return true
		}

		this.registered = false
		return null
	}
}

const form = new Form()

export default form

