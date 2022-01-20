<template>
  <div id="app">
    <contact-list :contacts="contacts" @on-delete="onDelete" />
    <contact-form @on-submit="onSubmit" />
  </div>
</template>

<script>
import contacts from './constants/contacts.json';
import ContactList from './components/contact-list/ContactList';
import ContactForm from './components/contact-form/ContactForm';

export default {
  name: 'App',
  components: {
    'contact-list': ContactList,
    'contact-form': ContactForm,
  },

  data: () => ({
    contacts,
  }),

  methods: {
    onDelete(contactId) {
      this.contacts.splice(
          this.contacts.findIndex((id) => id === contactId),
          1,
      );
    },
    onSubmit(form) {
      this.contacts.push(form);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
