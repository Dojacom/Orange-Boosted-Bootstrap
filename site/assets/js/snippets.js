// NOTICE!!! Initially embedded in our docs this JavaScript
// file contains elements that can help you create reproducible
// use cases in StackBlitz for instance.
// In a real project please adapt this content to your needs.
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global boosted: false */

(() => {
  'use strict'

  // --------
  // Tooltips
  // --------
  // Instantiate all tooltips in a docs or StackBlitz
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
      new boosted.Tooltip(tooltip)
    })

  // --------
  // Popovers
  // --------
  // Instantiate all popovers in docs or StackBlitz
  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new boosted.Popover(popover)
    })

  // -------------------------------
  // Toasts
  // -------------------------------
  // Used by 'Placement' example in docs or StackBlitz
  const toastPlacement = document.getElementById('toastPlacement')
  if (toastPlacement) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!toastPlacement.dataset.originalClass) {
        toastPlacement.dataset.originalClass = toastPlacement.className
      }

      toastPlacement.className = `${toastPlacement.dataset.originalClass} ${this.value}`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')

  if (toastTrigger) {
    const toastBoosted = boosted.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
      toastBoosted.show()
    })
  }
  // js-docs-end live-toast

  // -------------------------------
  // Alerts
  // -------------------------------
  // Used in 'Show live alert' example in docs or StackBlitz

  // Boosted mod: adapted innerHTML to have the icon and so added a parameter within `appendAlert()` and a tooltip on `.btn-close`
  // js-docs-start live-alert
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  const appendAlert = (message, type, typeVisuallyHidden) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      '  <span class="alert-icon">',
      `    <span class="visually-hidden">${typeVisuallyHidden}</span>`,
      '  </span>',
      `  <p>${message}</p>`,
      '  <button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">',
      '    <span class="visually-hidden">Close</span>',
      '  </button>',
      '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)

    // Create `.btn-close` tooltip after `innerHTML` has been modified
    const btnClose = wrapper.querySelector('.btn-close')
    const tooltip = new boosted.Tooltip(btnClose)
    btnClose.addEventListener('click', () => {
      tooltip.hide()
    })
  }

  const alertTrigger = document.getElementById('liveAlertBtn')
  if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
      appendAlert('Nice, you triggered this alert message!', 'success', 'Success')
    })
  }
  // js-docs-end live-alert

  // --------
  // Carousels
  // --------
  // Instantiate all non-autoplaying carousels in docs or StackBlitz
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })

  // -------------------------------
  // Checks & Radios
  // -------------------------------
  // Indeterminate checkbox example in docs and StackBlitz
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })

  // -------------------------------
  // Links
  // -------------------------------
  // Disable empty links in docs examples only
  document.querySelectorAll('.bd-content [href="#"]')
    .forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault()
      })
    })

  // -------------------------------
  // Modal
  // -------------------------------
  // Modal 'Varying modal content' example in docs and StackBlitz
  // js-docs-start varying-modal-content
  const exampleModal = document.getElementById('exampleModal')
  if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
      // Button that triggered the modal
      const button = event.relatedTarget
      // Extract info from data-bs-* attributes
      const recipient = button.getAttribute('data-bs-whatever')
      // If necessary, you could initiate an Ajax request here
      // and then do the updating in a callback.

      // Update the modal's content.
      const modalTitle = exampleModal.querySelector('.modal-title')
      const modalBodyInput = exampleModal.querySelector('.modal-body input')

      modalTitle.textContent = `New message to ${recipient}`
      modalBodyInput.value = recipient
    })
  }
  // js-docs-end varying-modal-content

  // -------------------------------
  // Offcanvas
  // -------------------------------
  // 'Offcanvas components' example in docs only
  const myOffcanvas = document.querySelectorAll('.bd-example-offcanvas .offcanvas')
  if (myOffcanvas) {
    myOffcanvas.forEach(offcanvas => {
      offcanvas.addEventListener('show.bs.offcanvas', event => {
        event.preventDefault()
      }, false)
    })
  }
})()
