"use client"

import React, { useState } from 'react';
import { Phone, User, Mail, MessageSquare, Send, CheckCircle2, Loader2, Clock, ShieldCheck } from 'lucide-react';

export default function CallbackForm() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    // YOUR ACCESS KEY
    formData.append("access_key", "b0f9bf8e-8fef-4039-8b00-0f5a358d3b3a");
    formData.append("subject", "New Call Back Request from Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Request received! We will call you shortly.");
        event.target.reset();
      } else {
        setStatus("error");
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setResult("Connection error. Please check your internet.");
    }
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="callback">
      
      {/* Container aligned with other sections (max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-white rounded-4xl shadow-xl border border-gray-200 overflow-hidden flex flex-col lg:flex-row">
          
          {/* LEFT SIDE: Brand Sidebar */}
          <div className="lg:w-5/12 bg-[#2f486b] p-10 md:p-14 text-white flex flex-col justify-between relative">
            
            {/* Subtle Texture Overlay (Flat opacity, no blur) */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[20px_20px]"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-[#56b4e9] animate-pulse"></span>
                <span className="text-[#56b4e9] text-xs font-bold tracking-widest uppercase">Priority Support</span>
              </div>
              
              <h2 className="text-4xl font-extrabold leading-tight mb-6 tracking-tight">
                Let's discuss your <span className="text-[#56b4e9]">Travel Plans.</span>
              </h2>
              <p className="text-blue-100/90 text-lg leading-relaxed mb-10 font-light">
                Skip the waiting times. Schedule a free consultation with our senior visa experts today.
              </p>

              <ul className="space-y-8">
                <li className="flex items-start group">
                  <div className="p-3 bg-white/10 rounded-xl mr-5 border border-white/10 group-hover:bg-[#56b4e9] group-hover:text-white transition-colors duration-300 text-[#56b4e9]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Fast Response</h4>
                    <p className="text-sm text-blue-100/70 mt-1">We typically respond within 30 minutes during working hours.</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="p-3 bg-white/10 rounded-xl mr-5 border border-white/10 group-hover:bg-[#56b4e9] group-hover:text-white transition-colors duration-300 text-[#56b4e9]">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Expert Advice</h4>
                    <p className="text-sm text-blue-100/70 mt-1">Speak directly with certified consultants, not bots.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center space-x-2 text-sm text-blue-100/80">
                <Phone size={16} />
                <span>Urgent? Call us directly:</span>
                <a href="tel:+918368032103" className="text-white hover:text-[#56b4e9] transition-colors font-bold underline decoration-[#56b4e9]/50 hover:decoration-[#56b4e9]">+91 8368032103</a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Form */}
          <div className="lg:w-7/12 p-8 md:p-14 bg-white">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in duration-500 py-10">
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-bold text-[#2f486b] mb-4">Request Received!</h3>
                <p className="text-gray-500 max-w-sm mx-auto leading-relaxed mb-8 text-lg">{result}</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="px-8 py-3 rounded-xl border-2 border-[#56b4e9] text-[#56b4e9] font-bold hover:bg-[#56b4e9] hover:text-white transition-all"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#2f486b]">Send us a message</h3>
                  <p className="text-gray-500 text-sm mt-1">Fill in the details below.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative group">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 block">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#56b4e9] transition-colors">
                        <User size={20} />
                      </div>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#56b4e9]/20 focus:border-[#56b4e9] outline-none transition-all placeholder-gray-300 text-gray-900 font-medium"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="relative group">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 block">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#56b4e9] transition-colors">
                        <Phone size={20} />
                      </div>
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        placeholder="+91 12345 56789"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#56b4e9]/20 focus:border-[#56b4e9] outline-none transition-all placeholder-gray-300 text-gray-900 font-medium"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 block">Email Address <span className="text-gray-400 font-normal normal-case">(Optional)</span></label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#56b4e9] transition-colors">
                      <Mail size={20} />
                    </div>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="john@example.com"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#56b4e9]/20 focus:border-[#56b4e9] outline-none transition-all placeholder-gray-300 text-gray-900 font-medium"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 block">How can we help?</label>
                  <div className="relative">
                    <div className="absolute top-4 left-4 text-gray-400 pointer-events-none group-focus-within:text-[#56b4e9] transition-colors">
                      <MessageSquare size={20} />
                    </div>
                    <textarea 
                      name="message" 
                      required 
                      placeholder="I need help with a Tourist Visa for Dubai..."
                      rows="3"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#56b4e9]/20 focus:border-[#56b4e9] outline-none transition-all placeholder-gray-300 text-gray-900 font-medium resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Hidden Bot Field */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full py-4 bg-[#56b4e9] text-white font-bold rounded-xl hover:bg-[#2f486b] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Processing Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
                
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-red-50 text-red-600 text-sm text-center font-medium border border-red-100 animate-shake">
                    {result}
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}