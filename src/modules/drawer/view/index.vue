<template>
  <div class="demp-page">
    <mu-button
      @click="visible = !visible"
      color="primary"
    >Drawer</mu-button>
    <mu-action-btn>
      <mu-button class="one-px" large>default</mu-button>
    </mu-action-btn>
    <mu-drawer :open.sync="visible" needActionBtn @confirm="handleConfirm">
    </mu-drawer>
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