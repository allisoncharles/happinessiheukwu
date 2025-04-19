// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navLinks = document.getElementById("nav-links");

const portfolioData = [
  {
    title: "Cinebox Studios",
    caption: "This office has more drama than a Netflix series😂😂🤣",
    media: "assets/work/viid.mp4",
    mediaType: "video",
    link: "https://www.instagram.com/reel/DHLX9ByMxjA/?igsh=MWJneHdka3RuNXd0NQ%3D%3D",
    category: "instagram",
  },
  {
    title: "Brandegicz",
    caption: "If looking busy was a skill😂😂 Got any more tips?",
    media: "assets/work/Cinebox_content.mp4",
    mediaType: "video",
    link: "https://www.instagram.com/reel/DGP_IH6sMbd/?igsh=YWN1NDRrN2pzc3d2",
    category: "instagram",
  },
  {
    title: "Brandegicz",
    caption: "Before unboxing your gift, what will be an ideal gift for you?",
    media: "assets/work/gift.mp4",
    mediaType: "video",
    link: "https://www.instagram.com/reel/DECw2_3s0E9/?igsh=OGhpMnJwNGdnMWd0",
    category: "campaign",
  },
  {
    title: "Brandegicz",
    caption: "Let's build something remarkable together!",
    media: "assets/work/temu.mp4",
    mediaType: "video",
    link: "https://www.instagram.com/reel/DDMOXv3sJgo/?igsh=MWJkdjZoNDRxZ2Z0Nw==",
    category: "instagram",
  },
  {
    title: "Brandegicz - #brandegicsmedia #brandegics",
    caption:
      "In need of a brand makeover? Reach out to Brandegics Media now and watch your brand get the glow up of a lifetime.",
    media: "assets/work/ttt.mp4",
    mediaType: "video",
    link: "https://www.instagram.com/reel/DCWSIoksNHC/?igsh=MXJmNmFsaGpraXBxMA%3D%3D",
    category: "instagram",
  },
  {
    title: "Our favourite client, You!",
    caption: "We don’t usually pick favorites, but when we do… it’s you",
    media: "assets/work/lv_0_20250327132753.mp4",
    mediaType: "video",
    link: "https://www.instagram.com/reel/DHs_4teM2DV/?igsh=MXJmOTdnaHkzMHBidg==",
    category: "instagram",
  },
  {
    title: "Cinebox Studios",
    caption: "",
    media: "assets/work/lv_0_20250308071827.png",
    mediaType: "image",
    link: "https://www.instagram.com/reel/DG_czEsOWqz/?igsh=dWpsZzg4YnZtNHFn",
    category: "instagram",
  },
  {
    title: "Brandegicz",
    caption:
      "Let your significant other see how much you mean it when you say the word 'I love you'.",
    media: "assets/work/brandegicz-campaign.png",
    mediaType: "image",
    link: "https://www.instagram.com/reel/DFnB2oTsZg_/?igsh=YjBncDY5OXY1Nzhj",
    category: "campaign",
  },
];
const portfolioWrapper = document.querySelector(".portfolio-grid");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenuBtn.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Close mobile menu if open
    navLinks.classList.remove("active");
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Update active link
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.classList.remove("active");
      });
      this.classList.add("active");
    }
  });
});

// Form Submission
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    // Simulate sending data to a server
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    sendEmail(contactForm, data);
    console.log("Form submitted:", data);
    // alert("Thank you for your message! I will get back to you soon.");
  });
}

// Animate stats on scroll
const stats = document.querySelectorAll(".stat-number");
let animated = false;

function animateStats() {
  if (animated) return;

  const statsSection = document.querySelector(".stats-container");
  if (!statsSection) return;

  const statsSectionTop = statsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (statsSectionTop < windowHeight - 100) {
    stats.forEach((stat) => {
      const targetValue = parseInt(stat.textContent);
      let currentValue = 0;
      const duration = 2000; // 2 seconds
      const increment = targetValue / (duration / 16); // 60fps

      const updateStat = () => {
        currentValue += increment;
        if (currentValue < targetValue) {
          stat.textContent = Math.ceil(currentValue) + "+";
          requestAnimationFrame(updateStat);
        } else {
          stat.textContent = targetValue + "+";
        }
      };

      updateStat();
    });

    animated = true;
  }
}

window.addEventListener("scroll", animateStats);

const currentYearEl = document.getElementById("current-year");

currentYearEl.textContent = new Date().getFullYear();

portfolioData.forEach((item) => {
  const portfolioItem = document.createElement("div");
  portfolioItem.classList.add("portfolio-item");
  portfolioItem.setAttribute("data-category", item.category);

  const mediaWrapper = document.createElement("div");
  mediaWrapper.classList.add("portfolio-img-wrapper");

  let mediaElement;

  if (item.mediaType === "video") {
    mediaElement = document.createElement("video");
    mediaElement.classList.add("portfolio-img");
    mediaElement.src = item.media;
    mediaElement.controls = true;
    mediaElement.muted = true;
    mediaElement.loop = true;
    mediaElement.autoplay = true;
  } else {
    mediaElement = document.createElement("img");
    mediaElement.classList.add("portfolio-img");
    mediaElement.src = item.media;
    mediaElement.alt = item.title;
  }

  mediaWrapper.appendChild(mediaElement);

  const overlay = document.createElement("div");
  overlay.classList.add("portfolio-overlay");

  const title = document.createElement("h3");
  title.textContent = item.title;

  const caption = document.createElement("p");
  caption.textContent = item.caption;

  const linkBtn = document.createElement("a");
  linkBtn.href = item.link;
  linkBtn.target = "_blank";
  linkBtn.classList.add("btn");
  linkBtn.textContent = "View Project";

  overlay.appendChild(title);
  overlay.appendChild(caption);
  overlay.appendChild(linkBtn);

  portfolioItem.appendChild(mediaWrapper);
  portfolioItem.appendChild(overlay);

  portfolioWrapper.appendChild(portfolioItem);
});

// Portfolio Filtering
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active button
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-filter");

    portfolioItems.forEach((item) => {
      const categories = item.getAttribute("data-category").split(" ");

      if (filterValue === "all" || categories.includes(filterValue)) {
        item.style.display = "block";
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "scale(1)";
        }, 10);
      } else {
        item.style.opacity = "0";
        item.style.transform = "scale(0.8)";
        setTimeout(() => {
          item.style.display = "none";
        }, 300);
      }
    });
  });
});

//sending mail

function sendEmail(form, data) {
  let params = {
    name: data.name,
    email: data.email,
    subject: data.subject,
    message: data.message,
  };

  emailjs
    .send("service_vf4bf87", "template_3dbafse", params)
    .then(function (res) {
      form.reset();
      alert("Email sent successfully!");
    })
    .catch(function (err) {
      // alert("Error sending email. Please try again.");
      console.log(err);
    });
}
