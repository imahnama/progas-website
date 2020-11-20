import React from 'react';
import footerIcons from '../constants/footer-icons';
import footerHead from '../constants/footer-head';

export default function Footer() {
  return (
    <footer className="page-footer font-small pt-4" id="contact">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left mt-3 pb-3">
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold ml-3">
              ProGas
            </h6>
            <p className="ml-3">
              Cook like a Pro with ProGas, available nationwide in Kenya! Safe,
              reliable, accessible... the smart choice for Kenyan families.
              Proudly made in Kenya for quality you can trust.
            </p>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                {footerIcons.map((item, index) => {
                  return (
                    <a
                      key={index}
                      className="btn-floating btn-sm rgba-white-slight mx-1 footer-icons"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={item.url}
                    >
                      {item.icon}
                    </a>
                  );
                })}
              </li>
            </ul>
          </div>

          <hr className="w-100 clearfix d-md-none hr-color"></hr>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 useful-links">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful Links
            </h6>
            <p>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://protoenergy.com/careers/"
              >
                Careers
              </a>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none hr-color"></hr>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Head Office
            </h6>

            {footerHead.map((item, index) => {
              return (
                <p>
                  {item.icon}
                  {item.text}
                </p>
              );
            })}
          </div>
        </div>
        <hr />
        <div className="row d-flex align-items-center">
          <div className="col-md-12 col-lg-12">
            <p className="text-center text-uppercase">
              copyright&copy;{new Date().getFullYear()} <br></br>
              <strong>Proto Energy Limited</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
