<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>
              <slot name="header"> </slot>
            </h3>
          </div>

          <div class="modal-body">
            <p><slot name="body"> </slot></p>
          </div>

          <div class="modal-footer">
            <button
              class="modal-default-button"
              @click="$emit('close-modal')">OK</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  height: max-content;
  margin: 0px auto;
  padding: 20px 30px 0px 30px;
  background-color: var(--bg-color);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  color: var(--font-color);
}
.modal-default-button {
        padding: 10px 40px;
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 1px;
        outline: none;
        border: none;
        border-radius: 2px;
        box-shadow: 0px 0px 3px var(--shadow);
        background: var(--primary);
        margin-bottom: 15px;
        color: var(--font-color-light);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform .2s;
        &:hover {
            filter: brightness(1.1);
        }
        &:active {
            transform: scale(0.95);
        }
        &:disabled {
            filter: brightness(0.7);
        }
}

@media screen and (max-width: 600px) {
  .modal-container {
    width: 300px;
  }
}
@media screen and (max-width: 300px) {
  .modal-container {
    width: 100vw;
  }
}
.modal-header h3 {
  margin-top: 0;
  font-size: 24px;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
