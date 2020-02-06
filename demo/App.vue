<template>
  <div class="demo">
    <div class="wrapper">
      <VuePasscode
        :digits="4"
        :rejected="this.rejected"
        :accepted="this.accepted"
        @change="onChange"
        @input="onInput"
      />
    </div>
  </div>
</template>

<script>
import VuePasscode from "../src/components/VuePasscode.vue";
export default {
  components: {
    VuePasscode
  },
  data() {
    return {
      rejected: false,
      accepted: false
    };
  },
  methods: {
    onChange(code) {
      setTimeout(() => {
        if (code === "1234") {
          this.rejected = false;
          this.accepted = true;
          alert("✅ Passcode accepted");
        } else {
          this.rejected = true;
          this.accepted = false;
          alert("🚫 Passcode rejected");
        }
      }, 1000);
    },
    onInput() {
      if (this.rejected) {
        this.rejected = false;
      }
      if (this.accepted) {
        this.accepted = false;
      }
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
}
.demo {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
