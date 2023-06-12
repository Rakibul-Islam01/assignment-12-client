import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className='bg-[#00cec9]'>
                <div className="footer text-black p-10 text-neutral-content">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Drawing</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                    <div>
                        <span className="footer-title">Address</span>
                        <a className="link link-hover">Address: Dhanmondi, Dhaka.</a>
                        <a className="link link-hover">Road: N.S Road, 5005</a>
                        <a className="link link-hover">Email: drawingverse@gmail.com</a>
                        <a className="link link-hover">Phone: +8801754**4343</a>
                    </div>

                </div>
                <div className='bg-[#14bbb8] py-2'>
                    <p>Copyright © 2023 - All right reserved by <span className='font-bold'>DRAWVERSE</span> Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;