// Universal Image Modal System
// Works with any image that has the 'modal-trigger' class

class ImageModal {
    constructor() {
        this.modal = null;
        this.modalImg = null;
        this.captionText = null;
        this.closeBtn = null;
        this.init();
    }

    init() {
        this.createModal();
        this.attachEventListeners();
        this.setupTriggers();
    }

    createModal() {
        // Check if modal already exists
        this.modal = document.getElementById("imageModal");
        if (this.modal) return;

        // Create modal HTML structure
        this.modal = document.createElement("div");
        this.modal.id = "imageModal";
        this.modal.className = "modal";
        this.modal.innerHTML = `
            <span class="close">&times;</span>
            <img class="modal-content" id="modalImg" alt="Modal Image">
            <div id="modalCaption"></div>
        `;
        
        document.body.appendChild(this.modal);
        
        // Get references to modal elements
        this.modalImg = document.getElementById("modalImg");
        this.captionText = document.getElementById("modalCaption");
        this.closeBtn = this.modal.querySelector(".close");
    }

    attachEventListeners() {
        // Close modal when clicking the X
        this.closeBtn.onclick = () => this.closeModal();

        // Close modal when clicking outside the image
        this.modal.onclick = (event) => {
            if (event.target === this.modal) {
                this.closeModal();
            }
        };

        // Close modal with Escape key
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && this.modal.style.display === "block") {
                this.closeModal();
            }
        });
    }

    setupTriggers() {
        // Add click handlers to all images with 'modal-trigger' class
        const triggerImages = document.querySelectorAll(".modal-trigger");
        
        triggerImages.forEach(img => {
            // Remove existing listeners to prevent duplicates
            img.removeEventListener("click", this.handleImageClick);
            // Add new listener
            img.addEventListener("click", (e) => this.handleImageClick(e));
            
            // Add visual indication that image is clickable
            img.style.cursor = "pointer";
        });
    }

    handleImageClick(event) {
        const img = event.target;
        this.openModal(img.src, img.alt || img.dataset.caption || "");
    }

    openModal(imageSrc, caption) {
        this.modal.style.display = "block";
        document.body.classList.add("modal-open");
        
        // Add loading state
        this.modalImg.classList.add("loading");
        
        // Load the image
        this.modalImg.onload = () => {
            this.modalImg.classList.remove("loading");
        };
        
        this.modalImg.src = imageSrc;
        this.captionText.innerHTML = caption;
    }

    closeModal() {
        this.modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }

    // Public method to refresh triggers (useful when adding images dynamically)
    refresh() {
        this.setupTriggers();
    }
}

// Initialize the modal system
let imageModalInstance;

function initImageModal() {
    if (!imageModalInstance) {
        imageModalInstance = new ImageModal();
    } else {
        imageModalInstance.refresh();
    }
}

// Auto-initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initImageModal);

// Export for manual initialization
window.ImageModal = ImageModal;
window.initImageModal = initImageModal;
