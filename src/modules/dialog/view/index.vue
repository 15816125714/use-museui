<template>
  <div class="demp-page">
    <mu-button
      @click="visible = !visible"
      color="primary"
    >Dialog</mu-button>
    <mu-action-btn>
      <mu-button class="one-px" large>default</mu-button>
    </mu-action-btn>
    <mu-dialog width="400px" :open.sync="visible" needActionBtn @confirm="handleConfirm">
      <mu-text-field v-model="username" label="用户名" full-width></mu-text-field>
      <!-- <mu-action-btn @cancel="visible = !visible"></mu-action-btn> -->
    </mu-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      username: "",
    }
  },
  methods: {
    handleConfirm() {
      console.log("confirm --------------- ");
      this.visible = false;
    },
  }
}
</script>