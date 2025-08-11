
// Unified Navbar Loader - Works for both root and subfolder pages
// Combines navbar loading, active highlighting, search functionality, and footer loading

// Determine the correct path based on current location
const currentPath = window.location.pathname;
const isInSubfolder = currentPath.includes('/html/');
const componentsPath = isInSubfolder ? '../components/' : 'components/';

// Function to load HTML components
function loadComponent(elementId, fileName) {
    console.log(`Loading ${fileName} into #${elementId}`);
    
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id "${elementId}" not found`);
        return Promise.reject(`Element #${elementId} not found`);
    }

    return fetch(`${componentsPath}${fileName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            element.innerHTML = data;
            console.log(`Successfully loaded ${fileName}`);
            return data;
        })
        .catch(error => {
            console.error(`Error loading ${fileName}:`, error);
            element.innerHTML = `<div style="color: red; padding: 20px;">
                Error loading ${fileName}: ${error.message}
                <br>Please ensure all files are in the correct location.
            </div>`;
            throw error;
        });
}

// Function to update active navigation link
function updateActiveNavLink() {
    console.log('Updating active nav link');
    
    const currentPage = currentPath.split('/').pop() || 'index.html';
    console.log('Current page:', currentPage);

    // Find all navigation links
    const navLinks = document.querySelectorAll('#navbar nav ul li a');
    console.log('Found nav links:', navLinks.length);

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const li = link.closest('li');
        
        // Check if the link href ends with the current page
        if (href && href.endsWith(currentPage)) {
            console.log('Setting active:', href);
            link.classList.add('active');
            if (li) li.classList.add('active');
        } else {
            link.classList.remove('active');
            if (li) li.classList.remove('active');
        }
    });
}

// Function to initialize search with hardcoded suggestions from navbar.html
function initializeHardcodedSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const allSuggestions = searchResults ? searchResults.querySelectorAll('li') : [];

    if (!searchInput || !searchResults) {
        console.error('Search elements not found in navbar');
        return;
    }

    console.log('Initializing hardcoded search functionality');

    // Show/filter suggestions based on input
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (!searchTerm) {
            searchResults.style.display = 'none';
            return;
        }

        let hasMatches = false;
        allSuggestions.forEach(suggestion => {
            const searchData = suggestion.getAttribute('data-search');
            const title = suggestion.getAttribute('data-title');
            
            if (searchData && title && (searchData.includes(searchTerm) || title.toLowerCase().includes(searchTerm))) {
                suggestion.style.display = 'block';
                hasMatches = true;
            } else {
                suggestion.style.display = 'none';
            }
        });

        searchResults.style.display = hasMatches ? 'block' : 'none';
    });

    // Handle clicking on suggestions
    allSuggestions.forEach(suggestion => {
        suggestion.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                // Adjust path based on current location
                let finalUrl = url;
                
                // For root pages, don't add "../"
                if (!isInSubfolder && url.startsWith('../')) {
                    finalUrl = url.substring(3); // Remove "../"
                } else if (isInSubfolder && !url.startsWith('../')) {
                    finalUrl = `../${url}`;
                }
                
                window.location.href = finalUrl;
            }
        });

        // Add hover styling
        suggestion.style.cursor = 'pointer';
        suggestion.style.padding = '10px';
        suggestion.style.borderBottom = '1px solid #eee';
        
        suggestion.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f5f5f5';
        });
        
        suggestion.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'white';
        });
    });

    // Handle search button click
    const searchButton = document.querySelector('.search-container button');
    if (searchButton) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            if (!searchTerm) return;

            // Find first matching suggestion
            for (let suggestion of allSuggestions) {
                const searchData = suggestion.getAttribute('data-search');
                const title = suggestion.getAttribute('data-title');
                
                if (searchData && title && (searchData.includes(searchTerm) || title.toLowerCase().includes(searchTerm))) {
                    const url = suggestion.getAttribute('data-url');
                    if (url) {
                        let finalUrl = url;
                        
                        // For root pages, don't add "../"
                        if (!isInSubfolder && url.startsWith('../')) {
                            finalUrl = url.substring(3); // Remove "../"
                        } else if (isInSubfolder && !url.startsWith('../')) {
                            finalUrl = `../${url}`;
                        }
                        
                        window.location.href = finalUrl;
                        return;
                    }
                }
            }
        });
    }

    // Hide suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });

    // Show suggestions again when focusing on input
    searchInput.addEventListener('focus', function() {
        const searchTerm = this.value.toLowerCase().trim();
        if (searchTerm) {
            // Re-trigger the input event to show filtered results
            const event = new Event('input');
            this.dispatchEvent(event);
        }
    });
}

// Main initialization function
function initializeNavbar() {
    // Load navbar first
    loadComponent('navbar', 'navbar.html')
        .then(() => {
            // After navbar loads, set up functionality
            updateActiveNavLink();
            initializeHardcodedSearch();
        })
        .catch(error => {
            console.error('Failed to initialize navbar:', error);
        });

    // Load footer if element exists
    const footerElement = document.getElementById('footer');
    if (footerElement) {
        loadComponent('footer', 'footer.html')
            .catch(error => {
                console.error('Failed to load footer:', error);
            });
    }
}

// Auto-initialize when DOM is ready or script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeNavbar);
} else {
    // DOM already loaded
    initializeNavbar();
}
