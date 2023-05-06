import "./footer.css";


const Footer = () => {
    return (
        <section className="dpd_footer">
        <div className="dpd_bottom">
          <div className="footer_I">
            <img
              src="/assets/footer/imgFooter.png"
              alt="footer"
              width="100%"
            />
          </div>
          <div className="footer_link">
            <div className="f_contentSmall">
              <div className="f_contentHead">Quick Links</div>
              <div className="f_contentText">Privacy Policy</div>
              <div className="f_contentText">Legal</div>
              <div className="f_contentText">Careers</div>
            </div>
            <div className="f_contentSmall">
              <div className="f_contentHead">Address</div>
              <div className="f_contentText">
                3rd Floor, Suite 25, Vicbalkon Towers, Vicbalkon Street, Utako,
                Abuja
              </div>
            </div>
            <div className="f_content">
              <div className="f_contentHead">Contact</div>
              <div className="f_contentText">
                Phone: +234 (0) 703 684 8035<br />
                Email: admin@dpdonline.ng
              </div>
            </div>
            <div className="f_content">
              <div className="f_contentHead">Consulting Areas</div>
              <div className="f_contentText">
                Agribusiness and Food Security <br />
                Education and Literacy <br />
                Healthcare and WASH <br />
                Climate Change and Environmental Stability <br />
                Gender & Inclusive Growth <br />
                Development Financing
              </div>
            </div>
          </div>
        </div>
        <div className="line_footer"></div>
        <div className="copy_right">
          <div>
            © 2022 Devstork Platform for Development. All Rights reserved |
            Powered by Atarifix
          </div>
          <div>DPD is a subsidiary of Devstork Holdings Ltd</div>
          <div style={{"margin": "1rem"}}>
            <img
               style={{"margin": "0.5rem"}}
              src="/assets/footer/facebook.png"
              alt="fb"
            />
            <img
               style={{"margin": "0.5rem"}}
              src="/assets/footer/twitter.png"
              alt="tweet"
            />
            <img
              style={{"margin": "0.5rem"}}
              src="/assets/footer/instagram.png"
              alt="ig"
            />
          </div>
        </div>
      </section>
    )
}

export default Footer;