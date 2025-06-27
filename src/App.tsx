// app/page.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, User } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-3xl mx-auto text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Licensed Georgia Locations Ready for COAM Placement
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          I lease 20 sq ft from laundromats, car washes, and gas stations — and handle the Location License. You place and manage the machines.
        </p>
        <Button
          size="lg"
          className="rounded-2xl px-8 py-4 text-lg shadow-lg hover:shadow-xl transition"
          onClick={scrollToContact}
        >
          Let’s Work Together
        </Button>
      </section>

      {/* What I Offer Section */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          What I Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-lg">Lease Secured</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                I sublease legal space at high-traffic locations — no landlord hassles for you.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-lg">License Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Each site has full permission to file the Location License with the Georgia Lottery.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-lg">You Operate, I Manage Site</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                You own and operate the machines. I handle the lease and location relationship.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-lg">Fixed Rent, No Splits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Locations are paid a flat monthly rent — no cut-sharing or revenue headaches.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Me Section */}
      <section className="w-full max-w-3xl mx-auto py-16 px-4">
        <Card className="rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm border-0">
          <CardHeader>
            <CardTitle className="text-2xl">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700">
              I’m a remote COAM operator based in California, building a Georgia footprint through direct outreach and subleases. I’m looking for long-term partnerships with reliable Master Licensees.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="w-full max-w-3xl mx-auto py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
          Contact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm border-0 flex flex-col items-center">
            <CardHeader className="flex flex-col items-center">
              <User className="w-6 h-6 text-blue-600 mb-2" />
              <CardTitle className="text-lg">Name</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 font-medium">Your Name</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm border-0 flex flex-col items-center">
            <CardHeader className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-blue-600 mb-2" />
              <CardTitle className="text-lg">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 font-medium">(555) 123-4567</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm border-0 flex flex-col items-center">
            <CardHeader className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-blue-600 mb-2" />
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 font-medium">partner@coamgeorgia.com</p>
            </CardContent>
          </Card>
        </div>
        {/* Optional: Calendly or contact form */}
        {/* <div className="mt-10 text-center">
          <a
            href="https://calendly.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-700 underline text-lg"
          >
            Schedule a call
          </a>
        </div> */}
      </section>
    </main>
  );
}