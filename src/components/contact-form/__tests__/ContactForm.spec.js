import { mount } from '@vue/test-utils'
import ContactForm from '../ContactForm'

test('ContactForm', () => {
	const wrapper = mount(ContactForm, {
		propsData: {
			contact: {},
		},
	})

	expect(wrapper.text()).toBeTruthy()
})
