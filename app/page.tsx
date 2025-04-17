"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calculator, FileText, Shield, ArrowRight, Building2, Briefcase, Globe, Users, LucideProps, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/data"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { formatPrice } from "@/lib/data"
import { useRef, useState } from "react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const servicesRef = useRef<HTMLDivElement>(null)
  
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const categories = [
    { name: "Personal Tax", icon: (props: LucideProps) => <Users {...props} /> },
    { name: "Business Tax", icon: (props: LucideProps) => <Briefcase {...props} /> },
    { name: "Corporate Tax", icon: (props: LucideProps) => <Building2 {...props} /> },
    { name: "International Tax", icon: (props: LucideProps) => <Globe {...props} /> },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section with Split Layout */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative">
        <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 p-8 lg:p-16 flex flex-col justify-center">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-6 backdrop-blur-sm">
              <Calculator className="h-5 w-5" />
              <span className="text-sm font-medium">Expert Tax Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Optimize Your Tax Strategy with Professional Guidance
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-xl">
              Comprehensive tax consultation services for individuals and businesses. Let us help you navigate complex tax regulations and maximize your financial potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/marketplace">
                <Button size="lg" className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-medium">
                  Explore Services
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToServices}
                className="w-full sm:w-auto border-white/20 text-black hover:bg-white/10 font-medium"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-blue-800/50 mix-blend-multiply" />
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070"
            alt="Tax Consultation"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "1000+", label: "Happy Clients" },
              { number: "50+", label: "Tax Experts" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Tax Services Tailored to Your Needs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tax solutions designed to optimize your tax position and ensure compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-0 bg-white">
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-4 left-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm">
                        {categories.find(cat => cat.name === product.category)?.icon({ className: "h-3.5 w-3.5 text-blue-600" })}
                        <span className="text-xs font-medium text-blue-900">{product.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{product.description}</p>
                    <div className="mt-2 text-lg font-semibold text-blue-900">{formatPrice(product.price)}</div>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Link href={`/marketplace`} className="w-full">
                    <Button variant="outline" className="w-full group border-blue-200 hover:border-blue-300 hover:bg-blue-50">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/marketplace">
              <Button className="bg-blue-600 hover:bg-blue-700 font-medium text-white">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section with Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How We Work With You</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to solving your tax challenges efficiently
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-100 hidden md:block" />
            {process.map((step, index) => (
              <div key={step.name} className="relative mb-16 md:mb-24 last:mb-0">
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                  <div className={`md:text-right ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2">
                      <div className="h-12 w-12 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center">
                        <span className="text-xl font-bold text-blue-600">{index + 1}</span>
                      </div>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm md:shadow-none md:bg-transparent md:p-0">
                      <div className="md:hidden mb-4 flex justify-center">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-lg font-bold text-blue-600">{index + 1}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.name}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className={`hidden md:block ${index % 2 === 1 ? 'md:order-1' : ''}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Icons */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">The TaxStacked Advantage</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our professional tax services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-14 w-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="mt-6">
                  <div className="flex flex-col gap-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience with TaxStacked
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your Taxes?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our tax experts today and take the first step toward financial clarity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="mailto:info@taxstacked.com">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-medium">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button size="lg" variant="outline" className="border-white/20 text-black hover:bg-white/10 font-medium">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    name: 'Expert Tax Consultants',
    description: 'Our team of experienced tax professionals brings deep expertise and up-to-date knowledge to every consultation.',
    icon: <Calculator className="h-6 w-6 text-blue-600" />,
    benefits: [
      'Certified tax professionals with 10+ years experience',
      'Continuous education on latest tax regulations',
      'Specialized expertise in multiple tax domains'
    ]
  },
  {
    name: 'Comprehensive Tax Solutions',
    description: 'From personal tax returns to complex corporate tax planning, we provide end-to-end tax solutions.',
    icon: <FileText className="h-6 w-6 text-blue-600" />,
    benefits: [
      'Tailored approach for each client\'s unique needs',
      'Full-spectrum services from planning to filing',
      'Strategic tax optimization recommendations'
    ]
  },
  {
    name: 'Compliance & Security',
    description: 'We ensure your tax matters are handled with the highest standards of compliance and confidentiality.',
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    benefits: [
      'Strict adherence to all tax regulations',
      'Secure handling of sensitive financial data',
      'Regular compliance audits and updates'
    ]
  },
]

const process = [
  {
    name: 'Initial Assessment',
    description: 'We begin by understanding your tax situation, goals, and specific requirements through detailed discussions.'
  },
  {
    name: 'Strategy Development',
    description: 'Our experts develop customized tax strategies and solutions tailored to your unique circumstances.'
  },
  {
    name: 'Implementation',
    description: 'We guide you through the implementation of tax strategies and handle all necessary documentation.'
  },
  {
    name: 'Ongoing Support',
    description: 'Continuous support and regular reviews to ensure your tax matters remain optimized and compliant.'
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Small Business Owner',
    quote: 'The team at TaxStacked transformed our tax situation. Their expertise and personalized approach helped us save significantly on our tax obligations.',
    date: 'Client since January 2021'
  },
  {
    name: 'Michael Chen',
    company: 'Corporate Client',
    quote: 'Working with TaxStacked on our corporate tax planning was a game-changer. Their strategic approach and attention to detail were invaluable.',
    date: 'Client since September 2020'
  },
  {
    name: 'Emma Rodriguez',
    company: 'Individual Client',
    quote: 'Their understanding of personal tax matters and ability to explain complex concepts simply made the entire process stress-free.',
    date: 'Client since March 2022'
  },
  {
    name: 'David Kim',
    company: 'Startup Founder',
    quote: 'TaxStacked\'s expertise in startup tax matters has been crucial for our growth. Their proactive approach has helped us navigate complex tax regulations.',
    date: 'Client since June 2021'
  }
]