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
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-6">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener noreferrer"
        target="_blank"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Live Demo
          <ArrowUpRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href={repo}
        >
          <Button variant={"outline"} size={"sm"}>
            Source Code
            <ArrowUpRight className="ml-2 w-4 h-4" />
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

const TECHNOLOGY_STACK = {
  // Frontend Technologies
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  typescript: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  javascript: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  tailwind: {
    title: "Tailwind CSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  ejs: {
    title: "EJS",
    bg: "black",
    fg: "white",
    icon: <i className="devicon-express-original-wordmark colored"></i>,
  },

  // Backend Technologies
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  express: {
    title: "Express.js",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <i className="devicon-java-plain colored"></i>,
  },
  springboot: {
    title: "Spring Boot",
    bg: "black",
    fg: "white",
    icon: <i className="devicon-spring-plain colored"></i>,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },

  // Databases
  mongodb: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  postgresql: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },

  // DevOps & Cloud
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  kubernetes: {
    title: "Kubernetes",
    bg: "black",
    fg: "white",
    icon: <i className="devicon-kubernetes-plain colored"></i>,
  },
  helm: {
    title: "Helm",
    bg: "black",
    fg: "white",
    icon: <i className="devicon-helm-plain colored"></i>,
  },
  aws: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <i className="devicon-amazonwebservices-plain colored"></i>,
  },
  s3: {
    title: "AWS S3",
    bg: "black",
    fg: "white",
    icon: <i className="devicon-amazonwebservices-plain colored"></i>,
  },

  // Message Queues & Real-time
  kafka: {
    title: "Apache Kafka",
    bg: "black",
    fg: "white",
    icon: <i className="devicon-apachekafka-plain colored"></i>,
  },
  socketio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },

  // Authentication & Security
  clerk: {
    title: "Clerk Auth",
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
  bcrypt: {
    title: "bcrypt",
    bg: "black",
    fg: "white",
    icon: "",
  },

  // Other Tools
  prisma: {
    title: "Prisma ORM",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
} as const;

export type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  src: string;
  screenshots: string[];
  skills: {
    frontend: Skill[];
    backend: Skill[];
    devops?: Skill[];
    ml?: Skill[];
  };
  features: string[];
  content: React.ReactNode;
  github?: string;
  live: string;
  status: "completed" | "in-progress" | "archived";
  timeline?: string;
};

const projects: Project[] = [
  {
    id: "blog-web",
    category: "Full-Stack Web Application",
    title: "Blog-Web: Modern Content Management Platform",
    description:
      "A comprehensive blogging platform featuring secure authentication, markdown support, and containerized deployment with CI/CD pipeline.",
    src: `${BASE_PATH}/blogweb/landing.png`,
    screenshots: ["landing.png"],
    status: "completed",
    timeline: "3 months",
    skills: {
      frontend: [TECHNOLOGY_STACK.javascript, TECHNOLOGY_STACK.ejs],
      backend: [
        TECHNOLOGY_STACK.node,
        TECHNOLOGY_STACK.express,
        TECHNOLOGY_STACK.mongodb,
        TECHNOLOGY_STACK.jwt,
        TECHNOLOGY_STACK.bcrypt,
      ],
      devops: [
        TECHNOLOGY_STACK.docker,
        TECHNOLOGY_STACK.kubernetes,
        TECHNOLOGY_STACK.helm,
      ],
    },
    features: [
      "Secure user authentication with bcrypt hashing and JWT tokens",
      "Google OAuth 2.0 integration for streamlined user onboarding",
      "Full CRUD operations with intuitive admin dashboard",
      "Markdown editor with live preview and syntax highlighting",
      "Real-time search functionality with dynamic results",
      "Responsive design optimized for mobile and desktop",
      "Containerized deployment with Docker and Kubernetes",
      "Automated CI/CD pipeline with GitHub Actions",
      "Multi-registry Docker image publishing (Docker Hub, AWS ECR)",
    ],
    live: "https://notrlyanurag.duckdns.org",
    github: "https://github.com/Anurag-xo/Blog-web",
    get content() {
      return (
        <div>
          <TypographyP className="text-muted-foreground leading-relaxed">
            {this.description}
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="mt-8 mb-4">
            Technical Implementation
          </TypographyH3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Architecture & Security</h4>
              <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
                <li>
                  RESTful API design with Express.js middleware architecture
                </li>
                <li>
                  Secure password hashing using bcrypt with configurable salt
                  rounds
                </li>
                <li>Stateless authentication using JSON Web Tokens (JWT)</li>
                <li>
                  Input validation and sanitization to prevent XSS attacks
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">DevOps & Deployment</h4>
              <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
                <li>
                  Multi-stage Docker builds for optimized container images
                </li>
                <li>
                  Kubernetes deployment with Helm charts for configuration
                  management
                </li>
                <li>
                  Automated testing and deployment pipeline using GitHub Actions
                </li>
                <li>
                  Blue-green deployment strategy for zero-downtime updates
                </li>
              </ul>
            </div>
          </div>

          <TypographyH3 className="mt-8 mb-4">Key Features</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4">
            {this.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },

  {
    id: "shellcraft",
    category: "Educational Technology Platform",
    title: "ShellCraft: Interactive Command-Line Learning Environment",
    description:
      "A gamified platform for mastering command-line skills through hands-on challenges in a secure, containerized environment.",
    src: `${BASE_PATH}/shellcraft/landing.png`,
    screenshots: ["landing.png"],
    status: "completed",
    timeline: "4 months",
    skills: {
      frontend: [
        TECHNOLOGY_STACK.react,
        TECHNOLOGY_STACK.typescript,
        TECHNOLOGY_STACK.tailwind,
      ],
      backend: [
        TECHNOLOGY_STACK.node,
        TECHNOLOGY_STACK.express,
        TECHNOLOGY_STACK.clerk,
      ],
      devops: [TECHNOLOGY_STACK.docker, TECHNOLOGY_STACK.supabase],
    },
    features: [
      "Browser-based terminal emulation using Xterm.js",
      "Sandboxed command execution in isolated Docker containers",
      "Progressive skill-building with structured learning paths",
      "Real-time command validation and instant feedback",
      "Comprehensive progress tracking and analytics",
      "Competitive leaderboard system with scoring algorithms",
      "Secure multi-tenant architecture",
      "Responsive design with mobile terminal support",
    ],
    live: "https://github.com/Anurag-xo/shellcraft",
    github: "https://github.com/Anurag-xo/shellcraft",
    get content() {
      return (
        <div>
          <TypographyP className="text-muted-foreground leading-relaxed">
            {this.description}
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="mt-8 mb-4">
            Technical Architecture
          </TypographyH3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Security & Isolation</h4>
              <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
                <li>
                  Docker container sandboxing for secure command execution
                </li>
                <li>Resource limiting and timeout mechanisms</li>
                <li>Network isolation to prevent unauthorized access</li>
                <li>Command whitelisting and input sanitization</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">User Experience</h4>
              <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
                <li>WebSocket-based real-time terminal communication</li>
                <li>Progressive challenge difficulty with adaptive learning</li>
                <li>Comprehensive hint system and contextual help</li>
                <li>Achievement system and gamification elements</li>
              </ul>
            </div>
          </div>

          <TypographyH3 className="mt-8 mb-4">Core Features</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4">
            {this.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },

  {
    id: "aws-s3-file-manager",
    category: "Cloud Infrastructure Tool",
    title: "AWS S3 File Management System",
    description:
      "A serverless-first file management solution with comprehensive S3 integration, featuring secure uploads, metadata management, and batch operations.",
    src: `${BASE_PATH}/aws/landing.png`,
    screenshots: ["landing.png"],
    status: "completed",
    timeline: "2 months",
    skills: {
      frontend: [
        TECHNOLOGY_STACK.next,
        TECHNOLOGY_STACK.react,
        TECHNOLOGY_STACK.typescript,
      ],
      backend: [TECHNOLOGY_STACK.aws, TECHNOLOGY_STACK.s3],
    },
    features: [
      "Drag-and-drop file uploads with progress tracking",
      "Secure pre-signed URL generation for direct S3 access",
      "File metadata management and tagging system",
      "Bulk operations for multiple file handling",
      "Advanced search and filtering capabilities",
      "Storage analytics and usage monitoring",
      "Access control and permission management",
      "Integration with AWS CloudWatch for logging",
    ],
    live: "https://github.com/Anurag-xo/AWS-S3-File-Manager",
    github: "https://github.com/Anurag-xo/AWS-S3-File-Manager",
    get content() {
      return (
        <div>
          <TypographyP className="text-muted-foreground leading-relaxed">
            {this.description}
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="mt-8 mb-4">AWS Integration</TypographyH3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Security & Performance</h4>
              <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
                <li>
                  IAM role-based access control with least privilege principles
                </li>
                <li>Client-side encryption for sensitive file uploads</li>
                <li>CloudFront CDN integration for global content delivery</li>
                <li>Lifecycle policies for automated archival and deletion</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Scalability Features</h4>
              <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
                <li>
                  Multipart upload for large files with resumable transfers
                </li>
                <li>Event-driven processing with S3 triggers and Lambda</li>
                <li>Cost optimization through intelligent tiering</li>
                <li>Cross-region replication for disaster recovery</li>
              </ul>
            </div>
          </div>

          <TypographyH3 className="mt-8 mb-4">
            Advanced Capabilities
          </TypographyH3>
          <div className="grid md:grid-cols-2 gap-4">
            {this.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },

  {
    id: "kafka-springboot",
    category: "Distributed Systems & Microservices",
    title: "Event-Driven Product Management Service",
    description:
      "A production-ready microservice implementing event sourcing patterns with Apache Kafka, featuring robust error handling and distributed tracing.",
    src: `${BASE_PATH}/productmicroservice/landing.png`,
    screenshots: ["landing.png"],
    status: "completed",
    timeline: "6 weeks",
    skills: {
      frontend: [],
      backend: [
        TECHNOLOGY_STACK.java,
        TECHNOLOGY_STACK.springboot,
        TECHNOLOGY_STACK.kafka,
      ],
    },
    features: [
      "Event-driven architecture with CQRS pattern implementation",
      "Distributed transaction management with saga pattern",
      "Advanced error handling with retry mechanisms and circuit breakers",
      "Dead letter queue implementation for failed message processing",
      "Distributed tracing with Spring Cloud Sleuth and Zipkin",
      "Comprehensive monitoring with Micrometer and Prometheus",
      "Schema evolution support with Confluent Schema Registry",
      "High-throughput message processing with optimized consumer groups",
    ],
    live: "https://github.com/Anurag-xo/kafka-springboot",
    github: "https://github.com/Anurag-xo/kafka-springboot",
    get content() {
      return (
        <div>
          <TypographyP className="text-muted-foreground leading-relaxed">
            {this.description}
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="mt-8 mb-4">
            Architecture Patterns
          </TypographyH3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Event Sourcing & CQRS</h4>
              <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
                <li>
                  Command and query separation for optimal read/write
                  performance
                </li>
                <li>Event store implementation for complete audit trail</li>
                <li>Snapshot mechanism for efficient state reconstruction</li>
                <li>
                  Idempotent event processing to handle duplicate messages
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Resilience & Monitoring</h4>
              <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
                <li>
                  Circuit breaker pattern for cascading failure prevention
                </li>
                <li>Exponential backoff retry strategy with jitter</li>
                <li>Custom metrics for business KPI tracking</li>
                <li>Structured logging with correlation IDs for tracing</li>
              </ul>
            </div>
          </div>

          <TypographyH3 className="mt-8 mb-4">Enterprise Features</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4">
            {this.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },

  {
    id: "email-notification-microservice",
    category: "Event-Driven Communication Service",
    title: "Scalable Email Notification Microservice",
    description:
      "A fault-tolerant notification service with advanced retry mechanisms, template management, and comprehensive delivery tracking.",
    src: `${BASE_PATH}/emailmicroservice/landing.jpg`,
    screenshots: ["landing.jpg"],
    status: "completed",
    timeline: "4 weeks",
    skills: {
      frontend: [],
      backend: [
        TECHNOLOGY_STACK.java,
        TECHNOLOGY_STACK.springboot,
        TECHNOLOGY_STACK.kafka,
      ],
    },
    features: [
      "Asynchronous email processing with Kafka message consumption",
      "Advanced retry logic with exponential backoff and jitter",
      "Dead letter queue handling for persistent failures",
      "Email template management with dynamic content injection",
      "Delivery status tracking and analytics",
      "Rate limiting to comply with SMTP provider restrictions",
      "Multi-provider support with automatic failover",
      "Comprehensive audit logging and delivery reports",
    ],
    live: "https://github.com/Anurag-xo/EmailNotification-microservice",
    github: "https://github.com/Anurag-xo/EmailNotification-microservice",
    get content() {
      return (
        <div>
          <TypographyP className="text-muted-foreground leading-relaxed">
            {this.description}
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="mt-8 mb-4">
            Reliability Engineering
          </TypographyH3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Fault Tolerance</h4>
              <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
                <li>Configurable retry policies with different strategies</li>
                <li>Circuit breaker integration for external service calls</li>
                <li>Graceful degradation during peak load scenarios</li>
                <li>Idempotency keys to prevent duplicate email sends</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Operational Excellence</h4>
              <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
                <li>Health checks and readiness probes for Kubernetes</li>
                <li>
                  Metrics collection for delivery rates and error patterns
                </li>
                <li>Alerting integration for critical failure scenarios</li>
                <li>Performance tuning for high-volume email processing</li>
              </ul>
            </div>
          </div>

          <TypographyH3 className="mt-8 mb-4">Production Features</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4">
            {this.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },

  {
    id: "sign-language-detection",
    category: "Machine Learning & Computer Vision",
    title: "Real-Time Sign Language Recognition System",
    description:
      "An AI-powered system for real-time hand gesture and sign language detection using advanced computer vision and deep learning techniques.",
    src: `${BASE_PATH}/signlanguage/landing.jpg`,
    screenshots: ["landing.jpg", "demo1.jpg", "demo2.jpg"],
    status: "completed",
    timeline: "8 weeks",
    skills: {
      frontend: [],
      backend: [],
      ml: [TECHNOLOGY_STACK.python],
      devops: [
        TECHNOLOGY_STACK.docker,
        TECHNOLOGY_STACK.kubernetes,
        TECHNOLOGY_STACK.helm,
      ],
    },
    features: [
      "Real-time gesture recognition from webcam input",
      "Hand landmark detection using MediaPipe framework",
      "Custom CNN architecture with TensorFlow/Keras",
      "Data augmentation pipeline for robust model training",
      "Configurable gesture vocabulary with easy extensibility",
      "Performance optimization for edge deployment",
      "Model versioning and A/B testing capabilities",
      "Production-ready containerized deployment",
    ],
    live: "https://github.com/Anurag-xo/sign-language-detection",
    github: "https://github.com/Anurag-xo/sign-language-detection",
    get content() {
      return (
        <div>
          <TypographyP className="text-muted-foreground leading-relaxed">
            {this.description}
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="mt-8 mb-4">
            Machine Learning Pipeline
          </TypographyH3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Computer Vision Processing</h4>
              <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
                <li>
                  Multi-stage preprocessing with noise reduction and
                  normalization
                </li>
                <li>
                  Hand region segmentation with MediaPipe landmark detection
                </li>
                <li>
                  Feature extraction using geometric and temporal patterns
                </li>
                <li>
                  Real-time frame processing with optimized inference pipeline
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                Model Architecture & Training
              </h4>
              <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
                <li>
                  Custom CNN with attention mechanisms for gesture
                  classification
                </li>
                <li>Transfer learning from pre-trained vision models</li>
                <li>
                  Advanced data augmentation with geometric and photometric
                  transforms
                </li>
                <li>
                  Cross-validation and hyperparameter optimization with Optuna
                </li>
              </ul>
            </div>
          </div>

          <TypographyH3 className="mt-8 mb-4">Technical Stack</TypographyH3>
          <div className="grid md:grid-cols-3 gap-6 my-6">
            <div>
              <h4 className="font-semibold mb-2 text-sm">Computer Vision</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>OpenCV • MediaPipe</li>
                <li>NumPy • PIL/Pillow</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm">Machine Learning</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>TensorFlow • Keras</li>
                <li>Scikit-learn • Pandas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm">Deployment</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>Docker • Kubernetes</li>
                <li>Helm • TensorFlow Serving</li>
              </ul>
            </div>
          </div>

          <TypographyH3 className="mt-8 mb-4">Key Capabilities</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4">
            {this.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },
];

export default projects;
