class header extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
            <!-- top header -->
            <div class="container-fluid top-header top-header-content">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="left-container">
                            <a href="tel:+91 8390508484"> <i class="fa fa-phone"></i> +91 8390508484</a>
                            <a href=""> <i class="fa fa-map-o"></i>
                                Pune,India</a>
                        </div>
                    </div>
                    <div class="col-lg-6 text-left">
                        <div class="right-container">
                            <div class="social-media">
                                <a href="mailto:connect@valiantbusinesssolutions.com"> <i class="fa fa-envelope"></i>
                                    connect@valiantbusinesssolutions.com
                                </a>
                                <span title="Facebook"><a href="https://www.facebook.com/valiantbusinesssolution"><i class="fa fa-facebook"></i></a></span>
                                <span title="Instagram"><a href="https://www.instagram.com/valiantbusinesssolutions"><i class="fa fa-instagram"></i></a></span>
                                <span title="Linkedin"><a href="https://www.linkedin.com/company/valiant-business-solutions"><i class="fa fa-linkedin"></i></a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
            <!-- top header -->  
    <!-- Navbar Area Start -->
    <div class="navbar-area">
        <!-- Menu For Mobile Device -->
        <div class="mobile-nav">
            <a href="https://valiantbusinesssolutions.com">
                <img src="assets/img/logo/VBS FINAL LOGO-01.png" class="vbslogo" alt="logo">
            </a>
        </div>
        <!-- Menu For Desktop Device -->
        <div class="main-nav d-flex align-items-center">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="https://valiantbusinesssolutions.com">
                        <img src="assets/img/logo/VBS FINAL LOGO-01.png" class="vbslogo" style="width:25%;" alt="logo">
                    </a>
                    <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="https://valiantbusinesssolutions.com/vbsjob" class="nav-link">Home</a></li>
                            <li class="nav-item">
                                <a href="about" class="nav-link">About</a></li>
                            <li class="nav-item">
                                <a href="career-form" class="nav-link">Jobs</a></li>
                            <li class="nav-item">
                                <a href="blog" class="nav-link">Blog</a> </li>
                            <li class="nav-item">
                                <a href="contact" class="nav-link contact-btn">Contact </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <!-- Navbar Area End -->
            `;
    }
}



class footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
			<footer class="footer-area pt-50 pb-20">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-sm-6">
						<div class="footer-widget">
							<div class="footer-logo">
								<a href="https://www.valiantbusinesssolutions.com/vbsjob">
									<img src="assets/img/logo/VBS FINAL LOGO white.png" class="w-50" alt="logo">
								</a>
							</div>
							<p>
								VBS unlocks the potential of businesses and job seekers alike, our recruitment agency
								provides comprehensive staffing solutions that drive success.
	
							</p>
							<div class="footer-social">
								<span title="Facebook"><a href="https://www.facebook.com/valiantbusinesssolution" target="_blank"><i
										class='bx bxl-facebook'></i></a></span>
								<span title="Instagram"><a href="https://www.instagram.com/valiantbusinesssolutions" target="_blank"><i
										class='bx bxl-instagram'></i></a></span>
								<span title="Linkedin"><a href="https://www.linkedin.com/company/valiant-business-solutions/" target="_blank"><i
										class='bx bxl-linkedin'></i></a></span>
							</div>
						</div>
					</div>
	
					<div class="col-lg-2 col-sm-6">
						<div class="footer-widget pl-60">
							<h3>Links</h3>
							<ul>
							<li>
									<a href="https://valiantbusinesssolutions.com/vbsjob" class="footer-color">
										<i class='bx bx-chevrons-right bx-tada'></i>
										Home</a>
								</li>
								<li>
									<a href="about" class="footer-color">
										<i class='bx bx-chevrons-right bx-tada'></i>
										About Us
									</a>
								</li>
								<li>
									<a href="jobs" class="footer-color">
										<i class='bx bx-chevrons-right bx-tada'></i>
										Jobs
									</a>
								</li>
								<li>
                        <a href="https://www.valiantbusinesssolutions.com/vbstravel" class="footer-color">	<i class='bx bx-chevrons-right bx-tada'></i>Travel</a>
                      </li>
								<li>
								<a href="blog" class="footer-color">
									<i class='bx bx-chevrons-right bx-tada'></i>
									Blog</a>
							</li>
								<li>
									<a href="contact" class="footer-color">
										<i class='bx bx-chevrons-right bx-tada'></i>
										Contact
									</a>
								</li>
								<li>
								<a href="https://www.valiantbusinesssolutions.com/sitemap" class="footer-color"><i class='bx bx-chevrons-right bx-tada'></i> Sitemap</a>
							  </li>
	
							</ul>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="footer-widget pl-60">
							<h3>Industries</h3>
							<ul>
								<li>
									<a href="it" class="footer-color">
										<i class='bx bx-chevrons-right bx-tada'></i> IT</a>
								</li>
								<li>
									<a href="fmcg" class="footer-color">
										<i class='bx bx-chevrons-right bx-tada'></i>
										FMCG
	
									</a>
								</li>
								<li>
									<a href="education" class="footer-color">
										<i class='bx bx-chevrons-right bx-tada'></i>
										Education
	
									</a>
								</li>
								<li>
									<a href="real-estate" class="footer-color">
										<i class='bx bx-chevrons-right bx-tada '></i>
										Real Estate
	
									</a>
								</li>
								
								<li>
									<a href="hospitality" class="footer-color">
										<i class='bx bx-chevrons-right bx-tada '></i>
										Hospitality
	
									</a>
								</li>
								<li>
									<a href="manufacturing.html" class="footer-color">
										<i class='bx bx-chevrons-right bx-tada '></i>
										Manufacturing
	
									</a>
								</li>
								<li>
									<a href="financial-services" class="footer-color">
										<i class='bx bx-chevrons-right bx-tada '></i>
										Financial Services</a>
								</li>
								<li>
									<a href="bpo" class="footer-color">
										<i class='bx bx-chevrons-right bx-tada'></i> Contact Centre/BPO</a>
								</li>
	
							</ul>
						</div>
					</div>
	
					<div class="col-lg-4 col-sm-6">
						<div class="footer-widget footer-info">
							<h3>Contact </h3>
							<ul>
								<li>
									<span class="footer-color">
										<i class='bx bxs-phone'></i>
										Phone:
									</span>
									<a href="tel:+91 8390508484" class="footer-color">
										+91 8390508484
									</a>
								</li>
	
								<li>
									<span class="footer-color">
										<i class='bx bxs-envelope'></i>
										Email:
									</span>
									<a href="mailto:connect@valiantbusinesssolutions.com" class="footer-color">
										connect@valiantbusinesssolutions.com
									</a>
								</li>
	
								<li class="footer-color">
									<a href="https://goo.gl/maps/DKcGwE3LzeGxGKa36"><span class="footer-color">
											<i class='bx bx-location-plus'></i>
											Address:
										</span>
										Office 713/714, Clover Hills Plaza, Undri, Pune, Maharashtra 411060</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<div class="copyright-text d-flex justify-content-around">
			<p>Copyright © 2023 Valiant Business Soultions All Rights Reserved. </a></p>
			<p>Design and Developed by <a href="https://visionarybizz.com"> Visionary Services</a></p>
		</div>
            `;
    }
}

customElements.define('header-element', header);
customElements.define('footer-element', footer);;
