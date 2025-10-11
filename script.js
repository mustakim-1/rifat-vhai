        /* --- ABOUT (REFINED MIND MAP STYLE) --- */
        .about-header { text-align: center; margin-bottom: 60px; }
        .about-header p { max-width: 60ch; margin-left: auto; margin-right: auto; }
        .mind-map-container { position: relative; width: 100%; max-width: 900px; height: 600px; margin: 0 auto; }
        .mind-map-svg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; overflow: visible; }
        .mind-map-svg path { stroke: var(--border-color); stroke-width: 2; fill: none; transition: stroke 0.4s ease; }
        .mind-map-container.is-visible .mind-map-svg path { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: draw-line 2s ease-out forwards; }
        #path-1 { animation-delay: 0.2s; } #path-2 { animation-delay: 0.4s; } #path-3 { animation-delay: 0.6s; } #path-4 { animation-delay: 0.8s; }
        .mind-map-svg path.active { stroke: var(--accent-color-vibrant); }
        @keyframes draw-line { to { stroke-dashoffset: 0; } }
        @keyframes pulse { 0% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 25px rgba(168, 145, 226, 0.4), inset 0 0 15px rgba(10,10,15,0.8); } 50% { transform: translate(-50%, -50%) scale(1.03); box-shadow: 0 0 35px rgba(168, 145, 226, 0.6), inset 0 0 20px rgba(10,10,15,0.8); } 100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 25px rgba(168, 145, 226, 0.4), inset 0 0 15px rgba(10,10,15,0.8); } }
        .mind-map-core { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 200px; height: 200px; background: var(--dark-section-bg); border-radius: 50%; border: 3px solid var(--accent-color-light); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; z-index: 10; animation: pulse 5s ease-in-out infinite; }
        .mind-map-core h3 { color: var(--text-color); font-size: 1.8rem; margin-bottom: 5px; }
        .mind-map-core span { color: var(--accent-color-light); font-weight: 500; }
        .mind-map-branch { position: absolute; width: 320px; z-index: 5; transition: opacity 0.4s ease, transform 0.4s ease; display: flex; align-items: center; gap: 15px; }
        .mind-map-container:has(.mind-map-branch:hover) .mind-map-branch:not(:hover) { opacity: 0.4; transform: scale(0.98); }
        .mind-map-node { width: 25px; height: 25px; background: var(--dark-section-bg); border: 3px solid var(--accent-color-vibrant); border-radius: 50%; transition: transform 0.3s ease, box-shadow 0.3s ease; flex-shrink: 0; }
        .mind-map-content { flex-grow: 1; }
        .mind-map-content h4 { font-family: var(--font-body); font-weight: 700; font-size: 1.15rem; color: var(--accent-color-light); text-transform: none; letter-spacing: 0; margin-bottom: 5px; }
        .mind-map-content p { font-size: 0.95rem; line-height: 1.6; margin-bottom: 0; opacity: 0.8; }
        .mind-map-branch:hover .mind-map-node { transform: scale(1.2); box-shadow: 0 0 20px var(--accent-color-vibrant); }
        #branch-1 { top: 10%; left: 0; } #branch-2 { bottom: 10%; left: 0; flex-direction: row-reverse; } #branch-2 .mind-map-content { text-align: right; } #branch-3 { top: 15%; right: 0; flex-direction: row-reverse; } #branch-3 .mind-map-content { text-align: right; } #branch-4 { bottom: 15%; right: 0; }

        /* --- SKILLS MARQUEE --- */
        #skills { padding: 120px 0; }
        .skills-marquee { overflow: hidden; position: relative; -webkit-mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent); mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent); }
        .skills-track { display: flex; gap: 30px; width: fit-content; animation: scroll-left 30s linear infinite; }
        .skills-marquee:hover .skills-track { animation-play-state: paused; }
        @keyframes scroll-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .skill-card { flex-shrink: 0; width: 300px; position: relative; z-index: 1; background: var(--dark-section-bg); border-radius: 15px; padding: 3px; transition: transform 0.3s ease; }
        .skill-card::before { content: ""; position: absolute; inset: 0; z-index: -1; border-radius: inherit; background: conic-gradient(from 180deg at 50% 50%, transparent 0%, var(--accent-color-vibrant) 10%, var(--accent-color-light) 35%, transparent 50% ); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; animation: rotate 4s linear infinite; }
        .skill-card:hover { transform: translateY(-10px) scale(1.02); }
        .skill-content { background: var(--dark-section-bg); border-radius: 12px; padding: 30px 25px; text-align: center; }
        @keyframes rotate { to { transform: rotate(360deg); } }
        .skill-card svg { width: 48px; height: 48px; margin-bottom: 15px; color: var(--accent-color-vibrant); }
        .skill-card h3 { margin-bottom: 5px; color: #fff; }

        /* --- VERTICAL ACCORDION JOURNEY SECTION --- */
        #experience { padding: 0; }
        .journey-sticky-container { height: 300vh; position: relative; }
        .journey-accordion { position: sticky; top: 0; height: 100vh; width: 100%; display: flex; flex-direction: column; overflow: hidden; }
        .journey-panel { flex: 1; position: relative; background-size: cover; background-position: center; transition: flex 0.8s cubic-bezier(0.65, 0, 0.35, 1); overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .journey-panel::before { content: ''; position: absolute; inset: 0; background-color: rgba(0,0,0, 0.6); transition: background-color 0.8s ease; }
        .journey-panel.active { flex: 5; }
        .journey-panel.active::before { background-color: rgba(0,0,0, 0.4); }
        .journey-panel-title { position: relative; z-index: 2; color: #fff; font-family: var(--font-heading); font-size: clamp(2rem, 5vw, 3rem); text-align: center; transition: opacity 0.6s ease, transform 0.6s ease; }
        .journey-panel-content { position: absolute; z-index: 2; color: var(--text-color); padding: 40px; max-width: 600px; opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s; }
        .journey-panel.active .journey-panel-title { opacity: 0; transform: translateY(-100%); pointer-events: none; }
        .journey-panel.active .journey-panel-content { opacity: 1; transform: translateY(0); }
        .journey-panel-content .institution { font-weight: bold; color: #ccc; }
        .journey-panel-content .date { color: #888; font-size: 0.9em; margin-bottom: 10px; }
        .journey-panel-content p { color: #bbb; }

        /* --- PROJECTS & ACHIEVEMENTS --- */
        .project-showcase-container { display: grid; grid-template-columns: 1fr 1.2fr; gap: 50px; align-items: center; }
        .project-list .project-item { padding: 25px; border-bottom: 1px solid var(--border-color); cursor: pointer; position: relative; transition: background-color 0.3s ease; }
        .project-list .project-item:first-child { border-top: 1px solid var(--border-color); }
        .project-list .project-item::before { content: ''; position: absolute; left: 0; top: 0; width: 3px; height: 0; background: linear-gradient(var(--accent-color-light), var(--accent-color-vibrant)); transition: height 0.4s cubic-bezier(0.23, 1, 0.32, 1); }
        .project-list .project-item.active { background-color: rgba(212, 255, 0, 0.05); }
        .project-list .project-item.active::before { height: 100%; }
        .project-tools span { display: inline-block; background-color: var(--border-color); color: var(--accent-color-light); padding: 5px 15px; border-radius: 50px; font-size: 0.8em; font-weight: 500; margin-top: 15px; margin-right: 8px; }
        .project-image-previews { position: relative; height: 500px; border-radius: 15px; overflow: hidden; background-color: var(--dark-section-bg); }
        .project-preview-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transform: scale(1.05); transition: opacity 0.5s ease, transform 0.5s ease; }
        .project-preview-img.active { opacity: 1; transform: scale(1); }
        
        /* --- COSMIC TRAJECTORY ACHIEVEMENTS --- */
        #achievements {
            position: relative;
            overflow: hidden;
            padding: 150px 0;
            background-color: #05060A;
        }
        .stars { position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; display: block; background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="%23fff" cx="100" cy="100" r="1.5"/></svg>') repeat; background-size: 200px 200px; opacity: 0.4; animation: zoom-stars 60s linear infinite; }
        @keyframes zoom-stars { from { transform: scale(1); } to { transform: scale(1.3); } }
        .twinkling { position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; display: block; background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><circle fill="%23fff" cx="10" cy="20" r="1"/><circle fill="%23fff" cx="100" cy="10" r="1"/><circle fill="%23fff" cx="200" cy="80" r="0.5"/><circle fill="%23fff" cx="350" cy="150" r="1.2"/><circle fill="%23fff" cx="450" cy="30" r="0.8"/></svg>') repeat; background-size: 500px 500px; animation: move-twink-back 200s linear infinite; opacity: 0.8; }
        @keyframes move-twink-back { from { background-position: 0 0; } to { background-position: -10000px 5000px; } }

        .trajectory-container {
            position: relative;
            width: 100%;
            max-width: 1000px;
            height: 600px;
            margin: 0 auto;
        }

        .trajectory-svg {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            overflow: visible;
        }
        .trajectory-svg path {
            fill: none;
            stroke-width: 3px;
        }
        #trajectory-path-bg {
            stroke: var(--border-color);
            opacity: 0.5;
        }
        #trajectory-path-progress {
            stroke: url(#path-gradient);
            stroke-dasharray: 1500; /* Approximate path length */
            stroke-dashoffset: 1500;
            transition: stroke-dashoffset 1.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        #achievements.is-visible #trajectory-path-progress {
            stroke-dashoffset: 0;
        }

        .achievement-node {
            position: absolute;
            width: 25px; height: 25px;
            border-radius: 50%;
            background: var(--dark-section-bg);
            border: 3px solid var(--accent-color-light);
            cursor: pointer;
            z-index: 10;
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .achievement-node:hover, .achievement-node.active {
            transform: scale(1.3);
            border-color: var(--accent-color-vibrant);
            box-shadow: 0 0 15px var(--accent-color-vibrant), 0 0 30px var(--accent-color-vibrant);
        }
        @keyframes pulse-glow {
            0% { box-shadow: 0 0 10px var(--accent-color-light); }
            50% { box-shadow: 0 0 25px var(--accent-color-light); }
            100% { box-shadow: 0 0 10px var(--accent-color-light); }
        }
        .achievement-node.initial-focus {
             animation: pulse-glow 3s infinite ease-in-out;
        }

        /* --- Node Positioning --- */
        #node-1 { top: 8%; left: 10%; }
        #node-2 { top: 40%; left: 35%; }
        #node-3 { top: 15%; left: 65%; }
        #node-4 { top: 55%; left: 85%; }

        .achievement-details-panel {
            position: absolute;
            width: 280px;
            padding: 25px;
            background: rgba(16, 18, 24, 0.7);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid var(--border-color);
            border-radius: 10px;
            z-index: 5;
            opacity: 0;
            visibility: hidden;
            transform: scale(0.95);
            transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
        }
        .achievement-details-panel.active {
            opacity: 1;
            visibility: visible;
            transform: scale(1);
        }
        .achievement-details-panel h4 {
            font-family: var(--font-body);
            font-size: 1.1rem;
            color: var(--accent-color-vibrant);
            margin-bottom: 5px;
            font-weight: 700;
        }
        .achievement-details-panel p {
            font-size: 0.9rem;
            line-height: 1.6;
            margin-bottom: 0;
            opacity: 0.8;
        }

        /* --- Panel Positioning --- */
        #details-1 { top: 15%; left: 3%; }
        #details-2 { bottom: 35%; left: 38%; }
        #details-3 { top: 22%; right: 10%; }
        #details-4 { bottom: 15%; right: 2%; }








        <div class="hero-text" data-stagger-parent><h1 id="hero-name" data-animation="fade-in" data-stagger-child>[Your Name]</h1><h3 class="profession" data-animation="fade-in" data-stagger-child>Physics Educator & Science Communicator</h3><p class="tagline" data-animation="fade-in" data-stagger-child>"Passionate about demystifying the universe, one equation at a time. I create engaging learning experiences that make complex physics accessible and exciting."</p></div><div class="hero-image" data-animation="fade-in"><img src="/images/image-removebg-preview.png" alt="A professional headshot of [Your Name]"></div>









         // --- ANIMATION OBSERVER ---
        const animatedElements = document.querySelectorAll('[data-animation]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        animatedElements.forEach(el => observer.observe(el));

        // --- CUSTOM CURSOR ---
        const cursor = document.querySelector('.cursor');
        const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-item, .cta-button, .mind-map-branch, .achievement-node');
        document.addEventListener('mousemove', e => { cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px'; });
        document.addEventListener('mouseleave', () => cursor.classList.add('hidden'));
        document.addEventListener('mouseenter', () => cursor.classList.remove('hidden'));
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        // --- MAGNETIC LINKS ---
        const magneticLinks = document.querySelectorAll('.magnetic-link');
        const magnetStrength = 20;
        magneticLinks.forEach(link => {
            link.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                this.style.transform = `translate(${x / rect.width * magnetStrength}px, ${y / rect.height * magnetStrength}px)`;
            });
            link.addEventListener('mouseleave', function() { this.style.transform = 'translate(0,0)'; });
        });

        // --- HAMBURGER MENU SCRIPT ---
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = navMenu.querySelectorAll('a');
        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', () => {
                menuToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }

        // --- MIND MAP INTERACTIVITY SCRIPT ---
        const mindMapBranches = document.querySelectorAll('.mind-map-branch');
        mindMapBranches.forEach(branch => {
            const pathId = branch.dataset.path;
            const path = document.getElementById(pathId);
            if(path) {
                branch.addEventListener('mouseenter', () => { path.classList.add('active'); });
                branch.addEventListener('mouseleave', () => { path.classList.remove('active'); });
            }
        });

        // --- VERTICAL ACCORDION JOURNEY SCRIPT ---
        const journeyContainer = document.querySelector('.journey-sticky-container');
        const journeyPanels = document.querySelectorAll('.journey-panel');
        if (journeyContainer && journeyPanels.length > 0 && window.matchMedia("(min-width: 901px)").matches) {
            window.addEventListener('scroll', () => {
                const containerRect = journeyContainer.getBoundingClientRect();
                if (containerRect.top <= 0 && containerRect.bottom >= window.innerHeight) {
                    const scrollProgress = -containerRect.top / (journeyContainer.scrollHeight - window.innerHeight);
                    const activeIndex = Math.min(journeyPanels.length - 1, Math.floor(scrollProgress * journeyPanels.length));
                    journeyPanels.forEach((panel, index) => {
                        panel.classList.toggle('active', index === activeIndex);
                    });
                }
            });
        }

        // --- INFINITE SKILLS MARQUEE ---
        const skillsTrack = document.querySelector('.skills-track');
        if(skillsTrack){
            const children = Array.from(skillsTrack.children);
            children.forEach(skill => {
                const clone = skill.cloneNode(true);
                clone.setAttribute('aria-hidden', true); 
                skillsTrack.appendChild(clone);
            });
        }

        // --- PROJECT SHOWCASE ---
        const projectItems = document.querySelectorAll('.project-item');
        const projectImages = document.querySelectorAll('.project-preview-img');
        const projectList = document.querySelector('.project-list');
        projectItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                projectItems.forEach(i => i.classList.remove('active'));
                projectImages.forEach(img => img.classList.remove('active'));
                item.classList.add('active');
                const imageToShow = document.querySelector(`.project-preview-img[data-image="${item.dataset.image}"]`);
                if (imageToShow) imageToShow.classList.add('active');
            });
        });
        if(projectList) {
            projectList.addEventListener('mouseleave', () => {
                 projectItems.forEach(i => i.classList.remove('active'));
                 projectImages.forEach(img => img.classList.remove('active'));
                 const firstItem = document.querySelector('.project-item');
                 const firstImage = document.querySelector('.project-preview-img');
                 if(firstItem && firstImage) {
                    firstItem.classList.add('active');
                    firstImage.classList.add('active');
                 }
            });
        }