// Chatbot Demonstration for Bowery Creative Agency Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize chatbot interface
    initChatbot();
    
    // Initialize mode toggle
    initModeToggle();
    
    // Initialize chat suggestions
    initChatSuggestions();
});

// Chatbot Interface Initialization
function initChatbot() {
    const chatInput = document.querySelector('.chat-input input');
    const chatButton = document.querySelector('.chat-input button');
    const chatMessages = document.querySelector('.chat-messages');
    
    if (!chatInput || !chatButton || !chatMessages) return;
    
    // Sample responses for patient mode
    const patientResponses = {
        'coolsculpting': 'CoolSculpting is a non-invasive fat reduction treatment that uses controlled cooling to eliminate stubborn fat that resists diet and exercise. The procedure typically takes 35-60 minutes per area, with no downtime required.',
        'allergan': 'Allergan is a global pharmaceutical company that produces a range of aesthetic products including Botox, Juvederm, and CoolSculpting. These treatments are designed to help you look and feel your best with minimal downtime.',
        'botox': 'Botox is a prescription medicine that is injected into muscles to temporarily improve the look of moderate to severe forehead lines, crow's feet, and frown lines. Results can last up to 4 months.',
        'cynosure': 'Cynosure offers advanced aesthetic treatment systems including laser hair removal, skin revitalization, and body contouring technologies. These treatments are designed to help you achieve your aesthetic goals with minimal discomfort.',
        'neocis': 'Neocis has developed Yomi, the first and only FDA-cleared robotic device for dental implant surgery. This technology helps dental professionals place implants with greater precision and confidence.',
        'treatment': 'We offer a range of aesthetic and dental treatments using cutting-edge technology. Would you like to know about a specific treatment like CoolSculpting, Botox, or dental implants?',
        'cost': 'Treatment costs vary depending on your specific needs and goals. We recommend scheduling a consultation to receive a personalized treatment plan and pricing information.',
        'recovery': 'Most of our aesthetic treatments require minimal to no downtime. You can typically return to your normal activities immediately after treatment. Specific recovery instructions will be provided based on your treatment.',
        'results': 'Results vary by treatment and individual. Many patients see initial results within days to weeks, with optimal results appearing over 1-3 months as your body naturally processes the treatment effects.',
        'appointment': 'To schedule an appointment, please contact our office directly. Our team will help find a convenient time for your consultation or treatment.',
        'dental implant': 'Dental implants are titanium posts that serve as artificial tooth roots, providing a permanent base for fixed replacement teeth. Unlike dentures, implants look and feel like natural teeth and can last a lifetime with proper care.',
        'options': 'We offer a variety of treatment options customized to your specific needs and goals. Our team will work with you to develop a personalized treatment plan that addresses your concerns and fits your lifestyle.'
    };
    
    // Sample responses for clinical mode
    const clinicalResponses = {
        'coolsculpting': 'CoolSculpting utilizes cryolipolysis technology to target and crystallize fat cells at 4°C, inducing apoptosis. The treatment delivers a 20-25% reduction in subcutaneous fat layer thickness after a single session, with results visible at 3 weeks and optimal at 3 months post-treatment.',
        'allergan': 'Allergan\'s portfolio includes neurotoxins (onabotulinumtoxinA), HA fillers (Juvederm line with varying G\' values and crosslinking), and energy-based devices. Clinical protocols should follow FDA-approved indications with appropriate patient selection based on tissue assessment.',
        'botox': 'Botox (onabotulinumtoxinA) has a molecular weight of 150kDa and acts by inhibiting SNAP-25 to prevent acetylcholine release at the neuromuscular junction. Dosing ranges from 20-40 units for glabellar lines, 24 units for crow\'s feet, and 20 units for forehead lines, with onset at 3-7 days and duration of 3-4 months.',
        'cynosure': 'Cynosure\'s laser and energy-based systems operate at specific wavelengths: 1064nm Nd:YAG for deeper penetration, 755nm Alexandrite for melanin targeting, and 1440nm for microcoagulation of sebaceous glands. Treatment protocols should account for Fitzpatrick skin type and thermal relaxation time.',
        'neocis': 'The Yomi system utilizes haptic robotic technology with 6 degrees of freedom and submillimeter accuracy (±0.3mm). The system maintains a dynamic spatial relationship between the handpiece and patient anatomy, allowing for real-time adjustments while following the pre-operative treatment plan with 98.7% accuracy.',
        'treatment': 'Our treatment protocols follow evidence-based guidelines with appropriate patient selection criteria including contraindications such as pregnancy, immunosuppression, and specific dermatological conditions. Treatment planning should incorporate anatomical considerations and tissue assessment.',
        'cost': 'Practice economics for these technologies include capital equipment costs ranging from $85,000-$150,000, per-treatment consumable costs of $250-$500, and recommended patient pricing strategies to maintain 65-75% profit margins while ensuring ROI within 12-18 months.',
        'recovery': 'Post-treatment protocols include monitoring for adverse events such as erythema (expected: 2-3 days), edema (expected: 1-5 days), and potential complications including paradoxical adipose hyperplasia (PAH) with cryolipolysis (incidence: 0.0051%).',
        'results': 'Clinical efficacy data demonstrates 20-25% fat reduction with cryolipolysis (p<0.001), 27-35% improvement in skin laxity with RF technologies (p<0.01), and 87% patient satisfaction at 6 months post-treatment across modalities.',
        'appointment': 'Patient scheduling should incorporate appropriate treatment intervals: 6-8 weeks between cryolipolysis sessions, 4 weeks between neurotoxin and filler combination treatments, and follow-up assessments at 1, 3, and 6 months for documentation and potential touch-up treatments.',
        'dental implant': 'Dental implants utilize titanium or zirconia fixtures with osseointegration rates of 96-98% in non-compromised patients. Platform-switching designs show reduced crestal bone loss (0.3mm vs 1.1mm at 12 months). Immediate loading protocols require initial stability of >35Ncm torque and are contraindicated with parafunction or poor bone quality (D4).',
        'options': 'Treatment modality selection should be based on comprehensive assessment including anatomical considerations, tissue characteristics, contraindications, and expected outcomes. Combination therapy approaches often yield synergistic results with appropriate sequencing and intervals.'
    };
    
    // Current mode (default: patient)
    let currentMode = 'patient';
    
    // Add event listener to chat button
    chatButton.addEventListener('click', function() {
        sendMessage();
    });
    
    // Add event listener to input field (Enter key)
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Function to send message
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message === '') return;
        
        // Add user message to chat
        addUserMessage(message);
        
        // Clear input field
        chatInput.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        // Process message and get response after a delay
        setTimeout(() => {
            // Remove typing indicator
            removeTypingIndicator();
            
            // Get response based on message and current mode
            const response = getResponse(message);
            
            // Add bot response to chat
            addBotMessage(response);
            
            // Scroll to bottom of chat
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
    
    // Function to add user message to chat
    function addUserMessage(text) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container', 'user');
        
        const avatar = document.createElement('div');
        avatar.classList.add('chat-avatar');
        avatar.textContent = 'U';
        
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user');
        messageElement.textContent = text;
        
        messageContainer.appendChild(avatar);
        messageContainer.appendChild(messageElement);
        
        chatMessages.appendChild(messageContainer);
        
        // Scroll to bottom of chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to add bot message to chat
    function addBotMessage(text) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container', 'bot');
        
        const avatar = document.createElement('div');
        avatar.classList.add('chat-avatar');
        avatar.textContent = 'B';
        
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'bot');
        
        // For bot messages, handle different modes
        if (currentMode === 'patient') {
            messageElement.innerHTML = `<span class="patient-response">${text}</span>`;
            if (clinicalResponses[getKeywordFromText(text.toLowerCase())]) {
                messageElement.innerHTML += `<span class="clinical-response" style="display: none;">${clinicalResponses[getKeywordFromText(text.toLowerCase())]}</span>`;
            }
        } else {
            messageElement.innerHTML = `<span class="clinical-response">${text}</span>`;
            if (patientResponses[getKeywordFromText(text.toLowerCase())]) {
                messageElement.innerHTML += `<span class="patient-response" style="display: none;">${patientResponses[getKeywordFromText(text.toLowerCase())]}</span>`;
            }
        }
        
        messageContainer.appendChild(avatar);
        messageContainer.appendChild(messageElement);
        
        chatMessages.appendChild(messageContainer);
        
        // Scroll to bottom of chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to show typing indicator
    function showTypingIndicator() {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container', 'bot', 'typing-container');
        
        const avatar = document.createElement('div');
        avatar.classList.add('chat-avatar');
        avatar.textContent = 'B';
        
        const typingElement = document.createElement('div');
        typingElement.classList.add('message', 'bot', 'typing-indicator');
        typingElement.innerHTML = '<span></span><span></span><span></span>';
        
        messageContainer.appendChild(avatar);
        messageContainer.appendChild(typingElement);
        
        chatMessages.appendChild(messageContainer);
        
        // Scroll to bottom of chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to remove typing indicator
    function removeTypingIndicator() {
        const typingContainer = document.querySelector('.typing-container');
        if (typingContainer) {
            typingContainer.remove();
        }
    }
    
    // Function to get response based on message and current mode
    function getResponse(message) {
        // Convert message to lowercase for easier matching
        const lowerMessage = message.toLowerCase();
        
        // Get responses based on current mode
        const responses = currentMode === 'patient' ? patientResponses : clinicalResponses;
        
        // Check for keywords in message
        for (const keyword in responses) {
            if (lowerMessage.includes(keyword)) {
                return responses[keyword];
            }
        }
        
        // Default response if no keyword matches
        if (currentMode === 'patient') {
            return "I'd be happy to help you learn more about our aesthetic and dental treatments. Feel free to ask about specific treatments like CoolSculpting, Botox, or our dental technologies.";
        } else {
            return "Our clinical protocols are based on evidence-based guidelines and manufacturer specifications. Please specify which treatment modality or technology you're inquiring about for detailed clinical information.";
        }
    }
    
    // Function to get keyword from text
    function getKeywordFromText(text) {
        const keywords = ['coolsculpting', 'allergan', 'botox', 'cynosure', 'neocis', 'treatment', 'cost', 'recovery', 'results', 'appointment', 'dental implant', 'options'];
        
        for (const keyword of keywords) {
            if (text.includes(keyword)) {
                return keyword;
            }
        }
        
        return '';
    }
    
    // Make functions available globally
    window.chatbot = {
        sendMessage,
        addUserMessage,
        addBotMessage,
        showTypingIndicator,
        removeTypingIndicator,
        getResponse
    };
}

// Mode Toggle Initialization
function initModeToggle() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const chatMessages = document.querySelector('.chat-messages');
    const modeIndicator = document.getElementById('mode-indicator');
    
    if (!toggleButtons.length || !chatMessages) return;
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get mode from data attribute
            const mode = this.getAttribute('data-mode');
            
            // Update chat interface based on mode
            updateChatMode(mode);
            
            // Show mode indicator
            if (modeIndicator) {
                modeIndicator.textContent = mode === 'patient' ? 'Patient Mode' : 'Clinical Mode';
                modeIndicator.classList.add('visible');
                
                // Hide mode indicator after 3 seconds
                setTimeout(() => {
                    modeIndicator.classList.remove('visible');
                }, 3000);
            }
        });
    });
    
    // Function to update chat mode
    function updateChatMode(mode) {
        // Update current mode
        window.currentMode = mode;
        
        // Get all bot messages
        const botMessages = chatMessages.querySelectorAll('.message.bot');
        
        botMessages.forEach(message => {
            const patientResponse = message.querySelector('.patient-response');
            const clinicalResponse = message.querySelector('.clinical-response');
            
            // If message has both response types
            if (patientResponse && clinicalResponse) {
                if (mode === 'patient') {
                    patientResponse.style.display = 'block';
                    clinicalResponse.style.display = 'none';
                } else {
                    patientResponse.style.display = 'none';
                    clinicalResponse.style.display = 'block';
                }
            }
        });
        
        // Update chat suggestions
        updateChatSuggestions(mode);
    }
}

// Chat Suggestions Initialization
function initChatSuggestions() {
    const suggestionChips = document.querySelectorAll('.suggestion-chip');
    const chatInput = document.querySelector('.chat-input input');
    
    if (!suggestionChips.length || !chatInput) return;
    
    suggestionChips.forEach(chip => {
        chip.addEventListener('click', function() {
            const suggestionText = this.textContent;
            
            // Set input value to suggestion text
            chatInput.value = suggestionText;
            
            // Trigger send button click
            document.querySelector('.chat-input button').click();
        });
    });
}

// Update Chat Suggestions based on mode
function updateChatSuggestions(mode) {
    const suggestionChips = document.querySelectorAll('.suggestion-chip');
    
    if (!suggestionChips.length) return;
    
    if (mode === 'patient') {
        suggestionChips[0].textContent = 'Tell me about CoolSculpting';
        suggestionChips[1].textContent = 'How does Botox work?';
        suggestionChips[2].textContent = 'Dental implant options';
        suggestionChips[3].textContent = 'Treatment costs';
    } else {
        suggestionChips[0].textContent = 'CoolSculpting protocols';
        suggestionChips[1].textContent = 'Botox dosing guidelines';
        suggestionChips[2].textContent = 'Implant osseointegration';
        suggestionChips[3].textContent = 'Treatment contraindications';
    }
}
