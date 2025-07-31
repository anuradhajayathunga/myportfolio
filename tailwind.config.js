/** @type {import('tailwindcss').Config} */
const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "/myportfolio" : "";

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Light mode
        light: {
          base: "#ffffff", // page background
          surface: "#d4d4d8", // card, section background
          text: "#18181b", // main text
          muted: "#52525b", // secondary text

          primary: "#2563eb", // bright blue
          secondary: "#3479e9", // soft blue

          accent1: "#0891b2", // teal
          accent2: "#8b5cf6", // purple
          accent3: "#06b6d4", // cyan
          accent4: "#ef4444", // red
        },

        // Dark mode
        dark: {
          base: "#18181b", // dark background
          surface: "#52525b", // card, section background
          text: "#ffffff", // main text
          muted: "#a4a4ad", // secondary text

          primary: "#3479e9", // bright blue
          secondary: "#60a5fa", // sky blue

          accent1: "#22d3ee", // cyan
          accent2: "#a78bfa", // light purple
          accent3: "#67e8f9", // pale cyan
          accent4: "#f87171", // soft red
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      // ✅ Add dynamic path handling here
      backgroundImage: (theme) => ({
        hero: `url('${prefix}/hero/hero-bg.png')`,
        hero_shape1: `url('${prefix}/hero/shape-1.svg')`,
        hero_shape2_light: `url('${prefix}/hero/shape-2-light.svg')`,
        hero_shape2_dark: `url('${prefix}/hero/shape-2-dark.svg')`,
        about_shape_light: `url('${prefix}/about/shape-light.svg')`,
        about_shape_dark: `url('${prefix}/about/shape-dark.svg')`,
        dots_light: `url('${prefix}/dots-light.svg')`,
        dots_dark: `url('${prefix}/dots-dark.svg')`,
        work_project_bg_light: `url('${prefix}/work/project-bg-light.png')`,
        work_project_bg_dark: `url('${prefix}/work/project-bg-dark.png')`,
        contact_light: `url('${prefix}/contact/illustration-light.svg')`,
        contact_dark: `url('${prefix}/contact/illustration-dark.svg')`,
      }),
      boxShadow: {
        // Subtle professional shadows
        card: "0 4px 12px rgba(15, 23, 42, 0.08)",
        hover: "0 6px 16px rgba(37, 99, 235, 0.15)",
        inset: "inset 0 2px 4px 0 rgba(15, 23, 42, 0.1)",
      },
      keyframes: {
        float1: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-7px)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float1: "float1 3s ease-in-out infinite",
        float2: "float2 4s ease-in-out infinite",
        float3: "float3 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
