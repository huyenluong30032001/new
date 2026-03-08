


(function(o, c) {
  var n = c.documentElement, t = " w-mod-";
  n.className += t + "js";
  if ("ontouchstart" in o || (o.DocumentTouch && c instanceof DocumentTouch)) {
    n.className += t + "touch";
  }
})(window, document);



  window.addEventListener('DOMContentLoaded', function () {
    const badge = document.querySelector('.w-webflow-badge');
    if (badge) badge.remove();
  });

  window.addEventListener('load', function () {
    setTimeout(function () {
      const badge = document.querySelector('.w-webflow-badge');
      if (badge) badge.remove();
    }, 500);
  });

// Swiper initialization for interactive features


// Add smooth scroll for menu buttons
document.querySelectorAll(".menu_btn").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(btn.getAttribute("data-target"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== JS chuyển từ <script> inline trong <head> =====

// WebFont Loader
WebFont.load({
  google: {
    families: [
      "Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic",
      "Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic",
      "Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
      "Inconsolata:400,700",
      "Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
      "Inter:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic"
    ]
  },
  active() {
    // fonts đã load xong → cập nhật lại swiper
    document.querySelectorAll('.swiper[data-role="main"]').forEach(mainEl => {
      if (mainEl.swiper) {
        mainEl.swiper.update();
        const thumbs = (mainEl.swiper.thumbs && mainEl.swiper.thumbs.swiper) ? mainEl.swiper.thumbs.swiper : null;
        if (thumbs) thumbs.update();
      }
    });
  }
});


// Webflow helper: thêm class w-mod-js / w-mod-touch lên <html>
(function (o, c) {
  var n = c.documentElement, t = " w-mod-";
  n.className += t + "js";
  if ("ontouchstart" in o || (o.DocumentTouch && c instanceof DocumentTouch)) {
    n.className += t + "touch";
  }
})(window, document);

// Yêu cầu: đã load Swiper JS trước file này



  /* ==== Extracted from <head> inline scripts ==== */

// Load Google fonts defined by Webflow
if (typeof WebFont !== "undefined") {
  WebFont.load({
    google: {
      families: [
        "Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic",
        "Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic",
        "Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
        "Inconsolata:400,700",
        "Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
        "Inter:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic"
      ]
    }
  });
}

// Add Webflow's js/touch classes to <html>
(function (o, c) {
  var n = c.documentElement,
    t = " w-mod-";
  n.className += t + "js";
  if ("ontouchstart" in o || (o.DocumentTouch && c instanceof o.DocumentTouch)) {
    n.className += t + "touch";
  }
})(window, document);

/* ==== Your custom JS can go below if needed ==== */
// (No other custom behavior was inlined in the original snippet)

// Yêu cầu: đã nhúng Swiper CSS/JS trong HTML:
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
// <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>

// ===== Swiper: init cho từng .swiper[data-role="main"] =====
document.addEventListener("DOMContentLoaded", () => {
  if (typeof Swiper === "undefined") return;

  const indices = [1, 2, 3];

  indices.forEach((i) => {
    const thumbsSelector = `#how-slider-thumbs-${i}`;
    const mainSelector = `#how-slider-${i}`;
    const prevSelector = `#how-slide-left-${i}`;
    const nextSelector = `#how-slide-right-${i}`;

    const thumbsEl = document.querySelector(thumbsSelector);
const mainEl = document.querySelector(mainSelector);
if (!thumbsEl || !mainEl) return;

// ✅ CHỐNG INIT LẠI (fix lỗi bấm next lần 2 bị đứng / lag)
if (mainEl.swiper) return;

    // Chặn default của <a href="#">
    [prevSelector, nextSelector, thumbsSelector].forEach((sel) => {
      document.querySelectorAll(sel + " a, " + sel).forEach((el) => {
        el.addEventListener("click", (e) => e.preventDefault());
      });
    });

    const thumbsSwiper = new Swiper(thumbsEl, {
      spaceBetween: 20,
      freeMode: true,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      observer: true,
      observeParents: true,
      breakpoints: {
        0: {
          direction: 'horizontal',
          slidesPerView: 1,
          spaceBetween: 16
        },
        992: {
          direction: 'vertical',
          slidesPerView: 'auto',     // ✅ mấu chốt: hiện nhiều item dạng list
          spaceBetween: 20
        }
      }
    });

    const mainSwiper = new Swiper(mainSelector, {
      spaceBetween: 0,
      speed: 400,
      loop: true,
      keyboard: { enabled: true },
      navigation: {
        nextEl: nextSelector,
        prevEl: prevSelector,
      },
      thumbs: { swiper: thumbsSwiper },
      observer: true,
      observeParents: true,
      preventInteractionOnTransition: true,
      watchSlidesProgress: true,
    });

    // Update sau init (tránh font/images làm lệch layout)
    mainSwiper.update();
    thumbsSwiper.update();
  });
});

window.addEventListener("load", () => {
  document.querySelectorAll("[id^='how-slider-']").forEach((el) => {
    if (el.swiper) el.swiper.update();
  });
});

// 👇 Sau khi tất cả ảnh/font đã tải xong, update lần nữa
window.addEventListener('load', () => {
  document.querySelectorAll('.swiper[data-role="main"]').forEach(mainEl => {
    if (mainEl.swiper) {
      mainEl.swiper.update();
      const thumbs = (mainEl.swiper.thumbs && mainEl.swiper.thumbs.swiper) ? mainEl.swiper.thumbs.swiper : null;
      if (thumbs) thumbs.update();
    }
  });
});

// =====================================================
// =====================================================
// VR SCENES (#1) — Portrait Card Stack synced from Swiper
// Scope: .vr-scenes--1 only
// =====================================================
(function () {
  function wrap(i, n) {
    return ((i % n) + n) % n;
  }

  function getRealSlides(mainEl) {
    return Array.from(
      mainEl.querySelectorAll(".swiper-slide:not(.swiper-slide-duplicate)")
    );
  }

  function getImgUrl(slideEl) {
    const img = slideEl ? slideEl.querySelector("img") : null;
    return img ? (img.currentSrc || img.src || "") : "";
  }

  function setBg(el, url) {
    if (!el) return;
    el.style.backgroundImage = url ? `url("${url}")` : "none";
  }

  function initVR1() {
    const mainEl = document.getElementById("how-slider-1");
    if (!mainEl || !mainEl.swiper) return;

    const sw = mainEl.swiper;
    const realSlides = getRealSlides(mainEl);
    if (!realSlides.length) return;

    const activeBg = document.getElementById("vr1ActiveBg");
    const activeCard = document.getElementById("vr1ActiveCard");

    const bgA = document.querySelector(".vr-scenes--1 .vr1-bgpanel__a");
    const bgB = document.querySelector(".vr-scenes--1 .vr1-bgpanel__b");
    const g1 = document.querySelector(".vr-scenes--1 .vr1-ghost-1");
    const g2 = document.querySelector(".vr-scenes--1 .vr1-ghost-2");
    const g3 = document.querySelector(".vr-scenes--1 .vr1-ghost-3");

    let flip = false;

    function render(direction = 1) {
      const n = realSlides.length;
      const idx = wrap(sw.realIndex, n);

      const url = getImgUrl(realSlides[idx]);

      // active card bg
      setBg(activeBg, url);

      // bgpanel crossfade
      const on = flip ? bgA : bgB;
      const off = flip ? bgB : bgA;
      setBg(on, url);
      on && on.classList.add("is-on");
      off && off.classList.remove("is-on");
      flip = !flip;

      // ghosts (next cards)
      setBg(g1, getImgUrl(realSlides[wrap(idx + 1, n)]));
      setBg(g2, getImgUrl(realSlides[wrap(idx + 2, n)]));
      if (g3) setBg(g3, getImgUrl(realSlides[wrap(idx + 3, n)]));

      // tiny motion cue
      if (activeCard) {
        activeCard.style.transform = `translateX(${direction * 10}px) scale(.995)`;
        activeCard.style.opacity = "0.92";
        requestAnimationFrame(() => {
          activeCard.style.transform = "translateX(0) scale(1)";
          activeCard.style.opacity = "1";
        });
      }
    }

    // initial render after images are ready
    const imgs = realSlides.map(s => s.querySelector("img")).filter(Boolean);
    let pending = imgs.filter(img => !img.complete).length;

    if (pending === 0) render(1);
    else {
      imgs.forEach(img => {
        if (!img.complete) {
          img.addEventListener("load", () => {
            pending--;
            if (pending <= 0) render(1);
          }, { once: true });
        }
      });
    }

    // update on swiper change
    let prev = sw.realIndex;

function renderByIndex() {
  const dir = sw.realIndex >= prev ? 1 : -1;
  prev = sw.realIndex;
  render(dir);
}

sw.on("realIndexChange", renderByIndex);
sw.on("slideChange", renderByIndex); // fallback
    sw.on("resize", () => render(1));
  }

  window.addEventListener("load", initVR1);
})();