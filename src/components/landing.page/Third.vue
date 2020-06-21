<template>
  <div>
    <div class="L-third__content">
      <div data-aos="fade-up" class="L-content__why-text">
        — WHY YOU'LL LOVE OUR NEW WEB APP —
      </div>
      <div data-aos="fade-right" class="L-content__card">
        <img :src="firstImg" alt="first img" />
        <div class="L-content__card-text">
          <span>01</span>
          <div>-</div>
          <h4>It’s on the internet</h4>
          <p>
            The Internet is a global system of interconnected computer networks
            that use the standard Internet protocol suite (TCP/IP) to link
            several billion devices worldwide. Rad
          </p>
        </div>
      </div>
      <div data-aos="fade-left" class="L-content__card L-content__second-card">
        <div class="L-content__card-text">
          <span>02</span>
          <div>-</div>
          <h4>You can use your fingers</h4>
          <p>
            Looking for more things to do with your digits? You're in luck; you
            can use your fingle-dinglies to both navigate to the app and to
            operate the interface. Appendages ahoy!
          </p>
        </div>
        <img :src="secondImg" alt="first img" />
      </div>
      <div data-aos="fade-right" class="L-content__card">
        <img :src="thirdImg" alt="first img" />
        <div class="L-content__card-text">
          <span>03</span>
          <div>-</div>
          <h4>It does everything</h4>
          <p>
            That thing you need done? Yeah, it does that. What, even that other
            thing? Of Course! Wait, you want to do what? Uh wow OK I'm gonna
            have to talk to product management.
          </p>
        </div>
      </div>
    </div>
    <div data-aos="fade" class="L-third__footer">
      <div class="L-footer__left-text">
        <img :src="footerLogo" alt="logo" />
        <span>© Copyright 2015</span>
      </div>
      <div class="L-footer__right-text">
        <span>Questions or comments?</span>
        <a href="#">Drop us a line.</a>
      </div>
    </div>
  </div>
</template>

<script>
import footerLogo from "@/assets/landing.assets/img/L-footer-logo.png"
import firstImg from "@/assets/landing.assets/img/L-firstImg.png"
import secondImg from "@/assets/landing.assets/img/L-secondImg.png"
import thirdImg from "@/assets/landing.assets/img/L-thirdImg.png"

export default {
  data: () => ({
    footerLogo,
    firstImg,
    secondImg,
    thirdImg,
  }),
}
</script>
