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
  Loader2,
  Copy,
  Check,
} from "lucide-react";
import MagneticButton from "./animations/MagneticButton";
import BorderBeam from "./animations/BorderBeam";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);

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

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }, 1500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ppankajpatel348@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      title: "Direct Email",
      detail: "ppankajpatel348@gmail.com",
      link: "mailto:ppankajpatel348@gmail.com",
      actionable: true,
    },
    {
      icon: <Phone size={18} />,
      title: "Contact Number",
      detail: "+91 9173731916",
      link: "tel:+919173731916",
    },
    {
      icon: <MapPin size={18} />,
      title: "Current Location",
      detail: "Borivali, Mumbai · Ahmedabad, India",
      link: "https://maps.google.com/?q=Borivali,Mumbai",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      link: "https://linkedin.com/in/pankajpatel19",
    },
    {
      name: "GitHub",
      icon: <Github size={18} />,
      link: "https://github.com/pankajpatel19",
    },
    {
      name: "Twitter",
      icon: <Twitter size={18} />,
      link: "https://twitter.com/pankajpatel19",
    },
  ];

  return (
    <section id="contact" className="w-full py-20 sm:py-24 bg-black text-white relative border-t border-zinc-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex flex-col justify-center w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="font-mono text-[11px] text-zinc-400 font-semibold tracking-wider uppercase">
            06 // DIRECT CONTACT // GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-white rounded-full mt-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Let's discuss engineering & opportunities
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Available for full-time software engineering roles, full-stack projects, and technical collaboration. Feel free to ping me directly or drop a message.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-zinc-700 transition-colors shadow-sm"
                >
                  <a
                    href={info.link}
                    target={info.title === "Current Location" ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="flex items-center gap-3.5 group flex-1"
                  >
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">
                        {info.title}
                      </p>
                      <p className="text-sm font-medium text-zinc-200 mt-0.5 group-hover:text-white transition-colors">
                        {info.detail}
                      </p>
                    </div>
                  </a>

                  {info.actionable && (
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      title="Copy email address"
                    >
                      {copiedEmail ? <Check size={14} className="text-white" /> : <Copy size={14} />}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Social Panel */}
            <div className="pt-2">
              <h4 className="text-xs font-mono font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                Social Profiles
              </h4>
              <div className="flex gap-2.5">
                {socialLinks.map((social) => (
                  <MagneticButton key={social.name} strength={0.35}>
                    <motion.a
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors shadow-sm block"
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  </MagneticButton>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="relative p-7 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xl overflow-hidden">
              <BorderBeam size={220} duration={9} colorFrom="#ffffff" colorTo="#52525b" />

              <h3 className="text-lg font-bold font-display text-white mb-6">
                Send a Message
              </h3>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <CheckCircle size={48} className="text-white mb-3" />
                    <h4 className="text-xl font-bold font-display text-white mb-1">
                      Message Dispatched!
                    </h4>
                    <p className="text-zinc-400 text-sm max-w-xs leading-relaxed font-light">
                      Thanks for reaching out! I've received your inquiry and will follow up shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-white/10 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-white/10 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Project requirements, inquiry or role details..."
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-white/10 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-3.5 bg-white text-zinc-950 font-semibold rounded-xl text-sm shadow-sm hover:bg-zinc-200 flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Dispatch Message
                        </>
                      )}
                    </button>
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
