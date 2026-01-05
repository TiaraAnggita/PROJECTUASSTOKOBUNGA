/**
* Template Name: UpConstruction
* Template URL: https://bootstrapmade.com/upconstruction-bootstrap-construction-website-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

})();

// Gunakan window.cart agar variabel ini bisa diakses oleh fungsi checkout() di luar scope
window.cart = []; 

document.addEventListener('DOMContentLoaded', () => {
  const cartBtn = document.getElementById('cart-btn');
  const cartSidebar = document.getElementById('cart-sidebar');
  const closeCart = document.getElementById('close-cart');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');

  // Buka Keranjang
  if (cartBtn) {
    cartBtn.addEventListener('click', () => cartSidebar.classList.add('active'));
  }

  // Tutup Keranjang
  if (closeCart) {
    closeCart.addEventListener('click', () => cartSidebar.classList.remove('active'));
  }

  // Tambah ke Keranjang
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
      const btn = e.target;
      const name = btn.getAttribute('data-name');
      const price = parseInt(btn.getAttribute('data-price'));
      const img = btn.getAttribute('data-img');
      
      window.cart.push({ name, price, img });
      updateCartUI();
      
      btn.innerText = "Ditambahkan!";
      setTimeout(() => { btn.innerText = "+ Keranjang"; }, 1000);
    }
  });

  function updateCartUI() {
    if (cartCount) cartCount.innerText = window.cart.length;
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = '';
    
    if (window.cart.length === 0) {
      cartItemsContainer.innerHTML = '<p class="text-center mt-5 text-muted">Keranjang masih kosong.</p>';
      cartTotal.innerText = 'Rp 0';
      return;
    }

    let total = 0;
    window.cart.forEach((item, index) => {
      total += item.price;
      cartItemsContainer.innerHTML += `
        <div class="cart-item">
          <img src="${item.img}">
          <div class="cart-item-info">
            <h6>${item.name}</h6>
            <p>Rp ${item.price.toLocaleString('id-ID')}</p>
          </div>
          <i class="bi bi-trash remove-item" data-index="${index}" style="cursor:pointer; color:red; margin-left:auto;"></i>
        </div>
      `;
    });
    cartTotal.innerText = `Rp ${total.toLocaleString('id-ID')}`;
  }

  // Hapus Item
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
      const index = e.target.getAttribute('data-index');
      window.cart.splice(index, 1);
      updateCartUI();
    }
  });
});

/**
 * FUNGSI CHECKOUT LANGSUNG KE DATABASE (PHP)
 */
async function checkout() {
  const totalText = document.getElementById('cart-total').innerText;
  if (totalText === "Rp 0") return alert("Keranjang belanja Anda masih kosong!");

  // Ambil data pelanggan melalui prompt (lebih cepat untuk testing)
  const nama = prompt("Masukkan Nama Lengkap:");
  if (!nama) return;
  const alamat = prompt("Masukkan Alamat Pengiriman:");
  if (!alamat) return;

  // Konversi total ke angka saja
  const totalHarga = parseInt(totalText.replace(/[^0-9]/g, ''));

  // Siapkan data yang akan dikirim ke proses_checkout.php
  const dataPesanan = {
    nama: nama,
    alamat: alamat,
    total: totalHarga,
    items: window.cart // Mengirim array barang
  };

  try {
    const response = await fetch('proses_checkout.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataPesanan)
    });

    const hasil = await response.json();

    if (hasil.success) {
      alert("Pesanan Berhasil! Terima kasih telah belanja di Evergreen.");
      window.cart = []; // Kosongkan variabel keranjang
      location.reload(); // Refresh halaman
    } else {
      alert("Gagal: " + hasil.message);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Koneksi gagal! Pastikan server PHP Anda (XAMPP) menyala.");
  }
}