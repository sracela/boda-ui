import "./FooterSection.modules.css";
import HeartDivider from "../HeartDivider/HeartDivider";

function FooterSection() {
  return (
    <footer>
      <div
        class="image-divider fixed-height"
        style={{ backgroundImage: "url(assets/images/footer.JPG)" }}
      >
        <div class="divider-overlay"></div>

        {/* <!-- Use Center Middle Alignment to align middle the content for fixed-height parallax --> */}
        <div class="alignment">
          <div class="v-align center-middle">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="animation fadeInUp">
                    <div id="thank-you">
                      <div id="thank">Te</div>
                      <div id="you">Esperamos</div>
                    </div>
                  </div>

                  <HeartDivider />

                  <div
                    id="footer-couple-name"
                    class="animation delay1 fadeInUp"
                  >
                    PAULA & MARTÍN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
