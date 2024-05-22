/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
      dm: ['"DM Sans"'],
      Roboto: ['"Roboto"'],
    },
    colors: {
      "orangefb": "#fbb040",
      "orangeff9": "#FF9900",
      "orangef8": "#F85A47",
      "gray31": "#31353B",
      "grayda": "#dadada",
      "grayeb": "#EBEBEB",
      "gray33": "#333333",
      "gray54": "#545A58",
      "gray66": "#666666",
      

    },
    gridTemplateColumns: {
      // "grid-work": "repeat(auto-fit, minmax(300px, 1fr))",
      "work": "1fr auto 1fr auto 1fr",
    }

    },
  },
  plugins: [],
}

