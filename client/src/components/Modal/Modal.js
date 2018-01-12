
import React from 'react';

const Modal = props => (

<div>
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
    Post A Topic
  </button>
  <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group" style={{ float: "center", width:450 }} >
              <input 
                className="form-control"
                name="author"
                value={props.author}
                onChange={props.onChange}
                placeholder="author(required)"
              />
              <input 
                className="form-control"
                name="title"
                value={props.title}
                onChange={props.onChange}
                placeholder="title(required)"
              />
              <textarea 
                className="form-control"
                rows="5"
                name="body"
                value={props.body}
                onChange={props.onChange}
                placeholder="post(required)"
              />  
              <input 
                className="form-control"
                name="image"
                value={props.value}
                onChange={props.onChange}
                placeholder="image(optional)"
              />                            
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              data-dismiss="modal"
              disabled={!(props.author && props.title)} 
              type="button" 
              className="btn btn-primary" 
              onClick={props.handleFormSubmit}
            >Submit post
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;