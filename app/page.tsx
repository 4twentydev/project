"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Github,
  Mail,
  Linkedin,
  Code2,
  Briefcase,
  MonitorSmartphone,
  Server,
  Database,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "Project 1",
      description: "A modern web application built with Next.js and TypeScript",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    },
    {
      title: "Project 2",
      description: "Mobile-first e-commerce platform with real-time updates",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2424&auto=format&fit=crop",
    },
    {
      title: "Project 3",
      description: "AI-powered data analytics dashboard",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2440&auto=format&fit=crop",
    },
  ];

  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Web Development",
      description: "Building modern, responsive web applications",
    },
    {
      icon: <MonitorSmartphone className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Creating beautiful user interfaces with React and Next.js",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Development",
      description: "Developing robust server-side applications",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Design",
      description: "Designing and optimizing database structures",
    },
  ];

  return (
    <>
      <section
        id="home"
        className="section flex items-center justify-center relative"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-6">
              Hi, I&apos;m <span className="text-primary">Brandon</span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Graphics Designer, Front End Developer specializing in brand
              identity, modern web technologies, iOS, and Android app deveopment
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="glow">
                View Projects
              </Button>
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className="section flex items-center justify-center bg-muted/50"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                I&apos;m a passionate developer with 15 years of experience in
                building web and native applications. I specialize in React,
                Next.js, and TailwindCSS, creating performant and scalable
                solutions.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] glow rounded-lg overflow-hidden">
              <Image
                src="/me.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="services"
        className="section flex items-center justify-center"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4 text-primary">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="projects"
        className="section flex items-center justify-center bg-muted/50"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <Button variant="outline" className="w-full">
                      View Project
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="contact"
        className="section flex items-center justify-center"
      >
        <div className="container px-4 mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md border bg-background"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-md border bg-background"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    className="w-full px-4 py-2 rounded-md border bg-background h-32"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button className="w-full glow" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
