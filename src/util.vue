<script>
	export default {
		data () {
			return {
				didSubmit: false
			}
		},
		methods: {
			getValidator (name) {
				name = name || '$validation'
				return this[name]
			},
			getValidatorField (fieldName, validatorName) {
				let validator = this.getValidator(validatorName)
				if (!validator) {
					return null
				}
				return validator[fieldName] || null
			},
			hasValidationError (fieldName, validatorName) {
				let validatorField = this.getValidatorField(fieldName, validatorName)
				if (validatorField) {
					return (validatorField.dirty || this.didSubmit) && 
						validatorField.invalid
				}
				return null
			},
			validationMessages (fieldName, validatorName) {
				let validatorField = this.getValidatorField(fieldName, validatorName)
				if (validatorField) {
					return validatorField ? validatorField.messages : null	
				}
				return null
			}
		}
	}
</script>