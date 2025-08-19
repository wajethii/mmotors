   // Data for generating varied product data
        const makes = ["Yamaha", "Honda", "Suzuki", "Kawasaki", "BMW", "Ducati", "Harley-Davidson", "KTM", "Triumph"];
        const models = {
            "Yamaha": ["MT-07", "R1", "Tenere 700", "XSR900"],
            "Honda": ["CBR500R", "Africa Twin", "Rebel 500", "CB300R"],
            "Suzuki": ["V-Strom 650", "GSX-R1000", "SV650"],
            "Kawasaki": ["Ninja 400", "Z900", "Versys 650"],
            "BMW": ["R 1250 GS", "S 1000 RR", "F 850 GS"],
            "Ducati": ["Monster", "Panigale V4", "Scrambler"],
            "Harley-Davidson": ["Sportster S", "Street Glide", "Fat Boy"],
            "KTM": ["390 Duke", "1290 Super Adventure", "890 Adventure"],
            "Triumph": ["Street Triple", "Bonneville T120", "Tiger 900"]
        };
        const years = [2020, 2021, 2022, 2023, 2024];
        const conditions = ["New", "Used", "Refurbished"];
        const locations = ["Nairobi, Kenya", "Mombasa, Kenya", "Kisumu, Kenya", "Nakuru, Kenya", "Eldoret, Kenya"];
        const descriptions = [
            "A fantastic bike for both city commuting and long-distance touring. Excellent condition with low mileage and a full service history.",
            "Well-maintained, low-mileage bike with a full-service history. Ready to ride and perfect for both beginners and experienced riders.",
            "Sporty and agile, perfect for a beginner or an experienced rider looking for a thrill. Recent service and new tires installed.",
            "Adventure-ready with all the bells and whistles. Comes with panniers and a top case. Great for off-road adventures.",
            "Classic styling meets modern performance. A timeless look with a powerful engine. Well-maintained with no accidents.",
            "Newly serviced and ready to hit the road. All fluids changed and new tires installed. Great value for money."
        ];
        const statuses = ["available", "sold"];
        const colors = ["Black", "Red", "Blue", "Silver", "White", "Green", "Yellow"];

        // A function to get a random item from an array
        const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

        // The array to hold all the motorcycle products
        const motorcycles = [];
        const numberOfProducts = 28; // Products

        for (let i = 1; i <= numberOfProducts; i++) {
            const make = getRandomItem(makes);
            const model = getRandomItem(models[make]);
            const year = getRandomItem(years);
            const condition = getRandomItem(conditions);
            const status = getRandomItem(statuses);
            const isLocal = Math.random() > 0.5;
            const price = Math.floor(Math.random() * (800000 - 450000 + 1) + 450000);
            const engineSize = Math.floor(Math.random() * (1500 - 250 + 1) + 250);
            const color = getRandomItem(colors);
            const mileage = Math.floor(Math.random() * (50000 - 500 + 1) + 500);

            // Generate multiple images for each product
            const images = [];
            const imageCount = Math.floor(Math.random() * 3) + 3; // 3-5 images
            for (let j = 1; j <= imageCount; j++) {
                images.push(`https://placehold.co/600x400/000000/FFFFFF?text=${make}+${model}+${j}`);
            }

            const motorcycle = {
                id: i,
                make: make,
                model: model,
                year: year,
                engineSize: engineSize,
                price: price,
                condition: condition,
                color: color,
                mileage: mileage,
                location: getRandomItem(locations),
                description: getRandomItem(descriptions),
                status: status,
                isLocal: isLocal,
                images: images,
                // Add service history for some products to add variety
                serviceHistory: (Math.random() > 0.3) ? [
                    { date: `202${Math.floor(Math.random() * 4)}-0${Math.floor(Math.random() * 9) + 1}-15`, service: "Routine maintenance", cost: Math.floor(Math.random() * (8000 - 2000 + 1) + 2000) },
                    { date: `202${Math.floor(Math.random() * 4)}-0${Math.floor(Math.random() * 9) + 1}-20`, service: "Brake service", cost: Math.floor(Math.random() * (6000 - 1500 + 1) + 1500) },
                    { date: `202${Math.floor(Math.random() * 4)}-0${Math.floor(Math.random() * 9) + 1}-10`, service: "Tire replacement", cost: Math.floor(Math.random() * (15000 - 5000 + 1) + 5000) }
                ] : []
            };
            motorcycles.push(motorcycle);
        }

        // Filter out sold products
        const availableMotorcycles = motorcycles.filter(motorcycle => motorcycle.status === 'available');

        // DOM elements
        const productsContainer = document.getElementById('products-container');
        const viewAllBtn = document.getElementById('view-all-btn');
        const productModal = document.getElementById('productModal');
        const closeModal = document.getElementById('closeModal');
        const mainImage = document.getElementById('mainImage');
        const thumbnailsContainer = document.getElementById('thumbnailsContainer');
        const productTitle = document.getElementById('productTitle');
        const productPrice = document.getElementById('productPrice');
        const productDescription = document.getElementById('productDescription');
        const productYear = document.getElementById('productYear');
        const productEngine = document.getElementById('productEngine');
        const productCondition = document.getElementById('productCondition');
        const productLocation = document.getElementById('productLocation');
        const serviceHistory = document.getElementById('serviceHistory');
        const whatsappBtn = document.getElementById('whatsappBtn');
        const statusBadge = document.getElementById('statusBadge');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const filterButtons = document.querySelectorAll('.filter-button');

        /**
         * Renders a single product card.
         * @param {object} product - The product object to render.
         * @returns {string} The HTML string for the product card.
         */
        const createProductCard = (product) => {
            return `
                <div class="bg-white rounded-lg overflow-hidden card-shadow cursor-pointer product-card" data-id="${product.id}" data-brand="${product.make}">
                    <div class="relative">
                        <img src="${product.images[0]}" alt="${product.make} ${product.model}" class="w-full h-40 md:h-48 object-cover">
                        <span class="absolute top-2 right-2 md:top-3 md:right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-800">
                            Available
                        </span>
                    </div>
                    <div class="p-3 md:p-4">
                        <h3 class="text-base md:text-lg lg:text-xl font-semibold text-gray-800">${product.make} ${product.model}</h3>
                        <p class="text-gray-600 text-xs md:text-sm mt-1">${product.year} | ${product.engineSize}cc | ${product.color}</p>
                        <p class="text-green-600 font-bold text-base md:text-lg mt-2">Ksh ${product.price.toLocaleString()}</p>
                        <div class="flex justify-between mt-3 md:mt-4">
                            <span class="inline-block text-xs font-medium px-2.5 py-1 rounded-full ${product.condition === 'New' ? 'bg-blue-100 text-blue-800' : product.condition === 'Used' ? 'bg-gray-100 text-gray-800' : 'bg-purple-100 text-purple-800'}">
                                ${product.condition}
                            </span>
                            <span class="text-xs text-gray-500">
                                <i class="fas fa-road mr-1"></i>${product.mileage.toLocaleString()} km
                            </span>
                        </div>
                    </div>
                </div>
            `;
        };

        /**
         * Renders products into the container.
         * @param {array} productsArray - The array of products to display.
         */
        const renderProducts = (productsArray) => {
            productsContainer.innerHTML = ''; // Clear existing products
            productsArray.forEach(product => {
                productsContainer.innerHTML += createProductCard(product);
            });
            
            // Add event listeners to product cards
            document.querySelectorAll('.product-card').forEach(card => {
                card.addEventListener('click', () => {
                    const productId = parseInt(card.getAttribute('data-id'));
                    const product = availableMotorcycles.find(p => p.id === productId);
                    if (product) {
                        openProductModal(product);
                    }
                });
            });
        };

        /**
         * Opens the product modal with product details
         * @param {object} product - The product to display
         */
        const openProductModal = (product) => {
            // Set main product details
            productTitle.textContent = `${product.make} ${product.model}`;
            productPrice.textContent = `Ksh ${product.price.toLocaleString()}`;
            productDescription.textContent = product.description;
            productYear.textContent = product.year;
            productEngine.textContent = `${product.engineSize}cc`;
            productCondition.textContent = product.condition;
            productLocation.textContent = product.location;
            
            // Set status badge (always available now)
            statusBadge.textContent = 'Available';
            statusBadge.className = `status-badge bg-green-100 text-green-800`;
            
            // Set main image
            mainImage.src = product.images[0];
            mainImage.alt = `${product.make} ${product.model}`;
            
            // Create thumbnails
            thumbnailsContainer.innerHTML = '';
            product.images.forEach((img, index) => {
                const thumbnail = document.createElement('div');
                thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
                thumbnail.innerHTML = `<img src="${img}" alt="Thumbnail ${index + 1}">`;
                thumbnail.addEventListener('click', () => {
                    // Update main image
                    mainImage.src = img;
                    
                    // Update active thumbnail
                    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                    thumbnail.classList.add('active');
                });
                thumbnailsContainer.appendChild(thumbnail);
            });
            
            // Set service history
            serviceHistory.innerHTML = '';
            if (product.serviceHistory.length > 0) {
                product.serviceHistory.forEach(service => {
                    const serviceEl = document.createElement('div');
                    serviceEl.className = 'service-item';
                    serviceEl.innerHTML = `
                        <div class="flex justify-between">
                            <span class="font-medium">${service.service}</span>
                            <span class="text-blue-600">Ksh ${service.cost.toLocaleString()}</span>
                        </div>
                        <div class="text-sm text-gray-500">${service.date}</div>
                    `;
                    serviceHistory.appendChild(serviceEl);
                });
            } else {
                serviceHistory.innerHTML = '<p class="text-gray-500">No service history available</p>';
            }
            
            // Set WhatsApp button
            const phoneNumber = "254712345678"; // Replace with your number
            const message = `I'm interested in the ${product.make} ${product.model} (${product.year}) for Ksh ${product.price}. Product ID: ${product.id}`;
            whatsappBtn.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            // Show modal
            productModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        };

        /**
         * Filters products by brand
         * @param {string} brand - The brand to filter by
         */
        const filterByBrand = (brand) => {
            if (brand === 'all') {
                renderProducts(availableMotorcycles.slice(0, 8));
                document.querySelector('#Motorcycles h2').textContent = "Hot Motorcycle Deals";
            } else {
                const filtered = availableMotorcycles.filter(product => product.make === brand);
                renderProducts(filtered);
                document.querySelector('#Motorcycles h2').textContent = `${brand} Motorcycles`;
            }
        };

        // Close modal
        closeModal.addEventListener('click', () => {
            productModal.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        });

        // Close modal when clicking outside content
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) {
                productModal.classList.remove('active');
                document.body.style.overflow = ''; // Re-enable scrolling
            }
        });

        // Mobile menu toggle
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            // Toggle menu icon
            const menuIcon = mobileMenuButton.querySelector('svg');
            if (mobileMenu.classList.contains('active')) {
                menuIcon.innerHTML = '<path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />';
            } else {
                menuIcon.innerHTML = '<path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />';
            }
        });

        // Filter button functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                // Filter products
                const brand = button.getAttribute('data-brand');
                filterByBrand(brand);
            });
        });

        // Hero dropdown functionality
        document.querySelectorAll('.dropdown-menu a[data-brand]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const brand = this.getAttribute('data-brand');
                
                // Update filter buttons
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute('data-brand') === brand) {
                        btn.classList.add('active');
                    }
                });
                
                filterByBrand(brand);
            });
        });

        // Initially render a limited number of available products
        const initialProducts = availableMotorcycles.slice(0, 8);
        renderProducts(initialProducts);

        // Add event listener to the "View All Motorcycles" button
        viewAllBtn.addEventListener('click', () => {
            renderProducts(availableMotorcycles);
            viewAllBtn.style.display = 'none'; // Hide the button after all products are shown
            
            // Update the title to reflect the change
            const titleElement = document.querySelector('#Motorcycles h2');
            if (titleElement) {
                titleElement.textContent = "All Available Motorcycles";
            }
            
            // Reset filters
            filterButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelector('.filter-button[data-brand="all"]').classList.add('active');
        });
        
        // Dropdown functionality
        document.querySelectorAll('.dropdown-toggle').forEach(button => {
            button.addEventListener('click', function() {
                const dropdown = this.closest('.dropdown');
                dropdown.classList.toggle('active');
                
                // Close other dropdowns when one is opened
                document.querySelectorAll('.dropdown').forEach(d => {
                    if (d !== dropdown) {
                        d.classList.remove('active');
                    }
                });
            });
        });
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.dropdown')) {
                document.querySelectorAll('.dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
        
        // Carousel functionality
        const carouselItems = document.querySelectorAll('.carousel-item');
        const indicators = document.querySelectorAll('.indicator');
        let currentIndex = 0;
        
        // Set active indicator
        function setActiveIndicator(index) {
            indicators.forEach((indicator, i) => {
                if (i === index) {
                    indicator.classList.add('active', 'bg-primary');
                    indicator.classList.remove('bg-gray-300');
                } else {
                    indicator.classList.remove('active', 'bg-primary');
                    indicator.classList.add('bg-gray-300');
                }
            });
        }
        
        // Show slide by index
        function showSlide(index) {
            carouselItems.forEach((item, i) => {
                if (i === index) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
            setActiveIndicator(index);
            currentIndex = index;
        }
        
        // Set up indicator clicks
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Auto-advance carousel
        setInterval(() => {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            showSlide(currentIndex);
        }, 5000);
        
        // Initialize carousel
        showSlide(0);
   
        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Filter button functionality
        document.querySelectorAll('.filter-button').forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.filter-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter logic would go here
                const brand = this.getAttribute('data-brand');
                console.log(`Filtering by brand: ${brand}`);
            });
        });
         // Load header and footer when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            // Load header from external file
            loadExternalContent('header-container', 'header.html');
            
            // Load footer from external file
            loadExternalContent('footer-container', 'footer.html');
        });