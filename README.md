# vue-validator-util

Vue.js mixin with utility methods for [vue-validator](https://github.com/vuejs/vue-validator). Useful when using dynamic fields.

## Install

```bash
npm install vue-validator-util
```

## Usage

> Within some Vue.js component:

### JavaScript (ES6)

```js
import Validation from 'vue-validator-util'

export default {
	data () {
		return {
			fields: [
				{
					name: 'some-field-name-1',
					label: 'My field label',
					value: null,
					validate: {
						required: {
							rule: true,
							message: 'The field is required'
						}
					}
				}
			]
		}
	},
	mixins: [
		Validation
	]
}
```

### Template

```html
<validator name="some-validator-name">
	<div v-for="field in fields" 
		class="form-group" 
		:class="{ 'has-error': hasValidationError(field.name, 'some-validator-name') }">
		
		<label :for="field.name">{{ field.label }}</label>
		<input type="text" class="form-control" 
			:id="field.name" 
			:field="field.name"
			v-model="field.value" 
			v-validate="field.validate" />
		
		<p class="help-block" v-for="msg in validationMessages(field.name, 'some-validator-name')">
			{{ msg }}
		</p>
	</div>
</validator>
```

## Methods

#### getValidator([name])

> Returns a vue-validator instance.

- the default `name` value is `$validation`
- the `name` is automatically transformed to `camelCase` and is also getting a `$` prefix, so you can pass `some-validator-name` which will be translated to `$someValidatorName`

#### getValidatorField(fieldName, [validatorName])

> Returns a vue-validator field.

- the `fieldName` is automatically transformed to `camelCase`, so passing `some-validator-field-name` will get translated to `someValidatorFieldName`
- the `validatorName` is passed to `getValidator`

#### hasValidationError(fieldName, [validatorName])

> Check whether a vue-validator field is invalid. The field is considered invalid only when it's `dirty` and `invalid` properties are both `true`.

- the `fieldName` is passed to `getValidatorField`
- the `validatorName` is passed to `getValidator`

#### validationMessages(fieldName, [validatorName])

> Returns `messages` for a vue-validator field.

- the `fieldName` is passed to `getValidatorField`
- the `validatorName` is passed to `getValidator`

#### firstValidationMessage(fieldName, [validatorName])

> Returns the first message for a vue-validator field. Useful when trying to display a single message at a time.

- the `fieldName` is passed to `getValidatorField`
- the `validatorName` is passed to `getValidator`

##### Example

```html
<validator name="validation">
	<div v-for="field in fields" 
		class="form-group" 
		:class="{ 'has-error': hasValidationError(field.name) }">
		
		<label :for="field.name">{{ field.label }}</label>
		<input type="text" class="form-control" 
			:id="field.name" 
			:field="field.name"
			v-model="field.value" 
			v-validate="field.validate" />
		
		<p class="help-block" v-if="hasValidationError(field.name)">
			{{ firstValidationMessage(field.name) }}
		</p>
	</div>
</validator>
```

--

## Build

> You can easily build vue-validator-util yourself.

### Prerequisites

Our build tool of choice is Webpack. You should have webpack installed globally:

	npm install -g webpack

And the build dependencies:

	npm install
	
### Build

> Any of the following will create the file dist/vue-validator-util.js.

#### Production build

Includes minification and several optimizations:

	npm run build

#### Development build

A faster build suited for development, with no optimizations and without minification:

	npm run build-dev
	
### Watch

Start an initial development build and then FAST continuous incremental builds:

	npm run dev