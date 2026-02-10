import type { SiteData } from "../types";

const data: SiteData = {
  name: "Henry Arroyo",
  title: "Cloud Infrastructure & Security Engineering Leader",
  heroSubtitle:
    "Building secure, scalable cloud platforms and leading high-performing engineering teams.",

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  aboutSummary:
    "Experienced engineering leader specializing in cloud infrastructure, platform security, and DevOps transformation. Passionate about building resilient systems, automating everything, and mentoring the next generation of engineers.",

  aboutDetails: [
    { label: "Location", value: "United States" },
    { label: "Focus", value: "Cloud & Security" },
    { label: "Experience", value: "10+ Years" },
    { label: "Leadership", value: "Teams of 5–20" },
  ],

  experiences: [
    {
      title: "Senior Cloud Infrastructure Engineer",
      company: "Company Name",
      period: "2022 — Present",
      bullets: [
        "Led cloud platform architecture supporting 200+ microservices across multi-region AWS deployments",
        "Implemented zero-trust security model reducing attack surface by 60%",
        "Built CI/CD pipelines processing 500+ deployments per week with 99.9% success rate",
      ],
    },
    {
      title: "DevOps / Platform Engineer",
      company: "Company Name",
      period: "2019 — 2022",
      bullets: [
        "Designed and maintained Kubernetes clusters handling 10K+ requests/second",
        "Automated infrastructure provisioning with Terraform reducing setup time by 80%",
        "Established monitoring and alerting stack with Prometheus, Grafana, and PagerDuty",
      ],
    },
    {
      title: "Systems Engineer",
      company: "Company Name",
      period: "2016 — 2019",
      bullets: [
        "Managed hybrid cloud infrastructure across AWS and on-premise data centers",
        "Developed automation scripts reducing manual operations by 70%",
        "Led migration of legacy systems to containerized microservices architecture",
      ],
    },
  ],

  skillCategories: [
    {
      category: "Cloud Platforms",
      skills: ["AWS", "Azure", "GCP", "Multi-Cloud Architecture"],
    },
    {
      category: "Infrastructure",
      skills: ["Terraform", "Kubernetes", "Docker", "Ansible", "Helm"],
    },
    {
      category: "Security",
      skills: [
        "Zero Trust",
        "IAM",
        "SIEM",
        "Vulnerability Management",
        "Compliance (SOC2, HIPAA)",
      ],
    },
    {
      category: "CI/CD & Automation",
      skills: ["GitHub Actions", "Jenkins", "ArgoCD", "GitOps"],
    },
    {
      category: "Monitoring",
      skills: ["Prometheus", "Grafana", "Datadog", "ELK Stack", "PagerDuty"],
    },
    {
      category: "Languages",
      skills: ["Python", "Go", "Bash", "TypeScript", "HCL"],
    },
  ],

  certifications: [
    {
      name: "AWS Solutions Architect – Professional",
      issuer: "Amazon Web Services",
      year: "2023",
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "CNCF",
      year: "2022",
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      year: "2021",
    },
  ],

  projects: [
    {
      title: "Cloud Security Platform",
      description:
        "Built an internal security scanning platform that integrates with CI/CD pipelines to automatically assess infrastructure-as-code for misconfigurations and policy violations.",
      techStack: ["Python", "AWS Lambda", "Terraform", "Open Policy Agent"],
      impact: "Reduced security misconfigurations by 75% across 50+ services",
    },
    {
      title: "Multi-Region Disaster Recovery",
      description:
        "Designed and implemented active-active disaster recovery architecture across 3 AWS regions with automated failover and data replication.",
      techStack: ["AWS", "Terraform", "Route 53", "DynamoDB Global Tables"],
      impact: "Achieved RPO < 1 minute and RTO < 5 minutes",
    },
    {
      title: "Developer Platform",
      description:
        "Created an internal developer platform enabling self-service infrastructure provisioning, automated environment management, and standardized deployment workflows.",
      techStack: ["Kubernetes", "ArgoCD", "Backstage", "Go"],
      impact: "Reduced new service onboarding from 2 weeks to 30 minutes",
    },
  ],

  contactLinks: [
    {
      label: "Email",
      href: "mailto:hello@henryarroyo.com",
      command: "echo $EMAIL",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/henryarroyo",
      command: "open linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/henryarroyo",
      command: "open github",
    },
  ],

  resumeUrl: "#",
};

export default data;
