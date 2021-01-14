<template>
  <div class="group" :class="{ success: success }">
    <input
      :type="type"
      :value="value"
      @input="handleChange"
      :required="required"
    />
    <span class="bar"></span>
    <div class="error-message">{{ error }}</div>
    <label>{{ label }}</label>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      required: true,
      type: String,
    },
    label: {
      required: true,
      type: String,
    },
    type: {
      required: false,
      type: String,
      default: "text",
    },
    required: {
      required: false,
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: "",
      required: false,
    },
    success: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleChange(e) {
      this.$emit("handleChange", e.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
.group {
  position: relative;
  margin-bottom: 32px;
  height: 60px;
  width: 300px;
}
@media screen and (max-width: 500px) {
  .group {
    width: 100%;
  }
}
input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--neutral);
  background: var(--bg-color);
  color: var(--font-color);
}
input:focus {
  outline: none;
  border-bottom: none;
}

label {
  color: var(--neutral);
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

input:focus ~ label,
input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: var(--primary);
}

.bar {
  position: relative;
  display: block;
  width: 100%;
}
.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: var(--primary);
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}
.error-message {
  padding: 2px 5px;
  font-size: 14px;
  color: var(--error);
}
.success {
  .bar:before,
  .bar:after {
    width: 50%;
    background: var(--success);
  }
  input {
    border-bottom: none;
  }
}
</style>
