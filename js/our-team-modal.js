function showStaffModal(staffId) {
    const staff = aiTeamData[staffId] || managementData[staffId] || lakehouseTeamData[staffId] || platformTeamData[staffId] || internsData[staffId];
    if (!staff) return;
    
    const modalBody = document.getElementById('staffModalBody');
    modalBody.innerHTML = `
        <div class="modal-row">
            <div class="modal-column left">
                <img src="${staff.image}" alt="${staff.name}" class="staff-image">
                <div class="personal-info">
                    <h2>${staff.name}</h2>
                    <h3>${staff.position}</h3>
                </div>
            </div>
            <div class="modal-column right">
                <div class="profile">
                    <h2>Profile</h2>
                    <p><strong>Education:</strong> ${staff.education || 'N/A'}</p>
                    <p><strong>Projects:</strong> ${staff.projects || 'N/A'}</p>
                    <p><strong>Tenure:</strong> ${staff.tenure || 'N/A'}</p>
                    <p><strong>Skills:</strong> ${staff.skills || 'N/A'}</p>
                    <p><strong>Motto:</strong> ${staff.motto || 'N/A'}</p>
                </div>
                <div class="contact-info">
                    <p><strong> Email:</strong> <a href="mailto:${staff.email}">${staff.email}</a></p>
                    <p><strong> LinkedIn:</strong> <a href="${staff.linkedin}" target="_blank">${staff.name}</a></p>
                </div>
            </div>
        </div>


        
        
    `;
    
    document.getElementById('staffModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeStaffModal() {
    document.getElementById('staffModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('staffModal');
    if (event.target === modal) {
        closeStaffModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeStaffModal();
    }
});

// AI TEAM

const aiTeamData = {
    'alyssa-ocampo': {
        name: 'Alyssa Patricia B. Ocampo',
        position: 'Project Technical Specialist I - Data and Machine Learning Engineer',
        image: '../images/ai-team_alyssa_ocampo.png',
        education: 'Electronics Engineering - Polytechnic University of the Philippines',
        tenure: '1 year, 2 months',
        projects: 'iTANONG Project, GATES',
        skills: 'Problem Solving',
        motto: '"Not throwing away my shot!" - Alexander Hamilton',
        email: 'alyssapatricia.ocampo@asti.dost.gov.ph',
        linkedin: 'https://www.linkedin.com/in/alyssapatriciaocampo/',
    },
    'christopher-belaos': {
        name: 'Christopher Belaos',
        position: 'Project Technical Specialist I - Data and Machine Learning Engineer',
        image: '../images/ai-team_christopher-belaos.png',
        education: 'College Graduate',
        tenure: '3+ years',
        projects: 'iTANONG Project, GATES',
        skills: 'Developer',
        //motto: '"Not throwing away my shot!" - Alexander Hamilton',
        email: 'christopher.belaos@asti.dost.gov.ph',
        linkedin: 'Christopher Belaos',
    },
    'jasper-castro': {
        name: 'Jasper Adrian Dwight V. Castro',
        position: 'Project Technical Specialist IV - Natural Language Processing Engineer',
        image: '../images/ai-team_jasper-castro.png',
        education: 'Bachelor of Science in Electrical Engineering Major in Electronics Engineering',
        //tenure: '1 year, 2 months',
        projects: 'iTANONG Project, GATES',
        skills: 'Natural Language Processing, Machine Learning, Data Science',
        //motto: '"Not throwing away my shot!" - Alexander Hamilton',
        email: 'jasperadriandwight.castro@astidostgovph',
        linkedin: 'https://www.linkedin.com/in/jasperadriandwightcastro/',
    },
    'norbert-ibera': {
        name: 'Norbert John Ibera',
        position: 'Project Technical Assistant IV; Jr. Data Engineer',
        image: '../images/ai-team_norbert-ibera.jpeg',
        education: 'BS Electrical Engineering',
        tenure: '1 week',
        projects: 'GATES',
        skills: 'Hardworking, Adaptive, kaya tumayo sa MRT no hands',
        //motto: '"Not throwing away my shot!" - Alexander Hamilton',
        email: 'nribera@up.edu.ph',
        linkedin: 'https://www.linkedin.com/in/norbert-john-ibera-b07926284',
    }
};

const managementData = {
    'john-chris-kwong': {
        name: 'John Chris Kwong',
        position: 'S&T Fellow I',
        image: '../images/management_john-chris-kwong.jpg',
        education: 'MS ECE',
        tenure: '4 years',
        projects: 'REIINN, GATES',
        //skills: ''     
        email: 'johnchris.kwong@asti.dost.gov.ph',
        linkedin: 'https://www.linkedin.com/in/kwongjohnc/',
    },
    'charmaine-manalo': {
        name: 'Charmaine Ann S. Manalo',
        position: 'Project Technical Specialist IV - Senior Project Manager',
        image: '../images/management_ann-manalo.jpg',
        education: 'B.S. Development Communication',
        tenure: '10 years and 9 months',
        projects: 'Agromet, DEWS, Optimization, MASID, arQ 2.0, Metbuoy+, STRIIIDER, GATES',
        skills: 'Project management, Budget planning, Stakeholder engagement',
        //motto: '"Not throwing away my shot!" - Alexander Hamilton',
        email: 'ann@asti.dost.gov.ph',
        //linkedin: 'https://www.linkedin.com/in/alyssapatriciaocampo/',
    },
    'chelsea-abellana': {
        name: 'Chelsea Rica M. Abellana',
        position: 'Project Technical Assistant VI - Junior Technology, Policy, and Sustainability Officer',
        image: '../images/management_chelsea-abellana.jpg',
        education: 'BA Communication Arts, Major in Media Arts',
        tenure: '3 years and 5 months',
        projects: 'GATES, MASID, Metbuoy+, STRIIIDER, arQ 2.0, SARwAIS, PREGINET, ULAT, FLASH',
        skills: 'Strategic Communications, Project Management, Public Engagement',
        //motto: '"Not throwing away my shot!" - Alexander Hamilton',
        email: 'chelsearica.abellana@asti.dost.gov.ph',
        linkedin: 'http://www.linkedin.com/in/chelseabellana',
    }
}

const lakehouseTeamData = {
    'jean-jay-quitayen': {
        name: 'Jean Jay Quitayen',
        position: 'Supervising Project Technical Specialist ',
        image: '../images/lakehouse_jean-jay-quitayen.jpeg',
        education: 'B.S. Electronics Engineering',
        tenure: '5 years',
        projects: 'GATES',
        skills: 'Python, Org-Mode, Arduino',
        motto: 'The greatest failure in life is the failure to try.',
        email: 'jeanjay.quitayen@asti.dost.gov.ph',
        linkedin: 'jeanjayquitayen@gmail.com',
    },
    'ruben-capuli': {
        name: 'Ruben L. Capuli III',
        position: 'Project Technical Assistant IV - Jr. Network Engineer',
        image: '../images/lakehouse_ruben-capuli.jpg',
        education: 'BS Electronics Engineering',
        tenure: '2 weeks',
        projects: 'GATES',
        skills: 'Adaptability',
        //motto:
        email: 'capuli.ruben3rd@gmail.com',
        linkedin: 'https://www.linkedin.com/in/ruben-capuli-iii-a471a7315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    }
}

const platformTeamData = {
    'alaine-ramos': {
        name: 'Alaine Richelle C. Ramos',
        position: 'Project Technical Specialist III - Senior Backend Developer',
        image: '../images/platform_alaine-ramos.png',
        education: 'BS Computer Engineering (2015-2021), MEngg ArtificiaI Intelligence (2024-present) - UP Diliman',
        tenure: '1 year, 11 months',
        projects: 'MASID, GATES',
        skills: 'Technical documentation, Coding, Research, Sports',
        motto: 'Consistency is the key.',
        email: 'alainerichelle.ramos@asti.dost.gov.ph',
        linkedin: 'https://www.linkedin.com/in/alaine-richelle-ramos-879197181',
    },
    'christine-cureg': {
        name: 'Christine Shamah Cureg',
        position: 'Project Technical Specialist V',
        image: '../images/platform_christine-cureg.jpg',
        education: 'BS IT',
        tenure: '7 years',
        projects: 'Optimization, MASID, MetBuoy, STRIIIIDER, COMPASS, GATES',
        strengths: 'Overthink, Programming, Lover Girl',
        motto: 'God Did.',
        email: 'christineshamah.cureg@gmail.com',
        linkedin: 'https://www.linkedin.com/in/christine-shamah-c-5a83b5293/',
    },
    'mary-jane-alpad': {
        name: 'Mary Jane Alpad',
        position: 'Project Technical Specialist III - QA Engineer',
        image: '../images/platform_jane-alpad.jpg',
        education: 'BS Computer Engineering',
        tenure: '2.7 years',
        projects: 'GATES, ON-IDLE, COARE, NetMesh',
        strengths: 'Attention to Detail, Analytical Thinking, Team Collaboration',
        email: 'maryjane.alpad@asti.dost.gov.ph',   
    }
}   

const internsData = {
    'joshua-birad': {
        name: 'Joshua Birad',
        position: 'Intern',
        image: '../images/josh.jpeg',
        education: 'Technological University of the Philippines',
        tenure: '4 months',
        projects: 'GATES',
        skills: 'Data Cleaning, Git, Front-end Development',
        email: 'joshuabirad17@gmail.com',
        linkedin: 'https://www.linkedin.com/in/joshua-birad-295015165/',
    }
}