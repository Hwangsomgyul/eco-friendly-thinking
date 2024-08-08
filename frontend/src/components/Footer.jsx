import React from 'react';
import { Link } from 'react-router-dom';  // Link 컴포넌트 추가
import './Footer.css';

const Footer = () => {
    return (
        <footer style={{ background: 'linear-gradient(to bottom, #ffffff, #A8C8A8)' }} className="footer-container">
            <div className="footer-content">
                <div className="footer-company">
                    <p><span className="bold">㈜Lucky-Vicky</span></p>
                    <p><span className="bold">대표이사: </span>이현호</p>
                    <p><span className="bold">주소: </span>나영민지시 우현구 민관로 433, 솜귤 6층</p>
                    <p><span className="bold">사업자 등록 번호:</span> 144-81-00000</p>
                    <br></br>
                    <div className="footer-contact">
                        <p><span className="bold">대표 번호:</span> 1566-1234</p>
                        <p className="separator">|</p>
                        <p><span className="bold">FAX:</span> 031-8765-4321</p>
                        <p className="separator">|</p>
                        <p><span className="bold">E-mail:</span> lucky_vicky@elice.io (본 메일은 수신 전용입니다)</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-links">
                        <div className="bold">© Copyright 2024. eco-friendly-thinking. ALL RIGHTS RESERVED.</div>
                        <p className="separator">|</p>
                        <Link to="/Terms" className="footer-link">약관·정책</Link>
                        <p className="separator">|</p>
                        <Link to="/PrivacyPolicy" className="footer-link">개인정보 처리 방침</Link>
                        <p className="separator">|</p>
                        <Link to="/OperatingPolicy" className="footer-link">운영 정책</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
