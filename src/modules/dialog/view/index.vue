<template>
  <div class="demp-page">
    <mu-button
      @click="visible = !visible"
      color="primary"
    >Dialog</mu-button>
    <mu-action-btn>
      <mu-button class="one-px" large>default</mu-button>
    </mu-action-btn>
    <mu-dialog width="400px" :open.sync="visible" :actionBtn="true">
      <mu-action-btn @cancel="visible = !visible"></mu-action-btn>
    </mu-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  methods: {
  }
}
</script>