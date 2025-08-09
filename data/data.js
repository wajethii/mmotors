// data.js
const inventoryData = {
   "motorcycles": [
        {
            "motorcycleId": "moto-001",
            "make": "Yamaha",
            "model": "MT-07",
            "year": 2022,
            "engineSizeCC": 689,
            "priceKES": 850000,
            "condition": "Used",
            "isLocal": true,
            "status": "Available",
            "location": "Nairobi, Kenya",
            "description": "Well-maintained Yamaha MT-07, perfect for city and highway riding. Low mileage and recently serviced.",
            "imageUrl": "https://images.unsplash.com/photo-1621141808270-8b8d2c8bdc3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
            "service_history": [
                {
                    "date": "2024-03-10",
                    "serviceType": "Full Service",
                    "notes": "Oil change, air filter replacement, chain tension adjusted."
                },
                {
                    "date": "2023-11-25",
                    "serviceType": "Tire Replacement",
                    "notes": "Replaced front and rear tires with Pirelli Diablo Rosso III."
                }
            ]
        },
        {
            "motorcycleId": "moto-002",
            "make": "Honda",
            "model": "CRF300L Rally",
            "year": 2023,
            "engineSizeCC": 286,
            "priceKES": 780000,
            "condition": "New",
            "isLocal": false,
            "status": "Available",
            "location": "Mombasa, Kenya",
            "description": "Brand new Honda CRF300L Rally, ideal for adventure and off-road enthusiasts. Imported directly from Japan.",
            "imageUrl": "https://images.unsplash.com/photo-1606220588910-8a3d4cee63f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
            "service_history": []
        },
        {
            "motorcycleId": "moto-003",
            "make": "Kawasaki",
            "model": "Ninja 400",
            "year": 2021,
            "engineSizeCC": 399,
            "priceKES": 650000,
            "condition": "Used",
            "isLocal": true,
            "status": "Sold",
            "location": "Kisumu, Kenya",
            "description": "Classic sportbike with a powerful engine. Great for both beginners and experienced riders.",
            "imageUrl": "https://images.unsplash.com/photo-1621141808265-8c8d2c8bdc3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
            "service_history": [
                {
                    "date": "2023-08-01",
                    "serviceType": "Minor Service",
                    "notes": "Inspection and chain lubrication."
                }
            ]
        },
        {
            "motorcycleId": "moto-004",
            "make": "Harley-Davidson",
            "model": "Street Bob",
            "year": 2023,
            "engineSizeCC": 1868,
            "priceKES": 2500000,
            "condition": "New",
            "isLocal": false,
            "status": "Available",
            "location": "Nairobi, Kenya",
            "description": "Powerful and stylish cruiser from Harley-Davidson. Unbeatable sound and presence.",
            "imageUrl": "https://placehold.co/600x400/FF5733/FFFFFF?text=Harley",
            "service_history": []
        },
        {
            "motorcycleId": "moto-005",
            "make": "Suzuki",
            "model": "GSX-S1000",
            "year": 2021,
            "engineSizeCC": 999,
            "priceKES": 1100000,
            "condition": "Used",
            "isLocal": true,
            "status": "Available",
            "location": "Nakuru, Kenya",
            "description": "Super naked bike with exhilarating performance. Only a few thousand kilometers on the clock.",
            "imageUrl": "https://placehold.co/600x400/33FF57/000000?text=Suzuki",
            "service_history": [
                {
                    "date": "2024-02-15",
                    "serviceType": "Full Service",
                    "notes": "Oil change, new spark plugs, brake fluid flushed."
                }
            ]
        },
        {
            "motorcycleId": "moto-006",
            "make": "KTM",
            "model": "390 Duke",
            "year": 2022,
            "engineSizeCC": 373,
            "priceKES": 550000,
            "condition": "Used",
            "isLocal": true,
            "status": "Available",
            "location": "Eldoret, Kenya",
            "description": "Lightweight and agile, the perfect bike for navigating city traffic and twisty roads.",
            "imageUrl": "https://placehold.co/600x400/5733FF/FFFFFF?text=KTM",
            "service_history": [
                {
                    "date": "2024-01-05",
                    "serviceType": "Chain and sprocket replacement",
                    "notes": "Replaced worn-out chain and sprockets."
                }
            ]
        },
        {
            "motorcycleId": "moto-007",
            "make": "BMW",
            "model": "R 1250 GS",
            "year": 2023,
            "engineSizeCC": 1254,
            "priceKES": 3200000,
            "condition": "Used",
            "isLocal": false,
            "status": "Available",
            "location": "Nairobi, Kenya",
            "description": "The ultimate adventure motorcycle, ready for any journey. Low mileage and fully equipped.",
            "imageUrl": "https://placehold.co/600x400/FFFF33/000000?text=BMW",
            "service_history": []
        },
        {
            "motorcycleId": "moto-008",
            "make": "Yamaha",
            "model": "Ténéré 700",
            "year": 2021,
            "engineSizeCC": 689,
            "priceKES": 1200000,
            "condition": "Used",
            "isLocal": true,
            "status": "Sold",
            "location": "Mombasa, Kenya",
            "description": "Iconic adventure bike with a rich heritage. Perfect for off-road exploration.",
            "imageUrl": "https://placehold.co/600x400/33A2FF/FFFFFF?text=Ténéré",
            "service_history": [
                {
                    "date": "2023-10-20",
                    "serviceType": "Tyre change",
                    "notes": "Fitted new off-road tires for better grip."
                }
            ]
        },
        {
            "motorcycleId": "moto-009",
            "make": "Honda",
            "model": "CB300R",
            "year": 2023,
            "engineSizeCC": 286,
            "priceKES": 480000,
            "condition": "New",
            "isLocal": true,
            "status": "Available",
            "location": "Nairobi, Kenya",
            "description": "Lightweight and easy-to-handle naked bike, perfect for new riders. ABS included.",
            "imageUrl": "https://placehold.co/600x400/A233FF/FFFFFF?text=CB300R",
            "service_history": []
        },
        {
            "motorcycleId": "moto-010",
            "make": "Kawasaki",
            "model": "Z900",
            "year": 2022,
            "engineSizeCC": 948,
            "priceKES": 1350000,
            "condition": "Used",
            "isLocal": true,
            "status": "Available",
            "location": "Kisumu, Kenya",
            "description": "Powerful and aggressive naked bike. Excellent condition with low mileage.",
            "imageUrl": "https://placehold.co/600x400/FFA233/000000?text=Z900",
            "service_history": [
                {
                    "date": "2024-04-12",
                    "serviceType": "Full Service",
                    "notes": "Routine service, oil change, and brake check."
                }
            ]
        },
        {
            "motorcycleId": "moto-011",
            "make": "Ducati",
            "model": "Scrambler Icon",
            "year": 2021,
            "engineSizeCC": 803,
            "priceKES": 1500000,
            "condition": "Used",
            "isLocal": true,
            "status": "Available",
            "location": "Nakuru, Kenya",
            "description": "A stylish and retro-inspired bike that's a joy to ride. Well-maintained and recently serviced.",
            "imageUrl": "https://placehold.co/600x400/33FFB2/000000?text=Ducati",
            "service_history": [
                {
                    "date": "2023-11-05",
                    "serviceType": "Major Service",
                    "notes": "Desmo service completed. All fluids checked."
                }
            ]
        },
        {
            "motorcycleId": "moto-012",
            "make": "Triumph",
            "model": "Street Triple R",
            "year": 2022,
            "engineSizeCC": 765,
            "priceKES": 1400000,
            "condition": "Used",
            "isLocal": false,
            "status": "Available",
            "location": "Nairobi, Kenya",
            "description": "Fantastic handling and a superb three-cylinder engine. A truly special ride.",
            "imageUrl": "https://placehold.co/600x400/B233FF/FFFFFF?text=Triumph",
            "service_history": []
        },
        {
            "motorcycleId": "moto-013",
            "make": "Honda",
            "model": "Africa Twin",
            "year": 2023,
            "engineSizeCC": 1084,
            "priceKES": 2800000,
            "condition": "New",
            "isLocal": false,
            "status": "Available",
            "location": "Mombasa, Kenya",
            "description": "Honda's legendary adventure bike, now with more power and technology. Ready for any terrain.",
            "imageUrl": "https://placehold.co/600x400/FFB233/000000?text=Africa+Twin",
            "service_history": []
        },
        {
            "motorcycleId": "moto-014",
            "make": "Yamaha",
            "model": "YZF-R1",
            "year": 2021,
            "engineSizeCC": 998,
            "priceKES": 2200000,
            "condition": "Used",
            "isLocal": true,
            "status": "Sold",
            "location": "Kisumu, Kenya",
            "description": "High-performance superbike. Track-day ready with some tasteful modifications.",
            "imageUrl": "https://placehold.co/600x400/33B2FF/FFFFFF?text=R1",
            "service_history": [
                {
                    "date": "2024-01-30",
                    "serviceType": "Race tune and suspension setup",
                    "notes": "Adjusted suspension for track use. Engine mapped for performance."
                }
            ]
        },
        {
            "motorcycleId": "moto-015",
            "make": "Kawasaki",
            "model": "Versys 650",
            "year": 2023,
            "engineSizeCC": 649,
            "priceKES": 900000,
            "condition": "New",
            "isLocal": true,
            "status": "Available",
            "location": "Nairobi, Kenya",
            "description": "A versatile and comfortable bike for touring and daily commuting. New stock.",
            "imageUrl": "https://placehold.co/600x400/B2FF33/000000?text=Versys",
            "service_history": []
        },
        {
            "motorcycleId": "moto-016",
            "make": "Suzuki",
            "model": "SV650",
            "year": 2022,
            "engineSizeCC": 645,
            "priceKES": 700000,
            "condition": "Used",
            "isLocal": true,
            "status": "Available",
            "location": "Nairobi, Kenya",
            "description": "V-twin engine is a blast to ride. Great for beginners looking for a bit more power.",
            "imageUrl": "https://placehold.co/600x400/FFB233/000000?text=SV650",
            "service_history": [
                {
                    "date": "2024-05-18",
                    "serviceType": "Full Service",
                    "notes": "Oil change and chain adjustment."
                }
            ]
        },
        {
            "motorcycleId": "moto-017",
            "make": "KTM",
            "model": "1290 Super Duke R",
            "year": 2023,
            "engineSizeCC": 1301,
            "priceKES": 2850000,
            "condition": "New",
            "isLocal": false,
            "status": "Available",
            "location": "Nairobi, Kenya",
            "description": "The 'Beast' is back, with more power and technology than ever. Imported on order.",
            "imageUrl": "https://placehold.co/600x400/33FFB2/000000?text=Super+Duke",
            "service_history": []
        },
        {
            "motorcycleId": "moto-018",
            "make": "BMW",
            "model": "S 1000 RR",
            "year": 2022,
            "engineSizeCC": 999,
            "priceKES": 3000000,
            "condition": "Used",
            "isLocal": false,
            "status": "Available",
            "location": "Mombasa, Kenya",
            "description": "A track weapon for the road. Immaculate condition with a full service history.",
            "imageUrl": "https://placehold.co/600x400/A233FF/FFFFFF?text=S1000RR",
            "service_history": [
                {
                    "date": "2024-03-22",
                    "serviceType": "Major Service",
                    "notes": "Valve clearance check and fluid change."
                }
            ]
        },
        {
            "motorcycleId": "moto-019",
            "make": "Yamaha",
            "model": "XMAX 300",
            "year": 2023,
            "engineSizeCC": 292,
            "priceKES": 600000,
            "condition": "New",
            "isLocal": true,
            "status": "Sold",
            "location": "Nairobi, Kenya",
            "description": "A practical and stylish scooter, perfect for city commuting. New stock.",
            "imageUrl": "https://placehold.co/600x400/5733FF/FFFFFF?text=XMAX",
            "service_history": []
        },
        {
            "motorcycleId": "moto-020",
            "make": "Honda",
            "model": "Rebel 500",
            "year": 2021,
            "engineSizeCC": 471,
            "priceKES": 750000,
            "condition": "Used",
            "isLocal": true,
            "status": "Available",
            "location": "Kisumu, Kenya",
            "description": "A comfortable and easy-to-ride cruiser with a classic look.",
            "imageUrl": "https://placehold.co/600x400/33FF57/000000?text=Rebel",
            "service_history": [
                {
                    "date": "2023-12-01",
                    "serviceType": "Minor Service",
                    "notes": "Oil change and general checkup."
                }
            ]
        },
        {
            "motorcycleId": "moto-021",
            "make": "Kawasaki",
            "model": "W800",
            "year": 2022,
            "engineSizeCC": 773,
            "priceKES": 1250000,
            "condition": "New",
            "isLocal": false,
            "status": "Available",
            "location": "Nairobi, Kenya",
            "description": "A beautiful retro-styled motorcycle with modern features. A true head-turner.",
            "imageUrl": "https://placehold.co/600x400/FF5733/FFFFFF?text=W800",
            "service_history": []
        },
        {
            "motorcycleId": "moto-022",
            "make": "Ducati",
            "model": "Monster",
            "year": 2023,
            "engineSizeCC": 937,
            "priceKES": 2000000,
            "condition": "New",
            "isLocal": false,
            "status": "Available",
            "location": "Mombasa, Kenya",
            "description": "The latest evolution of the iconic Monster. Lighter, more powerful, and full of character.",
            "imageUrl": "https://placehold.co/600x400/33A2FF/FFFFFF?text=Monster",
            "service_history": []
        },
        {
            "motorcycleId": "moto-023",
            "make": "Harley-Davidson",
            "model": "Iron 883",
            "year": 2021,
            "engineSizeCC": 883,
            "priceKES": 1600000,
            "condition": "Used",
            "isLocal": true,
            "status": "Sold",
            "location": "Nakuru, Kenya",
            "description": "Classic Sportster with a custom matte black finish. Low miles, well-cared-for.",
            "imageUrl": "https://placehold.co/600x400/33B2FF/FFFFFF?text=Iron+883",
            "service_history": [
                {
                    "date": "2024-02-28",
                    "serviceType": "Full Service",
                    "notes": "Routine oil, filter, and brake fluid change. New battery installed."
                }
            ]
        },
        {
            "motorcycleId": "moto-024",
            "make": "Triumph",
            "model": "Tiger 900 GT",
            "year": 2022,
            "engineSizeCC": 888,
            "priceKES": 1800000,
            "condition": "Used",
            "isLocal": true,
            "status": "Available",
            "location": "Eldoret, Kenya",
            "description": "An excellent adventure tourer with a unique triple engine sound. Ready for long trips.",
            "imageUrl": "https://placehold.co/600x400/B2FF33/000000?text=Tiger+900",
            "service_history": [
                {
                    "date": "2024-04-10",
                    "serviceType": "Minor Service",
                    "notes": "General check-up and chain lubrication."
                }
            ]
        },
        {
            "motorcycleId": "moto-025",
            "make": "Royal Enfield",
            "model": "Interceptor 650",
            "year": 2023,
            "engineSizeCC": 648,
            "priceKES": 680000,
            "condition": "New",
            "isLocal": true,
            "status": "Available",
            "location": "Nairobi, Kenya",
            "description": "A modern classic with a smooth parallel-twin engine. Great value and style.",
            "imageUrl": "https://placehold.co/600x400/A233FF/FFFFFF?text=Interceptor",
            "service_history": []
        },
        {
            "motorcycleId": "moto-026",
            "make": "Benelli",
            "model": "TRK 502X",
            "year": 2022,
            "engineSizeCC": 500,
            "priceKES": 750000,
            "condition": "Used",
            "isLocal": true,
            "status": "Available",
            "location": "Mombasa, Kenya",
            "description": "Adventure bike with a comfortable riding position. Perfect for exploring the country.",
            "imageUrl": "https://placehold.co/600x400/33FF57/000000?text=Benelli",
            "service_history": [
                {
                    "date": "2024-01-15",
                    "serviceType": "Full Service",
                    "notes": "Oil change, new oil filter, and brake pads replaced."
                }
            ]
        },
        {
            "motorcycleId": "moto-027",
            "make": "Husqvarna",
            "model": "Svartpilen 401",
            "year": 2023,
            "engineSizeCC": 373,
            "priceKES": 620000,
            "condition": "New",
            "isLocal": false,
            "status": "Available",
            "location": "Kisumu, Kenya",
            "description": "A unique and stylish urban scrambler. Compact, light, and fun to ride.",
            "imageUrl": "https://placehold.co/600x400/FFB233/000000?text=Svartpilen",
            "service_history": []
        },
        {
            "motorcycleId": "moto-028",
            "make": "CFMoto",
            "model": "450SR",
            "year": 2024,
            "engineSizeCC": 450,
            "priceKES": 600000,
            "condition": "New",
            "isLocal": true,
            "status": "Available",
            "location": "Nairobi, Kenya",
            "description": "A brand new sportbike offering a fantastic blend of style and performance at an affordable price.",
            "imageUrl": "https://placehold.co/600x400/FF5733/FFFFFF?text=CFMoto",
            "service_history": []
        },
        {
            "motorcycleId": "moto-029",
            "make": "TVS",
            "model": "Apache RTR 200",
            "year": 2023,
            "engineSizeCC": 197,
            "priceKES": 280000,
            "condition": "Used",
            "isLocal": true,
            "status": "Sold",
            "location": "Nakuru, Kenya",
            "description": "A popular commuter and street bike in Kenya. Very fuel-efficient and reliable.",
            "imageUrl": "https://placehold.co/600x400/5733FF/FFFFFF?text=TVS",
            "service_history": [
                {
                    "date": "2024-03-01",
                    "serviceType": "Minor Service",
                    "notes": "Routine oil change and brake inspection."
                }
            ]
        },
        {
            "motorcycleId": "moto-030",
            "make": "Bajaj",
            "model": "Pulsar 220F",
            "year": 2022,
            "engineSizeCC": 220,
            "priceKES": 320000,
            "condition": "Used",
            "isLocal": true,
            "status": "Available",
            "location": "Eldoret, Kenya",
            "description": "A well-known bike for its performance and reliability in the Kenyan market.",
            "imageUrl": "https://placehold.co/600x400/33A2FF/FFFFFF?text=Bajaj",
            "service_history": [
                {
                    "date": "2024-02-14",
                    "serviceType": "Full Service",
                    "notes": "Carburetor cleaning and spark plug replacement."
                }
            ]
        },
        {
            "motorcycleId": "moto-031",
            "make": "Yamaha",
            "model": "MT-09",
            "year": 2024,
            "engineSizeCC": 890,
            "priceKES": 1600000,
            "condition": "New",
            "isLocal": true,
            "status": "Available",
            "location": "Nairobi, Kenya",
            "description": "The latest MT-09 with a powerful CP3 engine. A true hyper-naked machine.",
            "imageUrl": "https://placehold.co/600x400/B2FF33/000000?text=MT-09",
            "service_history": []
        },
        {
            "motorcycleId": "moto-032",
            "make": "Honda",
            "model": "CB500X",
            "year": 2022,
            "engineSizeCC": 471,
            "priceKES": 850000,
            "condition": "Used",
            "isLocal": true,
            "status": "Available",
            "location": "Mombasa, Kenya",
            "description": "An excellent all-rounder adventure bike. Comfortable and reliable.",
            "imageUrl": "https://placehold.co/600x400/A233FF/FFFFFF?text=CB500X",
            "service_history": [
                {
                    "date": "2024-05-10",
                    "serviceType": "Full Service",
                    "notes": "Chain adjustment, oil change, and general inspection."
                }
            ]
        },
        {
            "motorcycleId": "moto-033",
            "make": "Kawasaki",
            "model": "Z650",
            "year": 2021,
            "engineSizeCC": 649,
            "priceKES": 800000,
            "condition": "Used",
            "isLocal": true,
            "status": "Sold",
            "location": "Kisumu, Kenya",
            "description": "A fun and nimble naked bike. Perfect for riders stepping up from a smaller displacement.",
            "imageUrl": "https://placehold.co/600x400/FFB233/000000?text=Z650",
            "service_history": [
                {
                    "date": "2023-10-05",
                    "serviceType": "Minor Service",
                    "notes": "Fluid check and brake pad replacement."
                }
            ]
        },
        {
            "motorcycleId": "moto-034",
            "make": "Suzuki",
            "model": "Hayabusa",
            "year": 2023,
            "engineSizeCC": 1340,
            "priceKES": 3500000,
            "condition": "New",
            "isLocal": false,
            "status": "Available",
            "location": "Nairobi, Kenya",
            "description": "The legendary 'Busa' is back with updated electronics and styling. Unregistered.",
            "imageUrl": "https://placehold.co/600x400/B233FF/FFFFFF?text=Hayabusa",
            "service_history": []
        },
        {
            "motorcycleId": "moto-035",
            "make": "KTM",
            "model": "Adventure 390",
            "year": 2022,
            "engineSizeCC": 373,
            "priceKES": 700000,
            "condition": "Used",
            "isLocal": true,
            "status": "Available",
            "location": "Nakuru, Kenya",
            "description": "A lightweight and capable adventure bike. Great for off-road trails and daily rides.",
            "imageUrl": "https://placehold.co/600x400/33B2FF/FFFFFF?text=Adventure",
            "service_history": [
                {
                    "date": "2024-01-20",
                    "serviceType": "Full Service",
                    "notes": "Oil and filter change. Chain and sprocket lubricated."
                }
            ]
        }
    ],
    "transactions": [
        {
            "transactionId": "trans-001",
            "motorcycleId": "moto-003",
            "sellerId": "sell-001",
            "buyerId": "cust-001",
            "salePriceKES": 650000,
            "dateOfSale": "2024-05-15",
            "status": "Completed",
            "shipping_details": {
                "deliveryAddress": "123 Main Street, Nairobi, Kenya",
                "shippingProvider": "G4S",
                "trackingNumber": "G4S-12345678",
                "deliveryDate": "2024-05-18"
            }
        },
        {
            "transactionId": "trans-002",
            "motorcycleId": "moto-001",
            "sellerId": "sell-002",
            "buyerId": "cust-002",
            "salePriceKES": 800000,
            "dateOfSale": "2024-06-20",
            "status": "Completed",
            "shipping_details": {
                "deliveryAddress": "456 Ocean Road, Mombasa, Kenya",
                "shippingProvider": "Wells Fargo",
                "trackingNumber": "WF-98765432",
                "deliveryDate": "2024-06-22"
            }
        },
        {
            "transactionId": "trans-003",
            "motorcycleId": "moto-008",
            "sellerId": "sell-003",
            "buyerId": "cust-003",
            "salePriceKES": 1150000,
            "dateOfSale": "2024-07-01",
            "status": "Completed",
            "shipping_details": {
                "deliveryAddress": "789 Lake View, Kisumu, Kenya",
                "shippingProvider": "DHL",
                "trackingNumber": "DHL-11223344",
                "deliveryDate": "2024-07-05"
            }
        },
        {
            "transactionId": "trans-004",
            "motorcycleId": "moto-014",
            "sellerId": "sell-004",
            "buyerId": "cust-004",
            "salePriceKES": 2100000,
            "dateOfSale": "2024-07-10",
            "status": "Completed",
            "shipping_details": {
                "deliveryAddress": "101 Speedway, Eldoret, Kenya",
                "shippingProvider": "G4S",
                "trackingNumber": "G4S-87654321",
                "deliveryDate": "2024-07-12"
            }
        },
        {
            "transactionId": "trans-005",
            "motorcycleId": "moto-019",
            "sellerId": "sell-005",
            "buyerId": "cust-005",
            "salePriceKES": 580000,
            "dateOfSale": "2024-07-15",
            "status": "Completed",
            "shipping_details": {
                "deliveryAddress": "202 Urban Lane, Nairobi, Kenya",
                "shippingProvider": "Wells Fargo",
                "trackingNumber": "WF-55443322",
                "deliveryDate": "2024-07-17"
            }
        },
        {
            "transactionId": "trans-006",
            "motorcycleId": "moto-023",
            "sellerId": "sell-006",
            "buyerId": "cust-006",
            "salePriceKES": 1550000,
            "dateOfSale": "2024-07-20",
            "status": "Completed",
            "shipping_details": {
                "deliveryAddress": "303 Custom Road, Nakuru, Kenya",
                "shippingProvider": "Wells Fargo",
                "trackingNumber": "WF-99887766",
                "deliveryDate": "2024-07-22"
            }
        },
        {
            "transactionId": "trans-007",
            "motorcycleId": "moto-029",
            "sellerId": "sell-007",
            "buyerId": "cust-007",
            "salePriceKES": 270000,
            "dateOfSale": "2024-07-25",
            "status": "Completed",
            "shipping_details": {
                "deliveryAddress": "404 Commuter Street, Nairobi, Kenya",
                "shippingProvider": "G4S",
                "trackingNumber": "G4S-44332211",
                "deliveryDate": "2024-07-27"
            }
        },
        {
            "transactionId": "trans-008",
            "motorcycleId": "moto-033",
            "sellerId": "sell-008",
            "buyerId": "cust-008",
            "salePriceKES": 780000,
            "dateOfSale": "2024-08-01",
            "status": "Completed",
            "shipping_details": {
                "deliveryAddress": "505 Corner Road, Kisumu, Kenya",
                "shippingProvider": "DHL",
                "trackingNumber": "DHL-55667788",
                "deliveryDate": "2024-08-03"
            }
        }
    ]


        };
