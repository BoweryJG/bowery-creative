// Dashboard Functionality for Bowery Creative Agency Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize sales research dashboard
    initSalesResearchDashboard();
    
    // Initialize sales follow-up dashboard
    initSalesFollowupDashboard();
});

// Sales Research Dashboard Initialization
function initSalesResearchDashboard() {
    const researchDashboard = document.querySelector('.research-dashboard');
    if (!researchDashboard) return;
    
    // Add interactive elements to dashboard
    addLeadInteractions();
    
    // Initialize psychological profile visualization
    initPsychologicalProfile();
    
    // Add generate report button functionality
    const generateReportBtn = researchDashboard.querySelector('.btn-primary');
    if (generateReportBtn) {
        generateReportBtn.addEventListener('click', function() {
            generateSalesReport();
        });
    }
}

// Sales Follow-up Dashboard Initialization
function initSalesFollowupDashboard() {
    const followupDashboard = document.querySelector('.followup-dashboard');
    if (!followupDashboard) return;
    
    // Add interactive elements to timeline
    addTimelineInteractions();
    
    // Add new campaign button functionality
    const newCampaignBtn = followupDashboard.querySelector('.btn-secondary');
    if (newCampaignBtn) {
        newCampaignBtn.addEventListener('click', function() {
            showNewCampaignModal();
        });
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
            
            // Show psychological profile for selected lead
            showPsychologicalProfile(leadName);
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
    
    // Set first lead as active by default
    if (leadItems.length > 0) {
        leadItems[0].classList.add('active');
        const leadName = leadItems[0].querySelector('h5').textContent;
        showPsychologicalProfile(leadName);
    }
}

// Initialize Psychological Profile Visualization
function initPsychologicalProfile() {
    const researchDashboard = document.querySelector('.research-dashboard');
    if (!researchDashboard) return;
    
    // Create psychological profile section if it doesn't exist
    let profileSection = researchDashboard.querySelector('.psychological-profile');
    
    if (!profileSection) {
        profileSection = document.createElement('div');
        profileSection.classList.add('psychological-profile');
        profileSection.innerHTML = `
            <h4>Psychological Profile</h4>
            <div class="profile-content"></div>
        `;
        researchDashboard.appendChild(profileSection);
    }
}

// Show Psychological Profile for Selected Lead
function showPsychologicalProfile(leadName) {
    const profileContent = document.querySelector('.profile-content');
    if (!profileContent) return;
    
    // Sample psychological profiles for each lead
    const profiles = {
        'Westside Aesthetics': {
            decisionStyle: 'Analytical',
            motivators: ['ROI', 'Technological Innovation', 'Patient Satisfaction'],
            painPoints: ['Staff Training Time', 'Integration with Existing Systems'],
            communicationPreference: 'Data-Driven, Detailed Documentation',
            socraticApproach: 'Present comparative data and allow self-discovery of value proposition'
        },
        'Elite Dental Group': {
            decisionStyle: 'Collaborative',
            motivators: ['Practice Growth', 'Staff Efficiency', 'Patient Experience'],
            painPoints: ['Patient Acquisition Costs', 'Competitive Market'],
            communicationPreference: 'Visual Demonstrations, Case Studies',
            socraticApproach: 'Ask about current patient education process and guide to efficiency gaps'
        },
        'Advanced Dermatology Center': {
            decisionStyle: 'Intuitive',
            motivators: ['Brand Perception', 'Cutting-Edge Reputation', 'Workflow Efficiency'],
            painPoints: ['Staff Turnover', 'Patient Education Time'],
            communicationPreference: 'Concise Overviews, Visual Impact',
            socraticApproach: 'Explore vision for practice and connect solutions to aspirational goals'
        }
    };
    
    // Get profile for selected lead
    const profile = profiles[leadName] || {
        decisionStyle: 'Unknown',
        motivators: ['Growth', 'Efficiency', 'Patient Satisfaction'],
        painPoints: ['Cost', 'Implementation Time'],
        communicationPreference: 'Mixed',
        socraticApproach: 'Standard discovery questions'
    };
    
    // Create profile HTML
    let profileHTML = `
        <div class="profile-card">
            <div class="profile-item">
                <h5>Decision Style</h5>
                <p>${profile.decisionStyle}</p>
            </div>
            <div class="profile-item">
                <h5>Key Motivators</h5>
                <ul>
    `;
    
    // Add motivators
    profile.motivators.forEach(motivator => {
        profileHTML += `<li>${motivator}</li>`;
    });
    
    profileHTML += `
                </ul>
            </div>
            <div class="profile-item">
                <h5>Pain Points</h5>
                <ul>
    `;
    
    // Add pain points
    profile.painPoints.forEach(painPoint => {
        profileHTML += `<li>${painPoint}</li>`;
    });
    
    profileHTML += `
                </ul>
            </div>
            <div class="profile-item">
                <h5>Communication Preference</h5>
                <p>${profile.communicationPreference}</p>
            </div>
            <div class="profile-item">
                <h5>Recommended Socratic Approach</h5>
                <p>${profile.socraticApproach}</p>
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
}

// Generate Sales Report
function generateSalesReport() {
    const researchDashboard = document.querySelector('.research-dashboard');
    if (!researchDashboard) return;
    
    // Create notification
    const notification = document.createElement('div');
    notification.classList.add('dashboard-notification');
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-file-alt"></i>
            <p>Generating comprehensive sales report...</p>
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
                <p>Report generated successfully!</p>
                <button class="btn btn-sm btn-primary">Download Report</button>
            `;
            
            // Add download button functionality
            const downloadBtn = notification.querySelector('.btn');
            if (downloadBtn) {
                downloadBtn.addEventListener('click', function() {
                    // Remove notification
                    notification.remove();
                });
            }
            
            // Remove notification after 5 seconds
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    notification.remove();
                }, 500);
            }, 5000);
        } else {
            width += 2;
            progress.style.width = width + '%';
        }
    }, 50);
}

// Add Timeline Interactions
function addTimelineInteractions() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        // Add hover effect
        item.addEventListener('mouseenter', function() {
            const content = this.querySelector('.timeline-content');
            const dot = this.querySelector('.timeline-dot');
            
            if (content) {
                content.style.transform = 'scale(1.05)';
                content.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            }
            
            if (dot) {
                dot.style.transform = 'translateX(-50%) scale(1.5)';
                dot.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--accent');
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const content = this.querySelector('.timeline-content');
            const dot = this.querySelector('.timeline-dot');
            
            if (content) {
                content.style.transform = 'scale(1)';
                content.style.boxShadow = 'none';
            }
            
            if (dot) {
                dot.style.transform = 'translateX(-50%) scale(1)';
                dot.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
            }
        });
    });
}

// Show New Campaign Modal
function showNewCampaignModal() {
    // Create modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Create New Campaign</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label for="campaign-name">Campaign Name</label>
                    <input type="text" id="campaign-name" placeholder="Enter campaign name">
                </div>
                <div class="form-group">
                    <label for="campaign-target">Target Audience</label>
                    <select id="campaign-target">
                        <option value="aesthetics">Aesthetic Practices</option>
                        <option value="dental">Dental Practices</option>
                        <option value="dermatology">Dermatology Clinics</option>
                        <option value="plastic-surgery">Plastic Surgery Centers</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="campaign-duration">Campaign Duration (Days)</label>
                    <input type="number" id="campaign-duration" value="30" min="7" max="90">
                </div>
                <div class="form-group">
                    <label for="campaign-goal">Campaign Goal</label>
                    <select id="campaign-goal">
                        <option value="leads">Generate Leads</option>
                        <option value="appointments">Book Appointments</option>
                        <option value="sales">Close Sales</option>
                        <option value="awareness">Brand Awareness</option>
                    </select>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Create Campaign</button>
                <button class="btn btn-secondary close-btn">Cancel</button>
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
    
    // Add create campaign button functionality
    const createButton = modal.querySelector('.btn-primary');
    if (createButton) {
        createButton.addEventListener('click', function() {
            // Show success message
            const modalBody = modal.querySelector('.modal-body');
            modalBody.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <p>Campaign created successfully!</p>
                    <p>Your AI follow-up agent is now being configured.</p>
                </div>
            `;
            
            // Update footer
            const modalFooter = modal.querySelector('.modal-footer');
            modalFooter.innerHTML = `
                <button class="btn btn-primary close-btn">Done</button>
            `;
            
            // Add close button functionality
            const doneButton = modalFooter.querySelector('.btn');
            if (doneButton) {
                doneButton.addEventListener('click', function() {
                    modal.remove();
                });
            }
        });
    }
    
    // Add modal styles if not already added
    if (!document.querySelector('#modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'modal-styles';
        modalStyles.textContent = `
            .modal {
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
            
            @keyframes fadeIn {
                to { opacity: 1; }
            }
            
            .modal-content {
                background-color: white;
                border-radius: 8px;
                width: 90%;
                max-width: 500px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                transform: translateY(-20px);
                animation: slideIn 0.3s forwards;
            }
            
            @keyframes slideIn {
                to { transform: translateY(0); }
            }
            
            .modal-header {
                padding: 1.5rem;
                border-bottom: 1px solid #eee;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .modal-body {
                padding: 1.5rem;
            }
            
            .modal-footer {
                padding: 1.5rem;
                border-top: 1px solid #eee;
                display: flex;
                justify-content: flex-end;
                gap: 1rem;
            }
            
            .close-btn {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #666;
            }
            
            .success-message {
                text-align: center;
                padding: 2rem 0;
            }
            
            .success-message i {
                font-size: 3rem;
                color: var(--secondary);
                margin-bottom: 1rem;
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
            
            .btn-sm {
                padding: 0.5rem 1rem;
                font-size: 0.9rem;
                margin-top: 1rem;
            }
            
            .profile-card {
                background-color: white;
                border-radius: 8px;
                padding: 1.5rem;
                margin-top: 1.5rem;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            }
            
            .profile-item {
                margin-bottom: 1rem;
            }
            
            .profile-item:last-child {
                margin-bottom: 0;
            }
            
            .profile-item h5 {
                color: var(--primary);
                margin-bottom: 0.5rem;
            }
            
            .profile-item ul {
                padding-left: 1.5rem;
            }
        `;
        
        document.head.appendChild(modalStyles);
    }
}
