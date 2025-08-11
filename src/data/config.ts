const config = {
  title: "Anurag Kumar| DevOps Engineer",
  description: {
    long: "Explore the portfolio of Anurag, a DevOps Engineer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Full-Stack Blog Website, Shell Craft, AWS-S3 Manager, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Anurag, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Anurag",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Anurag Kumar",
  email: "anuragxo.dev@gmail.com",
  site: "https://anuragkumar.site",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/anuragxo1221",
    linkedin: "https://www.linkedin.com/in/anurag-kumar-b1a790249/",
    instagram: "https://www.instagram.com/_anurag_.xo",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/Anurag-xo",
  },
};
export { config };
