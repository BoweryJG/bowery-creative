// Sales Follow-up Agent for Bowery Creative Agency Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize sales follow-up dashboard
    initSalesFollowupDashboard();
    
    // Initialize campaign details
    initCampaignDetails();
    
    // Initialize create campaign modal
    initCreateCampaignModal();
});

// Sales Follow-up Dashboard Initialization
function initSalesFollowupDashboard() {
    const dashboardTabs = document.querySelectorAll('.dashboard-tab');
    const createCampaignBtn = document.querySelector('.create-campaign');
    
    if (dashboardTabs.length > 0) {
        dashboardTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                dashboardTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Update dashboard content based on selected tab
                updateDashboardContent(this.getAttribute('data-tab'));
            });
        });
    }
    
    if (createCampaignBtn) {
        createCampaignBtn.addEventListener('click', function() {
            showCreateCampaignModal();
        });
    }
    
    // Add click event to campaign cards
    const campaignCards = document.querySelectorAll('.campaign-card');
    
    campaignCards.forEach(card => {
        card.addEventListener('click', function() {
            // Get campaign name
            const campaignName = this.querySelector('h4').textContent;
            
            // Show campaign details
            showCampaignDetails(campaignName);
        });
    });
}

// Update Dashboard Content
function updateDashboardContent(tab) {
    // This function would update the dashboard content based on the selected tab
    // For demonstration purposes, we'll just show a notification
    
    showNotification('Dashboard Updated', `Viewing ${tab} campaigns`, 'fas fa-sync-alt');
}

// Initialize Campaign Details
function initCampaignDetails() {
    const detailsTabs = document.querySelectorAll('.details-tab');
    const detailsContents = document.querySelectorAll('.details-content');
    
    if (detailsTabs.length > 0) {
        detailsTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                detailsTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all content sections
                detailsContents.forEach(content => content.classList.remove('active'));
                
                // Show selected content section
                const tabId = this.getAttribute('data-tab');
                document.getElementById(`${tabId}-content`).classList.add('active');
            });
        });
    }
}

// Initialize Create Campaign Modal
function initCreateCampaignModal() {
    // Add event listeners to close buttons
    const closeButtons = document.querySelectorAll('.close-btn');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find closest modal
            const modal = this.closest('.modal');
            
            if (modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    // Add event listener to create campaign form
    const createCampaignForm = document.querySelector('#create-campaign-form');
    
    if (createCampaignForm) {
        createCampaignForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const campaignName = formData.get('campaign-name');
            
            // Close modal
            const modal = this.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
            }
            
            // Show success notification
            showNotification('Campaign Created', `${campaignName} has been created successfully`, 'fas fa-check-circle');
            
            // Reset form
            this.reset();
        });
    }
}

// Show Campaign Details
function showCampaignDetails(campaignName) {
    // Sample campaign data
    const campaigns = {
        'Aesthetic Clinic Outreach': {
            status: 'active',
            progress: 65,
            stats: {
                sent: 487,
                opened: 312,
                responded: 98
            },
            engagement: [10, 25, 18, 35, 42, 30, 45, 55, 48, 60, 65],
            sequence: [
                {
                    type: 'sent',
                    date: '03/15/2025',
                    subject: 'Enhance Your Aesthetic Practice with AI',
                    content: 'Hello [First Name],\n\nI noticed your clinic has been expanding its aesthetic services. Our AI-driven patient education system has helped similar practices increase consultation conversions by 35%.\n\nWould you be interested in a personalized demo?\n\nBest regards,\nSales Team'
                },
                {
                    type: 'sent',
                    date: '03/22/2025',
                    subject: 'Follow-up: AI Solutions for [Practice Name]',
                    content: 'Hello [First Name],\n\nI wanted to follow up on my previous email about our AI patient education system. Many practices like yours have seen significant ROI within the first 3 months.\n\nI'd be happy to share some case studies specific to aesthetic clinics.\n\nBest regards,\nSales Team'
                },
                {
                    type: 'sent',
                    date: '03/29/2025',
                    subject: 'Case Study: How [Similar Practice] Increased Bookings',
                    content: 'Hello [First Name],\n\nI thought you might be interested in this case study about how [Similar Practice] increased their consultation bookings by 42% using our AI patient education system.\n\nTheir practice faced similar challenges to [Practice Name] before implementing our solution.\n\nBest regards,\nSales Team'
                },
                {
                    type: 'scheduled',
                    date: '04/05/2025',
                    subject: 'Limited Time Offer for [Practice Name]',
                    content: 'Hello [First Name],\n\nFor a limited time, we're offering a 20% discount on our AI patient education system for new clients.\n\nGiven your practice's focus on [Specific Treatment], I believe this could be particularly valuable for your team.\n\nWould you be available for a quick call next week?\n\nBest regards,\nSales Team'
                },
                {
                    type: 'pending',
                    date: '04/12/2025',
                    subject: 'Final Thoughts: AI for [Practice Name]',
                    content: 'Hello [First Name],\n\nI wanted to reach out one last time about our AI patient education system. Many practices have found that the improved patient experience and staff efficiency quickly justify the investment.\n\nIf you're interested in learning more, I'm available for a call at your convenience.\n\nBest regards,\nSales Team'
                }
            ],
            audience: {
                total: 750,
                segments: [
                    { label: 'Aesthetic Clinics', value: 450 },
                    { label: 'Med Spas', value: 200 },
                    { label: 'Dermatologists', value: 100 }
                ]
            },
            personalization: [
                {
                    type: 'Practice Size',
                    examples: [
                        { condition: 'Small Practice (1-3 providers)', content: 'Our solution is designed to scale with your practice, providing enterprise-level AI capabilities without the enterprise-level cost or complexity.' },
                        { condition: 'Medium Practice (4-10 providers)', content: 'With multiple providers, our system ensures consistent patient education across your entire team while allowing for provider-specific customization.' },
                        { condition: 'Large Practice (10+ providers)', content: 'Our enterprise solution integrates seamlessly with your existing systems and supports multi-location deployment with centralized management.' }
                    ]
                },
                {
                    type: 'Treatment Focus',
                    examples: [
                        { condition: 'CoolSculpting Focus', content: 'Our AI system includes detailed modules on CoolSculpting, helping patients understand the procedure, expected results, and addressing common concerns before they even speak with your staff.' },
                        { condition: 'Botox/Fillers Focus', content: 'For practices specializing in injectables, our system provides interactive visualizations that help patients understand treatment areas and expected outcomes, increasing conversion rates.' },
                        { condition: 'Comprehensive Services', content: 'With your diverse treatment offerings, our system helps patients navigate options and understand which treatments might best address their specific concerns.' }
                    ]
                }
            ]
        },
        'Dental Practice Campaign': {
            status: 'active',
            progress: 42,
            stats: {
                sent: 325,
                opened: 198,
                responded: 57
            },
            engagement: [5, 12, 18, 25, 30, 28, 35, 42],
            sequence: [
                {
                    type: 'sent',
                    date: '03/20/2025',
                    subject: 'Revolutionize Patient Education at [Practice Name]',
                    content: 'Hello Dr. [Last Name],\n\nI noticed your practice has been investing in advanced dental technologies. Our AI-driven patient education system complements these investments by helping patients better understand complex procedures.\n\nWould you be interested in seeing how it works?\n\nBest regards,\nSales Team'
                },
                {
                    type: 'sent',
                    date: '03/27/2025',
                    subject: 'Follow-up: AI Patient Education for [Practice Name]',
                    content: 'Hello Dr. [Last Name],\n\nI wanted to follow up on my previous email about our AI patient education system. Many dental practices have reported that patients are more likely to accept treatment recommendations after interacting with our system.\n\nI'd be happy to provide more information specific to your practice needs.\n\nBest regards,\nSales Team'
                },
                {
                    type: 'sent',
                    date: '04/03/2025',
                    subject: 'Case Study: Implant Acceptance Rates',
                    content: 'Hello Dr. [Last Name],\n\nI thought you might be interested in this case study about how a practice similar to yours increased implant case acceptance by 47% using our AI patient education system.\n\nTheir practice faced similar challenges to [Practice Name] before implementing our solution.\n\nBest regards,\nSales Team'
                },
                {
                    type: 'scheduled',
                    date: '04/10/2025',
                    subject: 'Special Offer for Dental Implant Practices',
                    content: 'Hello Dr. [Last Name],\n\nFor practices focusing on implant dentistry, we're offering a specialized version of our AI education system with enhanced implant visualization modules.\n\nGiven your practice's expertise in this area, I believe this could be particularly valuable for your team.\n\nWould you be available for a quick call next week?\n\nBest regards,\nSales Team'
                },
                {
                    type: 'pending',
                    date: '04/17/2025',
                    subject: 'Final Thoughts: AI Education for [Practice Name]',
                    content: 'Hello Dr. [Last Name],\n\nI wanted to reach out one last time about our AI patient education system. Many practices have found that the improved case acceptance and reduced chair time quickly justify the investment.\n\nIf you're interested in learning more, I'm available for a call at your convenience.\n\nBest regards,\nSales Team'
                }
            ],
            audience: {
                total: 500,
                segments: [
                    { label: 'General Dentists', value: 300 },
                    { label: 'Implant Specialists', value: 150 },
                    { label: 'Prosthodontists', value: 50 }
                ]
            },
            personalization: [
                {
                    type: 'Practice Type',
                    examples: [
                        { condition: 'General Practice', content: 'Our AI system helps your patients understand the value of comprehensive care and preventive treatments, increasing case acceptance for services beyond routine cleanings.' },
                        { condition: 'Specialty Practice', content: 'For specialty practices, our system helps referring dentists prepare patients for your services, ensuring they arrive at your office with appropriate expectations.' },
                        { condition: 'DSO Member', content: 'Our enterprise solution integrates with your DSO's existing systems and supports standardized patient education across all locations while allowing for provider customization.' }
                    ]
                },
                {
                    type: 'Technology Adoption',
                    examples: [
                        { condition: 'Early Adopter', content: 'As a practice that embraces cutting-edge technology, our AI system will complement your existing digital workflow and further differentiate your practice in the market.' },
                        { condition: 'Pragmatic Adopter', content: 'Our system offers a practical approach to technology adoption with measurable ROI and minimal disruption to your existing workflows.' },
                        { condition: 'Traditional Practice', content: 'Our system is designed to be intuitive for both staff and patients, requiring minimal technical expertise while delivering significant practice benefits.' }
                    ]
                }
            ]
        },
        'Neocis Technology Showcase': {
            status: 'paused',
            progress: 85,
            stats: {
                sent: 215,
                opened: 187,
                responded: 76
            },
            engagement: [15, 28, 35, 42, 50, 65, 72, 80, 85],
            sequence: [
                {
                    type: 'sent',
                    date: '03/05/2025',
                    subject: 'Enhance Your Yomi Experience with AI Education',
                    content: 'Hello Dr. [Last Name],\n\nCongratulations on your recent adoption of the Yomi robotic system. Our AI patient education platform is specifically designed to complement Neocis technology by helping patients understand the benefits of robotic-assisted implant placement.\n\nWould you be interested in seeing how it works?\n\nBest regards,\nSales Team'
                },
                {
                    type: 'sent',
                    date: '03/12/2025',
                    subject: 'Follow-up: AI Education for Yomi Patients',
                    content: 'Hello Dr. [Last Name],\n\nI wanted to follow up on my previous email about our AI patient education system for Yomi users. Many practices have reported increased case acceptance and patient satisfaction after implementing our complementary system.\n\nI'd be happy to provide more information specific to your practice needs.\n\nBest regards,\nSales Team'
                },
                {
                    type: 'sent',
                    date: '03/19/2025',
                    subject: 'Case Study: Maximizing ROI on Yomi Investment',
                    content: 'Hello Dr. [Last Name],\n\nI thought you might be interested in this case study about how a practice similar to yours maximized their ROI on their Yomi investment by using our AI patient education system.\n\nTheir practice was able to increase Yomi case volume by 38% within 3 months of implementation.\n\nBest regards,\nSales Team'
                },
                {
                    type: 'sent',
                    date: '03/26/2025',
                    subject: 'Exclusive Offer for Yomi Users',
                    content: 'Hello Dr. [Last Name],\n\nAs a valued Yomi user, we're offering an exclusive package that includes our AI education system with specialized Yomi visualization modules at a preferred rate.\n\nThis package has been developed in collaboration with Neocis to ensure seamless integration.\n\nWould you be available for a quick call next week?\n\nBest regards,\nSales Team'
                },
                {
                    type: 'sent',
                    date: '04/02/2025',
                    subject: 'Final Opportunity: AI Education for Yomi Users',
                    content: 'Hello Dr. [Last Name],\n\nI wanted to reach out one last time about our AI patient education system for Yomi users. Our exclusive offer expires at the end of this week.\n\nMany practices have found that the improved case acceptance and increased Yomi utilization quickly justify the investment.\n\nIf you're interested in learning more, I'm available for a call at your convenience.\n\nBest regards,\nSales Team'
                }
            ],
            audience: {
                total: 250,
                segments: [
                    { label: 'New Yomi Users', value: 100 },
                    { label: 'Established Yomi Users', value: 120 },
                    { label: 'Considering Yomi', value: 30 }
                ]
            },
            personalization: [
                {
                    type: 'Yomi Experience',
                    examples: [
                        { condition: 'New User (<6 months)', content: 'As you build experience with your Yomi system, our AI education platform helps patients understand the value of robotic-assisted implant placement, increasing your case volume during this critical adoption period.' },
                        { condition: 'Experienced User (6+ months)', content: 'With your established Yomi workflow, our system helps you further leverage your investment by educating referring dentists and their patients about the benefits of choosing your practice for implant treatment.' },
                        { condition: 'Considering Purchase', content: 'Our AI system can help you build a patient base for Yomi cases before your purchase, ensuring faster ROI once your system is installed.' }
                    ]
                },
                {
                    type: 'Practice Marketing',
                    examples: [
                        { condition: 'Technology-Focused', content: 'For practices that market themselves as technology leaders, our system provides another differentiator that reinforces your brand positioning and attracts tech-savvy patients.' },
                        { condition: 'Patient Experience-Focused', content: 'Our system enhances the patient experience by providing interactive education that helps patients feel more comfortable with advanced procedures and technology.' },
                        { condition: 'Referral-Based', content: 'Our system includes tools that help referring dentists explain the benefits of robotic-assisted implant placement to their patients before they're referred to your practice.' }
                    ]
                }
            ]
        },
        'Cynosure Partner Program': {
            status: 'completed',
            progress: 100,
            stats: {
                sent: 180,
                opened: 153,
                responded: 89
            },
            engagement: [20, 35, 48, 60, 72, 85, 93, 100],
            sequence: [
                {
                    type: 'sent',
                    date: '02/15/2025',
                    subject: 'Enhance Patient Education for Cynosure Treatments',
                    content: 'Hello Dr. [Last Name],\n\nAs a Cynosure technology user, you understand the importance of effective patient education for aesthetic treatments. Our AI-driven education system is specifically designed to complement Cynosure devices by helping patients understand treatment options, expected results, and aftercare.\n\nWould you be interested in seeing how it works?\n\nBest regards,\nSales Team'
                },
                {
                    type: 'sent',
                    date: '02/22/2025',
                    subject: 'Follow-up: AI Education for Cynosure Patients',
                    content: 'Hello Dr. [Last Name],\n\nI wanted to follow up on my previous email about our AI patient education system for Cynosure users. Many practices have reported increased treatment bookings and patient satisfaction after implementing our complementary system.\n\nI'd be happy to provide more information specific to your practice needs.\n\nBest regards,\nSales Team'
                },
                {
                    type: 'sent',
                    date: '03/01/2025',
                    subject: 'Case Study: Maximizing ROI on Cynosure Devices',
                    content: 'Hello Dr. [Last Name],\n\nI thought you might be interested in this case study about how a practice similar to yours maximized their ROI on their Cynosure devices by using our AI patient education system.\n\nTheir practice was able to increase treatment volume by 42% within 3 months of implementation.\n\nBest regards,\nSales Team'
                },
                {
                    type: 'sent',
                    date: '03/08/2025',
                    subject: 'Exclusive Offer for Cynosure Partners',
                    content: 'Hello Dr. [Last Name],\n\nAs a valued Cynosure partner, we're offering an exclusive package that includes our AI education system with specialized treatment visualization modules at a preferred rate.\n\nThis package has been developed in collaboration with Cynosure to ensure accurate representation of treatment outcomes.\n\nWould you be available for a quick call next week?\n\nBest regards,\nSales Team'
                },
                {
                    type: 'sent',
                    date: '03/15/2025',
                    subject: 'Final Opportunity: AI Education for Cynosure Partners',
                    content: 'Hello Dr. [Last Name],\n\nI wanted to reach out one last time about our AI patient education system for Cynosure partners. Our exclusive offer expires at the end of this week.\n\nMany practices have found that the improved consultation conversion rates and increased device utilization quickly justify the investment.\n\nIf you're interested in learning more, I'm available for a call at your convenience.\n\nBest regards,\nSales Team'
                }
            ],
            audience: {
                total: 200,
                segments: [
                    { label: 'Med Spas', value: 120 },
                    { label: 'Dermatologists', value: 50 },
                    { label: 'Plastic Surgeons', value: 30 }
                ]
            },
            personalization: [
                {
                    type: 'Device Portfolio',
                    examples: [
                        { condition: 'Single Device', content: 'Our AI system helps you maximize the return on your Cynosure device investment by educating patients about the full range of treatments it can provide, increasing utilization and revenue per device.' },
                        { condition: 'Multiple Devices', content: 'With your comprehensive Cynosure device portfolio, our system helps patients understand which device is best suited for their specific concerns, optimizing your device utilization across treatments.' },
                        { condition: 'Multi-Brand', content: 'Our system provides unbiased education across all your devices, helping patients focus on outcomes rather than specific technologies while highlighting the advantages of your Cynosure devices.' }
                    ]
                },
                {
                    type: 'Business Model',
                    examples: [
                        { condition: 'Membership Model', content: 'Our AI system supports your membership model by educating patients about the full range of treatments included in their membership, increasing utilization and retention.' },
                        { condition: 'Package-Based', content: 'For practices offering treatment packages, our system helps patients understand the value of multiple sessions and complementary treatments, increasing package sales.' },
                        { condition: 'A La Carte', content: 'Our system helps patients understand the progressive benefits of multiple treatments, encouraging repeat bookings and higher lifetime value.' }
                    ]
                }
            ]
        }
    };
    
    // Get campaign data
    const campaign = campaigns[campaignName];
    
    if (!campaign) {
        showNotification('Error', 'Campaign data not found', 'fas fa-exclamation-circle');
        return;
    }
    
    // Update campaign details
    updateCampaignDetails(campaignName, campaign);
    
    // Show campaign details section
    const campaignDetails = document.querySelector('.campaign-details');
    if (campaignDetails) {
        campaignDetails.style.display = 'block';
        
        // Scroll to campaign details
        campaignDetails.scrollIntoView({ behavior: 'smooth' });
    }
}

// Update Campaign Details
function updateCampaignDetails(campaignName, campaign) {
    // Update campaign name
    const detailsHeader = document.querySelector('.details-header h3');
    if (detailsHeader) {
        detailsHeader.textContent = campaignName;
    }
    
    // Update engagement chart
    updateEngagementChart(campaign.engagement);
    
    // Update message sequence
    updateMessageSequence(campaign.sequence);
    
    // Update audience segments
    updateAudienceSegments(campaign.audience);
    
    // Update personalization examples
    updatePersonalizationExamples(campaign.personalization);
}

// Update Engagement Chart
function updateEngagementChart(engagementData) {
    const chartPlaceholder = document.querySelector('.chart-placeholder');
    if (chartPlaceholder) {
        // For a real implementation, this would use a charting library like Chart.js
        // For this demo, we'll just update the placeholder text
        chartPlaceholder.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 1rem; color: #333; margin-bottom: 1rem;">Campaign Engagement Over Time</div>
                <div style="display: flex; align-items: flex-end; justify-content: space-between; height: 200px; padding: 0 2rem;">
                    ${engagementData.map((value, index) => `
                        <div style="display: flex; flex-direction: column; align-items: center; width: ${100 / engagementData.length}%;">
                            <div style="height: ${value * 2}px; width: 20px; background-color: var(--primary); border-radius: 4px 4px 0 0;"></div>
                            <div style="margin-top: 0.5rem; font-size: 0.8rem; color: #666;">${index + 1}</div>
                        </div>
                    `).join('')}
                </div>
                <div style="font-size: 0.8rem; color: #666; margin-top: 1rem;">Week Number</div>
            </div>
        `;
    }
}

// Update Message Sequence
function updateMessageSequence(sequenceData) {
    const sequenceTimeline = document.querySelector('.sequence-timeline');
    if (sequenceTimeline) {
        // Clear existing content
        sequenceTimeline.innerHTML = '';
        
        // Add sequence items
        sequenceData.forEach(item => {
            const sequenceItem = document.createElement('div');
            sequenceItem.classList.add('sequence-item', item.type);
            
            sequenceItem.innerHTML = `
                <div class="sequence-date">${item.date}</div>
                <div class="sequence-message">
                    <h5>${item.subject}</h5>
                    <p>${item.content.replace(/\n/g, '<br>')}</p>
                    <div class="sequence-actions">
                        <button class="btn btn-sm btn-secondary">Edit</button>
                        <button class="btn btn-sm btn-primary">View Stats</button>
                    </div>
                </div>
            `;
            
            sequenceTimeline.appendChild(sequenceItem);
            
            // Add button functionality
            const editBtn = sequenceItem.querySelector('.btn-secondary');
            const statsBtn = sequenceItem.querySelector('.btn-primary');
            
            if (editBtn) {
                editBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    showEditMessageModal(item);
                });
            }
            
            if (statsBtn) {
                statsBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    showMessageStats(item);
                });
            }
        });
    }
}

// Update Audience Segments
function updateAudienceSegments(audienceData) {
    const audienceSegments = document.querySelector('.audience-segments');
    if (audienceSegments) {
        // Clear existing content
        audienceSegments.innerHTML = '';
        
        // Add total segment
        const totalSegment = document.createElement('div');
        totalSegment.classList.add('segment-card');
        totalSegment.innerHTML = `
            <div class="segment-value">${audienceData.total}</div>
            <div class="segment-label">Total Recipients</div>
        `;
        audienceSegments.appendChild(totalSegment);
        
        // Add audience segments
        audienceData.segments.forEach(segment => {
            const segmentCard = document.createElement('div');
            segmentCard.classList.add('segment-card');
            segmentCard.innerHTML = `
                <div class="segment-value">${segment.value}</div>
                <div class="segment-label">${segment.label}</div>
            `;
            audienceSegments.appendChild(segmentCard);
        });
    }
}

// Update Personalization Examples
function updatePersonalizationExamples(personalizationData) {
    const personalizationExamples = document.querySelector('.personalization-examples');
    if (personalizationExamples) {
        // Clear existing content
        personalizationExamples.innerHTML = '';
        
        // Add personalization examples
        personalizationData.forEach(category => {
            category.examples.forEach(example => {
                const exampleCard = document.createElement('div');
                exampleCard.classList.add('example-card');
                exampleCard.innerHTML = `
                    <div class="example-header">
                        <h5>${category.type}: ${example.condition}</h5>
                    </div>
                    <div class="example-body">
                        <p>${example.content}</p>
                    </div>
                `;
                personalizationExamples.appendChild(exampleCard);
            });
        });
    }
}

// Show Create Campaign Modal
function showCreateCampaignModal() {
    const modal = document.querySelector('#create-campaign-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

// Show Edit Message Modal
function showEditMessageModal(message) {
    // Create modal for editing message
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'edit-message-modal';
    
    // Set modal content
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Edit Message</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <form id="edit-message-form">
                    <div class="form-group">
                        <label for="message-subject">Subject</label>
                        <input type="text" id="message-subject" value="${message.subject}">
                    </div>
                    
                    <div class="form-group">
                        <label for="message-content">Content</label>
                        <textarea id="message-content">${message.content}</textarea>
                    </div>
                    
                    <div class="ai-suggestions">
                        <h5><i class="fas fa-robot"></i> AI Suggestions</h5>
                        <div class="suggestion-list">
                            <div class="suggestion-item">Add personalization based on practice size</div>
                            <div class="suggestion-item">Include specific mention of ROI metrics</div>
                            <div class="suggestion-item">Add social proof from similar practices</div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="message-date">Send Date</label>
                        <input type="date" id="message-date" value="${message.date.split('/').reverse().join('-')}">
                    </div>
                    
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary close-btn">Cancel</button>
                        <button type="submit" class="btn btn-primary">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(modal);
    
    // Show modal
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Add close button functionality
    const closeButtons = modal.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.classList.remove('active');
            
            // Remove modal after animation
            setTimeout(() => {
                modal.remove();
            }, 300);
        });
    });
    
    // Add form submission
    const form = modal.querySelector('#edit-message-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success notification
            showNotification('Message Updated', 'Your changes have been saved', 'fas fa-check-circle');
            
            // Close modal
            modal.classList.remove('active');
            
            // Remove modal after animation
            setTimeout(() => {
                modal.remove();
            }, 300);
        });
    }
    
    // Add suggestion item functionality
    const suggestionItems = modal.querySelectorAll('.suggestion-item');
    suggestionItems.forEach(item => {
        item.addEventListener('click', function() {
            const contentTextarea = modal.querySelector('#message-content');
            if (contentTextarea) {
                const suggestion = this.textContent;
                
                // Add suggestion to content
                if (suggestion === 'Add personalization based on practice size') {
                    contentTextarea.value += '\n\nFor a practice of your size, many clients have found that our solution pays for itself within the first 3-6 months through increased case acceptance and operational efficiency.';
                } else if (suggestion === 'Include specific mention of ROI metrics') {
                    contentTextarea.value += '\n\nOn average, our clients see a 35% increase in case acceptance and a 28% reduction in staff time spent on patient education.';
                } else if (suggestion === 'Add social proof from similar practices') {
                    contentTextarea.value += '\n\nDr. Smith at XYZ Practice recently shared that after implementing our system, their patient satisfaction scores increased by 42% and treatment plan acceptance improved by 38%.';
                }
            }
        });
    });
}

// Show Message Stats
function showMessageStats(message) {
    // Create modal for message stats
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'message-stats-modal';
    
    // Set modal content
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Message Performance</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <div class="stats-overview">
                    <div class="stats-card">
                        <div class="stats-value">87%</div>
                        <div class="stats-label">Open Rate</div>
                    </div>
                    <div class="stats-card">
                        <div class="stats-value">32%</div>
                        <div class="stats-label">Click Rate</div>
                    </div>
                    <div class="stats-card">
                        <div class="stats-value">18%</div>
                        <div class="stats-label">Response Rate</div>
                    </div>
                </div>
                
                <div class="stats-details">
                    <h4>Subject: ${message.subject}</h4>
                    <div class="stats-section">
                        <h5>Engagement by Segment</h5>
                        <div class="stats-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Segment</th>
                                        <th>Open Rate</th>
                                        <th>Click Rate</th>
                                        <th>Response Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Aesthetic Clinics</td>
                                        <td>92%</td>
                                        <td>38%</td>
                                        <td>22%</td>
                                    </tr>
                                    <tr>
                                        <td>Med Spas</td>
                                        <td>85%</td>
                                        <td>30%</td>
                                        <td>15%</td>
                                    </tr>
                                    <tr>
                                        <td>Dermatologists</td>
                                        <td>78%</td>
                                        <td>25%</td>
                                        <td>12%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div class="stats-section">
                        <h5>AI Insights</h5>
                        <div class="insights-list">
                            <div class="insight-item">
                                <i class="fas fa-lightbulb"></i>
                                <div class="insight-content">
                                    <h6>Subject Line Performance</h6>
                                    <p>Subject lines containing specific practice names have 23% higher open rates.</p>
                                </div>
                            </div>
                            <div class="insight-item">
                                <i class="fas fa-lightbulb"></i>
                                <div class="insight-content">
                                    <h6>Content Engagement</h6>
                                    <p>Messages with ROI metrics receive 35% more clicks than those without.</p>
                                </div>
                            </div>
                            <div class="insight-item">
                                <i class="fas fa-lightbulb"></i>
                                <div class="insight-content">
                                    <h6>Optimal Send Time</h6>
                                    <p>Tuesday mornings (9-11am) show the highest engagement for this audience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="form-actions">
                    <button class="btn btn-secondary close-btn">Close</button>
                    <button class="btn btn-primary">Export Report</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(modal);
    
    // Add modal styles if not already added
    if (!document.querySelector('#stats-modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'stats-modal-styles';
        modalStyles.textContent = `
            .stats-overview {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 1rem;
                margin-bottom: 2rem;
            }
            
            .stats-card {
                background-color: #f9f9f9;
                border-radius: 8px;
                padding: 1.5rem;
                text-align: center;
            }
            
            .stats-value {
                font-size: 2rem;
                font-weight: 700;
                color: var(--primary);
                margin-bottom: 0.5rem;
            }
            
            .stats-label {
                font-size: 0.9rem;
                color: #666;
            }
            
            .stats-details {
                margin-bottom: 2rem;
            }
            
            .stats-details h4 {
                margin-bottom: 1.5rem;
                color: var(--primary);
            }
            
            .stats-section {
                margin-bottom: 1.5rem;
            }
            
            .stats-section h5 {
                margin-bottom: 1rem;
            }
            
            .stats-table {
                overflow-x: auto;
            }
            
            .stats-table table {
                width: 100%;
                border-collapse: collapse;
            }
            
            .stats-table th, .stats-table td {
                padding: 0.75rem;
                text-align: left;
                border-bottom: 1px solid #eee;
            }
            
            .stats-table th {
                background-color: #f9f9f9;
                font-weight: 600;
            }
            
            .insights-list {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            
            .insight-item {
                display: flex;
                gap: 1rem;
                background-color: #f9f9f9;
                border-radius: 8px;
                padding: 1rem;
            }
            
            .insight-item i {
                color: var(--primary);
                font-size: 1.5rem;
                margin-top: 0.25rem;
            }
            
            .insight-content h6 {
                margin-bottom: 0.5rem;
            }
            
            .insight-content p {
                margin: 0;
                font-size: 0.9rem;
                color: #666;
            }
            
            @media (max-width: 768px) {
                .stats-overview {
                    grid-template-columns: 1fr;
                }
            }
        `;
        
        document.head.appendChild(modalStyles);
    }
    
    // Show modal
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Add close button functionality
    const closeButtons = modal.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.classList.remove('active');
            
            // Remove modal after animation
            setTimeout(() => {
                modal.remove();
            }, 300);
        });
    });
    
    // Add export button functionality
    const exportButton = modal.querySelector('.btn-primary');
    if (exportButton) {
        exportButton.addEventListener('click', function() {
            showNotification('Report Exported', 'Performance report has been exported', 'fas fa-file-export');
            
            // Close modal
            modal.classList.remove('active');
            
            // Remove modal after animation
            setTimeout(() => {
                modal.remove();
            }, 300);
        });
    }
}

// Show Notification
function showNotification(title, message, icon) {
    // Create notification
    const notification = document.createElement('div');
    notification.classList.add('dashboard-notification');
    
    // Set notification content
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">
                <i class="${icon}"></i>
            </div>
            <div class="notification-text">
                <h5>${title}</h5>
                <p>${message}</p>
            </div>
        </div>
    `;
    
    // Add notification to body
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('active');
    }, 10);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('active');
        
        // Remove notification after animation
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 5000);
}
