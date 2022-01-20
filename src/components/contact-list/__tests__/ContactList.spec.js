import { mount } from '@vue/test-utils'
import ContactList from '../ContactList'

test('ContactList', () => {
	const wrapper = mount(ContactList, {
		propsData: {
			contacts: [],
		},
	})

	expect(wrapper.text()).toBeTruthy()
})
