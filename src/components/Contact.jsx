import Swal from "sweetalert2";

function Contact() {

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
                <h2 className="text-3xl font-bold mb-4">Contacto</h2>
                <p className="text-gray-600 mb-10">¿Querés trabajar conmigo o simplemente saludar? Escribime desde el formulario o conectemos en redes.</p>
                <form 
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    className="space-y-6"
                    onSubmit={onSubmit}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        required
                        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Tu email"
                        required
                        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <textarea
                        name="message"
                        placeholder="Escribí tu mensaje..."
                        required
                        className="w-full p-3 border rounded-lg shadow-sm h-36 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition transform hover:scale-105"
                    >
                        Enviar mensaje
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