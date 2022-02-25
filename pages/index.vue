<template>
  <div>

  <!-- Load Facebook SDK for JavaScript -->
  <div id="fb-root"></div>
  <script>
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v6.0'
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  </script>

  <!-- Your customer chat code -->
  <div class="fb-customerchat"
       attribution=setup_tool
       page_id="103912154632300"
       theme_color="#00b5ec"
       logged_in_greeting="Tere, kuidas saame aidata? :)"
       logged_out_greeting="Tere, kuidas saame aidata? :)">
  </div>
  <!-- Facebook stuff end -->

  <!-- ***** Preloader Start ***** -->
  <div id="js-preloader" class="js-preloader">
    <div class="preloader-inner">
      <span class="dot"></span>
      <div class="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
  <!-- ***** Preloader End ***** -->

  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="index.html" class="logo">
              <img src="images/logo/Costlio-logo_450_thin.png" style="width: 200px; height: auto"/>
              <!--              <h4>costl<span>io</span></h4>-->
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li class="scroll-to-section"><a href="#top" class="active">Pealeht</a></li>
              <li class="scroll-to-section"><a href="#about">Teenused</a></li>
              <li class="scroll-to-section"><a href="#portfolio">Tehtud tööd</a></li>
              <li class="scroll-to-section"><a href="#pricing">Hinnad</a></li>
              <li class="scroll-to-section"><a href="#contact">Saada teade</a></li>
              <li class="scroll-to-section">
                <div class="main-red-button"><a href="#contact">Võta ühendust</a></div>
              </li>
            </ul>
            <a class='menu-trigger'>
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->


  <div id="portfolio" class="our-portfolio section">
    <div class="container">
      <div class="row">
        <div class="section-heading  wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
          <h2>Vaata, mida me <em>teinud oleme</em> &amp; mida me <span>pakume</span></h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <a href="https://speqagri.ee">
            <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
              <div class="hidden-content">
                <h4>Mitmekeelne veebileht</h4>
                <p>Mine speqagri.ee lehte uurima</p>
              </div>
              <div class="showed-content">
                <img src="images/tehtud/speqagri.PNG" alt="">
              </div>
            </div>
          </a>
        </div>
        <div class="col-lg-3 col-sm-6">
          <a href="https://speq.ee">
            <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
              <div class="hidden-content">
                <h4>E-pood</h4>
                <p>Mine speq.ee e-poodi uurima</p>
              </div>
              <div class="showed-content">
                <img src="images/tehtud/speq.PNG" alt="">
              </div>
            </div>
          </a>
        </div>
        <div class="col-lg-3 col-sm-6">
          <a href="https://fekaaliabi.ee">
            <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
              <div class="hidden-content">
                <h4>Lihtne ja kiire veebileht</h4>
                <p>Mine fekaaliabi.ee lehte uurima</p>
              </div>
              <div class="showed-content">
                <img src="images/tehtud/fekaaliabi.png" alt="">
              </div>
            </div>
          </a>
        </div>
        <div class="col-lg-3 col-sm-6">
          <a href="https://imperagrupp.ee">
            <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
              <div class="hidden-content">
                <h4>Renditeenuste loetelu</h4>
                <p>Mine imperagrupp.ee lehele</p>
              </div>
              <div class="showed-content">
                <img src="images/tehtud/impera.PNG" alt="">
              </div>
            </div>
          </a>
        </div>
        <div class="col-lg-3 col-sm-6">
          <a href="#">
            <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.6s">
              <div class="hidden-content">
                <h4>Logo</h4>
                <p>Logo speq.ee e-poe jaoks.</p>
              </div>
              <div class="showed-content">
                <img src="images/tehtud/SPEQ_logo_169.png" alt="">
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- ======= Clients Section ======= -->
      <section id="cliens" class="cliens section-bg">
        <div class="container">


          <div class="row" data-aos="zoom-in">
            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src="images/partners/wordpress.svg" class="img-fluid" alt="">
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src="images/partners/woocommerce.svg" class="img-fluid" alt="">
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src="images/partners/montonio.svg" class="img-fluid" alt="">
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src="images/partners/vuejs.png" class="img-fluid" alt="">
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src="images/partners/HTML5.png" class="img-fluid" alt="">
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src="images/partners/Node.js.svg" class="img-fluid" alt="">
            </div>

          </div>
        </div>
      </section><!-- End Cliens Section -->
    </div>
  </div>
  <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <h6>e-poed, veebilehed, logod, SEO, analüütika, reklaam, turvauuendused,
                  makselahendused..</h6>
                <h2>Me teeme <em>e-poode</em> &amp; <span>veebilehti</span></h2>
                <!-- Veebilehe analüüsi kalkulaator -->
                <!--<form id="search" action="#" method="GET">
                    <fieldset>
                        <input type="address" name="address" class="email"
                               placeholder="Su veebilehe aadress..." autocomplete="on" required>
                    </fieldset>
                    <fieldset>
                        <button type="submit" class="main-button">Analüüsi lehte</button>
                    </fieldset>
                </form>-->
              </div>
            </div>
            <div class="col-lg-4">
              <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src="images/banner-right-image.png" alt="team meeting">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="about" class="about-us section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="left-image wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
            <img src="images/about-left-image.png" alt="person graphic">
          </div>
        </div>
        <div class="col-lg-8 align-self-center">
          <div class="services">
            <div class="row">
              <div class="col-lg-6">
                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                  <div class="icon">
                    <img src="images/epood-icon.png" alt="reporting">
                  </div>
                  <div class="right-text">
                    <h4>E-pood</h4>
                    <p>E-pood koos kõikide vajalike lisadega - makselahendused, laoseis, kasutajad,
                      soodused, kullersüsteem jpm.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                  <div class="icon">
                    <img src="images/logo-icon.png" alt="">
                  </div>
                  <div class="right-text">
                    <h4>Logo</h4>
                    <p>Oled nõus, et logo haarab tähelepanu, loob tugeva esmamulje, jääb meelde, eristab
                      konkurentidest?</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                  <div class="icon">
                    <img src="images/analytics-icon.png" alt="">
                  </div>
                  <div class="right-text">
                    <h4>Analüütika</h4>
                    <p>Et teada, kus kliendid kaduma lähevad, on parim lahendus klientide käitumist
                      lehel jälgida.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="1.1s">
                  <div class="icon">
                    <img src="images/seo-icon.png" alt="">
                  </div>
                  <div class="right-text">
                    <h4>SEO - veebileht kergelt leitavaks</h4>
                    <p>Oled proovinud oma veebilehte googeldada, aga see pole kergelt leitav?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <br>
  <!-- Pricing table start -->
  <div class="our-portfolio section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="section-heading  wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
            <h2>Populaarsemad <em>hinnapaketid</em></h2>
          </div>
        </div>
      </div>
      <div id="pricing" class="tab-content wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
        <div role="tabpanel" class="tab-pane fade show active" id="yearly">
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4 mb-30">
              <div class="price-item text-center">
                <div class="price-top">
                  <h4>Veebileht </h4>
                  <h4>Stardipakett</h4>
                  <h2 class="mb-0">alates 890 €</h2>
                </div>
                <div class="price-content">
                  <ul class="border-bottom mb-30 mt-md-4 pb-3 text-left">
                    <li>
                      <i class="zmdi zmdi-check mr-2"></i>
                      <span class="c-black">Põhjalik disain</span>
                    </li>
                    <li>
                      <i class="zmdi zmdi-check mr-2"></i>
                      <span class="c-black">Mobiilisõbralik</span>
                    </li>
                    <li>
                      <i class="zmdi zmdi-check mr-2"></i>
                      <span class="c-black">Otsingutest leitavuse suurendamine</span>
                    </li>
                    <li>
                      <i class="zmdi zmdi-check mr-2"></i>
                      <span class="c-black">Lihtne tekstlogo</span>
                    </li>

                  </ul>
                  <a href="#contact" class="btn btn-custom">Küsi pakkumist</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-30">
              <div class="price-item text-center popular">
                <div class="price-top">
                  <h4>Veebileht </h4>
                  <h4>Täispakett</h4>
                  <h2 class="mb-0">alates 1500 €</h2>
                </div>
                <div class="price-content">
                  <ul class="border-bottom mb-30 mt-md-4 pb-3 text-left">
                    <li>
                      <i class="zmdi zmdi-check mr-2"></i>
                      <span class="c-black">Põhjalik disain</span>
                    </li>
                    <li>
                      <i class="zmdi zmdi-check mr-2"></i>
                      <span class="c-black">Mobiilisõbralik</span>
                    </li>
                    <li>
                      <i class="zmdi zmdi-check mr-2"></i>
                      <span class="c-black">Otsingutest leitavuse suurendamine</span>
                    </li>
                    <li>
                      <i class="zmdi zmdi-check mr-2"></i>
                      <span class="c-black">Lihtne disainlogo</span>
                    </li>
                    <li>
                      <i class="zmdi zmdi-close mr-2"></i>
                      <span>Veebilehe külastatavuse jälgimise lisamiine</span>
                    </li>
                    <li>
                      <i class="zmdi zmdi-close mr-2"></i>
                      <span>Jutumull, et klient saaks koheselt küsimusi küsida</span>
                    </li>
                    <li>
                      <i class="zmdi zmdi-close mr-2"></i>
                      <span>Turvasertifikaatide lisamine</span>
                    </li>
                  </ul>
                  <a href="#contact" class="btn btn-custom btn-light">Küsi pakkumist</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-30">
              <div class="price-item text-center">
                <div class="price-top">
                  <h4>E-pood</h4>
                  <h2 class="mb-0">alates 2500 €</h2>
                </div>
                <div class="price-content">
                  <ul class="border-bottom mb-30 mt-md-4 pb-3 text-left">
                    <li>
                      <i class="zmdi zmdi-close mr-2"></i>
                      <span>E-poe täislahendus, kus klient saab tooteid osta</span>
                    </li>
                    <li>
                      <i class="zmdi zmdi-check mr-2"></i>
                      <span class="c-black">Põhjalik disain</span>
                    </li>
                    <li>
                      <i class="zmdi zmdi-check mr-2"></i>
                      <span class="c-black">Mobiilisõbralik</span>
                    </li>
                    <li>
                      <i class="zmdi zmdi-check mr-2"></i>
                      <span class="c-black">Otsingutest leitavuse suurendamine</span>
                    </li>
                    <li>
                      <i class="zmdi zmdi-check mr-2"></i>
                      <span class="c-black">Disainlogo</span>
                    </li>
                    <li>
                      <i class="zmdi zmdi-close mr-2"></i>
                      <span>Veebilehe külastatavuse jälgimise lisamiine</span>
                    </li>
                    <li>
                      <i class="zmdi zmdi-close mr-2"></i>
                      <span>Jutumull, et klient saaks koheselt küsimusi küsida</span>
                    </li>
                    <li>
                      <i class="zmdi zmdi-close mr-2"></i>
                      <span>Turvasertifikaatide lisamine</span>
                    </li>
                  </ul>
                  <a href="#contact" class="btn btn-custom">Küsi pakkumist</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Team section start-->
  <div class="container py-5">
    <div class="row mb-4 justify-content-center">
      <div class="col-lg-5">
        <h2 class="display-4 font-weight-light">Meie meeskond</h2>
        <!--            <p class="font-italic text-muted">Meie pisike meeskonnake.</p>-->
      </div>
    </div>

    <div class="row text-center justify-content-center">
      <!-- Team item-->
      <div class="col-xl-3 col-sm-4 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img
          src="images/kristjan_DP.png" alt="" width="100"
          class=" rounded-circle mb-3 img-thumbnail shadow-sm">
          <h5 class="mb-0">Kristjan Kuldmaa</h5><span
            class="small text-uppercase text-muted">Turundus, marketing</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="tel:+37253449020" class="social-link"><i
              class="fa fa-phone"></i></a></li>
            <li class="list-inline-item"><a href="https://www.facebook.com/kristjan.kuldmaa"
                                            class="social-link"><i class="fa fa-facebook-f"></i></a></li>
          </ul>
        </div>
      </div>
      <!-- End-->

      <!-- Team item-->
      <div class="col-xl-3 col-sm-4 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img
          src="images/reimo_DP.png" alt="" width="100"
          class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
          <h5 class="mb-0">Reimo Vellemaa</h5><span class="small text-uppercase text-muted">Arendus, Disain</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="tel:+37253447499" class="social-link"><i
              class="fa fa-phone"></i></a></li>
            <li class="list-inline-item"><a href="https://www.linkedin.com/in/reimo-vellemaa/"
                                            class="social-link"><i class="fa fa-linkedin"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <!-- End-->
    </div>
  </div>
  <!-- End Team section-->
  <div id="contact" class="contact-us section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 align-self-center wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s">
          <div class="section-heading">
            <h2>Kui tekkis küsimusi, siis ole nii hea ja helista või kirjuta messengeri aknasse</h2>
            <div class="phone-info">
              <h4>Igasugused päringud & küsimused: <span><a href="tel:+37253447499"><i
                class="fa fa-phone"></i> +372 53447499</a></span><span><a
                href="mailto:info@costlio.com"><i
                class="fa fa-fast-forward"></i> info@costlio.com</a></span></h4>
            </div>
          </div>
        </div>
        <div class="col-lg-6 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
          <div class="col-lg-4 float-end">
            <div class="contact-dec">
              <img src="images/contact-decoration.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.25s">
          <p></p>
        </div>
      </div>
    </div>
  </footer>

  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
    }
  },
})
</script>
