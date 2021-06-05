import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './InputBooks.css';

const InputBooks = () => {
    return (
        <div className="row input_books">
      <div className="col-md-10 text-center">
        <div className="row align-content-center" style={{ height: "100vh" }}>
          <h3>Add Book</h3>
          <div className="shadow-lg p-3 mb-5 rounded">
            <form>
              <input
                class="form-control form-control-lg mt-3"
                type="text"
                placeholder="Book Title"
                id="bookTitle"
              ></input>
                <input
                class="form-control form-control-lg mt-3"
                type="text"
                placeholder="Author Name"
                id="authorName"
              ></input>
              <input
                class="form-control form-control-lg mt-3"
                type="text"
                placeholder="Book Cover"
                id="bookName"
              ></input>
              <input
                class="form-control form-control-lg mt-3"
                type="text"
                placeholder="Book Price"
                id="bookPrice"
              ></input>
              <p>Book Cover</p>
              <input
                class="form-control form-control-lg mt-3"
                placeholder="Book Cover"
                type="file"
              />
              
              <p>Book File</p>
              <input
                class="form-control form-control-lg mt-3"
                placeholder="Book File"
                type="file"
              />
              <div class="mb-3 mt-3">
                <textarea
                  class="form-control"
                  id="serviceDescription"
                  rows="3"
                ></textarea>
              </div>

              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default InputBooks;