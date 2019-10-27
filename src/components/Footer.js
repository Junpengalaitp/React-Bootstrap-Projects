import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-dark">
        <div class="container">
          <div class="row">
            <div class="col text-center py-4">
              <h3>LoopLAB</h3>
              <p>
                Copyright &copy; {new Date().getFullYear()}
              </p>
              <button
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#contactModal"
              >
                Connect Us
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
