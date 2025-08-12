import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  prisma: {
    title: "Prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express.js",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  socketio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  tailwind: {
    title: "Tailwind CSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <i className="devicon-java-plain colored"></i>, // Using a devicon class for Java
  },
  springboot: {
    title: "Spring Boot",
    bg: "black",
    fg: "white",
    icon: <i className="devicon-spring-plain colored"></i>, // Using a devicon class for Spring
  },
  kafka: {
    title: "Apache Kafka",
    bg: "black",
    fg: "white",
    icon: <i className="devicon-apachekafka-plain colored"></i>, // Using a devicon class for Kafka
  },
  aws: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <i className="devicon-amazonwebservices-plain colored"></i>, // Using a devicon class for AWS
  },
  s3: {
    title: "AWS S3",
    bg: "black",
    fg: "white",
    icon: <i className="devicon-amazonwebservices-plain colored"></i>, // Using a devicon class for AWS S3
  },
  kubernetes: {
    title: "Kubernetes",
    bg: "black",
    fg: "white",
    icon: <i className="devicon-kubernetes-plain colored"></i>, // Using a devicon class for Kubernetes
  },
  helm: {
    title: "Helm",
    bg: "black",
    fg: "white",
    icon: <i className="devicon-helm-plain colored"></i>, // Using a devicon class for Helm
  },
  ejs: {
    title: "EJS",
    bg: "black",
    fg: "white",
    icon: <i className="devicon-express-original-wordmark colored"></i>, // No direct EJS icon, using Express as a proxy
  },
  bcrypt: {
    title: "Bcrypt",
    bg: "black",
    fg: "white",
    icon: "",
  },
  jwt: {
    title: "JWT",
    bg: "black",
    fg: "white",
    icon: "",
  },
  clerk: {
    title: "Clerk",
    bg: "black",
    fg: "white",
    icon: "", // No direct Clerk icon
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "blog-web",
    category: "Blogging Platform",
    title: "Blog-Web: A Modern Blogging Platform",

    //  src: "/assets/projects-screenshots/codingducks/landing.png",
    src: `/assets/projects-screenshots/blogweb/landing.png`, // Placeholder, please add your image path
    screenshots: ["landing.png"], // Placeholder, please add your image paths
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.ejs],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.kubernetes,
        PROJECT_SKILLS.helm,
        PROJECT_SKILLS.bcrypt,
        PROJECT_SKILLS.jwt,
      ],
    },
    live: "https://notrlyanurag.duckdns.org", // Placeholder, add actual live URL if deployed
    github: "https://github.com/Anurag-xo/Blog-web",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Blog-Web is a modern, full-featured blogging platform built with
            Node.js, Express, MongoDB, and EJS. It is designed to be scalable,
            easy to deploy, and developer-friendly, offering a robust foundation
            for content creation and management.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features:</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>
              Secure User Authentication: Login/registration with bcrypt, JWT
              for session management, and Google OAuth 2.0.
            </li>
            <li>
              CRUD Operations: Create, Read, Update, and Delete blog posts with
              an admin dashboard.
            </li>
            <li>
              Markdown Support: Write posts using Markdown with live preview and
              syntax highlighting (highlight.js).
            </li>
            <li>
              Search Functionality: Dynamic search bar with real-time results.
            </li>
            <li>
              Responsive Design: Mobile-friendly UI with CSS3 and Google Fonts.
            </li>
            <li>
              Deployment Options: Easy deployment with Docker and Docker
              Compose, plus Kubernetes deployment using Helm charts.
            </li>
            <li>
              CI/CD Pipeline: Automated testing, Docker image building (Docker
              Hub, AWS ECR), and Helm chart updates via GitHub Actions.
            </li>
          </ul>
          <TypographyP className="font-mono mt-4">
            This project demonstrates a comprehensive understanding of
            full-stack web development, authentication, database management, and
            DevOps practices.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "shellcraft",
    category: "Educational Platform",
    title: "ShellCraft - Interactive Command-Line Challenge Platform",
    src: `/assets/projects-screenshots/shellcraft/landing.png`, // Placeholder, please add your image path
    screenshots: ["landing.png"], // Placeholder, please add your image paths
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.supabase,
        PROJECT_SKILLS.clerk,
      ],
    },
    live: "https://github.com/Anurag-xo/shellcraft", // Placeholder, add actual live URL if deployed
    github: "https://github.com/Anurag-xo/shellcraft",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            ShellCraft is a web-based platform designed to help users learn and
            master command-line skills through interactive challenges. It
            provides a simulated terminal environment with instant feedback and
            progress tracking.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features:</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>
              Interactive Terminal: Web-based terminal (Xterm.js) for executing
              shell commands.
            </li>
            <li>
              Sandboxed Environment: Secure command execution using Docker
              containers for isolation.
            </li>
            <li>
              Diverse Challenges: Covers various command-line tools and
              concepts.
            </li>
            <li>Instant Feedback: Real-time validation of solutions.</li>
            <li>
              User Authentication: Secure user management and authentication
              with Clerk.
            </li>
            <li>
              Progress Tracking & Leaderboard: Users can track progress and
              compare scores.
            </li>
          </ul>
          <TypographyP className="font-mono mt-4">
            This project showcases expertise in building secure, interactive,
            and educational web applications with a focus on containerization
            and modern authentication.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "aws-s3-file-manager",
    category: "Cloud Utility",
    title: "AWS S3 File Manager",
    src: `/assets/projects-screenshots/aws/landing.png`, // Placeholder, please add your image path
    screenshots: ["landing"], // Placeholder, please add your image paths
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.react, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.aws, PROJECT_SKILLS.s3],
    },
    live: "https://github.com/Anurag-xo/AWS-S3-File-Manager", // Placeholder, add actual live URL if deployed
    github: "https://github.com/Anurag-xo/AWS-S3-File-Manager",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A Next.js project designed to manage files on AWS S3, providing a
            user-friendly interface for interacting with cloud storage.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features:</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>
              File Upload/Download: Easily upload and download files to/from S3
              buckets.
            </li>
            <li>File Listing: View files stored in your S3 buckets.</li>
            <li>
              Built with Next.js: Leverages Next.js for efficient server-side
              rendering and static site generation capabilities.
            </li>
            <li>
              Integrates with AWS S3: Demonstrates interaction with AWS cloud
              services for storage solutions.
            </li>
          </ul>
          <TypographyP className="font-mono mt-4">
            This project highlights proficiency in building serverless-friendly
            applications and integrating with major cloud providers.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "kafka-springboot",
    category: "Microservice",
    title: "Products Microservice with Spring Boot and Kafka",
    src: `/assets/projects-screenshots/productmicroservice/landing.png`, // Placeholder, please add your image path
    screenshots: ["landing.png"], // Placeholder, please add your image paths
    skills: {
      frontend: [], // Backend focused
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.springboot,
        PROJECT_SKILLS.kafka,
      ],
    },
    live: "https://github.com/Anurag-xo/kafka-springboot", // Placeholder, add actual live URL if deployed
    github: "https://github.com/Anurag-xo/kafka-springboot",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A production-ready microservice for product management built with
            Spring Boot and an event-driven architecture using Apache Kafka.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features:</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Product Creation: Via REST API, publishing events to Kafka.</li>
            <li>
              Event Publishing: Custom Kafka topic configuration for
              `products-created-events-topic`.
            </li>
            <li>
              Robust Error Handling: Comprehensive error handling and logging.
            </li>
            <li>
              Async/Sync Publishing: Supports both asynchronous and synchronous
              event publishing modes.
            </li>
          </ul>
          <TypographyP className="font-mono mt-4">
            This project demonstrates strong skills in building resilient,
            scalable microservices with an event-driven design using Spring Boot
            and Kafka.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "email-notification-microservice",
    category: "Microservice",
    title: "Email Notification Microservice",
    // change he loc
    //
    src: `/assets/projects-screenshots/emailmicroservice/landing.jpg`, // Placeholder, please add your image path
    screenshots: ["landing.jpg"], // Placeholder, please add your image paths
    skills: {
      frontend: [], // Backend focused
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.springboot,
        PROJECT_SKILLS.kafka,
      ],
    },
    live: "https://github.com/Anurag-xo/EmailNotification-microservice", // Placeholder, add actual live URL if deployed
    github: "https://github.com/Anurag-xo/EmailNotification-microservice",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A Spring Boot microservice that consumes messages from a Kafka topic
            and sends email notifications. Designed with robust error handling,
            including retry and dead-letter queue mechanisms.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Core Functionality:</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>
              Kafka Consumer: Consumes `ProductCreatedEvent` messages from a
              specified Kafka topic.
            </li>
            <li>
              Resilient Design: Implements retry logic for transient errors and
              a dead-letter topic (`products-created-events-topic.DLT`) for
              persistent errors.
            </li>
            <li>
              Idempotent Consumer: Ensures duplicate messages are not processed.
            </li>
            <li>
              REST Communication: Interacts with other services via REST APIs.
            </li>
          </ul>
          <TypographyP className="font-mono mt-4">
            This project showcases advanced microservice patterns, message
            queueing, and fault tolerance in a Spring Boot environment.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "sign-language-detection",
    category: "Machine Learning / AI",
    title: "Sign Language Detection",
    src: `/assets/projects-screenshots/signlanguage/landing.jpg`, // Placeholder, please add your image path
    screenshots: ["landing.jpg"], // Placeholder, please add your image paths
    skills: {
      frontend: [], // Assuming a backend/ML focus, adjust if there's a specific frontend framework
      backend: [PROJECT_SKILLS.python], // Assuming Python for ML, confirm other technologies
    },
    live: "https://github.com/Anurag-xo/sign-language-detection", // Placeholder, add actual live URL if deployed
    github: "https://github.com/Anurag-xo/sign-language-detection",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A project focused on detecting and interpreting sign language
            gestures, likely utilizing machine learning models and computer
            vision techniques.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Potential Features (Please verify):
          </TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Real-time sign language recognition.</li>
            <li>Utilizes deep learning models for gesture classification.</li>
            <li>
              (Add more details about the specific algorithms, datasets, or
              libraries used, e.g., TensorFlow, OpenCV, MediaPipe, etc.)
            </li>
          </ul>
          <TypographyP className="font-mono mt-4">
            This project highlights expertise in artificial intelligence,
            machine learning, and computer vision.
          </TypographyP>
        </div>
      );
    },
  },
];
export default projects;
