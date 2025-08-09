// app.js
// Declare all DOM element variables
let motorcycleGrid, motorcycleSelect, markSoldBtn, searchInput, filterButtons;
let modal, closeModal, transactionsList, totalItems;
let addProductBtn, addProductModal, closeAddModal, cancelAddBtn, addProductForm, notificationContainer;

// Initialize the application
function init() {
    // Initialize DOM references
    motorcycleGrid = document.getElementById('motorcycle-grid');
    motorcycleSelect = document.getElementById('motorcycle-select');
    markSoldBtn = document.getElementById('mark-sold-btn');
    searchInput = document.getElementById('search-input');
    filterButtons = document.querySelectorAll('.filter-btn');
    modal = document.getElementById('motorcycle-modal');
    closeModal = document.getElementById('close-modal');
    transactionsList = document.getElementById('transactions-list');
    totalItems = document.getElementById('total-items');
    addProductBtn = document.getElementById('add-product-btn');
    addProductModal = document.getElementById('add-product-modal');
    closeAddModal = document.getElementById('close-add-modal');
    cancelAddBtn = document.getElementById('cancel-add');
    addProductForm = document.getElementById('add-product-form');
    notificationContainer = document.getElementById('notification-container');

    renderMotorcycles();
    populateMotorcycleSelect();
    renderTransactions();
    updateTotalItems();
    setupEventListeners();
}

// Render motorcycles to the grid
function renderMotorcycles(filter = 'all', searchTerm = '') {
    if (!motorcycleGrid) return;
    
    motorcycleGrid.innerHTML = '';
    
    inventoryData.motorcycles.forEach(moto => {
        // Apply filters
        if (filter === 'available' && moto.status !== 'Available') return;
        if (filter === 'sold' && moto.status !== 'Sold') return;
        
        // Apply search
        const searchText = `${moto.make} ${moto.model} ${moto.year}`.toLowerCase();
        if (searchTerm && !searchText.includes(searchTerm.toLowerCase())) return;
        
        const card = document.createElement('div');
        card.className = `bg-white rounded-xl overflow-hidden card-shadow relative fade-in ${moto.status === 'Sold' ? 'sold' : ''}`;
        
        card.innerHTML = `
            <div class="relative">
                <div class="h-48 bg-gray-200 overflow-hidden">
                    <img src="${moto.imageUrl}" alt="${moto.make} ${moto.model}" class="w-full h-full object-cover">
                </div>
                <div class="sold-overlay">
                    <span class="bg-red-600 text-white px-4 py-2 rounded-lg text-lg font-bold">SOLD</span>
                </div>
                <div class="absolute top-3 right-3 status-badge ${moto.status === 'Available' ? 'bg-green-500' : 'bg-red-500'} text-white px-3 py-1 rounded-full text-xs font-bold">
                    ${moto.status}
                </div>
            </div>
            <div class="p-5">
                <h3 class="text-xl font-bold text-dark mb-1">${moto.make} ${moto.model}</h3>
                <p class="text-gray-600 mb-3">${moto.year} • ${moto.engineSizeCC}cc</p>
                
                <div class="flex justify-between items-center mb-4">
                    <span class="text-primary font-bold text-xl">KES ${moto.priceKES.toLocaleString()}</span>
                    <span class="text-sm bg-gray-100 px-2 py-1 rounded">${moto.condition}</span>
                </div>
                
                <div class="flex justify-between items-center">
                    <button class="view-details-btn text-secondary font-medium hover:text-primary transition" data-id="${moto.motorcycleId}">
                        <i class="fas fa-info-circle mr-1"></i> View Details
                    </button>
                    ${moto.status === 'Available' ? 
                        `<button class="quick-sell-btn bg-accent hover:bg-yellow-600 text-white px-3 py-2 rounded-lg transition font-medium" data-id="${moto.motorcycleId}">
                            <i class="fas fa-tag mr-1"></i> Quick Sell
                        </button>` : 
                        ''
                    }
                </div>
            </div>
        `;
        
        motorcycleGrid.appendChild(card);
    });
}

// Populate the motorcycle select dropdown
function populateMotorcycleSelect() {
    if (!motorcycleSelect) return;
    
    motorcycleSelect.innerHTML = '<option value="">Choose a motorcycle</option>';
    
    inventoryData.motorcycles.forEach(moto => {
        if (moto.status === 'Available') {
            const option = document.createElement('option');
            option.value = moto.motorcycleId;
            option.textContent = `${moto.make} ${moto.model} (${moto.year}) - KES ${moto.priceKES.toLocaleString()}`;
            motorcycleSelect.appendChild(option);
        }
    });
}

// Render recent transactions
function renderTransactions() {
    if (!transactionsList) return;
    
    transactionsList.innerHTML = '';
    
    // Sort transactions by date (newest first)
    const sortedTransactions = [...inventoryData.transactions].sort((a, b) => 
        new Date(b.dateOfSale) - new Date(a.dateOfSale)
    );
    
    sortedTransactions.slice(0, 3).forEach(trans => {
        const moto = inventoryData.motorcycles.find(m => m.motorcycleId === trans.motorcycleId);
        if (!moto) return;
        
        const transEl = document.createElement('div');
        transEl.className = 'mb-4 pb-4 border-b border-gray-200 last:mb-0 last:pb-0 last:border-0';
        
        transEl.innerHTML = `
            <div class="flex justify-between items-start">
                <div>
                    <h4 class="font-semibold">${moto.make} ${moto.model}</h4>
                    <p class="text-sm text-gray-600">${trans.dateOfSale}</p>
                </div>
                <span class="text-success font-bold">KES ${trans.salePriceKES.toLocaleString()}</span>
            </div>
            <p class="text-sm mt-2"><span class="font-medium">Buyer:</span> ${trans.shipping_details.deliveryAddress}</p>
        `;
        
        transactionsList.appendChild(transEl);
    });
}

// Update total items counter
function updateTotalItems() {
    if (!totalItems) return;
    totalItems.textContent = inventoryData.motorcycles.length;
}

// Show motorcycle details in modal
function showMotorcycleDetails(id) {
    const moto = inventoryData.motorcycles.find(m => m.motorcycleId === id);
    
    if (moto && modal) {
        document.getElementById('modal-title').textContent = `${moto.make} ${moto.model}`;
        document.getElementById('modal-image').innerHTML = `<img src="${moto.imageUrl}" alt="${moto.make} ${moto.model}" class="w-full h-full object-cover">`;
        document.getElementById('modal-year').textContent = moto.year;
        document.getElementById('modal-engine').textContent = `${moto.engineSizeCC}cc`;
        document.getElementById('modal-condition').textContent = moto.condition;
        document.getElementById('modal-location').textContent = moto.location;
        document.getElementById('modal-price').textContent = `KES ${moto.priceKES.toLocaleString()}`;
        document.getElementById('modal-status').textContent = moto.status;
        document.getElementById('modal-description').textContent = moto.description;
        
        // Service history
        const serviceHistoryContainer = document.getElementById('modal-service-history');
        if (serviceHistoryContainer) {
            serviceHistoryContainer.innerHTML = '';
            
            if (moto.service_history.length === 0) {
                serviceHistoryContainer.innerHTML = '<p class="text-gray-600 italic">No service history recorded</p>';
            } else {
                moto.service_history.forEach(service => {
                    const serviceEl = document.createElement('div');
                    serviceEl.className = 'mb-3 pb-3 border-b border-gray-100 last:mb-0 last:pb-0 last:border-0';
                    serviceEl.innerHTML = `
                        <div class="flex justify-between">
                            <span class="font-medium">${service.serviceType}</span>
                            <span class="text-gray-600">${service.date}</span>
                        </div>
                        <p class="text-sm text-gray-700 mt-1">${service.notes}</p>
                    `;
                    serviceHistoryContainer.appendChild(serviceEl);
                });
            }
        }
        
        modal.classList.remove('hidden');
        
        // Setup service toggle for this modal instance
        const serviceToggle = document.querySelector('.service-toggle');
        if (serviceToggle) {
            serviceToggle.onclick = function() {
                const container = document.getElementById('modal-service-history');
                if (!container) return;
                
                container.classList.toggle('active');
                
                const icon = this.querySelector('i');
                if (icon) {
                    if (container.classList.contains('active')) {
                        icon.className = 'fas fa-chevron-up ml-2 text-sm';
                    } else {
                        icon.className = 'fas fa-chevron-down ml-2 text-sm';
                    }
                }
            };
        }
    }
}

// Mark a motorcycle as sold
function markAsSold(motoId, salePrice, buyerName, buyerEmail) {
    const motoIndex = inventoryData.motorcycles.findIndex(m => m.motorcycleId === motoId);
    
    if (motoIndex !== -1) {
        // Update motorcycle status
        inventoryData.motorcycles[motoIndex].status = 'Sold';
        
        // Create a new transaction
        const newTransaction = {
            transactionId: `trans-${(inventoryData.transactions.length + 1).toString().padStart(3, '0')}`,
            motorcycleId: motoId,
            sellerId: "sell-003",
            buyerId: "cust-003",
            salePriceKES: salePrice,
            dateOfSale: new Date().toISOString().split('T')[0],
            status: "Completed",
            shipping_details: {
                deliveryAddress: "To be arranged",
                shippingProvider: "TBD",
                trackingNumber: "TBD",
                deliveryDate: "TBD"
            }
        };
        
        inventoryData.transactions.unshift(newTransaction);
        
        // Update UI
        renderMotorcycles();
        populateMotorcycleSelect();
        renderTransactions();
        updateTotalItems();
        
        // Reset form
        motorcycleSelect.value = '';
        document.getElementById('sale-price').value = '';
        document.getElementById('buyer-name').value = '';
        document.getElementById('buyer-email').value = '';
        
        // Show success notification
        showNotification(`Success! ${inventoryData.motorcycles[motoIndex].make} ${inventoryData.motorcycles[motoIndex].model} has been marked as sold.`, 'success');
    }
}

// Add a new motorcycle
function addNewMotorcycle(formData) {
    // Generate unique ID
    const newId = `moto-${(inventoryData.motorcycles.length + 1).toString().padStart(3, '0')}`;
    
    // Create new motorcycle object
    const newMotorcycle = {
        motorcycleId: newId,
        make: formData.make,
        model: formData.model,
        year: parseInt(formData.year),
        engineSizeCC: parseInt(formData.engineSize),
        priceKES: parseInt(formData.price),
        condition: formData.condition,
        isLocal: formData.isLocal === 'on',
        status: "Available",
        location: formData.location,
        description: formData.description,
        imageUrl: formData.imageUrl || "https://images.unsplash.com/photo-1606220588910-8a3d4cee63f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
        service_history: []
    };
    
    // Add to inventory
    inventoryData.motorcycles.push(newMotorcycle);
    
    // Update UI
    renderMotorcycles();
    populateMotorcycleSelect();
    updateTotalItems();
    
    // Close modal and reset form
    if (addProductModal) addProductModal.classList.add('hidden');
    if (addProductForm) addProductForm.reset();
    
    // Show success notification
    showNotification(`Success! ${formData.make} ${formData.model} has been added to inventory.`, 'success');
}

// Show notification
function showNotification(message, type = 'success') {
    if (!notificationContainer) return;
    
    notificationContainer.innerHTML = `
        <div class="bg-${type === 'success' ? 'success' : 'danger'} text-white px-6 py-4 rounded-lg shadow-lg flex items-center">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} text-xl mr-3"></i>
            <div>${message}</div>
        </div>
    `;
    
    notificationContainer.classList.add('show');
    
    setTimeout(() => {
        if (notificationContainer) notificationContainer.classList.remove('show');
    }, 3000);
}

// Set up event listeners
function setupEventListeners() {
    if (!markSoldBtn) return;
    
    // Mark as sold button
    markSoldBtn.addEventListener('click', () => {
        const motoId = motorcycleSelect.value;
        const salePrice = parseFloat(document.getElementById('sale-price').value);
        const buyerName = document.getElementById('buyer-name').value.trim();
        
        if (!motoId) {
            showNotification('Please select a motorcycle', 'danger');
            return;
        }
        
        if (!salePrice || salePrice <= 0) {
            showNotification('Please enter a valid sale price', 'danger');
            return;
        }
        
        if (!buyerName) {
            showNotification('Please enter buyer name', 'danger');
            return;
        }
        
        markAsSold(motoId, salePrice, buyerName);
    });
    
    // Filter buttons
    if (filterButtons.length) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active', 'bg-primary', 'text-white'));
                btn.classList.add('active', 'bg-primary', 'text-white');
                
                const filter = btn.getAttribute('data-filter');
                renderMotorcycles(filter, searchInput.value);
            });
        });
    }
    
    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const activeFilter = document.querySelector('.filter-btn.active');
            const filter = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
            renderMotorcycles(filter, searchInput.value);
        });
    }
    
    // Quick sell and view details buttons (delegated event)
    document.addEventListener('click', (e) => {
        // Quick sell buttons
        const quickSellBtn = e.target.closest('.quick-sell-btn');
        if (quickSellBtn) {
            const motoId = quickSellBtn.getAttribute('data-id');
            
            // Pre-fill the form
            motorcycleSelect.value = motoId;
            const moto = inventoryData.motorcycles.find(m => m.motorcycleId === motoId);
            if (moto) {
                document.getElementById('sale-price').value = moto.priceKES;
            }
            
            // Scroll to form
            document.querySelector('#motorcycle-select').scrollIntoView({ behavior: 'smooth' });
        }
        
        // View details buttons
        const viewDetailsBtn = e.target.closest('.view-details-btn');
        if (viewDetailsBtn) {
            const motoId = viewDetailsBtn.getAttribute('data-id');
            showMotorcycleDetails(motoId);
        }
    });
    
    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }
    
    // Add product modal
    if (addProductBtn) {
        addProductBtn.addEventListener('click', () => {
            addProductModal.classList.remove('hidden');
        });
    }
    
    if (closeAddModal) {
        closeAddModal.addEventListener('click', () => {
            addProductModal.classList.add('hidden');
        });
    }
    
    if (cancelAddBtn) {
        cancelAddBtn.addEventListener('click', () => {
            addProductModal.classList.add('hidden');
        });
    }
    
    // Add product form submission
    if (addProductForm) {
        addProductForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                imageUrl: document.getElementById('image-url').value,
                make: document.getElementById('make').value.trim(),
                model: document.getElementById('model').value.trim(),
                year: document.getElementById('year').value.trim(),
                engineSize: document.getElementById('engine-size').value.trim(),
                price: document.getElementById('price').value.trim(),
                condition: document.getElementById('condition').value,
                location: document.getElementById('location').value.trim(),
                isLocal: document.getElementById('is-local').checked ? 'on' : '',
                description: document.getElementById('description').value.trim()
            };
            
            // Basic validation
            if (!formData.make || !formData.model || !formData.year || !formData.engineSize || 
                !formData.price || !formData.condition || !formData.location || !formData.description) {
                showNotification('Please fill in all required fields', 'danger');
                return;
            }
            
            if (isNaN(formData.year) || parseInt(formData.year) < 1900 || parseInt(formData.year) > 2030) {
                showNotification('Please enter a valid year between 1900 and 2030', 'danger');
                return;
            }
            
            if (isNaN(formData.engineSize) || parseInt(formData.engineSize) < 50 || parseInt(formData.engineSize) > 3000) {
                showNotification('Please enter a valid engine size between 50cc and 3000cc', 'danger');
                return;
            }
            
            if (isNaN(formData.price) || parseInt(formData.price) <= 0) {
                showNotification('Please enter a valid price', 'danger');
                return;
            }
            
            // Add the new motorcycle
            addNewMotorcycle(formData);
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);