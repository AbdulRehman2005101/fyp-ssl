"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Globe, Shield, Zap } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
 

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Blockchain Domain Validation",
      description:
        "PKIChain employs a consensus mechanism of blockchain technology to verify domain ownership, ensuring only legitimate domains are issued certificates with immutable trust.",
      stats: "99.9% Accuracy",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast Verification",
      description:
        "Our optimized blockchain architecture enables near-instant verification processes without compromising security or decentralization principles.",
      stats: "< 2s Average",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Scalability",
      description:
        "Built on a distributed network that scales effortlessly across borders, supporting millions of verifications simultaneously with consistent performance.",
      stats: "10M+ Daily",
    },
  ]

  const stats = [
    { number: "50K+", label: "Domains Secured" },
    { number: "99.9%", label: "Uptime Record" },
    { number: "128ms", label: "Avg Response Time" },
    { number: "150+", label: "Countries Served" },
  ]

  
  return (
    <section id="about-us"  className="relative py-20 px-6 lg:px-8 bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div  className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-[#0c5d14]">Us</span>
          </h2>
          <p className="text-xl text-gray-300 lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            We are pioneers in blockchain-based digital verification solutions. Our mission is to revolutionize identity
            management through secure, efficient, and scalable technologies.
          </p>
        </div>

        {/* Stats Grid */}
        <div  className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10  transition-all duration-300"
            >
              <div className="text-2xl lg:text-3xl font-bold text-[#0c5d14] mb-2">{stat.number}</div>
              <div className="text-sm lg:text-base text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border bg-black border-white/10  transition-all duration-500 cursor-pointer"
            >
              <div className="absolute inset-0 bg-[#0c5d14]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute inset-0 rounded-lg group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0.5 rounded-lg bg-black"></div>
              </div>

              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[#0c5d14] text-white shadow-lg">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-100">
                    {feature.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-slate-400 text-lg font-medium">{feature.stats}</CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 pb-6">
                <p className="text-slate-300 leading-relaxed text-base">{feature.description}</p>
              </CardContent>

              <CardFooter className="relative z-10 pt-4 border-t border-white/10 group-hover:border-[#0c5d14]/30 transition-colors duration-300">
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm text-slate-400 group-hover:text-[#0c5d14] transition-colors duration-300">
                    Learn more →
                  </span>
                  <div className="w-2 h-2 bg-[#0c5d14] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center p-8 rounded-2xl bg-linear-to-r from-emerald-500/10 to-green-600/10 backdrop-blur-sm border border-emerald-500/20">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-slate-100 mb-2">Ready to Secure Your Digital Identity?</h3>
              <p className="text-slate-400 max-w-2xl">
                Join thousands of organizations trusting PKIChain for their domain validation needs.
              </p>
            </div>
            <button className="px-8 py-3 bg-[#0c5d14] text-white rounded-xl font-semibold shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300 whitespace-nowrap">
              Start Free Plan Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
