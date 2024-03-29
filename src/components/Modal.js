import React from 'react'

const Modal = () => (
  <React.Fragment>
  <div class="modal fade text-dark" id="contactModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal title">Contact</h5>
          <button class="close" data-dismiss='modal'>
            <span>&times;</span>
          </button>
        </div>
        
        <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control"></textarea>
          </div>
          </form>
        </div>

        <div class="modal-footer">
          <button class="btn btn-primary btn-block">Submit</button>
        </div>
      </div>
    </div>
  </div>
  </React.Fragment>
)

export default Modal
