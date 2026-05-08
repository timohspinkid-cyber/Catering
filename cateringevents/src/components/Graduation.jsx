import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const graduationCatering = () => {
  return (
       <div className="graduation-page">
      {/* Hero Section */}
      <div className="graduation-hero">
        <div className="overlay">
          <p className="breadcrumb">
            Home <span>»</span> Blog <span>»</span> The Best Graduation
            Catering Themes for the Perfect Send-Off
          </p>

          <h1>
            The Best Graduation Catering Themes for the Perfect Send-Off
          </h1>

          <p className="hero-text">
            Graduation is one of the most meaningful milestones in one’s life.
            It marks the ending of an important chapter while signaling the
            beginning of a new one.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="graduation-container">
        <p>
          No great graduation party is complete without delicious catering and
          a memorable theme that helps celebrate the occasion in style.
        </p>

        <p>
          Starting with a theme makes it easier to plan your party and ensures
          that the food reflects the importance of the celebration.
        </p>

        {/* Formal Theme */}
        <section className="theme-card">
          <h2>A Formal Graduation Celebration</h2>

          <p>
            Graduation can be the perfect opportunity to create an elegant and
            classy atmosphere for your guests.
          </p>

          <p>
            For a formal graduation party, choose food that is easy to eat and
            avoids messy spills that could ruin black-tie outfits.
          </p>

          <div className="highlight-box">
            <h3>Best Catering Option:</h3>
            <p>
              One-bite hors d’oeuvres served by professional waiters so guests
              can comfortably mix and mingle.
            </p>
          </div>
        </section>

        {/* Casual BBQ */}
        <section className="theme-card">
          <h2>A Casual Cookout</h2>

          <p>
            If formal celebrations are not your style, a backyard BBQ cookout
            creates a fun and relaxed atmosphere.
          </p>

          <h3>Traditional BBQ Menu Ideas</h3>

          <ul>
            <li>Baked beans</li>
            <li>Mac and cheese</li>
            <li>Corn on the cob</li>
            <li>Fresh rolls and butter</li>
            <li>Pork, beef, chicken, prawns, or fish</li>
            <li>Pasta salad</li>
            <li>Caesar salad</li>
            <li>Potato salad</li>
            <li>Green salad and coleslaw</li>
          </ul>

          <p>
            Having caterers prepare fresh grilled meals makes the event stress
            free and enjoyable for everyone.
          </p>
        </section>

        {/* Hawaiian Luau */}
        <section className="theme-card">
          <h2>A Hawaiian Luau</h2>

          <p>
            Bring the excitement of summer into your graduation party with a
            colorful Hawaiian luau theme.
          </p>

          <h3>Popular Hawaiian Menu Items</h3>

          <ul>
            <li>Poi</li>
            <li>Kalua pig</li>
            <li>Poke bowls</li>
            <li>Lomi salmon</li>
            <li>Chicken long rice</li>
            <li>Tropical fruits like pineapple and passion fruit</li>
          </ul>

          <p>
            Even adding a few Hawaiian-inspired dishes can make your catering
            spread feel festive and unique.
          </p>
        </section>

        {/* Mexican Theme */}
        <section className="theme-card">
          <h2>A Mexican Theme</h2>

          <p>
            Create a vibrant fiesta atmosphere with flavorful Mexican dishes
            that guests will love.
          </p>

          <h3>Mexican Catering Favorites</h3>

          <ul>
            <li>Tacos</li>
            <li>Burritos & burrito bowls</li>
            <li>Quesadillas</li>
            <li>Nachos</li>
            <li>Guacamole</li>
            <li>Salsa and chips</li>
            <li>Mexican rice</li>
            <li>Enchiladas</li>
            <li>Churros</li>
          </ul>

          <div className="highlight-box">
            <h3>Fun Idea:</h3>
            <p>
              Add a make-your-own taco station so guests can customize their own
              meals.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="conclusion">
          <h2>Pick the Perfect Graduation Catering Theme</h2>

          <p>
            Graduation celebrations are once-in-a-lifetime moments. Choosing
            the perfect catering theme helps create unforgettable memories for
            graduates, friends, and family.
          </p>
          <div className="mt-3">

          <Link to='/book' className='btn btn-success text-white m-4 btn-outline-info'>Booking</Link>

        </div>

          
        </section>
      </div>
    </div>

     
        

      


  );
};

export default graduationCatering;