// AI Automation Visualization for Bowery Creative Agency Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize content generation visualization
    initContentGeneration();
    
    // Add interactive elements to AI model cards
    initAIModelInteractions();
});

// Content Generation Visualization Initialization
function initContentGeneration() {
    const aiAutomationSection = document.querySelector('#ai-automation');
    if (!aiAutomationSection) return;
    
    // Create content visualization container if it doesn't exist
    let contentVisualization = aiAutomationSection.querySelector('.content-visualization');
    
    if (!contentVisualization) {
        contentVisualization = document.createElement('div');
        contentVisualization.classList.add('content-visualization', 'fade-in');
        
        // Add content visualization HTML
        contentVisualization.innerHTML = `
            <div class="visualization-container">
                <div class="visualization-header">
                    <h3>AI Content Generation Pipeline</h3>
                    <div class="visualization-controls">
                        <button class="viz-btn active" data-content="dental">Dental</button>
                        <button class="viz-btn" data-content="aesthetics">Aesthetics</button>
                    </div>
                </div>
                
                <div class="generation-pipeline">
                    <div class="pipeline-stage input-stage">
                        <div class="stage-header">
                            <h4>Input</h4>
                            <span class="stage-icon"><i class="fas fa-file-import"></i></span>
                        </div>
                        <div class="stage-content">
                            <div class="input-parameters">
                                <div class="parameter">
                                    <span class="parameter-label">Topic:</span>
                                    <span class="parameter-value" id="input-topic">Dental Implants</span>
                                </div>
                                <div class="parameter">
                                    <span class="parameter-label">Audience:</span>
                                    <span class="parameter-value" id="input-audience">Patient</span>
                                </div>
                                <div class="parameter">
                                    <span class="parameter-label">Format:</span>
                                    <span class="parameter-value" id="input-format">Educational</span>
                                </div>
                                <div class="parameter">
                                    <span class="parameter-label">Length:</span>
                                    <span class="parameter-value" id="input-length">Medium</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="pipeline-connector">
                        <div class="connector-line"></div>
                        <div class="connector-arrow"></div>
                    </div>
                    
                    <div class="pipeline-stage processing-stage">
                        <div class="stage-header">
                            <h4>AI Processing</h4>
                            <span class="stage-icon"><i class="fas fa-cogs"></i></span>
                        </div>
                        <div class="stage-content">
                            <div class="ai-models-used">
                                <div class="model-chip" data-model="chatgpt">
                                    <span class="model-icon">GPT</span>
                                    <span class="model-task">Content Structure</span>
                                </div>
                                <div class="model-chip" data-model="claude">
                                    <span class="model-icon">Claude</span>
                                    <span class="model-task">Medical Accuracy</span>
                                </div>
                                <div class="model-chip" data-model="leonardo">
                                    <span class="model-icon">Leonardo</span>
                                    <span class="model-task">Image Generation</span>
                                </div>
                            </div>
                            <div class="processing-animation">
                                <div class="processing-dot"></div>
                                <div class="processing-dot"></div>
                                <div class="processing-dot"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="pipeline-connector">
                        <div class="connector-line"></div>
                        <div class="connector-arrow"></div>
                    </div>
                    
                    <div class="pipeline-stage output-stage">
                        <div class="stage-header">
                            <h4>Output</h4>
                            <span class="stage-icon"><i class="fas fa-file-export"></i></span>
                        </div>
                        <div class="stage-content">
                            <div class="output-preview">
                                <div class="output-tabs">
                                    <button class="output-tab active" data-tab="content">Content</button>
                                    <button class="output-tab" data-tab="image">Image</button>
                                    <button class="output-tab" data-tab="video">Video</button>
                                </div>
                                <div class="output-content active" id="content-preview">
                                    <h5>Understanding Dental Implants</h5>
                                    <p>Dental implants are titanium posts that serve as artificial tooth roots, providing a permanent base for fixed replacement teeth. Unlike dentures, implants look and feel like natural teeth and can last a lifetime with proper care.</p>
                                    <p>The implant procedure is typically completed in stages:</p>
                                    <ol>
                                        <li>Initial consultation and planning</li>
                                        <li>Placement of the implant post</li>
                                        <li>Healing period (osseointegration)</li>
                                        <li>Abutment placement</li>
                                        <li>Custom crown attachment</li>
                                    </ol>
                                </div>
                                <div class="output-content" id="image-preview">
                                    <div class="image-placeholder">
                                        <i class="fas fa-image"></i>
                                        <p>Dental Implant Visualization</p>
                                    </div>
                                </div>
                                <div class="output-content" id="video-preview">
                                    <div class="video-placeholder">
                                        <i class="fas fa-video"></i>
                                        <p>Implant Procedure Animation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="regenerate-content">
                    <button class="btn btn-primary" id="regenerate-btn">
                        <i class="fas fa-sync-alt"></i> Regenerate Content
                    </button>
                </div>
            </div>
        `;
        
        // Add content visualization to section
        const container = aiAutomationSection.querySelector('.container');
        if (container) {
            container.appendChild(contentVisualization);
        }
    }
    
    // Initialize content visualization interactions
    initContentVisualizationInteractions();
}

// AI Model Interactions Initialization
function initAIModelInteractions() {
    const aiModelCards = document.querySelectorAll('.ai-model-card');
    
    aiModelCards.forEach(card => {
        card.addEventListener('click', function() {
            // Get model name
            const modelName = this.querySelector('h3').textContent;
            
            // Show model details
            showModelDetails(modelName);
        });
    });
}

// Content Visualization Interactions Initialization
function initContentVisualizationInteractions() {
    // Content type toggle buttons
    const vizButtons = document.querySelectorAll('.viz-btn');
    vizButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            vizButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get content type
            const contentType = this.getAttribute('data-content');
            
            // Update visualization based on content type
            updateVisualization(contentType);
        });
    });
    
    // Output tabs
    const outputTabs = document.querySelectorAll('.output-tab');
    outputTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            outputTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get tab ID
            const tabId = this.getAttribute('data-tab');
            
            // Hide all output content
            const outputContents = document.querySelectorAll('.output-content');
            outputContents.forEach(content => content.classList.remove('active'));
            
            // Show selected output content
            const selectedContent = document.getElementById(tabId + '-preview');
            if (selectedContent) {
                selectedContent.classList.add('active');
            }
        });
    });
    
    // Regenerate button
    const regenerateBtn = document.getElementById('regenerate-btn');
    if (regenerateBtn) {
        regenerateBtn.addEventListener('click', function() {
            // Get current content type
            const activeButton = document.querySelector('.viz-btn.active');
            const contentType = activeButton ? activeButton.getAttribute('data-content') : 'dental';
            
            // Show regeneration animation
            showRegenerationAnimation();
            
            // Update visualization after delay
            setTimeout(() => {
                updateVisualization(contentType, true);
            }, 2000);
        });
    }
    
    // Model chips
    const modelChips = document.querySelectorAll('.model-chip');
    modelChips.forEach(chip => {
        chip.addEventListener('mouseenter', function() {
            // Add highlight class
            this.classList.add('highlight');
            
            // Get model name
            const modelName = this.getAttribute('data-model');
            
            // Highlight corresponding AI model card
            highlightAIModelCard(modelName);
        });
        
        chip.addEventListener('mouseleave', function() {
            // Remove highlight class
            this.classList.remove('highlight');
            
            // Remove highlight from AI model cards
            const aiModelCards = document.querySelectorAll('.ai-model-card');
            aiModelCards.forEach(card => card.classList.remove('highlight'));
        });
    });
}

// Update Visualization based on Content Type
function updateVisualization(contentType, isRegeneration = false) {
    // Update input parameters
    const inputTopic = document.getElementById('input-topic');
    const inputAudience = document.getElementById('input-audience');
    const inputFormat = document.getElementById('input-format');
    
    // Update model chips
    const modelChips = document.querySelectorAll('.model-chip');
    
    // Update output preview
    const contentPreview = document.getElementById('content-preview');
    const imagePreview = document.getElementById('image-preview');
    const videoPreview = document.getElementById('video-preview');
    
    if (contentType === 'dental') {
        // Update input parameters
        if (inputTopic) inputTopic.textContent = isRegeneration ? 'Dental Crowns' : 'Dental Implants';
        if (inputAudience) inputAudience.textContent = isRegeneration ? 'Clinical Staff' : 'Patient';
        if (inputFormat) inputFormat.textContent = isRegeneration ? 'Technical' : 'Educational';
        
        // Update model chips
        if (modelChips.length >= 3) {
            modelChips[0].setAttribute('data-model', 'chatgpt');
            modelChips[0].querySelector('.model-icon').textContent = 'GPT';
            modelChips[0].querySelector('.model-task').textContent = 'Content Structure';
            
            modelChips[1].setAttribute('data-model', 'claude');
            modelChips[1].querySelector('.model-icon').textContent = 'Claude';
            modelChips[1].querySelector('.model-task').textContent = 'Medical Accuracy';
            
            modelChips[2].setAttribute('data-model', 'leonardo');
            modelChips[2].querySelector('.model-icon').textContent = 'Leonardo';
            modelChips[2].querySelector('.model-task').textContent = 'Image Generation';
        }
        
        // Update content preview
        if (contentPreview) {
            if (isRegeneration) {
                contentPreview.innerHTML = `
                    <h5>Dental Crowns: Technical Overview</h5>
                    <p>Dental crowns are prosthetic restorations that fully cover the portion of a tooth or dental implant that lies at and above the gingival margin. Crowns are used to restore form, function, and aesthetics to compromised dentition.</p>
                    <p>Clinical considerations for crown placement include:</p>
                    <ol>
                        <li>Preparation design (reduction requirements: occlusal 1.5-2.0mm, axial 1.0-1.5mm)</li>
                        <li>Margin placement and configuration (supragingival, equigingival, or subgingival)</li>
                        <li>Material selection based on functional and aesthetic requirements</li>
                        <li>Temporization protocols</li>
                        <li>Cementation/bonding procedures</li>
                    </ol>
                `;
            } else {
                contentPreview.innerHTML = `
                    <h5>Understanding Dental Implants</h5>
                    <p>Dental implants are titanium posts that serve as artificial tooth roots, providing a permanent base for fixed replacement teeth. Unlike dentures, implants look and feel like natural teeth and can last a lifetime with proper care.</p>
                    <p>The implant procedure is typically completed in stages:</p>
                    <ol>
                        <li>Initial consultation and planning</li>
                        <li>Placement of the implant post</li>
                        <li>Healing period (osseointegration)</li>
                        <li>Abutment placement</li>
                        <li>Custom crown attachment</li>
                    </ol>
                `;
            }
        }
        
        // Update image preview
        if (imagePreview) {
            imagePreview.innerHTML = `
                <div class="image-placeholder">
                    <i class="fas fa-image"></i>
                    <p>${isRegeneration ? 'Dental Crown Visualization' : 'Dental Implant Visualization'}</p>
                </div>
            `;
        }
        
        // Update video preview
        if (videoPreview) {
            videoPreview.innerHTML = `
                <div class="video-placeholder">
                    <i class="fas fa-video"></i>
                    <p>${isRegeneration ? 'Crown Placement Procedure' : 'Implant Procedure Animation'}</p>
                </div>
            `;
        }
    } else if (contentType === 'aesthetics') {
        // Update input parameters
        if (inputTopic) inputTopic.textContent = isRegeneration ? 'Dermal Fillers' : 'CoolSculpting';
        if (inputAudience) inputAudience.textContent = isRegeneration ? 'Clinical Staff' : 'Patient';
        if (inputFormat) inputFormat.textContent = isRegeneration ? 'Technical' : 'Marketing';
        
        // Update model chips
        if (modelChips.length >= 3) {
            modelChips[0].setAttribute('data-model', 'gemini');
            modelChips[0].querySelector('.model-icon').textContent = 'Gemini';
            modelChips[0].querySelector('.model-task').textContent = 'Content Creation';
            
            modelChips[1].setAttribute('data-model', 'deepseek');
            modelChips[1].querySelector('.model-icon').textContent = 'DeepSeek';
            modelChips[1].querySelector('.model-task').textContent = 'Research Integration';
            
            modelChips[2].setAttribute('data-model', 'stable-diffusion');
            modelChips[2].querySelector('.model-icon').textContent = 'SD';
            modelChips[2].querySelector('.model-task').textContent = 'Visual Assets';
        }
        
        // Update content preview
        if (contentPreview) {
            if (isRegeneration) {
                contentPreview.innerHTML = `
                    <h5>Dermal Fillers: Clinical Application Guide</h5>
                    <p>Hyaluronic acid (HA) dermal fillers are injectable implants used to correct moderate to severe facial wrinkles and restore volume loss. Their viscoelastic properties vary based on crosslinking technology and HA concentration.</p>
                    <p>Injection technique considerations:</p>
                    <ol>
                        <li>Anatomical danger zones and vascular mapping</li>
                        <li>Depth of injection (superficial, mid-dermis, deep dermis, or subcutaneous)</li>
                        <li>Injection methods (linear threading, serial puncture, fanning, cross-hatching)</li>
                        <li>Product selection based on G' (stiffness) and cohesivity</li>
                        <li>Complication management protocols</li>
                    </ol>
                `;
            } else {
                contentPreview.innerHTML = `
                    <h5>Discover CoolSculpting: Freeze Away Fat</h5>
                    <p>CoolSculpting is a revolutionary non-surgical fat reduction treatment that uses controlled cooling to eliminate stubborn fat that resists diet and exercise. The procedure is FDA-cleared, safe, and effective with no downtime.</p>
                    <p>Key benefits of CoolSculpting include:</p>
                    <ol>
                        <li>Non-invasive treatment (no surgery, no needles)</li>
                        <li>Quick 35-60 minute sessions</li>
                        <li>No downtime or recovery period</li>
                        <li>Clinically proven results</li>
                        <li>Long-lasting fat reduction</li>
                    </ol>
                `;
            }
        }
        
        // Update image preview
        if (imagePreview) {
            imagePreview.innerHTML = `
                <div class="image-placeholder">
                    <i class="fas fa-image"></i>
                    <p>${isRegeneration ? 'Facial Anatomy Mapping' : 'Before/After Comparison'}</p>
                </div>
            `;
        }
        
        // Update video preview
        if (videoPreview) {
            videoPreview.innerHTML = `
                <div class="video-placeholder">
                    <i class="fas fa-video"></i>
                    <p>${isRegeneration ? 'Injection Technique Demonstration' : 'CoolSculpting Procedure'}</p>
                </div>
            `;
        }
    }
}

// Show Regeneration Animation
function showRegenerationAnimation() {
    // Add regenerating class to pipeline
    const pipeline = document.querySelector('.generation-pipeline');
    if (pipeline) {
        pipeline.classList.add('regenerating');
        
        // Remove regenerating class after animation completes
        setTimeout(() => {
            pipeline.classList.remove('regenerating');
        }, 2000);
    }
    
    // Animate processing dots
    const processingDots = document.querySelectorAll('.processing-dot');
    processingDots.forEach((dot, index) => {
        dot.style.animationPlayState = 'running';
    });
}

// Show Model Details
function showModelDetails(modelName) {
    // Create modal for model details
    const modal = document.createElement('div');
    modal.classList.add('model-modal');
    
    // Model details content based on model name
    let modelContent = '';
    
    switch (modelName) {
        case 'ChatGPT':
            modelContent = `
                <h3>ChatGPT</h3>
                <div class="model-details">
                    <div class="model-detail-item">
                        <h4>Key Capabilities</h4>
                        <ul>
                            <li>Natural language understanding and generation</li>
                            <li>Context-aware responses</li>
                            <li>Content structuring and organization</li>
                            <li>Multi-turn conversations</li>
                        </ul>
                    </div>
                    <div class="model-detail-item">
                        <h4>Implementation in Our Pipeline</h4>
                        <p>ChatGPT serves as the primary content structuring engine, organizing medical information into coherent, patient-friendly narratives. It excels at adapting technical content to appropriate reading levels while maintaining accuracy.</p>
                    </div>
                    <div class="model-detail-item">
                        <h4>Content Examples</h4>
                        <div class="content-example">
                            <h5>Patient Education Materials</h5>
                            <p>Comprehensive treatment guides with step-by-step explanations</p>
                        </div>
                        <div class="content-example">
                            <h5>FAQ Generation</h5>
                            <p>Anticipatory question-answer pairs based on common patient concerns</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'Gemini':
            modelContent = `
                <h3>Gemini</h3>
                <div class="model-details">
                    <div class="model-detail-item">
                        <h4>Key Capabilities</h4>
                        <ul>
                            <li>Multimodal understanding (text, images, code)</li>
                            <li>Advanced reasoning capabilities</li>
                            <li>Complex instruction following</li>
                            <li>Nuanced content generation</li>
                        </ul>
                    </div>
                    <div class="model-detail-item">
                        <h4>Implementation in Our Pipeline</h4>
                        <p>Gemini powers our multimodal content creation, analyzing visual assets alongside text to ensure coherent messaging across formats. It excels at generating content that requires understanding of both textual and visual elements.</p>
                    </div>
                    <div class="model-detail-item">
                        <h4>Content Examples</h4>
                        <div class="content-example">
                            <h5>Treatment Visualizations</h5>
                            <p>Integrated text and image descriptions of procedures</p>
                        </div>
                        <div class="content-example">
                            <h5>Interactive Guides</h5>
                            <p>Responsive content that adapts based on user inputs and preferences</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'Claude':
            modelContent = `
                <h3>Claude</h3>
                <div class="model-details">
                    <div class="model-detail-item">
                        <h4>Key Capabilities</h4>
                        <ul>
                            <li>Nuanced content understanding</li>
                            <li>Medical accuracy verification</li>
                            <li>Ethical content generation</li>
                            <li>Long-context processing</li>
                        </ul>
                    </div>
                    <div class="model-detail-item">
                        <h4>Implementation in Our Pipeline</h4>
                        <p>Claude serves as our medical accuracy verification system, reviewing content for clinical correctness while maintaining appropriate tone and accessibility. It excels at processing lengthy medical documents and ensuring compliance with regulatory guidelines.</p>
                    </div>
                    <div class="model-detail-item">
                        <h4>Content Examples</h4>
                        <div class="content-example">
                            <h5>Clinical Documentation</h5>
                            <p>Accurate, compliant medical content with appropriate disclaimers</p>
                        </div>
                        <div class="content-example">
                            <h5>Consent Forms</h5>
                            <p>Comprehensive yet understandable treatment consent documentation</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'Leonardo AI':
            modelContent = `
                <h3>Leonardo AI</h3>
                <div class="model-details">
                    <div class="model-detail-item">
                        <h4>Key Capabilities</h4>
                        <ul>
                            <li>High-fidelity image generation</li>
                            <li>Medical visualization creation</li>
                            <li>Style-consistent asset production</li>
                            <li>Brand-aligned visual content</li>
                        </ul>
                    </div>
                    <div class="model-detail-item">
                        <h4>Implementation in Our Pipeline</h4>
                        <p>Leonardo AI generates photorealistic medical visualizations and branded marketing assets. It excels at creating consistent visual styles across multiple assets while maintaining anatomical accuracy for educational content.</p>
                    </div>
                    <div class="model-detail-item">
                        <h4>Content Examples</h4>
                        <div class="content-example">
                            <h5>Procedure Visualizations</h5>
                            <p>Step-by-step visual guides for treatments and procedures</p>
                        </div>
                        <div class="content-example">
                            <h5>Before/After Simulations</h5>
                            <p>Realistic treatment outcome visualizations for patient education</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'Stable Diffusion':
            modelContent = `
                <h3>Stable Diffusion</h3>
                <div class="model-details">
                    <div class="model-detail-item">
                        <h4>Key Capabilities</h4>
                        <ul>
                            <li>Customizable image generation</li>
                            <li>Fine-tuned visual asset creation</li>
                            <li>Anatomical visualization</li>
                            <li>Style transfer and adaptation</li>
                        </ul>
                    </div>
                    <div class="model-detail-item">
                        <h4>Implementation in Our Pipeline</h4>
                        <p>Stable Diffusion powers our customized visual asset creation, generating tailored images for specific marketing campaigns and educational materials. It excels at creating consistent visual styles that can be fine-tuned to specific brand requirements.</p>
                    </div>
                    <div class="model-detail-item">
                        <h4>Content Examples</h4>
                        <div class="content-example">
                            <h5>Marketing Visuals</h5>
                            <p>Brand-aligned promotional images for campaigns</p>
                        </div>
                        <div class="content-example">
                            <h5>Educational Illustrations</h5>
                            <p>Clear, accurate anatomical visualizations for patient education</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'DeepSeek':
            modelContent = `
                <h3>DeepSeek</h3>
                <div class="model-details">
                    <div class="model-detail-item">
                        <h4>Key Capabilities</h4>
                        <ul>
                            <li>Deep research integration</li>
                            <li>Scientific literature analysis</li>
                            <li>Evidence-based content creation</li>
                            <li>Technical accuracy verification</li>
                        </ul>
                    </div>
                    <div class="model-detail-item">
                        <h4>Implementation in Our Pipeline</h4>
                        <p>DeepSeek analyzes scientific literature and clinical research to ensure our content reflects the latest medical evidence. It excels at integrating research findings into accessible content while maintaining scientific accuracy.</p>
                    </div>
                    <div class="model-detail-item">
                        <h4>Content Examples</h4>
                        <div class="content-example">
                            <h5>Evidence-Based Protocols</h5>
                            <p>Treatment guidelines supported by current research</p>
                        </div>
                        <div class="content-example">
                            <h5>Clinical Whitepapers</h5>
                            <p>In-depth technical documents with comprehensive citations</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        default:
            modelContent = `
                <h3>${modelName}</h3>
                <div class="model-details">
                    <p>Detailed information about this AI model will be available soon.</p>
                </div>
            `;
    }
    
    // Set modal content
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                ${modelContent}
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(modal);
    
    // Add close button functionality
    const closeButton = modal.querySelector('.close-btn');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modal.remove();
        });
    }
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Add modal styles if not already added
    if (!document.querySelector('#ai-modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'ai-modal-styles';
        modalStyles.textContent = `
            .model-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                opacity: 0;
                animation: fadeIn 0.3s forwards;
            }
            
            .modal-content {
                background-color: white;
                border-radius: 8px;
                width: 90%;
                max-width: 800px;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                transform: translateY(-20px);
                animation: slideIn 0.3s forwards;
            }
            
            .modal-header {
                padding: 1rem;
                text-align: right;
                position: sticky;
                top: 0;
                background-color: white;
                z-index: 1;
                border-bottom: 1px solid #eee;
            }
            
            .modal-body {
                padding: 1.5rem;
            }
            
            .close-btn {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #666;
            }
            
            .model-details {
                display: grid;
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            
            @media (min-width: 768px) {
                .model-details {
                    grid-template-columns: 1fr 1fr;
                }
                
                .model-detail-item:first-child {
                    grid-column: 1 / -1;
                }
            }
            
            .model-detail-item {
                margin-bottom: 1rem;
            }
            
            .model-detail-item h4 {
                color: var(--primary);
                margin-bottom: 0.5rem;
                border-bottom: 1px solid #eee;
                padding-bottom: 0.5rem;
            }
            
            .content-example {
                background-color: #f8f9fa;
                border-radius: 6px;
                padding: 1rem;
                margin-bottom: 1rem;
            }
            
            .content-example h5 {
                margin-bottom: 0.5rem;
                color: var(--secondary);
            }
            
            @keyframes fadeIn {
                to { opacity: 1; }
            }
            
            @keyframes slideIn {
                to { transform: translateY(0); }
            }
        `;
        
        document.head.appendChild(modalStyles);
    }
    
    // Add visualization styles if not already added
    if (!document.querySelector('#ai-visualization-styles')) {
        const visualizationStyles = document.createElement('style');
        visualizationStyles.id = 'ai-visualization-styles';
        visualizationStyles.textContent = `
            .visualization-container {
                background-color: rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                padding: 2rem;
                margin-top: 3rem;
                backdrop-filter: blur(10px);
            }
            
            .visualization-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 2rem;
            }
            
            .visualization-controls {
                display: flex;
                background-color: rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                padding: 0.3rem;
            }
            
            .viz-btn {
                padding: 0.5rem 1rem;
                border-radius: 20px;
                border: none;
                background: none;
                color: var(--white);
                cursor: pointer;
                transition: var(--transition);
            }
            
            .viz-btn.active {
                background-color: var(--white);
                color: var(--primary);
            }
            
            .generation-pipeline {
                display: grid;
                grid-template-columns: 1fr auto 1fr auto 1fr;
                gap: 0;
                margin-bottom: 2rem;
                position: relative;
            }
            
            .generation-pipeline.regenerating::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.1);
                border-radius: 8px;
                z-index: 1;
                animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
                0%, 100% { opacity: 0.1; }
                50% { opacity: 0.3; }
            }
            
            .pipeline-stage {
                background-color: rgba(255, 255, 255, 0.05);
                border-radius: 8px;
                padding: 1.5rem;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            
            .pipeline-stage:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            }
            
            .stage-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                padding-bottom: 0.5rem;
            }
            
            .stage-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.1);
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .pipeline-connector {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: relative;
                padding: 0 1rem;
            }
            
            .connector-line {
                width: 100%;
                height: 2px;
                background-color: rgba(255, 255, 255, 0.3);
                position: relative;
            }
            
            .connector-arrow {
                width: 0;
                height: 0;
                border-top: 6px solid transparent;
                border-bottom: 6px solid transparent;
                border-left: 6px solid rgba(255, 255, 255, 0.3);
                position: absolute;
                right: 0.5rem;
                top: 50%;
                transform: translateY(-50%);
            }
            
            .input-parameters {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;
            }
            
            .parameter {
                background-color: rgba(255, 255, 255, 0.05);
                border-radius: 4px;
                padding: 0.5rem;
            }
            
            .parameter-label {
                font-weight: 600;
                margin-right: 0.5rem;
                opacity: 0.7;
            }
            
            .ai-models-used {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                margin-bottom: 1rem;
            }
            
            .model-chip {
                background-color: rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                padding: 0.3rem 0.8rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                cursor: pointer;
                transition: var(--transition);
            }
            
            .model-chip:hover, .model-chip.highlight {
                background-color: var(--accent);
                transform: translateY(-2px);
            }
            
            .model-icon {
                font-weight: 600;
            }
            
            .model-task {
                font-size: 0.8rem;
                opacity: 0.8;
            }
            
            .processing-animation {
                display: flex;
                justify-content: center;
                gap: 0.5rem;
                margin-top: 1rem;
            }
            
            .processing-dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: var(--white);
                animation: bounce 1.4s infinite ease-in-out both;
                animation-play-state: paused;
            }
            
            .processing-dot:nth-child(1) {
                animation-delay: -0.32s;
            }
            
            .processing-dot:nth-child(2) {
                animation-delay: -0.16s;
            }
            
            @keyframes bounce {
                0%, 80%, 100% { transform: scale(0); opacity: 0.3; }
                40% { transform: scale(1); opacity: 1; }
            }
            
            .output-preview {
                background-color: rgba(255, 255, 255, 0.05);
                border-radius: 8px;
                overflow: hidden;
            }
            
            .output-tabs {
                display: flex;
                background-color: rgba(0, 0, 0, 0.2);
            }
            
            .output-tab {
                padding: 0.8rem 1.2rem;
                background: none;
                border: none;
                color: var(--white);
                cursor: pointer;
                opacity: 0.7;
                transition: var(--transition);
            }
            
            .output-tab.active {
                opacity: 1;
                background-color: rgba(255, 255, 255, 0.05);
            }
            
            .output-content {
                padding: 1.5rem;
                display: none;
                max-height: 300px;
                overflow-y: auto;
            }
            
            .output-content.active {
                display: block;
            }
            
            .image-placeholder, .video-placeholder {
                background-color: rgba(0, 0, 0, 0.2);
                border-radius: 8px;
                height: 200px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1rem;
            }
            
            .image-placeholder i, .video-placeholder i {
                font-size: 3rem;
                opacity: 0.5;
            }
            
            .regenerate-content {
                text-align: center;
                margin-top: 2rem;
            }
            
            @media (max-width: 992px) {
                .generation-pipeline {
                    grid-template-columns: 1fr;
                    grid-template-rows: auto auto auto auto auto;
                }
                
                .pipeline-connector {
                    transform: rotate(90deg);
                    height: 50px;
                    margin: 1rem 0;
                }
                
                .input-parameters {
                    grid-template-columns: 1fr;
                }
            }
        `;
        
        document.head.appendChild(visualizationStyles);
    }
}

// Highlight AI Model Card
function highlightAIModelCard(modelName) {
    const aiModelCards = document.querySelectorAll('.ai-model-card');
    
    aiModelCards.forEach(card => {
        const cardTitle = card.querySelector('h3').textContent.toLowerCase();
        
        if (cardTitle.includes(modelName.toLowerCase())) {
            card.classList.add('highlight');
        }
    });
}
