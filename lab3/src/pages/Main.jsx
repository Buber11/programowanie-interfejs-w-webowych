import React from 'react';
import '../Main.css'

function Navigation() {
    return (
        <nav className="fixed-navigation">
            <img className="logo" src="../Assets/logo.svg" alt="Logo"/>
            <ul className="nav-links">
                <li><a className="nav-link" href="#">Home</a></li>
                <li><a className="nav-link" href="#browse">Browse</a></li>
                <li><a className="nav-link" href="#rent">Rent with us</a></li>
                <li><a className="nav-link" href="#">Sign up</a></li>
                <button className="button primary">Log in</button>
            </ul>
            <button className="button primary hidden">Menu</button>
        </nav>
    );
}

function HeroSection() {
    return (
        <section id="hero" className="hero-section">
            <article className="hero-details">
                <p className="title-large">Welcome, your tranquillity oasis awaits</p>
            </article>
        </section>
    );
}

function BrowseSection() {
    return (
        <section id="browse" className="browse-section">
            <p className="title-middle">Explore the hotels</p>
            <input className="searchbar" placeholder="Search by hotel name, place etc." />
            <section className="grid hotel-cards">
                <HotelCard location="Florance"
                    name="Harmony Hideaway Hotel"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec."
                    rating={5}
                    price="$200"/>
                <HotelCard location="Florance"
                    name="Harmony Hideaway Hotel"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec."
                    rating={5}
                    price="$200"/>
                <HotelCard location="Florance"
                    name="Harmony Hideaway Hotel"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec."
                    rating={5}
                    price="$200"/>
                <HotelCard location="Florance"
                    name="Harmony Hideaway Hotel"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec."
                    rating={5}
                    price="$200"/>            
            </section>
        </section>
    );
}

function HotelCard({ location, name, description, rating, price }) {
    return (
        <article className="hotel-card">
            <div className="card-image">
                <p className="chip">{location}</p>
            </div>
            <p className="text-middle">{name}</p>
            <p className="text-small">{description}</p>
            <div className="hotel-card-footer">
                <p className="text-middle">★★★★★</p>
                <p className="text-middle">{price}/room</p>
            </div>
        </article>
    );
}

function Main() {
    return (
        <div>
            <Navigation />
            <HeroSection />
            <BrowseSection />
        </div>
    );
}

export default Main;