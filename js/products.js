const products = [
    {
        category: "Electronics",
        name: "Premium Wireless Headphones with Noise Cancellation",
        rating: 4,
        ratingCount: 1234,
        price: 8999,
        oldPrice: 12999,
        discount: "-31%",
        outOfStock: false,
    },
    {
        category: "Wearables",
        name: "Smart Fitness Watch with Heart Rate Monitor",
        rating: 4,
        ratingCount: 856,
        price: 15999,
        oldPrice: 19999,
        discount: "-20%",
        outOfStock: false,
    },
    {
        category: "Fashion",
        name: "Organic Cotton Casual T-Shirt for Men",
        rating: 3,
        ratingCount: 432,
        price: 1299,
        oldPrice: 1899,
        discount: "-32%",
        outOfStock: false,
    },
    {
        category: "Photography",
        name: "Professional Camera Lens 50mm f/1.8",
        rating: 3,
        ratingCount: 156,
        price: 25999,
        oldPrice: null,
        discount: null,
        outOfStock: true,
    },
    {
        category: "Furniture",
        name: "Ergonomic Office Chair with Lumbar Support",
        rating: 4,
        ratingCount: 678,
        price: 18999,
        oldPrice: 24999,
        discount: "-24%",
        outOfStock: false,
    },
    {
        category: "Electronics",
        name: "Bluetooth Portable Speaker Waterproof",
        rating: 4,
        ratingCount: 945,
        price: 3999,
        oldPrice: 5999,
        discount: "-33%",
        outOfStock: false,
    },
    {
        category: "Electronics",
        name: "Gaming Mechanical Keyboard RGB Backlit",
        rating: 5,
        ratingCount: 523,
        price: 7499,
        oldPrice: 9999,
        discount: "-25%",
        outOfStock: true,
    },
    {
        category: "Grooming",
        name: "Skincare Kit with Natural Ingredients",
        rating: 3,
        ratingCount: 789,
        price: 2999,
        oldPrice: 4499,
        discount: "-33%",
        outOfStock: false,
    }
];
// Replace this with your actual Unsplash Access Key
const UNSPLASH_ACCESS_KEY = "_HM4vCxWz8KfJ5FbjpHEMhz-prB93VqI1d-46K3sCsk";

// Fetch image from Unsplash
async function fetchImage(query) {
    const endpoint = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&orientation=squarish&per_page=1&client_id=${UNSPLASH_ACCESS_KEY}`;

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            const text = await response.text();
            console.warn("Unsplash API error:", text);
            return "https://via.placeholder.com/300?text=Image+Unavailable";
        }
        const data = await response.json();
        return data?.results?.[0]?.urls?.small || "https://via.placeholder.com/300?text=No+Image";

    } catch (error) {
        console.error("Failed to fetch image for", query, error);
        return "https://via.placeholder.com/300?text=Error";
    }
}

// Render all products
async function renderProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    for (const p of products) {
        const imageUrl = await fetchImage(p.name);

        const card = document.createElement("div");
        card.className = "product-card";
        if (p.outOfStock) card.classList.add("out-of-stock");

        const cartLabel = p.outOfStock
            ? "Out of Stock"
            : `<i class="fa-solid fa-shopping-cart"></i> Add to Cart`;

        card.innerHTML = `
            ${p.discount ? `<span class="badge">${p.discount}</span>` : ""}
            <span class="wishlist"><i class="fa-regular fa-heart"></i></span>
            <div class="image"><img src="${imageUrl}" alt="${p.name}" /></div>
            <div class="category">${p.category}</div>
            <h3>${p.name}</h3>
            <div class="rating">${"★".repeat(p.rating)}<span> (${p.ratingCount})</span></div>
            <div class="price">₹${p.price.toLocaleString("en-IN")}
                ${p.oldPrice ? `<span class="old">₹${p.oldPrice.toLocaleString("en-IN")}</span>` : ""}
            </div>
            <button ${p.outOfStock ? "disabled" : ""}>${cartLabel}</button>
        `;

        const wishlist = card.querySelector(".wishlist i");
        wishlist.addEventListener("click", () => {
            if (wishlist.classList.contains("fa-regular")) {
                wishlist.classList.remove("fa-regular");
                wishlist.classList.add("fa-solid");
            } else {
                wishlist.classList.remove("fa-solid");
                wishlist.classList.add("fa-regular");
            }
        });


        productList.appendChild(card);
    }
}

renderProducts();
