<script>
	import camelCase from 'mout/string/camelCase'

	export default {
		data () {
			return {
				didSubmit: false
			}
		},
		methods: {
			getValidator (name) {
				name = name || 'validation'
				name = camelCase(name)
				return this[name] !== undefined ? this[name] : this['$' + name]
			},
			getValidatorField (fieldName, validatorName) {
				const validator = this.getValidator(validatorName)
				if (!validator) {
					return null
				}
				fieldName = camelCase(fieldName)
				return validator[fieldName] || null
			},
			hasValidationError (fieldName, validatorName) {
				const validatorField = this.getValidatorField(fieldName, validatorName)
				if (validatorField) {
					return (validatorField.dirty || this.didSubmit) && 
						validatorField.invalid
				}
				return null
			},
			validationMessages (fieldName, validatorName) {
				const validatorField = this.getValidatorField(fieldName, validatorName)
				return validatorField ? validatorField.messages : null
			},
			firstValidationMessage (fieldName, validatorName) {
				const messages = this.validationMessages(fieldName, validatorName)
				const keys = messages ? Object.keys(messages) : []
				return keys.length ? messages[keys[0]] : null
			}
		}
	}
</script>