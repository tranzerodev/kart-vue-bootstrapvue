export default {
  data() {
    return {}
  },
  methods: {
    async showConfirmModal(message, buttonText) {
      this.confirmResult = false

      const h = this.$createElement

      const messageVNode = h('div', { class: ['py-4 px-4'] }, [
        h('p', { class: ['text-left mb-0 mat-confirm-modal-body'] }, [message]),
      ])

      await this.$bvModal
        .msgBoxOk([messageVNode], {
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'primary',
          okTitle: buttonText,
          footerClass: 'border-top-0 p-0 mat-confirm-modal-footer',
          centered: true,
        })
        .then(value => {
          this.confirmResult = value
        })
        .catch(() => {
          // An error occurred
        })
    },
    async showConfirmModalTwo(message, firstBtnText, secondBtnText) {
      this.confirmTwoResult = false

      const h = this.$createElement

      const messageVNode = h('div', { class: ['py-4 px-4'] }, [
        h('p', { class: ['text-left mb-0 mat-confirm-modal-body'] }, [message]),
      ])
      await this.$bvModal
        .msgBoxConfirm([messageVNode], {
          size: 'md',
          buttonSize: 'sm',
          okVariant: 'primary',
          okTitle: firstBtnText,
          cancelTitle: secondBtnText,
          footerClass: 'border-top-0 p-0 mat-02-confirm-modal-footer',
          hideHeaderClose: false,
          centered: true,
          noCloseOnBackdrop: true,
          noCloseOnEsc: true,
        })
        .then(value => {
          this.confirmTwoResult = value
        })
        .catch(() => {
          // An error occurred
        })
    },
  },
}
