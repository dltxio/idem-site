const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./dist/**/*.html", "./src/**/*.{js,jsx,ts,tsx}", "./*.html"],
  variants: {},
  plugins: [
    require("daisyui"),
    require("tailwind-heropatterns")({
      variants: [],
      patterns: [],
      colors: {
        default: "#ffb300",
        "idem-white": "#fffaf6"
      },
      opacity: {
        default: "0.1",
        light: "0.05"
      }
    })
  ],
  theme: {
    extend: {
      colors: {
        "idem-yellow": "#ffb300",
        "idem-black": "#0e0e0e",
        "idem-white": "#fffaf6"
      },
      dropShadow: {
        hexagon: "11px 6px 0 #0e0e0e"
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      },
      screens: {
        "min-hexagon-width": "1805px"
      },
      backgroundSize: {
        "block-link": "100% 1rem",
        "block-link-animate": "100% 2rem"
      },
      backgroundPosition: {
        "block-link-pos": "0 85%"
      }
    }
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#570df8",
          "primary-content": "#ffffff",
          secondary: "#f000b8",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-content": "#163835",
          neutral: "#3d4451",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#F2F2F2",
          "base-300": "#E5E6E6",
          "base-content": "#1f2937"
        }
      },
      {
        dark: {
          primary: "#661AE6",
          "primary-content": "#ffffff",
          secondary: "#D926AA",
          "secondary-content": "#ffffff",
          accent: "#1FB2A5",
          "accent-content": "#ffffff",
          neutral: "#191D24",
          "neutral-focus": "#111318",
          "neutral-content": "#A6ADBB",
          "base-100": "#2A303C",
          "base-200": "#242933",
          "base-300": "#20252E",
          "base-content": "#A6ADBB"
        }
      }
    ]
  }
};
