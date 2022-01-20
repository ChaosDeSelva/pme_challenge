<template>
  <table class="contact-table">
    <thead>
    <tr>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>&nbsp;</th>
    </tr>
    </thead>

    <tbody>
    <contact
        v-for="contact in contacts"
        :key="contact.id"
        v-bind="contact"
        @on-delete="$emit('on-delete', $event)"
    />
    </tbody>
  </table>
</template>

<script>
import Contact from './Contact';

export default {
  name: 'contact-list',
  components: {
    contact: Contact,
  },
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.contact-table {
  width: 100%;
  border-collapse: collapse;
}

tbody {
  td {
    padding: 5px;
  }
}
</style>