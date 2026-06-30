import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
  CheckCircle,
  Sparkles,
  Loader2,
} from "lucide-react";

// Floating label input helper component
const FloatingInput = ({ label, id, name, type = "text", value, onChange, required = true }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full mb-6 group">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== "")}
        className="w-full px-4 py-3.5 bg-slate-950/80 border border-slate-850 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors duration-300"
      />
      <label
        htmlFor={id}
        className={`absolute left-4 top-3.5 text-gray-500 text-sm pointer-events-none transition-all duration-300 ${
          isFocused || value
            ? "-translate-y-6 translate-x-[-4px] scale-85 text-cyan-400 bg-slate-950 px-2.5 py-0.5 rounded-md border border-slate-850"
            : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
};

const FloatingTextarea = ({ label, id, name, value, onChange, rows = 5, required = true }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full mb-6 group">
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== "")}
        className="w-full px-4 py-3.5 bg-slate-950/80 border border-slate-850 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors duration-300 resize-none"
      />
      <label
        htmlFor={id}
        className={`absolute left-4 top-3.5 text-gray-500 text-sm pointer-events-none transition-all duration-300 ${
          isFocused || value
            ? "-translate-y-6 translate-x-[-4px] scale-85 text-cyan-400 bg-slate-950 px-2.5 py-0.5 rounded-md border border-slate-850"
            : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");

    // Simulate submission delay
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Return to idle after animation
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }, 1800);
  };

  const contactInfo = [
    {
      icon: <Mail size={22} />,
      title: "Direct Email",
      detail: "pankajpatelinter@gmail.com",
      link: "mailto:pankajpatelinter@gmail.com",
      gradient: "from-blue-500/20 to-cyan-500/10 border-blue-500/30",
      iconColor: "text-cyan-400",
    },
    {
      icon: <Phone size={22} />,
      title: "Contact Number",
      detail: "+91 8511994480",
      link: "tel:+918511994480",
      gradient: "from-green-500/20 to-emerald-500/10 border-green-500/30",
      iconColor: "text-emerald-450",
    },
    {
      icon: <MapPin size={22} />,
      title: "Current Location",
      detail: "Ahmedabad, India",
      link: "https://maps.google.com/?q=Ahmedabad,India",
      gradient: "from-purple-500/20 to-pink-500/10 border-purple-500/30",
      iconColor: "text-purple-400",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      link: "https://linkedin.com/in/pankajpatel19",
      color: "hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/5",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      link: "https://github.com/pankajpatel19",
      color: "hover:text-slate-100 hover:border-slate-700 hover:bg-slate-800/10",
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      link: "https://twitter.com",
      color: "hover:text-cyan-450 hover:border-cyan-500/40 hover:bg-cyan-500/5",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-slate-950 py-24 relative overflow-hidden bg-grid-pattern"
    >
      {/* Background visual light flare */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 flex flex-col justify-center w-full h-full z-10 relative">
        
        {/* Header Section */}
        <div className="flex flex-col gap-2 mb-12">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-cyan-400 text-sm font-semibold uppercase tracking-widest"
          >
            <Sparkles size={16} />
            Connect
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-display font-black text-white"
          >
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="text-left">
              <h3 className="text-2xl font-bold font-display text-white mb-3">Let's craft details</h3>
              <p className="text-gray-400 text-base leading-relaxed max-w-sm font-light">
                Have a job opening, project proposal, or just want to chat about engineering? Drop a line here.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.title === "Current Location" ? "_blank" : "_self"}
                  rel="noreferrer"
                  whileHover={{ scale: 1.02, x: 4 }}
                  className={`flex items-center gap-4 p-5 rounded-2xl border bg-slate-900/40 backdrop-blur-sm transition-all duration-300 group ${info.gradient}`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-850 group-hover:scale-105 transition-transform duration-300 ${info.iconColor}`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{info.title}</p>
                    <p className="text-sm font-bold text-gray-200 mt-0.5 group-hover:text-cyan-400 transition-colors">
                      {info.detail}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Panel */}
            <div className="pt-6 text-left">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
                Social Profiles
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.06, y: -3 }}
                    whileTap={{ scale: 0.94 }}
                    className={`w-12 h-12 rounded-xl bg-slate-900 border border-slate-850 flex items-center justify-center text-gray-400 transition-all duration-300 shadow-md ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-850 backdrop-blur-sm shadow-xl relative overflow-hidden">
              <h3 className="text-xl font-bold font-display text-white mb-8 text-left">Send Message</h3>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <CheckCircle size={56} className="text-green-450 mb-4" />
                    </motion.div>
                    <h4 className="text-2xl font-bold font-display text-white mb-2">
                      Message Dispatched!
                    </h4>
                    <p className="text-gray-400 text-sm max-w-xs leading-relaxed font-light">
                      Thanks for reaching out! I've received your query and will respond shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-2 text-left">
                    <FloatingInput
                      label="Your Name"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />

                    <FloatingInput
                      label="Your Email"
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    <FloatingTextarea
                      label="Your Message"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />

                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/25 flex items-center justify-center gap-2 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 size={18} className="animate-spin text-white" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Dispatch Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
