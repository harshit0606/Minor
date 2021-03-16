import React, { useEffect, useState } from "react";
import {
    IoLogoFacebook,
    IoLogoTwitter,
    IoLogoWhatsapp,
    IoMdMail,
    IoIosPeople,
} from "react-icons/io";
import {
    AiFillInstagram,
    AiFillPhone,
    AiOutlineUserAdd,
    AiOutlinePhone,
    AiOutlineMail,
} from "react-icons/ai";
import { TiArrowRight } from "react-icons/ti";
import { VscDebugRestartFrame } from "react-icons/vsc";
import { IoCashOutline, IoLocationOutline } from "react-icons/io5";
import "../Styles/Header.css";
import { Link, withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import firebase from "firebase";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: `yellow` };
    } else {
        return { color: "var(--white)" };
    }
};

const Header = ({ history }) => {

    const changebackgroundd = () => {
        if (window.scrollY > 110) {
            const navlink = document.querySelector('.header-main2')
            const navlinkss = document.querySelector('.hamburger')
            const navlinks = document.querySelector('.header-main')
            const seconddiv = document.querySelector('.header-main3')
            if (navlinks && navlinkss && navlink) {
                navlinks.classList.add('header-main-exit')
                navlinkss.classList.add('hamburger-exit')
                navlink.classList.add("header-main2-exit");
                seconddiv.classList.add('header-main3-exit')
            }
        } if (window.scrollY <= 110) {
            const navlinkss = document.querySelector('.hamburger')
            const navlinks = document.querySelector('.header-main')
            const navlink = document.querySelector('.header-main2')
            const seconddiv = document.querySelector('.header-main3')
            if (navlink && navlinks && navlinkss) {
                navlink.classList.remove("header-main2-exit");
                navlinks.classList.remove("header-main-exit");
                navlinkss.classList.remove('hamburger-exit')
                seconddiv.classList.remove('header-main3-exit')
            }
        }
    }

    window.addEventListener("scroll", changebackgroundd);

    useEffect(() => {
        const hamburger = document.querySelector(".hamburger");
        const navlinks = document.querySelector(".header-main33");

        hamburger.addEventListener("click", () => {
            navlinks.classList.toggle("open");
        });

        const concetp = document.querySelector(".quick-inq");
        const concetp1 = document.querySelector(".quick-inq2");
        concetp.addEventListener("click", () => {
            concetp1.classList.toggle("open-quick");
            concetp.classList.toggle("open-quick1");
        });
    }, []);

    const changeScreen = () => {
        const navlinks = document.querySelector(".header-main33");
        navlinks.classList.toggle("open");
    };

    const [quickEnquiry, setQuickEnquiry] = useState({
        fullName: "",
        email: "",
        phNo: "",
        requirements: "",
        budget: "",
        noOfPeople: "",
        destination: "",
    });

    function handlechange(event) {
        const { name, value } = event.target;
        setQuickEnquiry((prev) => {
            return { ...prev, [name]: value };
        });
    }

    function sendEmail() {
        emailjs
            .send(
                "service_wmmn1mc",
                "template_hi5n6h4",
                quickEnquiry,
                "user_kOM812vqGT0AINxPmaGol"
            )
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    toast.success("Mail Sent");
                    setQuickEnquiry({
                        fullName: "",
                        email: "",
                        phNo: "",
                        destination: "",
                        requirements: "",
                        budget: "",
                        noOfPeople: "",
                    });
                },
                function (err) {
                    console.log("FAILED...", err);
                    toast.error(
                        "There is an issue sending your request. Please try again later."
                    );
                }
            );
    }

    return (
        <div className="header-main-main">
            <div className="header-main">
                <div className="header-main1">
                    <div className="header-main2">
                        <div className="header-main21">
                            <div className="header-main23">
                            </div>
                        </div>
                    </div>

                    <div className="header-main3">
                        <div className="header-main31">
                            <div className="header-main32">
                                <Link to="/" style={isActive(history, "/")}>
                                    <h3>PACAULI</h3>
                                </Link>
                            </div>
                            <div className="hamburger">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="header-main33">
                                <ul>
                                    <Link
                                        className="deconone"
                                        to="/"
                                        style={isActive(history, "/")}
                                        onClick={changeScreen}
                                    >
                                        <li>Home</li>
                                    </Link>

                                    <div className='dropdown-iinit'>
                                        <Link
                                            className="deconone"
                                            to="/categories"
                                            style={isActive(history, "/categories")}
                                            onClick={changeScreen}
                                        >
                                            <li>Categories</li>
                                        </Link>
                                        <div className='cat-dropdown'>
                                            <div className='cat-dropdown-child'>Sking</div>
                                            <div className='cat-dropdown-child'>Trekking</div>
                                            <div className='cat-dropdown-child'>Expedition</div>
                                            <div className='cat-dropdown-child'>Rock Climbing</div>
                                            <div className='cat-dropdown-child'>Camping</div>
                                            <div className='cat-dropdown-child'>Cycling</div>
                                            <div className='cat-dropdown-child'>Rafting</div>
                                            <div className='cat-dropdown-child'>Chardham</div>
                                        </div>
                                    </div>

                                    <Link
                                        className="deconone"
                                        to="/custompackage"
                                        style={isActive(history, "/custompackage")}
                                        onClick={changeScreen}
                                    >
                                        <li>Custom Package</li>
                                    </Link>
                                    <Link
                                        className="deconone"
                                        to="/contactus"
                                        style={isActive(history, "/contactus")}
                                        onClick={changeScreen}
                                    >
                                        <li>Contact Us</li>
                                    </Link>
                                    <Link
                                        className="deconone"
                                        to="/aboutus"
                                        style={isActive(history, "/aboutus")}
                                        onClick={changeScreen}
                                    >
                                        <li>About Us</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="quick-inq">
                    <div className="quick-inq1">
                        <TiArrowRight style={{ marginLeft: "-10px" }} />
            Quick Enquiry
          </div>
                </div>
                <div className="quick-inq2">
                    <div className="form-mainss">
                        <div className="form-mainss1">
                            <Form.Group>
                                <AiOutlineUserAdd className="icone-form" />
                                <Form.Control
                                    type="text"
                                    onChange={handlechange}
                                    name="fullName"
                                    value={quickEnquiry.fullName}
                                    placeholder="Name"
                                />
                            </Form.Group>
                            <Form.Group>
                                <AiOutlineMail className="icone-form" />
                                <Form.Control
                                    type="Email"
                                    onChange={handlechange}
                                    name="email"
                                    value={quickEnquiry.email}
                                    placeholder="Email"
                                />
                            </Form.Group>
                            <Form.Group>
                                <AiOutlinePhone className="icone-form" />
                                <Form.Control
                                    type="number"
                                    onChange={handlechange}
                                    name="phNo"
                                    value={quickEnquiry.phNo}
                                    placeholder="Contact Number"
                                />
                            </Form.Group>
                            <Form.Group>
                                <IoLocationOutline className="icone-form" />
                                <Form.Control
                                    type="text"
                                    onChange={handlechange}
                                    name="destination"
                                    value={quickEnquiry.destination}
                                    placeholder="Destination"
                                />
                            </Form.Group>
                            <Form.Group>
                                <VscDebugRestartFrame className="icone-form" />
                                <Form.Control
                                    as="textarea"
                                    placeholder="Requirement"
                                    rows={3}
                                    onChange={handlechange}
                                    name="requirements"
                                    value={quickEnquiry.requirements}
                                    className="nobb-form"
                                />
                            </Form.Group>
                            <Form.Group>
                                <IoCashOutline className="icone-form" />
                                <Form.Control
                                    type="text"
                                    placeholder="Budget"
                                    onChange={handlechange}
                                    name="budget"
                                    value={quickEnquiry.budget}
                                />
                            </Form.Group>
                            <Form.Group>
                                <IoIosPeople className="icone-form" />
                                <Form.Control
                                    type="text"
                                    placeholder="No of People"
                                    onChange={handlechange}
                                    name="noOfPeople"
                                    value={quickEnquiry.noOfPeople}
                                />
                            </Form.Group>
                        </div>
                        <button onClick={sendEmail}>GET IN TOUCH</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Header);
