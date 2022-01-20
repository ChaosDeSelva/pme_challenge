<template>
  <tr class="contact">
    <td>{{ name }}</td>
    <td>{{ phone }}</td>
    <td>{{ email }}</td>
    <td>
      <button class="contact__delete-button" @click="$emit('on-delete', id)">
        &times;
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.contact__edit-button {
  background: #fff;
  border: 0;
  line-height: 24px;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background: #efefef;
  }

  &:active {
    background: #eee;
  }
}
.contact__delete-button {
  background: #fff;
  border: 0;
  line-height: 24px;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background: #efefef;
  }

  &:active {
    background: #eee;
  }
}
</style>