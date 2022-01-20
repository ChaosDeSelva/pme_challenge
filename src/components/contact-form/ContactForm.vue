<template>
  <form class="contact-form" @submit="onSubmit">
    <div class="contact-form__control">
      <label for="" class="contact-form__label">Name</label>
      <input class="contact-form__input" v-model="form.name" type="text" />
    </div>
    <div class="contact-form__control">
      <label for="" class="contact-form__label">Phone</label>
      <input class="contact-form__input" v-model="form.phone" type="text" />
    </div>
    <div class="contact-form__control">
      <label for="" class="contact-form__label">Email</label>
      <input class="contact-form__input" v-model="form.email" type="email" />
    </div>

    <div class="contact-form__submit">
      <button class="contact-form__button" type="button" @click="onClear">
        Clear form
      </button>
      <button class="contact-form__button" type="submit" :disabled="!form.name">
        Add contact
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'contact-form',

  props: {
    contact: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
      },
    };
  },

  methods: {
    onSubmit() {
      this.$emit('on-submit', { form: this.form });
      this.onClear();
    },

    onClear() {
      this.form = {
        name: '',
        phone: '',
        email: '',
      };
    },
  },
};
</script>

<style lang="scss">
.contact-form {
  background: #eee;
  display: block;
  margin: 24px auto;
  padding: 24px;
  width: 70%;
}

.contact-form__control {
  margin: 0 0 8px 0;
  display: flex;
  flex-direction: column;

  input {
    display: block;

    border: 1px solid #444;
    padding: 8px;
  }
}

.contact-form__label {
  padding-bottom: 8px;
  display: block;
}

.contact-form__submit {
  margin: 24px 0 0;
  display: flex;
  justify-content: space-between;
}

button {
  border: 0;
  padding: 12px;
  cursor: pointer;
}
</style>