import { mount } from '@vue/test-utils'
import Contact from '../Contact'

test('Contact', () => {
	const wrapper = mount(Contact, {
		propsData: {
			id: 'id-1',
			name: 'John Doe',
			phone: '1234567890',
			email: 'john.doe@example.com',
		},
	})

	expect(wrapper.text()).toBeTruthy()
})
