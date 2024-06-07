import React, { useState, useEffect } from 'react';
import { database } from '../../firebaseConfig'; // Importuj database z firebaseConfig
import HotelCard from '../HotelCard/HotelCard';
import '../../Main.css';

function BrowseSection() {
    const [hotelsData, setHotelsData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
      const fetchHotels = async () => {
          try {
              const response = await fetch('https://piwo-31b97-default-rtdb.europe-west1.firebasedatabase.app/.json');
              const data = await response.json();
              console.log("Raw data:", data); // Dodaj ten wiersz, aby zobaczyć dokładnie, jakie dane zostały pobrane
              if (data) {
                  const hotelsList = Object.values(data).map((hotel, index) => ({
                      id: index,
                      location: hotel.location,
                      name: hotel.name,
                      description: hotel.description,
                      rating: hotel.rating,
                      price: hotel.price
                  }));
                  console.log("Processed data:", hotelsList); // Dodaj ten wiersz, aby zobaczyć, jak przetworzone dane wyglądają
                  setHotelsData(hotelsList);
              }
          } catch (error) {
              console.error("Error fetching hotel data: ", error);
          }
      };
      fetchHotels();
  }, []);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

    const filteredHotels = hotelsData
        .filter((hotel) =>
            hotel.name.toLowerCase().includes(searchText.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.location.localeCompare(b.location);
            } else {
                return b.location.localeCompare(a.location);
            }
        });

    return (
        <section id="browse" className="browse-section">
            <p className="title-middle">Explore the hotels</p>
            <input
                className="searchbar"
                placeholder="Search by hotel name, place etc."
                value={searchText}
                onChange={handleSearchChange}
            />
            <select onChange={handleSortOrderChange} value={sortOrder}>
                <option value="asc">Sort by location (A-Z)</option>
                <option value="desc">Sort by location (Z-A)</option>
            </select>
            <section className="grid hotel-cards">
                {filteredHotels.map((hotel) => (
                    <HotelCard
                        key={hotel.id}
                        location={hotel.location}
                        name={hotel.name}
                        description={hotel.description}
                        rating={hotel.rating}
                        price={hotel.price}
                    />
                ))}
            </section>
        </section>
    );
}

export default BrowseSection;
