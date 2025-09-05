import Swal from "sweetalert2";

function Contact({language}) {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0017b7f2-8bd5-4df8-8248-db5c5a387572");
    
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            Swal.fire({
                title: 'Success!',
                text: 'Message sent!',
                icon: 'success'
            })
            event.target.reset();
        } else {
            Swal.fire({
            title: 'Error!',
            text: 'Message not sent!',
            icon: 'error'
            })
        }
    };

    return (
        <section id="contact" className="bg-white py-16 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">{language === "spanish" ? "Contacto" : "Contact"}</h2>
                <p className="text-gray-600 mb-10">{language === "spanish" ? "¿Querés trabajar conmigo o simplemente saludar? Escribime desde el formulario o conectemos en redes." : "Want to work with me or just say hello? Write me using the form below or let's connect online."}</p>
                <div className="mb-8 flex items-center justify-center gap-3 flex-wrap">
                    <a
                        href="https://drive.google.com/file/d/1WDvFGgb6UGFvYcK_rYc5RsY2N_hoqHvl/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50 transition"
                        aria-label="Open English CV"
                    >
                        📄 {language === "spanish" ? "Ver CV (Inglés)" : "View CV (English)"}
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1_n2Qi630pOW_OcQka3VZpdkJuNlZhxki/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50 transition"
                        aria-label="Open Spanish CV"
                    >
                        📄 {language === "spanish" ? "Ver CV (Español)" : "View CV (Spanish)"}
                    </a>
                </div>
                <form 
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    className="space-y-6"
                    onSubmit={onSubmit}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder={{spanish: "Tu nombre", english: "Your name"}[language]}
                        required
                        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder={{spanish: "Tu email", english: "Your email"}[language]}
                        required
                        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <textarea
                        name="message"
                        placeholder={{spanish: "Tu mensaje", english: "Your message"}[language]}
                        required
                        className="w-full p-3 border rounded-lg shadow-sm h-36 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition transform hover:scale-105"
                    >
                        {language === "spanish" ? "Enviar" : "Send"}
                    </button>
                </form>
                <div className="mt-12 flex justify-center gap-6 text-2xl text-gray-600">
                    <a href="mailto:shaicokohn@gmail.com" className="hover:text-black transition">
                        <i className="devicon-google-plain"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/shai-kohn/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
                        <i className="devicon-linkedin-plain"></i>
                    </a>
                    <a href="https://github.com/Shaikohn" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
                        <i className="devicon-github-original"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;