import { Row, Col, Input } from "antd";
import { Link } from "react-router-dom";
import { icons } from '../../utils/icons'

const { Search } = Input;


export default function Footer() {
    return (
        <footer>
            <Row className="container border-t">
                {/* Contact infomation */}
                <Col span={5} className="border-r p-5">
                    <div>
                        <h4 className="font-semibold mb-3">Never Miss a Beat</h4>
                        <p className="text-xs mb-3 leading-6">
                            Be the first to hear about product launches,
                            collaborations, and more when you sign up for our emails.
                        </p>
                        <div className="mb-3">
                            <Search size="middle" placeholder="Enter your email address" enterButton />
                        </div>
                        <p className="text-xs leading-6">
                            By signing up, you agree to receive any communications from
                            us and you have read our <Link className="underline" to={'/'}>Privacy Policy</Link> and <Link className="underline" to={'/'}>Terms & Conditions</Link>.
                        </p>
                    </div>
                </Col>

                {/* Social */}
                <Col span={7} className="border-r py-5 px-10">
                    <div>
                        <h3 className="mb-3 font-semibold">Find a Store</h3>
                        <h3 className="mb-5 font-semibold">Follow Us</h3>
                        <div className="flex items-center">
                            <button className="p-4 border-y border-l"><icons.fbIcon /></button>
                            <button className="p-4 border"><icons.insIcon /></button>
                        </div>
                    </div>
                </Col>

                {/* Helper */}
                <Col span={7} className="border-r py-5 px-10">
                    <div>
                        <h3 className="mb-3 font-semibold">Get Help</h3>
                        <ul className="flex flex-col gap-2 text-[13px] text-gray-600">
                            <li>
                                <Link to={'/'}>Contact Us</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Order Status</Link>
                            </li>
                            <li>
                                <Link to={'/'}>FAQs</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Size Guide</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Return Policy</Link>
                            </li>
                        </ul>
                    </div>
                </Col>

                {/* About */}
                <Col span={5} className="p-5">
                    <h3 className="mb-3 font-semibold">About Us</h3>
                    <ul className="flex flex-col gap-2 text-[13px] text-gray-600">
                        <li>
                            <Link to={'/'}>About Converse</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Privacy Policy</Link>
                        </li>
                    </ul>
                </Col>
            </Row>
        </footer>
    )
}
