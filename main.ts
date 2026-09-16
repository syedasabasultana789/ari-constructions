import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

const services = [
  ['01', 'Development', 'End-to-end residential and property development solutions.'],
  ['02', 'Renovation', 'Smart upgrades, remodeling and complete property transformations.'],
  ['03', 'False Ceiling', 'Clean, modern ceiling systems with premium finishing.'],
  ['04', 'Interior Designing', 'Functional interiors, wardrobes and custom finishing.'],
  ['05', 'Plumbing', 'Reliable plumbing installation and finishing work.'],
  ['06', 'Electrical', 'Safe, organized electrical installation and fit-outs.'],
  ['07', 'Tiles', 'Professional tile installation with precise finishing.'],
  ['08', 'Painting', 'Interior and exterior painting with quality surface preparation.']
] as const;

const projects = [
  { title: 'Premium Residence', tag: 'Completed', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Modern Villa', tag: 'Construction', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Interior & Wardrobe', tag: 'Interiors', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85' },
  { title: 'RCC & Structural Work', tag: 'Civil', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Contemporary Facade', tag: 'Exterior', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Luxury Living Space', tag: 'Interior', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85' }
] as const;

const completedprojects = [
  { title: 'Premium Residence', tag: 'Completed', image: 'assets/images/1.jpeg' },
  { title: 'Modern Villa', tag: 'Construction', image: 'assets/images/2.jpeg' },
  { title: 'Interior & Wardrobe', tag: 'Interiors', image: 'assets/images/3.jpeg' },
  { title: 'RCC & Structural Work', tag: 'Civil', image: 'assets/images/4.jpeg' },
  { title: 'Contemporary Facade', tag: 'Exterior', image: 'assets/images/5.jpeg' },
  { title: 'Luxury Living Space', tag: 'Interior', image: 'assets/images/6.jpeg' },
  { title: 'Luxury Living Space', tag: 'Interior', image: 'assets/images/7.jpeg' },
  { title: 'Luxury Living Space', tag: 'Interior', image: 'assets/images/8.jpeg' },
  { title: 'Luxury Living Space', tag: 'Interior', image: 'assets/images/9.jpeg' },
  { title: 'Luxury Living Space', tag: 'Interior', image: 'assets/images/10.jpeg' },
  { title: 'Luxury Living Space', tag: 'Interior', image: 'assets/images/11.jpeg' },
  { title: 'Luxury Living Space', tag: 'Interior', image: 'assets/images/12.jpeg' },
  { title: 'Luxury Living Space', tag: 'Interior', image: 'assets/images/13.jpeg' },
  { title: 'Luxury Living Space', tag: 'Interior', image: 'assets/images/14.jpeg' },
  { title: 'Luxury Living Space', tag: 'Interior', image: 'assets/images/15.jpeg' }
] as const;

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <header class="topbar" [class.scrolled]="scrolled">
    <div class="container nav">
      <a class="brand" href="#home" aria-label="ARI Constructions home">
        <img src="assets/images/ari-logo.png" alt="ARI Constructions logo">
      </a>
      <button class="menu" (click)="menuOpen = !menuOpen" aria-label="Toggle navigation">☰</button>
      <nav [class.open]="menuOpen">
        <a href="#home" (click)="menuOpen=true">Home</a>
        <a href="#about" (click)="menuOpen=true">About</a>
        <a href="#services" (click)="menuOpen=true">Services</a>
        <a href="#projects" (click)="menuOpen=true">Projects</a>
        <a href="#completedprojects" (click)="menuOpen=true">Completed Projects</a>
        <a href="#contact" class="nav-cta" (click)="menuOpen=true">Get a Quote</a>
      </nav>
    </div>
  </header>

  <main>
    <section id="home" class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <div class="eyebrow">HYDERABAD • TELANGANA</div>
        <h1>Built on Trust.<br><span>Driven by Quality.</span></h1>
        <p>Professional construction, renovation and interior solutions designed to turn your vision into a lasting space.</p>
        <div class="hero-actions">
          <a class="btn primary" href="#completedprojects">View Our Work <span>↗</span></a>
          <a class="btn glass" href="https://wa.me/919396433383" target="_blank" rel="noopener">WhatsApp Us</a>
        </div>
        <div class="hero-trust"><span>✓</span> Quality &nbsp; <span>✓</span> Reliability &nbsp; <span>✓</span> Commitment</div>
      </div>
      <div class="hero-stats container">
        <div><strong>8+</strong><span>Core Services</span></div>
        <div><strong>100%</strong><span>Quality Focus</span></div>
        <div><strong>2</strong><span>Direct Contact Lines</span></div>
      </div>
    </section>

    <section id="about" class="section about">
      <div class="container about-grid">
        <div class="about-image">
          <div class="image-card"><img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85" alt="Construction work"></div>
          <div class="badge"><strong>ARI</strong><span>Construction & Interiors</span></div>
        </div>
        <div>
          <div class="section-kicker">ABOUT ARI CONSTRUCTIONS</div>
          <h2>We build spaces that feel <em>built to last.</em></h2>
          <p class="lead">ARI Constructions provides a practical, quality-focused approach to residential construction, renovation and interior finishing in Hyderabad.</p>
          <div class="feature-list">
            <div><b>01</b><span><strong>Quality-first execution</strong><small>Careful finishing from civil work to interiors.</small></span></div>
            <div><b>02</b><span><strong>Clear communication</strong><small>Direct contact and straightforward project coordination.</small></span></div>
            <div><b>03</b><span><strong>Complete solutions</strong><small>One team for construction, renovation and finishing services.</small></span></div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="section services">
      <div class="container">
        <div class="section-heading"><div><div class="section-kicker">WHAT WE DO</div><h2>Our <em>Services</em></h2></div><p>From structure to final finish, our services are organized to make your project simpler and more dependable.</p></div>
        <div class="service-grid">
          @for (service of services; track service[0]) {
            <article class="service-card"><span class="service-no">{{ service[0] }}</span><div class="service-icon">◆</div><h3>{{ service[1] }}</h3><p>{{ service[2] }}</p><a href="#contact">Discuss your project →</a></article>
          }
        </div>
      </div>
    </section>

    <section id="projects" class="section projects">
      <div class="container">
        <div class="section-heading"><div><div class="section-kicker">PROJECT PORTFOLIO</div><h2>Work we're <em>proud of</em></h2></div></div>
        <div class="project-grid">
          @for (project of projects; track project.title) {
            <article class="project-card"><img [src]="project.image" [alt]="project.title"><div class="project-caption"><span>{{ project.tag }}</span><h3>{{ project.title }}</h3></div></article>
          }
        </div>
      </div>
    </section>

    <section id="completedprojects" class="section projects">
      <div class="container">
        <div class="section-heading"><div><div class="section-kicker">COMPLETED PROJECTS</div></div></div>
        <div class="project-grid">
          @for (project of completedprojects; track project.title) {
            <article class="project-card"><img [src]="project.image" [alt]="project.title"><div class="project-caption"><span>{{ project.tag }}</span><h3>{{ project.title }}</h3></div></article>
          }
        </div>
      </div>
    </section>

    <section class="section promise">
      <div class="container promise-inner"><div><div class="section-kicker">WHY ARI</div><h2>A reliable partner for your next <em>project.</em></h2></div><div class="promise-points"><span>✓ Quality workmanship</span><span>✓ Professional finishing</span><span>✓ Customer-focused service</span><span>✓ Project commitment</span></div></div>
    </section>

    <section id="contact" class="section contact">
      <div class="container contact-grid">
        <div><div class="section-kicker">START YOUR PROJECT</div><h2>Let's build something <em>great.</em></h2><p>Tell us what you are planning. Call, WhatsApp or email ARI Constructions for your project discussion.</p><div class="contact-buttons"><a class="btn primary" href="tel:+919959734687">Call</a><a class="btn outline" href="https://wa.me/919396433383" target="_blank" rel="noopener">WhatsApp</a></div></div>
        <div class="contact-card"><div class="contact-row"><span>📞</span><div><small>PHONE</small><a href="tel:+919959734687">9959734687</a><a href="tel:+919396433383">9396433383</a></div></div><div class="contact-row"><span>✉</span><div><small>EMAIL</small><a href="mailto:imrankumandan@gmail.com">imrankumandan@gmail.com</a></div></div><div class="contact-row"><span>⌖</span><div><small>ADDRESS</small><p>Flat # 202, 9-4-136/43, Shahab Abode,<br>Quli Qutub Shah Nagar, Seven Tombs Road, Tolichowki,<br>Hyderabad, Telangana, India – 500008</p></div></div></div>
      </div>
    </section>
  </main>

  <footer><div class="container footer"><div class="footer-brand"><img src="assets/images/ari-logo.png" alt="ARI Constructions"><span>Built on Trust. Driven by Quality.</span></div><div>© {{ year }} ARI Constructions. All rights reserved.</div></div></footer>
  <a class="floating-wa" href="https://wa.me/919396433383" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><span>◔</span></a>
  `
})
export class AppComponent {
   readonly services = services;
  readonly projects = projects;
  readonly completedprojects = completedprojects;
  menuOpen = false;
  scrolled = false;
  year = new Date().getFullYear();

  constructor() {
    window.addEventListener('scroll', () => this.scrolled = window.scrollY > 30, { passive: true });
  }
}

bootstrapApplication(AppComponent).catch(err => console.error(err));
