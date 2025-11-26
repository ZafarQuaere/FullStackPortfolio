import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { initEmailJS, sendEmail } from '../lib/emailjs';
import { debugEmailJS } from '../lib/emailjs-debug';

const Contact = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const { toast } = useToast();

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS();
    // Add debug function to window for testing
    window.debugEmailJS = debugEmailJS;
    console.log('💡 Tip: Run debugEmailJS() in console to test EmailJS configuration');
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear any previous errors when user starts typing
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setIsSubmitted(false);
    
    try {
      console.log('Form submission started with data:', formData);
      
      // Send email using EmailJS
      await sendEmail(formData);
      
      // Success - show success message and reset form
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        duration: 5000,
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Form submission failed:', error);
      
      // Use the specific error message from EmailJS
      const errorMessage = error.message || 'Failed to send message. Please try again or contact me directly.';
      setSubmitError(errorMessage);
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
      });
      
      // Clear error after 10 seconds
      setTimeout(() => setSubmitError(''), 10000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/zafarimam77",
      href: personalInfo.linkedin,
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/ZafarQuaere",
      href: personalInfo.github,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Ready to discuss your next mobile app or web project? Let's collaborate and build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-blue-400" />
                Send Message
              </h3>
              
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                {/* Success Message */}
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl flex items-start gap-3 animate-in fade-in-50 duration-300">
                    <div className="p-1.5 rounded-full bg-green-500/20">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                      <p className="text-green-400 font-semibold mb-1">Message Sent Successfully!</p>
                      <p className="text-slate-300 text-sm">
                        Thank you for reaching out. I'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitError && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-xl flex items-start gap-3 animate-in fade-in-50 duration-300">
                    <div className="p-1.5 rounded-full bg-red-500/20">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                      <p className="text-red-400 font-semibold mb-1">Failed to Send Message</p>
                      <p className="text-slate-300 text-sm">{submitError}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/5 border-white/20 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/5 border-white/20 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Project discussion"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-white/5 border-white/20 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 resize-none"
                      placeholder="Tell me about your project requirements..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Direct Communication Notice */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-white/10 p-6 rounded-xl">
              <p className="text-center text-slate-200 text-base">
                Prefer direct communication? Feel free to reach out via{' '}
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 hover:decoration-blue-300 transition-colors font-medium"
                >
                  email
                </a>
                ,{' '}
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="text-green-400 hover:text-green-300 underline decoration-green-400/50 hover:decoration-green-300 transition-colors font-medium"
                >
                  mobile
                </a>
                , or{' '}
                <a 
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 underline decoration-blue-500/50 hover:decoration-blue-400 transition-colors font-medium"
                >
                  LinkedIn
                </a>
              </p>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-blue-400" />
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  
                  return (
                    <Card key={index} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4"
                      >
                        <div className={`p-3 rounded-full bg-gradient-to-r ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{contact.label}</h4>
                          <p className="text-slate-300 group-hover:text-blue-300 transition-colors">{contact.value}</p>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Availability Card */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-white/10 p-6 rounded-xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
                <h4 className="text-white font-semibold mb-2">Available for Projects</h4>
                <p className="text-slate-300 text-sm">
                  Currently accepting new mobile and web development projects, MVP development, and consulting opportunities.
                </p>
              </div>
            </Card>

            {/* Quote Card */}
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
              <blockquote className="text-center">
                <p className="text-slate-300 italic mb-4">
                  "Great mobile apps are not just about code – they're about creating experiences that users love and businesses thrive with."
                </p>
                <footer className="text-blue-300 font-medium">— Zafar Imam</footer>
              </blockquote>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;