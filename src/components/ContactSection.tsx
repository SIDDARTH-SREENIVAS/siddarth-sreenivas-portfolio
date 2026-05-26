const contact = {
  email: "siddarthsreenivas20@gmail.com",
  phone: "+91 9961670420",
  location: "Thrissur, Kerala, India",
  linkedin: "https://www.linkedin.com/in/siddarth-sreenivas-363177323/",
  github: "https://github.com/SIDDARTH-SREENIVAS"
};

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white">
              <span className="w-2.5 h-2.5 rounded-full bg-action" />
              Contact
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl font-semibold">
              Let&apos;s build{" "}
              <span className="text-action">something</span>.
            </h2>
            <p className="mt-3 text-black/70 leading-relaxed">
              Have a project in mind? Reach out and I&apos;ll get back to you
              soon.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-black bg-black text-white hover:bg-action hover:border-action transition-colors"
              >
                Email me
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-black/10 bg-white text-black hover:border-action hover:text-action transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 w-full items-stretch">
            <a
              href={`mailto:${contact.email}`}
              className="h-full min-h-[120px] rounded-2xl border-2 border-black/10 bg-white px-5 py-5 hover:border-action transition-colors flex flex-col justify-center"
            >
              <div className="text-xs font-semibold text-black/50">
                Email
              </div>
              <div className="mt-1 text-xs font-medium break-all leading-snug">
                {contact.email}
              </div>
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="h-full min-h-[120px] rounded-2xl border-2 border-black/10 bg-white px-5 py-5 hover:border-action transition-colors flex flex-col justify-center"
            >
              <div className="text-xs font-semibold text-black/50">
                Phone
              </div>
              <div className="mt-1 font-medium">{contact.phone}</div>
            </a>
            <div className="h-full min-h-[120px] rounded-2xl border-2 border-black/10 bg-white px-5 py-5 flex flex-col justify-center">
              <div className="text-xs font-semibold text-black/50">
                Location
              </div>
              <div className="mt-1 font-medium">{contact.location}</div>
            </div>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="h-full min-h-[120px] rounded-2xl border-2 border-black/10 bg-white px-5 py-5 hover:border-action transition-colors flex flex-col justify-center"
            >
              <div className="text-xs font-semibold text-black/50">
                LinkedIn
              </div>
              <div className="mt-1 font-medium">Connect</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

