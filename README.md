# vue-passcode

> A Vue.js passcode input component (WIP)

## Install

Install the package using npm.

```bash
npm install --save vue-passcode
```

Globally register the component.

```js
import VuePasscode from "vue-passcode";

Vue.component(VuePasscode, {
  name: "MyPasscodeComponent" // Optional component name.
});
```

Locally register the components.

```js
import { VuePasscode } from 'vue-passcode';

export default {
    ...
    components: {
        VuePasscode
    },
    ...
};
```

## Usage

Use the props in your HTML and apply a v-model attribute for the passcode and any additional props for the desired configuration.

### Javascript

```js
import Vue from 'vue'
import { VuePasscode } from 'vue-passcode'

new Vue({
  el: '#app',
  components: {
    VuePasscode
  },
  data {
    digits: 4,
    code: "1234"
  }
})
```

### HTML

```html
<div>
  <VuePasscode v-model="code" :digits="digits" />
</div>
```

### Props

| Prop | Description | Type | Accepted | Default |
| ---- | ----------- | ---- | -------- | ------- |
| —    | –           | –    | –        | –       |

### Slot

| Name | Description |
| ---- | ----------- |
| —    | –           |

### Events

| Event Name | Description | Parameters |
| ---------- | ----------- | ---------- |
| change     | –           | —          |
| input      | –           | —          |

### Example:
