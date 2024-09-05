import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import ContactForm from "@/components/portfolio/contact-form";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Meitekini S Leakey
          </h1>
          <p className="text-xl text-gray-600">Fullstack Developer</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Button variant="outline" size="icon" asChild>
              <Link href={'https://github.com/sollytei'}>
              <Github className="h-5 w-5 b text-gray-700" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href={''}>         
              <Linkedin className="h-5 w-5 text-gray-700" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href={'https://github.com/sollytei'}>
              
              <Mail className="h-5 w-5 text-gray-700" />
              </Link>
            </Button>
          </div>
        </header>

        {/* About Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              I'm a passionate fullstack developer with 5 years of experience in
              building web applications. I love creating efficient, scalable,
              and user-friendly solutions to complex problems.
            </p>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Java</Badge>
              <Badge>Python</Badge>
              <Badge>JavaScript</Badge>
              <Badge>TypeScript</Badge>
              <Badge>React</Badge>
              <Badge>Node.js</Badge>
              <Badge>Express</Badge>
              <Badge>NextJS</Badge>
              <Badge>NestJS</Badge>
              <Badge>MongoDB</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>MySQL</Badge>
              <Badge>GraphQL</Badge>
              <Badge>Bot Framework SDK</Badge>
              <Badge>AWS</Badge>
              <Badge>Azure</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce Platform</CardTitle>
                  <CardDescription>
                    A full-featured online store
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">
                    Built with NextJS,Prisma ORM and MySQL. Features include
                    user authentication, product management, and payment
                    integration.
                  </p>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Task Management App</CardTitle>
                  <CardDescription>
                    Collaborative project planning tool
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">
                    Developed using Next 14, TailwindCSS, and PostgreSQL.
                    Includes real-time updates, task assignment, and progress
                    tracking.
                  </p>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Mail className="h-4 w-4 mr-2" />
                  Hire Me
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Contact Me</DialogTitle>
                  <DialogDescription>
                    {" "}
                    Fill out the form below to get in touch.
                  </DialogDescription>
                </DialogHeader>

                <ContactForm />
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
