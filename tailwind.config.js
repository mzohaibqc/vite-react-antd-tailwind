module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "480px",
        // => @media (min-width: 480px) { ... }

        sm: "576px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 1024px) { ... }

        xl: "1200px",
        // => @media (min-width: 1280px) { ... }

        xxl: "1600px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        primary: "#2e5bff",
        "primary-faded": "rgba(46, 91, 255, 0.15)",
        "primary-light": "rgba(46, 91, 255, 0.15)",
        black: "#2d384f",
        "gcc-gray": {
          1: "#8798ad",
          2: "#b0bac9",
          3: "#bfc5d2",
          4: "#e0e7ff",
        },
      },
      fontSize: {
        15: "15px",
        13: "13px",
        "3xl": "28px",
      },
    },
  },
  plugins: [],
};

/*

@screen-xs: 480px;
@screen-xs-min: @screen-xs;

// Small screen / tablet
@screen-sm: 576px;
@screen-sm-min: @screen-sm;

// Medium screen / desktop
@screen-md: 768px;
@screen-md-min: @screen-md;

// Large screen / wide desktop
@screen-lg: 992px;
@screen-lg-min: @screen-lg;

// Extra large screen / full hd
@screen-xl: 1200px;
@screen-xl-min: @screen-xl;

// Extra extra large screen / large desktop
@screen-xxl: 1600px;
@screen-xxl-min: @screen-xxl;
*/
