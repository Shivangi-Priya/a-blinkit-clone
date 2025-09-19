document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            updateCartCount();
            
            // Show added feedback
            button.textContent = 'ADDED';
            button.classList.remove('border-green-600', 'text-green-600');
            button.classList.add('bg-green-600', 'text-white');
            
            setTimeout(() => {
                 button.innerHTML = 'ADD';
                 button.classList.add('border-green-600', 'text-green-600');
                 button.classList.remove('bg-green-600', 'text-white');
            }, 2000); // Reset after 2 seconds
        });
    });

    function updateCartCount() {
        cartCountElement.textContent = cartCount;
        // Add a little bounce animation
        cartCountElement.classList.add('transform', 'scale-125');
        setTimeout(() => {
            cartCountElement.classList.remove('transform', 'scale-125');
        }, 200);
    }
});