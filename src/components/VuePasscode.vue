<template>
  <div
    class="vue-passcode"
    :class="[
      { 'vue-passcode--accepted': accepted, 'vue-passcode--rejected': rejected }
    ]"
  >
    <input
      ref="input"
      v-for="(n, index) in digits"
      :key="index"
      maxlength="1"
      autocorrect="off"
      autocomplete="off"
      autocapitalize="off"
      spellcheck="false"
      type="text"
      class="vue-passcode__input"
      @input="onInput($event, index)"
      @click="onClick($event, index)"
      @keyup.prevent="onKeyUp($event, index)"
    />
    <input :name="name" type="hidden" />
  </div>
</template>

<script>
export default {
  name: "VuePasscode",
  props: {
    mode: {
      // TODO: alphanumeric // alpha // numeric
      type: String,
      default: "alphanumeric"
    },
    digits: {
      type: Number,
      default: 4
    },
    name: {
      type: String,
      default: "passcode"
    },
    accepted: {
      type: Boolean
    },
    rejected: {
      type: Boolean
    }
  },
  data() {
    return {
      code: ""
    };
  },
  watch: {
    rejected(rejected) {
      if (rejected) {
        this.reset();
        this.$refs.input[0].focus();
      }
    }
  },
  methods: {
    onClick($event, index) {
      if (this.$refs.input[index].value) {
        this.reset();
      }
      if (index != 0) {
        this.$refs.input[0].focus();
      }
    },
    onKeyUp($event, index) {
      if (!this.$refs.input[index].value) return;
      if (!this.regex.test($event.key)) return;
      if (this.digits > index + 1) {
        this.$refs.input[index + 1].focus();
      } else {
        this.$refs.input[index].blur();
        this.$emit("change", this.code);
      }
      this.$refs.input[index].setAttribute("type", "password");
    },
    onInput($event, index) {
      this.code += this.$refs.input[index].value;
      this.$emit("input", this.code);
    },
    reset() {
      this.code = "";
      this.$refs.input.forEach(input => {
        input.value = "";
        input.setAttribute("type", "text");
      });
    }
  },
  computed: {
    regex() {
      return new RegExp("^[a-zA-Z0-9_]*$");
    }
  }
};
</script>

<style scoped>
.vue-passcode__input {
  position: relative;
  overflow: hidden;
  width: 32px;
  height: 46px;
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  color: currentColor;
  background-color: rgba(0, 0, 0, 0.125);
  border-radius: 8px;
  text-align: center;
  box-shadow: inset 0 1px 1px 0 currentColor;
  margin: 0 8px;
  opacity: 0.5;
  box-sizing: border-box;
}

.vue-passcode__input[type="password"] {
  color: currentColor;
  font-size: 32px;
  padding: 0 0 5px 0;
}

.vue-passcode__input:focus {
  outline: 0;
  opacity: 1;
  box-shadow: 0 0 0 2px currentColor;
}

.vue-passcode--accepted .vue-passcode__input {
  opacity: 1;
  color: #34c759;
  box-shadow: 0 0 0 2px #34c759;
}

.vue-passcode--rejected {
  animation: shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}
.vue-passcode--rejected .vue-passcode__input {
  opacity: 1;
  color: #fe2e55;
  box-shadow: 0 0 0 2px #fe2e55;
}

@keyframes shake {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  20%,
  60% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  80% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
