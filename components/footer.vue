<template>
<!--  <div class="container">-->
    <footer class="global-footer">
      <div class="content-wrapper match-height-tablet">


        <div class="global-footer-links match" style="">
          <h2><span class="offscreen">The Pokémon Company</span></h2>
          <ul>


            <li>
              <a href="/us/pokemon-news/" rel="" title="">
                What's New
              </a>
            </li>

            <li>
              <a href="/us/parents-guide/" rel="" title="">
                Pokémon Parents Guide
              </a>
            </li>
            <li>
              <a href="/us/customer-service/" rel="" title="">
                Customer Service
              </a>
            </li>
            <li>
              <a id="about-our-company-link" href="https://corporate.pokemon.com/en-us/" rel="" title="">
                About Our Company
              </a>
            </li>

            <li>
              <a
                id="careers-link" class="exit-link" target="_blank" rel="https://boards.greenhouse.io/pokemoncareers"
                title="External: https://boards.greenhouse.io/pokemoncareers" tabindex="0">
                Pokémon Careers
              </a>
            </li>


            <li>
              <a href="/us/country-region/" rel="" title="">
                Select a Country/Region
                <i class="icon-us"></i>
              </a>
            </li>
            <li>
              <a
                id="press-link" class="exit-link" target="_blank" rel="https://press.pokemon.com/"
                title="External: https://press.pokemon.com/" tabindex="0">
                Pokémon Press Site
              </a>
            </li>


          </ul>
        </div>


        <div class="global-footer-social match" style="">

          <div class="footer-social-wrapper">
            <div class="find-us">
              <div class="find-us-box">


                <a
                  class="facebook exit-link" target="_blank" title="External: https://www.facebook.com/pokemon"
                  rel="https://www.facebook.com/pokemon" tabindex="0">
                  <span class="offscreen">Facebook</span>
                </a>

                <a
                  class="youtube exit-link" target="_blank" title="External: https://www.youtube.com/user/Pokemon"
                  rel="https://www.youtube.com/user/Pokemon" tabindex="0">
                  <span class="offscreen">Youtube</span>
                </a>

                <a
                  class="twitter exit-link" target="_blank" title="External: https://www.twitter.com/pokemon"
                  rel="https://www.twitter.com/pokemon" tabindex="0">
                  <span class="offscreen">Twitter</span>
                </a>

                <a
                  class="instagram exit-link" target="_blank" title="External: https://www.instagram.com/pokemon"
                  rel="https://www.instagram.com/pokemon" tabindex="0">
                  <span class="offscreen">Instagram</span>
                </a>


                <a
                  class="pinterest exit-link" target="_blank" title="External: https://www.pinterest.com/pokemon"
                  rel="https://www.pinterest.com/pokemon" tabindex="0">
                  <span class="offscreen">Pinterest</span>
                </a>

              </div>
            </div>

          </div>

        </div>


        <div class="global-footer-legal match" style="">

          <div class="footer-legal-wrapper">

            <div id="footer--privacy">
              <a
                title="External: https://caru.bbbprograms.org/seal/Confirmation/1596150491" class="exit-link"
                target="_blank" rel="https://caru.bbbprograms.org/seal/Confirmation/1596150491" tabindex="0">
              </a>
              <ul>

                <li>
                  <a href="/us/terms-of-use/">Terms of Use</a>
                </li>

                <li>
                  <a href="/us/privacy-notice/">Privacy Notice</a>
                </li>

                <li>
                  <a id="cookieLink" href="/us/cookie-page/">Cookie Page</a>
                </li>

                <li>
                  <a href="/us/legal/">Legal Info</a>
                </li>


                <li>
                  <a id="securityLink" href="/us/vulnerability-disclosure-program/">Security</a>
                </li>


              </ul>
            </div>

            <span>©2022 Pokémon. ©1995 - 2022 Nintendo/Creatures Inc./GAME FREAK inc. TM, ®Nintendo.</span>

          </div>

        </div>


      </div>

    </footer>
<!--  </div>-->
</template>
<script>
export default {
  name: 'FooterComponent',
}
</script>
<style>
/*.content-wrapper.match-height-tablet {*/
/*  height: auto;*/
/*  display: flex;*/
/*}*/

/*.container {*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*}*/
.global-footer-legal {
  margin-left: 65.2925%;
  border:0 !important;
}
.global-footer-legal .footer-legal-wrapper ul li a {
  color: #525252;
  text-decoration: underline;
  text-decoration-color: currentcolor;
}
.global-footer-legal .footer-legal-wrapper ul li a {
  color: rgb(237, 230, 217);
  text-decoration-color: currentcolor;
}
.global-footer {
  background: #1f1f1f;
  background-color: rgb(31, 31, 31);
  background-image: none;
  clear: both;
  display: block;
  padding: 0 0 1em;
  width: 100%;
}

.global-footer .content-wrapper {
  background-color: rgb(36, 38, 40);
  background-image: none;
}

.global-footer-links h2 {
  background-color: rgba(6, 6, 6, 0);
  background-image: url("../static/pokemon_company.png");
}

.global-footer h2, .global-footer h3, .global-footer h4, .global-footer h5, .global-footer h6 {
  color: rgb(255, 255, 255);
}

.global-footer-links h2 {
  background: url(../static/pokemon_company.png);
  background-color: rgba(0, 0, 0, 0);
  background-repeat: repeat;
  background-image: url("../static/pokemon_company.png");
  background-size: auto;
  background-repeat: no-repeat;
  background-size: 100% auto;
  margin: 0 0.4em 0.8em 0.4em;
  margin-bottom: 0.8em;
  max-width: 227px;
  padding-top: 10%;
  width: 90%;
}

h2 {
  font-size: 137.5%;
  line-height: 125%;
  text-transform: none;
  font-family: "Flexo-Medium", arial, sans-serif;
  margin: 0.75em 0;
}

.offscreen {
  left: -99999px;
  position: absolute;
}

ol, ul {
  list-style-image: none;
  list-style: none;
}

.global-footer-links li {
  margin: 0 0 0.5em 0.5em;
  padding-left: 1em;
  position: relative;
}

.global-footer-links li a::before {
  color: rgb(226, 215, 201);
}

.global-footer-links li a::before {
  color: #616161;
  content: "\25B6";
  font-size: 55%;
  position: absolute;
  opacity: 0.4;
  left: 6px;
  top: 3px;
}

.global-footer-links li a {
  color: #616161;
  font-family: "Roboto", arial, sans-serif;
  font-size: 87.5%;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 100%;
  text-transform: none;
  vertical-align: middle;
}

.global-footer-legal .footer-legal-wrapper {
  float: left;
  margin-right: -100%;
  width: 85.49%;
  margin-left: 7.2525%;
  font-family: "Flexo-Regular", arial, sans-serif;
  color: #525252;
  font-family: "Roboto", arial, sans-serif;
  font-size: 68.8%;
  margin-top: 20%;
}

.global-footer-legal .footer-legal-wrapper #footer--privacy {
  display: flex;
}

.global-footer-legal .footer-legal-wrapper #footer--privacy > a {
  background: rgba(0, 0, 0, 0) url(../static/thepokemoncompanyinternational-seal-1596150491.png) no-repeat;
  /*background-image: url(../static/thepokemoncompanyinternational-seal-1596150491.png);*/
  flex: 0 0 146px;
}
.global-footer-links, .global-footer-social, .global-footer-legal {
  float: left;
  margin-right: -100%;
  width: 27.46%;
  border-right: 2px solid #000;
  border-right-color: rgb(0, 0, 0);
  margin-top: 1.75em;
}
.global-footer-links, .global-footer-social, .global-footer-legal {
  border-right-color: rgb(186, 173, 154);
}

.global-footer-links {
  margin-left: 7.2525%;
}
@media (min-width: 461px) and (max-width: 960px) {
  .fluid .global-footer .global-footer-links ul {
    margin-bottom: 1.5em;
  }
}

@media (min-width: 461px) and (max-width: 960px) {
  .fluid .global-footer-links, .fluid .global-footer-social, .fluid .global-footer-legal {
    float: left;
    margin-right: -100%;
    width: 85.49%;
    margin-left: 7.2525%;
    border: 0;
    border-top-color: currentcolor;
    border-right-color: currentcolor;
    border-bottom-color: currentcolor;
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-left-color: currentcolor;
    border-bottom: 3px solid #000;
    border-bottom-color: rgb(0, 0, 0);
    clear: both;
    height: auto;
    margin-top: 0;
  }
}

@media (min-width: 461px) and (max-width: 960px) {
  .fluid .global-footer-links, .fluid .global-footer-social, .fluid .global-footer-legal {
    border-color: currentcolor currentcolor rgb(186, 173, 154);
  }
}

@media (min-width: 461px) and (max-width: 960px) {
  .fluid .global-footer-links:first-child, .fluid .global-footer-social:first-child, .fluid .global-footer-legal:first-child {
    margin-top: 1em;
  }
}

@media (min-width: 461px) and (max-width: 960px) {
  .fluid .global-footer .global-footer-links {
    margin-left: 7.2525%;
  }
}
  @media (min-width: 461px) and (max-width: 960px) {
    .fluid .global-footer-links, .fluid .global-footer-social, .fluid .global-footer-legal {
      float: left;
      margin-right: -100%;
      width: 85.49%;
      margin-left: 7.2525%;
      border: 0;
      border-top-color: currentcolor;
      border-right-color: currentcolor;
      border-bottom-color: currentcolor;
      border-bottom-style: none;
      border-bottom-width: 0px;
      border-left-color: currentcolor;
      border-bottom: 3px solid #000;
      border-bottom-color: rgb(0, 0, 0);
      clear: both;
      height: auto;
      margin-top: 0;
    }
  }
</style>
