import React from 'react';
import { Building2, Phone, Mail, MapPin, Award, Users, Home, Building, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import PropertyCard from './components/PropertyCard';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="w-full h-full object-cover"
            alt="Luxury Real Estate"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Diwakarla Properties Pvt Ltd</h1>
            <p className="text-xl mb-8">Building Dreams Since 2020</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Explore Properties
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Our Company</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2020 by Mr. Srinivas Diwakarla, Diwakarla Properties has established itself as a trusted name in the real estate sector. With over 30 years of experience in Real Estate and Marketing, Mr. Diwakarla brings unparalleled expertise and vision to every project.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-blue-600" />
                  <span className="font-semibold">30+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  <span className="font-semibold">Expert Team</span>
                </div>
                <div className="flex items-center gap-3">
                  <Home className="w-8 h-8 text-blue-600" />
                  <span className="font-semibold">Quality Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="w-8 h-8 text-blue-600" />
                  <span className="font-semibold">Premium Locations</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="rounded-lg shadow-xl"
                alt="Office Interior"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard 
              image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80"
              title="Luxury Villa"
              location="Banjara Hills"
              price="₹4.5 Cr"
              beds={4}
              baths={3}
              sqft={3500}
            />
            <PropertyCard 
              image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80"
              title="Modern Apartment"
              location="Jubilee Hills"
              price="₹2.8 Cr"
              beds={3}
              baths={2}
              sqft={2200}
            />
            <PropertyCard 
              image="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              title="Premium Plot"
              location="Gachibowli"
              price="₹1.8 Cr"
              beds={0}
              baths={0}
              sqft={2400}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Phone className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p>+91 9000257205</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Mail className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p>info@diwakarlaproperties.com</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p>Road No. 12, Banjara Hills<br />Hyderabad, 500034</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Diwakarla Properties Pvt Ltd. All rights reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/919000257205"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50 flex items-center gap-2"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:inline">Chat with us</span>
      </a>
    </div>
  );
}

export default App;