// ==========================================
// Funcionalidad de Navegación Smooth Scroll
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Cerrar menú móvil si está abierto
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        }
    });
});

// ==========================================
// Navbar transparente al hacer scroll
// ==========================================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});

// ==========================================
// Botón Scroll to Top
// ==========================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// Funcionalidad de botones de WhatsApp
// ==========================================
document.querySelectorAll('.btn-whatsapp').forEach(button => {
    button.addEventListener('click', function() {
        const proveedor = this.getAttribute('data-proveedor');
        const producto = this.getAttribute('data-producto');
        const numero = this.getAttribute('data-numero');
        
        const mensaje = `Hola, me interesa el *${producto}* de *${proveedor}*. ¿Podrían darme más información sobre disponibilidad y precios?`;
        const mensajeCodificado = encodeURIComponent(mensaje);
        const urlWhatsApp = `https://wa.me/${numero}?text=${mensajeCodificado}`;
        
        window.open(urlWhatsApp, '_blank');
    });
});

// ==========================================
// Chatbot Funcionalidad
// ==========================================
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.getElementById('chatbot');
const closeChatbot = document.getElementById('closeChatbot');
const chatbotBody = document.getElementById('chatbotBody');

// Toggle chatbot
chatbotToggle.addEventListener('click', function() {
    chatbotContainer.classList.toggle('show');
    if (chatbotContainer.classList.contains('show')) {
        chatbotToggle.innerHTML = '<i class="bi bi-x-lg"></i>';
    } else {
        chatbotToggle.innerHTML = '<i class="bi bi-chat-dots-fill"></i>';
    }
});

// Cerrar chatbot
closeChatbot.addEventListener('click', function() {
    chatbotContainer.classList.remove('show');
    chatbotToggle.innerHTML = '<i class="bi bi-chat-dots-fill"></i>';
});

// Respuestas del chatbot
const chatResponses = {
    'productos': {
        message: 'Tenemos disponibles:<br>🌱 <strong>Café Premium</strong> - De altura y especial<br>🥔 <strong>Papa de Primera</strong> - Criolla y pastusa<br>🌽 <strong>Maíz Tradicional</strong> - Amarillo y criollo<br><br>¿Te gustaría ver alguno en específico?',
        options: [
            { text: 'Ver café', response: 'cafe' },
            { text: 'Ver papa', response: 'papa' },
            { text: 'Ver maíz', response: 'maiz' }
        ]
    },
    'cafe': {
        message: '☕ Nuestro café es de altura, cultivado en las mejores fincas de la región. Tenemos 3 productores disponibles.<br><br>¿Quieres que te conecte con un productor?',
        options: [
            { text: 'Sí, contactar productor', response: 'contacto_cafe' },
            { text: 'Ver otros productos', response: 'productos' }
        ]
    },
    'papa': {
        message: '🥔 Contamos con papa criolla, pastusa y sabanera de primera calidad. Producción orgánica certificada.<br><br>¿Te gustaría contactar a un productor?',
        options: [
            { text: 'Sí, contactar productor', response: 'contacto_papa' },
            { text: 'Ver otros productos', response: 'productos' }
        ]
    },
    'maiz': {
        message: '🌽 Maíz tradicional amarillo y criollo, cultivado con métodos ancestrales.<br><br>¿Deseas contactar a un productor?',
        options: [
            { text: 'Sí, contactar productor', response: 'contacto_maiz' },
            { text: 'Ver otros productos', response: 'productos' }
        ]
    },
    'contacto': {
        message: '📱 Excelente! Puedes contactarnos de varias formas:<br><br>• <strong>WhatsApp:</strong> Haz clic en el botón verde flotante<br>• <strong>Email:</strong> info@cooperativagricola.com<br>• <strong>O contacta directamente</strong> a cualquier productor desde la sección de cultivos<br><br>¿En qué más puedo ayudarte?',
        options: [
            { text: 'Ver productos', response: 'productos' },
            { text: 'Más información', response: 'info' }
        ]
    },
    'contacto_cafe': {
        message: '¡Perfecto! Te recomiendo ver la sección de <strong>Café</strong> en la página. Allí encontrarás todos nuestros productores de café con botones directos a WhatsApp.<br><br>¿Te llevo allá?',
        options: [
            { text: 'Sí, ir a cultivos', response: 'ir_cultivos' },
            { text: 'Otra consulta', response: 'productos' }
        ]
    },
    'contacto_papa': {
        message: '¡Perfecto! En la sección de <strong>Papa</strong> encontrarás nuestros productores con contacto directo por WhatsApp.<br><br>¿Quieres que te lleve allá?',
        options: [
            { text: 'Sí, ir a cultivos', response: 'ir_cultivos' },
            { text: 'Otra consulta', response: 'productos' }
        ]
    },
    'contacto_maiz': {
        message: '¡Excelente! En la sección de <strong>Maíz</strong> puedes contactar directamente a los productores vía WhatsApp.<br><br>¿Te gustaría ir allá?',
        options: [
            { text: 'Sí, ir a cultivos', response: 'ir_cultivos' },
            { text: 'Otra consulta', response: 'productos' }
        ]
    },
    'info': {
        message: 'ℹ️ Somos una cooperativa agrícola que conecta productores locales con consumidores.<br><br><strong>Beneficios:</strong><br>✅ Productos frescos del campo<br>✅ Contacto directo con productores<br>✅ Precios justos<br>✅ 100% orgánico<br><br>¿Qué más te gustaría saber?',
        options: [
            { text: 'Ver productos', response: 'productos' },
            { text: 'Contactar', response: 'contacto' }
        ]
    },
    'ir_cultivos': {
        message: '¡Perfecto! Te dirijo a la sección de cultivos... 🌱',
        action: 'scroll',
        target: '#cultivos'
    }
};

// Manejar opciones del chat
document.querySelectorAll('.chat-option').forEach(option => {
    option.addEventListener('click', function() {
        const response = this.getAttribute('data-response');
        addUserMessage(this.textContent);
        setTimeout(() => {
            handleChatResponse(response);
        }, 500);
    });
});

// Agregar mensaje del usuario
function addUserMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message user-message';
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatbotBody.appendChild(messageDiv);
    scrollChatToBottom();
}

// Agregar mensaje del bot
function addBotMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message bot-message';
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatbotBody.appendChild(messageDiv);
    scrollChatToBottom();
}

// Manejar respuestas del chat
function handleChatResponse(responseKey) {
    const response = chatResponses[responseKey];
    
    if (response) {
        addBotMessage(response.message);
        
        // Si hay una acción especial (como scroll)
        if (response.action === 'scroll' && response.target) {
            setTimeout(() => {
                document.querySelector(response.target).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                chatbotContainer.classList.remove('show');
                chatbotToggle.innerHTML = '<i class="bi bi-chat-dots-fill"></i>';
            }, 1000);
        }
        
        // Agregar nuevas opciones si existen
        if (response.options) {
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'chat-message bot-message';
            
            let optionsHTML = '<div class="d-flex flex-column gap-2">';
            response.options.forEach(opt => {
                optionsHTML += `<button class="btn btn-sm btn-outline-success chat-dynamic-option" data-response="${opt.response}">${opt.text}</button>`;
            });
            optionsHTML += '</div>';
            
            optionsDiv.innerHTML = optionsHTML;
            chatbotBody.appendChild(optionsDiv);
            
            // Agregar event listeners a las nuevas opciones
            optionsDiv.querySelectorAll('.chat-dynamic-option').forEach(btn => {
                btn.addEventListener('click', function() {
                    const response = this.getAttribute('data-response');
                    addUserMessage(this.textContent);
                    setTimeout(() => {
                        handleChatResponse(response);
                    }, 500);
                });
            });
            
            scrollChatToBottom();
        }
    }
}

// Scroll del chat al final
function scrollChatToBottom() {
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

// ==========================================
// Animación de elementos al hacer scroll (Intersection Observer)
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar las cards de productos
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.proveedor-card, .hover-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// ==========================================
// Animación de números (contador)
// ==========================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ==========================================
// Lazy Loading de imágenes
// ==========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// Prevenir carga de imágenes rotas
// ==========================================
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.src = 'https://via.placeholder.com/400x300/5a8c3a/ffffff?text=Imagen+No+Disponible';
    });
});

// ==========================================
// Mensajes de consola (opcional - para desarrollo)
// ==========================================
console.log('%c🌱 Cooperativa Agrícola ', 'background: #2d5016; color: #fff; padding: 10px; font-size: 16px; font-weight: bold;');
console.log('%cSitio web desarrollado con HTML5, CSS3, Bootstrap 5 y JavaScript Vanilla', 'color: #5a8c3a; font-size: 12px;');

// ==========================================
// Efecto de typing en hero (opcional)
// ==========================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Para activar el efecto typing, descomentar:
// window.addEventListener('load', function() {
//     const heroTitle = document.querySelector('.hero-section h1');
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 50);
// });
