// Sales Research Assistant for Bowery Creative Agency Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize sales research dashboard
    initSalesResearchDashboard();
    
    // Initialize lead profile visualization
    initLeadProfileVisualization();
    
    // Initialize research capabilities demonstration
    initResearchCapabilitiesDemo();
});

// Sales Research Dashboard Initialization
function initSalesResearchDashboard() {
    const researchDashboard = document.querySelector('.research-dashboard');
    if (!researchDashboard) return;
    
    // Add interactive elements to dashboard
    addLeadInteractions();
    
    // Initialize lead scoring visualization
    initLeadScoringVisualization();
    
    // Add generate report button functionality
    const generateReportBtn = researchDashboard.querySelector('.btn-primary');
    if (generateReportBtn) {
        generateReportBtn.addEventListener('click', function() {
            generateResearchReport();
        });
    }
}

// Lead Profile Visualization Initialization
function initLeadProfileVisualization() {
    // Create lead profile section if it doesn't exist
    const researchDashboard = document.querySelector('.research-dashboard');
    if (!researchDashboard) return;
    
    let profileSection = researchDashboard.querySelector('.lead-profile');
    
    if (!profileSection) {
        profileSection = document.createElement('div');
        profileSection.classList.add('lead-profile');
        profileSection.innerHTML = `
            <h4>Lead Profile Analysis</h4>
            <div class="profile-content"></div>
        `;
        researchDashboard.appendChild(profileSection);
    }
    
    // Set first lead as active by default
    const leadItems = document.querySelectorAll('.lead-item');
    if (leadItems.length > 0) {
        leadItems[0].classList.add('active');
        const leadName = leadItems[0].querySelector('h5').textContent;
        showLeadProfile(leadName);
    }
}

// Research Capabilities Demonstration Initialization
function initResearchCapabilitiesDemo() {
    const researchDashboard = document.querySelector('.research-dashboard');
    if (!researchDashboard) return;
    
    // Create research capabilities section if it doesn't exist
    let capabilitiesSection = researchDashboard.querySelector('.research-capabilities');
    
    if (!capabilitiesSection) {
        capabilitiesSection = document.createElement('div');
        capabilitiesSection.classList.add('research-capabilities');
        capabilitiesSection.innerHTML = `
            <h4>AI Research Capabilities</h4>
            <div class="capabilities-tabs">
                <button class="capability-tab active" data-tab="market">Market Analysis</button>
                <button class="capability-tab" data-tab="competitor">Competitor Intelligence</button>
                <button class="capability-tab" data-tab="psychological">Psychological Profiling</button>
            </div>
            <div class="capabilities-content">
                <div class="capability-content active" id="market-content">
                    <div class="capability-header">
                        <h5>Real-Time Market Analysis</h5>
                        <p>Comprehensive market data for informed decision-making</p>
                    </div>
                    <div class="market-metrics">
                        <div class="metric-card">
                            <div class="metric-value">$12.4B</div>
                            <div class="metric-label">Market Size</div>
                        </div>
                        <div class="metric-card">
                            <div class="metric-value">8.7%</div>
                            <div class="metric-label">Annual Growth</div>
                        </div>
                        <div class="metric-card">
                            <div class="metric-value">42%</div>
                            <div class="metric-label">Market Penetration</div>
                        </div>
                    </div>
                    <div class="market-trends">
                        <h6>Key Market Trends</h6>
                        <ul>
                            <li>Increasing demand for minimally invasive procedures</li>
                            <li>Growing adoption of AI-powered treatment planning</li>
                            <li>Shift toward subscription-based practice models</li>
                            <li>Rising patient expectations for personalized experiences</li>
                        </ul>
                    </div>
                </div>
                <div class="capability-content" id="competitor-content">
                    <div class="capability-header">
                        <h5>Competitor Intelligence</h5>
                        <p>Strategic insights into competitive landscape</p>
                    </div>
                    <div class="competitor-analysis">
                        <div class="competitor-card">
                            <div class="competitor-header">
                                <h6>Premier Aesthetics Group</h6>
                                <div class="competitor-score">87</div>
                            </div>
                            <div class="competitor-details">
                                <div class="detail-item">
                                    <span class="detail-label">Strengths:</span>
                                    <span class="detail-value">Strong brand recognition, Multiple locations</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">Weaknesses:</span>
                                    <span class="detail-value">Limited technology integration, High staff turnover</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">Opportunity:</span>
                                    <span class="detail-value">Technology partnership for patient education</span>
                                </div>
                            </div>
                        </div>
                        <div class="competitor-card">
                            <div class="competitor-header">
                                <h6>Advanced Dental Solutions</h6>
                                <div class="competitor-score">82</div>
                            </div>
                            <div class="competitor-details">
                                <div class="detail-item">
                                    <span class="detail-label">Strengths:</span>
                                    <span class="detail-value">Advanced technology adoption, Strong online presence</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">Weaknesses:</span>
                                    <span class="detail-value">Limited service offerings, Higher pricing</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">Opportunity:</span>
                                    <span class="detail-value">Expanded treatment options with AI assistance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="capability-content" id="psychological-content">
                    <div class="capability-header">
                        <h5>Psychological Profiling</h5>
                        <p>Deep customer insights for personalized engagement</p>
                    </div>
                    <div class="psychological-framework">
                        <h6>Socratic Sales Framework</h6>
                        <div class="framework-steps">
                            <div class="framework-step">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <h6>Discovery Questions</h6>
                                    <p>Tailored questions based on decision-making style to uncover needs and pain points</p>
                                </div>
                            </div>
                            <div class="framework-step">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <h6>Value Alignment</h6>
                                    <p>Connect solutions to identified motivators and psychological triggers</p>
                                </div>
                            </div>
                            <div class="framework-step">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <h6>Guided Realization</h6>
                                    <p>Lead prospect to self-discover value through strategic questioning</p>
                                </div>
                            </div>
                            <div class="framework-step">
                                <div class="step-number">4</div>
                                <div class="step-content">
                                    <h6>Personalized Proposal</h6>
                                    <p>Customized solution presentation aligned with communication preferences</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        researchDashboard.appendChild(capabilitiesSection);
        
        // Initialize capability tabs
        initCapabilityTabs();
    }
}

// Add Lead Interactions
function addLeadInteractions() {
    const leadItems = document.querySelectorAll('.lead-item');
    
    leadItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all lead items
            leadItems.forEach(lead => lead.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Get lead name
            const leadName = this.querySelector('h5').textContent;
            
            // Show lead profile for selected lead
            showLeadProfile(leadName);
        });
        
        // Add hover effect
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(30, 58, 138, 0.05)';
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.transform = 'translateX(0)';
        });
    });
}

// Initialize Lead Scoring Visualization
function initLeadScoringVisualization() {
    const leadScores = document.querySelectorAll('.lead-score');
    
    leadScores.forEach(score => {
        const scoreValue = parseInt(score.textContent);
        
        // Set color based on score value
        if (scoreValue >= 90) {
            score.style.backgroundColor = '#10B981'; // Green
        } else if (scoreValue >= 80) {
            score.style.backgroundColor = '#3B82F6'; // Blue
        } else if (scoreValue >= 70) {
            score.style.backgroundColor = '#F59E0B'; // Amber
        } else {
            score.style.backgroundColor = '#EF4444'; // Red
        }
        
        // Add tooltip with score breakdown
        score.setAttribute('title', `Lead Score: ${scoreValue}\nEngagement: ${Math.floor(scoreValue * 0.3)}/30\nFit: ${Math.floor(scoreValue * 0.4)}/40\nIntent: ${Math.floor(scoreValue * 0.3)}/30`);
        
        // Add click event to show detailed breakdown
        score.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering lead item click
            showScoreBreakdown(this);
        });
    });
}

// Initialize Capability Tabs
function initCapabilityTabs() {
    const capabilityTabs = document.querySelectorAll('.capability-tab');
    const capabilityContents = document.querySelectorAll('.capability-content');
    
    capabilityTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            capabilityTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all content sections
            capabilityContents.forEach(content => content.classList.remove('active'));
            
            // Show selected content section
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });
}

// Show Lead Profile
function showLeadProfile(leadName) {
    const profileContent = document.querySelector('.profile-content');
    if (!profileContent) return;
    
    // Sample lead profiles
    const profiles = {
        'Westside Aesthetics': {
            type: 'Medical Spa',
            location: 'Beverly Hills, CA',
            size: 'Mid-size (8-15 employees)',
            revenue: '$1.5M - $3M annually',
            services: ['CoolSculpting', 'Botox/Fillers', 'Laser Treatments', 'Skin Care'],
            decisionMaker: {
                name: 'Dr. Sarah Chen',
                role: 'Owner/Medical Director',
                style: 'Analytical',
                motivators: ['ROI', 'Technological Innovation', 'Patient Satisfaction'],
                painPoints: ['Staff Training Time', 'Integration with Existing Systems'],
                communicationPreference: 'Data-Driven, Detailed Documentation'
            },
            recentActivity: [
                {date: '03/15/2025', action: 'Website Visit - Treatment Pages'},
                {date: '03/22/2025', action: 'Downloaded CoolSculpting Whitepaper'},
                {date: '04/01/2025', action: 'Attended Webinar on AI in Aesthetics'}
            ],
            socraticApproach: 'Present comparative data and allow self-discovery of value proposition'
        },
        'Elite Dental Group': {
            type: 'Multi-location Dental Practice',
            location: 'Chicago, IL',
            size: 'Large (20+ employees)',
            revenue: '$3M - $5M annually',
            services: ['General Dentistry', 'Cosmetic Dentistry', 'Implants', 'Orthodontics'],
            decisionMaker: {
                name: 'Dr. Michael Rodriguez',
                role: 'Managing Partner',
                style: 'Collaborative',
                motivators: ['Practice Growth', 'Staff Efficiency', 'Patient Experience'],
                painPoints: ['Patient Acquisition Costs', 'Competitive Market'],
                communicationPreference: 'Visual Demonstrations, Case Studies'
            },
            recentActivity: [
                {date: '03/10/2025', action: 'Email Inquiry about Neocis Integration'},
                {date: '03/18/2025', action: 'Scheduled Demo Call'},
                {date: '03/30/2025', action: 'Shared Proposal with Partners'}
            ],
            socraticApproach: 'Ask about current patient education process and guide to efficiency gaps'
        },
        'Advanced Dermatology Center': {
            type: 'Dermatology Practice',
            location: 'Miami, FL',
            size: 'Mid-size (8-15 employees)',
            revenue: '$2M - $4M annually',
            services: ['Medical Dermatology', 'Cosmetic Procedures', 'Laser Treatments', 'Skin Care'],
            decisionMaker: {
                name: 'Dr. James Wilson',
                role: 'Founder/CEO',
                style: 'Intuitive',
                motivators: ['Brand Perception', 'Cutting-Edge Reputation', 'Workflow Efficiency'],
                painPoints: ['Staff Turnover', 'Patient Education Time'],
                communicationPreference: 'Concise Overviews, Visual Impact'
            },
            recentActivity: [
                {date: '03/05/2025', action: 'Competitor Website Visit'},
                {date: '03/12/2025', action: 'LinkedIn Engagement with AI Content'},
                {date: '03/25/2025', action: 'Requested Pricing Information'}
            ],
            socraticApproach: 'Explore vision for practice and connect solutions to aspirational goals'
        }
    };
    
    // Get profile for selected lead
    const profile = profiles[leadName];
    
    if (!profile) {
        profileContent.innerHTML = `<p>No detailed profile available for ${leadName}.</p>`;
        return;
    }
    
    // Create profile HTML
    let profileHTML = `
        <div class="profile-card">
            <div class="profile-header">
                <div class="profile-info">
                    <h5>${leadName}</h5>
                    <div class="profile-meta">
                        <span>${profile.type}</span> • <span>${profile.location}</span>
                    </div>
                </div>
                <div class="profile-actions">
                    <button class="btn btn-sm btn-primary">Contact</button>
                    <button class="btn btn-sm btn-secondary">Add Note</button>
                </div>
            </div>
            
            <div class="profile-details">
                <div class="detail-section">
                    <h6>Practice Information</h6>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <span class="detail-label">Size:</span>
                            <span class="detail-value">${profile.size}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Revenue:</span>
                            <span class="detail-value">${profile.revenue}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Services:</span>
                            <span class="detail-value">${profile.services.join(', ')}</span>
                        </div>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h6>Decision Maker</h6>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <span class="detail-label">Name:</span>
                            <span class="detail-value">${profile.decisionMaker.name}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Role:</span>
                            <span class="detail-value">${profile.decisionMaker.role}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Style:</span>
                            <span class="detail-value">${profile.decisionMaker.style}</span>
                        </div>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h6>Psychological Profile</h6>
                    <div class="detail-grid">
                        <div class="detail-item full-width">
                            <span class="detail-label">Key Motivators:</span>
                            <div class="tag-list">
                                ${profile.decisionMaker.motivators.map(motivator => `<span class="tag">${motivator}</span>`).join('')}
                            </div>
                        </div>
                        <div class="detail-item full-width">
                            <span class="detail-label">Pain Points:</span>
                            <div class="tag-list">
                                ${profile.decisionMaker.painPoints.map(painPoint => `<span class="tag">${painPoint}</span>`).join('')}
                            </div>
                        </div>
                        <div class="detail-item full-width">
                            <span class="detail-label">Communication Preference:</span>
                            <span class="detail-value">${profile.decisionMaker.communicationPreference}</span>
                        </div>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h6>Recent Activity</h6>
                    <div class="activity-timeline">
                        ${profile.recentActivity.map(activity => `
                            <div class="activity-item">
                                <div class="activity-date">${activity.date}</div>
                                <div class="activity-description">${activity.action}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="detail-section">
                    <h6>Recommended Socratic Approach</h6>
                    <p>${profile.socraticApproach}</p>
                </div>
            </div>
        </div>
    `;
    
    // Set profile content
    profileContent.innerHTML = profileHTML;
    
    // Add animation
    const profileCard = profileContent.querySelector('.profile-card');
    if (profileCard) {
        profileCard.style.opacity = '0';
        profileCard.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            profileCard.style.opacity = '1';
            profileCard.style.transform = 'translateY(0)';
            profileCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, 100);
    }
    
    // Add button functionality
    const contactBtn = profileContent.querySelector('.btn-primary');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            showContactModal(leadName, profile);
        });
    }
    
    const noteBtn = profileContent.querySelector('.btn-secondary');
    if (noteBtn) {
        noteBtn.addEventListener('click', function() {
            showNoteModal(leadName);
        });
    }
}

// Show Score Breakdown
function showScoreBreakdown(scoreElement) {
    const scoreValue = parseInt(scoreElement.textContent);
    
    // Create modal for score breakdown
    const modal = document.createElement('div');
    modal.classList.add('score-modal');
    
    // Set modal content
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Lead Score Breakdown</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <div class="score-overview">
                    <div class="score-circle">
                        <svg viewBox="0 0 36 36">
                            <path class="score-circle-bg"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#eee"
                                stroke-width="3"
                                stroke-dasharray="100, 100"
                            />
                            <path class="score-circle-fill"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="${scoreValue >= 90 ? '#10B981' : scoreValue >= 80 ? '#3B82F6' : scoreValue >= 70 ? '#F59E0B' : '#EF4444'}"
                                stroke-width="3"
                                stroke-dasharray="${scoreValue}, 100"
                            />
                            <text x="18" y="20.35" class="score-text">${scoreValue}</text>
                        </svg>
                    </div>
                    <div class="score-label">
                        <span>${scoreValue >= 90 ? 'Excellent' : scoreValue >= 80 ? 'Good' : scoreValue >= 70 ? 'Average' : 'Poor'}</span>
                    </div>
                </div>
                
                <div class="score-components">
                    <div class="score-component">
                        <div class="component-header">
                            <h4>Engagement Score</h4>
                            <span class="component-value">${Math.floor(scoreValue * 0.3)}/30</span>
                        </div>
                        <div class="component-bar">
                            <div class="component-fill" style="width: ${Math.floor(scoreValue * 0.3) / 30 * 100}%"></div>
                        </div>
                        <div class="component-details">
                            <p>Based on website visits, content downloads, email opens, and event attendance.</p>
                        </div>
                    </div>
                    
                    <div class="score-component">
                        <div class="component-header">
                            <h4>Fit Score</h4>
                            <span class="component-value">${Math.floor(scoreValue * 0.4)}/40</span>
                        </div>
                        <div class="component-bar">
                            <div class="component-fill" style="width: ${Math.floor(scoreValue * 0.4) / 40 * 100}%"></div>
                        </div>
                        <div class="component-details">
                            <p>Based on practice size, services offered, technology adoption, and market position.</p>
                        </div>
                    </div>
                    
                    <div class="score-component">
                        <div class="component-header">
                            <h4>Intent Score</h4>
                            <span class="component-value">${Math.floor(scoreValue * 0.3)}/30</span>
                        </div>
                        <div class="component-bar">
                            <div class="component-fill" style="width: ${Math.floor(scoreValue * 0.3) / 30 * 100}%"></div>
                        </div>
                        <div class="component-details">
                            <p>Based on recency of activity, specific pages visited, direct inquiries, and competitor research.</p>
                        </div>
                    </div>
                </div>
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
    if (!document.querySelector('#sales-modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'sales-modal-styles';
        modalStyles.textContent = `
            .score-modal, .contact-modal, .note-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
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
                max-width: 600px;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                transform: translateY(-20px);
                animation: slideIn 0.3s forwards;
            }
            
            .modal-header {
                padding: 1.5rem;
                border-bottom: 1px solid #eee;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: sticky;
                top: 0;
                background-color: white;
                z-index: 1;
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
            
            .score-overview {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 2rem;
            }
            
            .score-circle {
                width: 120px;
                height: 120px;
            }
            
            .score-text {
                font-size: 10px;
                text-anchor: middle;
                fill: #333;
                font-weight: bold;
            }
            
            .score-label {
                margin-top: 0.5rem;
                font-weight: 600;
                color: #333;
            }
            
            .score-components {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }
            
            .score-component {
                background-color: #f9f9f9;
                border-radius: 8px;
                padding: 1rem;
            }
            
            .component-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.5rem;
            }
            
            .component-header h4 {
                margin: 0;
                font-size: 1rem;
            }
            
            .component-value {
                font-weight: 600;
                color: var(--primary);
            }
            
            .component-bar {
                height: 8px;
                background-color: #eee;
                border-radius: 4px;
                overflow: hidden;
                margin-bottom: 0.5rem;
            }
            
            .component-fill {
                height: 100%;
                background-color: var(--primary);
                border-radius: 4px;
            }
            
            .component-details p {
                margin: 0;
                font-size: 0.9rem;
                color: #666;
            }
            
            @keyframes fadeIn {
                to { opacity: 1; }
            }
            
            @keyframes slideIn {
                to { transform: translateY(0); }
            }
            
            .contact-form, .note-form {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            
            .form-group {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }
            
            .form-group label {
                font-weight: 600;
            }
            
            .form-group input, .form-group textarea, .form-group select {
                padding: 0.8rem;
                border: 1px solid #ddd;
                border-radius: 4px;
            }
            
            .form-group textarea {
                min-height: 100px;
                resize: vertical;
            }
            
            .form-actions {
                display: flex;
                justify-content: flex-end;
                gap: 1rem;
                margin-top: 1rem;
            }
            
            .btn-sm {
                padding: 0.5rem 1rem;
                font-size: 0.9rem;
            }
        `;
        
        document.head.appendChild(modalStyles);
    }
}

// Show Contact Modal
function showContactModal(leadName, profile) {
    // Create modal for contact
    const modal = document.createElement('div');
    modal.classList.add('contact-modal');
    
    // Set modal content
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Contact ${leadName}</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <div class="contact-form">
                    <div class="form-group">
                        <label for="contact-method">Contact Method</label>
                        <select id="contact-method">
                            <option value="email">Email</option>
                            <option value="phone">Phone Call</option>
                            <option value="meeting">Schedule Meeting</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="contact-subject">Subject</label>
                        <input type="text" id="contact-subject" value="Follow-up on ${profile.recentActivity[0].action}">
                    </div>
                    
                    <div class="form-group">
                        <label for="contact-message">Message</label>
                        <textarea id="contact-message">Hello ${profile.decisionMaker.name},

I noticed your recent interest in ${profile.recentActivity[0].action.split(' - ')[1] || profile.recentActivity[0].action}. I'd like to discuss how our solutions can address your specific needs at ${leadName}.

Would you be available for a brief conversation this week?

Best regards,
[Your Name]</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="contact-date">Preferred Date</label>
                        <input type="date" id="contact-date" value="${new Date().toISOString().split('T')[0]}">
                    </div>
                    
                    <div class="form-actions">
                        <button class="btn btn-secondary close-btn">Cancel</button>
                        <button class="btn btn-primary">Send</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(modal);
    
    // Add close button functionality
    const closeButtons = modal.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.remove();
        });
    });
    
    // Add send button functionality
    const sendButton = modal.querySelector('.btn-primary');
    if (sendButton) {
        sendButton.addEventListener('click', function() {
            // Show success message
            const modalBody = modal.querySelector('.modal-body');
            modalBody.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <p>Your message has been sent to ${profile.decisionMaker.name} at ${leadName}.</p>
                    <p>The AI assistant will follow up based on response patterns.</p>
                </div>
                <div class="form-actions">
                    <button class="btn btn-primary close-btn">Done</button>
                </div>
            `;
            
            // Add close button functionality
            const doneButton = modalBody.querySelector('.close-btn');
            if (doneButton) {
                doneButton.addEventListener('click', function() {
                    modal.remove();
                });
            }
        });
    }
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Show Note Modal
function showNoteModal(leadName) {
    // Create modal for note
    const modal = document.createElement('div');
    modal.classList.add('note-modal');
    
    // Set modal content
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Add Note for ${leadName}</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <div class="note-form">
                    <div class="form-group">
                        <label for="note-type">Note Type</label>
                        <select id="note-type">
                            <option value="call">Call Note</option>
                            <option value="meeting">Meeting Note</option>
                            <option value="observation">Observation</option>
                            <option value="strategy">Strategy Note</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="note-content">Note Content</label>
                        <textarea id="note-content" placeholder="Enter your note here..."></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="note-followup">Follow-up Date (Optional)</label>
                        <input type="date" id="note-followup">
                    </div>
                    
                    <div class="form-actions">
                        <button class="btn btn-secondary close-btn">Cancel</button>
                        <button class="btn btn-primary">Save Note</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(modal);
    
    // Add close button functionality
    const closeButtons = modal.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.remove();
        });
    });
    
    // Add save button functionality
    const saveButton = modal.querySelector('.btn-primary');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            // Show success message
            const modalBody = modal.querySelector('.modal-body');
            modalBody.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <p>Your note has been saved and added to ${leadName}'s profile.</p>
                    <p>The AI assistant will incorporate this information in future interactions.</p>
                </div>
                <div class="form-actions">
                    <button class="btn btn-primary close-btn">Done</button>
                </div>
            `;
            
            // Add close button functionality
            const doneButton = modalBody.querySelector('.close-btn');
            if (doneButton) {
                doneButton.addEventListener('click', function() {
                    modal.remove();
                });
            }
        });
    }
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Generate Research Report
function generateResearchReport() {
    const researchDashboard = document.querySelector('.research-dashboard');
    if (!researchDashboard) return;
    
    // Create notification
    const notification = document.createElement('div');
    notification.classList.add('dashboard-notification');
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-file-alt"></i>
            <p>Generating comprehensive research report...</p>
            <div class="progress-bar">
                <div class="progress"></div>
            </div>
        </div>
    `;
    
    // Add notification to dashboard
    researchDashboard.appendChild(notification);
    
    // Animate progress bar
    const progress = notification.querySelector('.progress');
    let width = 0;
    
    const progressInterval = setInterval(() => {
        if (width >= 100) {
            clearInterval(progressInterval);
            
            // Update notification content
            notification.querySelector('.notification-content').innerHTML = `
                <i class="fas fa-check-circle"></i>
                <p>Research report generated successfully!</p>
                <button class="btn btn-sm btn-primary">Download Report</button>
            `;
            
            // Add download button functionality
            const downloadBtn = notification.querySelector('.btn');
            if (downloadBtn) {
                downloadBtn.addEventListener('click', function() {
                    // Remove notification
                    notification.remove();
                    
                    // Show report preview
                    showReportPreview();
                });
            }
            
            // Remove notification after 5 seconds if not clicked
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    notification.style.opacity = '0';
                    setTimeout(() => {
                        if (document.body.contains(notification)) {
                            notification.remove();
                        }
                    }, 500);
                }
            }, 5000);
        } else {
            width += 2;
            progress.style.width = width + '%';
        }
    }, 50);
}

// Show Report Preview
function showReportPreview() {
    // Create modal for report preview
    const modal = document.createElement('div');
    modal.classList.add('report-modal');
    
    // Set modal content
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>AI-Generated Research Report</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <div class="report-preview">
                    <div class="report-section">
                        <h4>Executive Summary</h4>
                        <p>This report provides a comprehensive analysis of high-value leads in the aesthetics and dental technology market, with specific focus on opportunities for AI-driven solutions. Based on our research, we've identified 24 high-potential leads with an average lead score of 83/100.</p>
                    </div>
                    
                    <div class="report-section">
                        <h4>Market Analysis</h4>
                        <p>The aesthetics and dental technology market continues to show strong growth at 8.7% annually, with increasing demand for AI-powered solutions that enhance patient education and streamline clinical workflows. Key trends include:</p>
                        <ul>
                            <li>Increasing demand for minimally invasive procedures</li>
                            <li>Growing adoption of AI-powered treatment planning</li>
                            <li>Shift toward subscription-based practice models</li>
                            <li>Rising patient expectations for personalized experiences</li>
                        </ul>
                    </div>
                    
                    <div class="report-section">
                        <h4>Lead Analysis</h4>
                        <p>Our AI-driven research has identified the following high-value leads:</p>
                        <div class="report-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Practice</th>
                                        <th>Location</th>
                                        <th>Score</th>
                                        <th>Opportunity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Westside Aesthetics</td>
                                        <td>Beverly Hills, CA</td>
                                        <td>92</td>
                                        <td>$120K</td>
                                    </tr>
                                    <tr>
                                        <td>Elite Dental Group</td>
                                        <td>Chicago, IL</td>
                                        <td>87</td>
                                        <td>$95K</td>
                                    </tr>
                                    <tr>
                                        <td>Advanced Dermatology Center</td>
                                        <td>Miami, FL</td>
                                        <td>85</td>
                                        <td>$80K</td>
                                    </tr>
                                    <tr>
                                        <td>Pacific Heights Medical</td>
                                        <td>San Francisco, CA</td>
                                        <td>83</td>
                                        <td>$75K</td>
                                    </tr>
                                    <tr>
                                        <td>Manhattan Smile Design</td>
                                        <td>New York, NY</td>
                                        <td>81</td>
                                        <td>$70K</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div class="report-section">
                        <h4>Recommended Approach</h4>
                        <p>Based on our psychological profiling and Socratic sales methodology, we recommend the following approaches for the top leads:</p>
                        <ul>
                            <li><strong>Westside Aesthetics:</strong> Present comparative data and allow self-discovery of value proposition</li>
                            <li><strong>Elite Dental Group:</strong> Ask about current patient education process and guide to efficiency gaps</li>
                            <li><strong>Advanced Dermatology Center:</strong> Explore vision for practice and connect solutions to aspirational goals</li>
                        </ul>
                    </div>
                    
                    <div class="report-section">
                        <h4>Next Steps</h4>
                        <p>We recommend the following action plan:</p>
                        <ol>
                            <li>Schedule personalized demos with top 5 leads within the next 2 weeks</li>
                            <li>Develop custom ROI calculators for each practice based on their specific metrics</li>
                            <li>Create targeted content addressing identified pain points</li>
                            <li>Implement automated follow-up sequences using the AI sales agent</li>
                        </ol>
                    </div>
                </div>
                
                <div class="report-actions">
                    <button class="btn btn-secondary">Export as PDF</button>
                    <button class="btn btn-primary">Share with Team</button>
                </div>
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
    
    // Add action button functionality
    const actionButtons = modal.querySelectorAll('.report-actions .btn');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Show success message
            const modalBody = modal.querySelector('.modal-body');
            modalBody.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <p>${this.textContent === 'Export as PDF' ? 'Report has been exported as PDF.' : 'Report has been shared with your team.'}</p>
                </div>
                <div class="form-actions">
                    <button class="btn btn-primary close-btn">Done</button>
                </div>
            `;
            
            // Add close button functionality
            const doneButton = modalBody.querySelector('.close-btn');
            if (doneButton) {
                doneButton.addEventListener('click', function() {
                    modal.remove();
                });
            }
        });
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Add report styles if not already added
    if (!document.querySelector('#report-styles')) {
        const reportStyles = document.createElement('style');
        reportStyles.id = 'report-styles';
        reportStyles.textContent = `
            .report-modal .modal-content {
                max-width: 800px;
            }
            
            .report-preview {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }
            
            .report-section {
                border-bottom: 1px solid #eee;
                padding-bottom: 1.5rem;
            }
            
            .report-section:last-child {
                border-bottom: none;
                padding-bottom: 0;
            }
            
            .report-section h4 {
                color: var(--primary);
                margin-bottom: 1rem;
            }
            
            .report-table {
                overflow-x: auto;
                margin: 1rem 0;
            }
            
            .report-table table {
                width: 100%;
                border-collapse: collapse;
            }
            
            .report-table th, .report-table td {
                padding: 0.75rem;
                text-align: left;
                border-bottom: 1px solid #eee;
            }
            
            .report-table th {
                background-color: #f9f9f9;
                font-weight: 600;
            }
            
            .report-table tr:hover {
                background-color: #f9f9f9;
            }
            
            .report-actions {
                display: flex;
                justify-content: flex-end;
                gap: 1rem;
                margin-top: 2rem;
            }
            
            .success-message {
                text-align: center;
                padding: 2rem;
            }
            
            .success-message i {
                font-size: 3rem;
                color: var(--secondary);
                margin-bottom: 1rem;
            }
        `;
        
        document.head.appendChild(reportStyles);
    }
}

// Add sales research styles if not already added
if (!document.querySelector('#sales-research-styles')) {
    const salesStyles = document.createElement('style');
    salesStyles.id = 'sales-research-styles';
    salesStyles.textContent = `
        .research-dashboard {
            background-color: var(--neutral);
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            max-width: 1000px;
            margin: 3rem auto 0;
            padding: 2rem;
            position: relative;
        }
        
        .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
        }
        
        .dashboard-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .stat-card {
            background-color: var(--white);
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .stat-card h3 {
            font-size: 2rem;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }
        
        .leads-list {
            background-color: var(--white);
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            margin-bottom: 2rem;
        }
        
        .lead-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
            border-bottom: 1px solid #eee;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }
        
        .lead-item:last-child {
            border-bottom: none;
        }
        
        .lead-item.active {
            background-color: rgba(30, 58, 138, 0.05);
            transform: translateX(5px);
        }
        
        .lead-score {
            background-color: var(--secondary);
            color: var(--white);
            border-radius: 20px;
            padding: 0.3rem 0.8rem;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.3s ease;
        }
        
        .lead-score:hover {
            transform: scale(1.1);
        }
        
        .lead-profile, .research-capabilities {
            background-color: var(--white);
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            margin-bottom: 2rem;
        }
        
        .lead-profile h4, .research-capabilities h4 {
            margin-bottom: 1.5rem;
            color: var(--primary);
            border-bottom: 1px solid #eee;
            padding-bottom: 0.5rem;
        }
        
        .profile-card {
            background-color: var(--white);
            border-radius: 8px;
            overflow: hidden;
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .profile-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            background-color: #f9f9f9;
            border-bottom: 1px solid #eee;
        }
        
        .profile-meta {
            font-size: 0.9rem;
            color: #666;
            margin-top: 0.25rem;
        }
        
        .profile-actions {
            display: flex;
            gap: 0.5rem;
        }
        
        .profile-details {
            padding: 1.5rem;
        }
        
        .detail-section {
            margin-bottom: 1.5rem;
        }
        
        .detail-section:last-child {
            margin-bottom: 0;
        }
        
        .detail-section h6 {
            color: var(--primary);
            margin-bottom: 0.75rem;
            border-bottom: 1px solid #eee;
            padding-bottom: 0.25rem;
        }
        
        .detail-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
        
        .detail-item {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }
        
        .detail-item.full-width {
            grid-column: 1 / -1;
        }
        
        .detail-label {
            font-weight: 600;
            font-size: 0.9rem;
            color: #666;
        }
        
        .tag-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 0.25rem;
        }
        
        .tag {
            background-color: rgba(30, 58, 138, 0.1);
            color: var(--primary);
            border-radius: 20px;
            padding: 0.25rem 0.75rem;
            font-size: 0.8rem;
        }
        
        .activity-timeline {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        
        .activity-item {
            display: flex;
            gap: 1rem;
            padding-bottom: 0.75rem;
            border-bottom: 1px dashed #eee;
        }
        
        .activity-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }
        
        .activity-date {
            font-weight: 600;
            color: var(--primary);
            min-width: 80px;
        }
        
        .capabilities-tabs {
            display: flex;
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 0.5rem;
            margin-bottom: 1.5rem;
        }
        
        .capability-tab {
            flex: 1;
            padding: 0.75rem;
            text-align: center;
            background: none;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        .capability-tab.active {
            background-color: var(--primary);
            color: var(--white);
        }
        
        .capability-content {
            display: none;
        }
        
        .capability-content.active {
            display: block;
            animation: fadeIn 0.5s ease;
        }
        
        .capability-header {
            margin-bottom: 1.5rem;
            text-align: center;
        }
        
        .capability-header h5 {
            color: var(--primary);
            margin-bottom: 0.5rem;
        }
        
        .capability-header p {
            color: #666;
            font-size: 0.9rem;
        }
        
        .market-metrics {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .metric-card {
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 1.5rem;
            text-align: center;
        }
        
        .metric-value {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }
        
        .metric-label {
            font-size: 0.9rem;
            color: #666;
        }
        
        .market-trends {
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 1.5rem;
        }
        
        .market-trends h6 {
            margin-bottom: 1rem;
            color: var(--primary);
        }
        
        .market-trends ul {
            padding-left: 1.5rem;
        }
        
        .market-trends li {
            margin-bottom: 0.5rem;
        }
        
        .competitor-analysis {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .competitor-card {
            background-color: #f9f9f9;
            border-radius: 8px;
            overflow: hidden;
        }
        
        .competitor-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            background-color: rgba(30, 58, 138, 0.1);
        }
        
        .competitor-score {
            background-color: var(--primary);
            color: var(--white);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
        }
        
        .competitor-details {
            padding: 1rem;
        }
        
        .psychological-framework {
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 1.5rem;
        }
        
        .psychological-framework h6 {
            text-align: center;
            margin-bottom: 1.5rem;
            color: var(--primary);
        }
        
        .framework-steps {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .framework-step {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
        }
        
        .step-number {
            background-color: var(--primary);
            color: var(--white);
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            flex-shrink: 0;
        }
        
        .step-content h6 {
            text-align: left;
            margin-bottom: 0.5rem;
        }
        
        .step-content p {
            font-size: 0.9rem;
            color: #666;
        }
        
        .dashboard-notification {
            position: absolute;
            bottom: 20px;
            right: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            width: 300px;
            transition: opacity 0.5s ease;
            z-index: 100;
        }
        
        .notification-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        
        .notification-content i {
            font-size: 2rem;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }
        
        .progress-bar {
            width: 100%;
            height: 6px;
            background-color: #eee;
            border-radius: 3px;
            margin-top: 1rem;
            overflow: hidden;
        }
        
        .progress {
            height: 100%;
            background-color: var(--primary);
            width: 0%;
            transition: width 0.1s linear;
        }
        
        @media (max-width: 768px) {
            .detail-grid {
                grid-template-columns: 1fr;
            }
            
            .market-metrics {
                grid-template-columns: 1fr;
            }
            
            .profile-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
            }
            
            .capabilities-tabs {
                flex-direction: column;
                gap: 0.5rem;
            }
        }
    `;
    
    document.head.appendChild(salesStyles);
}
