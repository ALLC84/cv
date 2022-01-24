/**
 * @mixin
 * Media queries methods
 */
export default {
  data() {
    return {
      mqMobile: window.matchMedia('(max-width : 576px)'),
      mqMobileExt: window.matchMedia('(max-width : 767px)'),
      mobile: false,
      mobileExt: false,
    };
  },

  created() {
    // Mobile
    this.matchMediaMobile(this.mqMobile);
    this.mqMobile.addListener(this.matchMediaMobile);
    // Mobile and Tablet Portrait
    this.matchMediaMobileExt(this.mqMobileExt);
    this.mqMobileExt.addListener(this.matchMediaMobileExt);
  },

  methods: {
    // Mobile
    matchMediaMobile(e) {
      this.mobile = !!e.matches;
    },

    // Mobile and Tablet Portrait
    matchMediaMobileExt(e) {
      this.mobileExt = !!e.matches;
    },
  },
};
