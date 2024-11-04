import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
    navigate('/register');
    };
  return (

    <div className="min-h-screen bg-gray-100 py-10">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200">
        
        {/* Introduction Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold ">Welcome to Plinth</h1>
          <p className="mt-4 text-lg text-gray-600">
            We are excited to welcome you to Plinth, where technology meets excitement! Get ready to dive into an unforgettable experience filled with tech wonders and fun-filled activities.
          </p>
          <p className="mt-4 text-md text-gray-600">
            For queries or information, kindly contact:
          </p>
          <p className="mt-2 text-md text-gray-700">
            Ayush Singh (9125466700)  <br />
            Tushar Agarwal (916306263607)
          </p>
          
        </section>

        {/* Guidelines Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Guidelines</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              The pronite extends until 1 am for the convenience and entertainment of all attendees.
            </li>
            <li>
              As a precautionary measure and for the safety of all participants, we strongly discourage attendees, including Jaipur locals, from leaving the college premises after the Pronite. Complimentary accommodation is provided along with the Pronite pass.
            </li>
            <li>
              This guideline ensures the well-being and security of all guests. Your safety is our top priority, and we request cooperation in adhering to this guideline.
            </li>
          </ul>
        </section>

        {/* Pricing Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Pricing and Offers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 3-Day Pass */}
            <div className="p-6 bg-gray-50 rounded-lg border hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-700">3-Day Power Pass – Rs 949</h3>
              <ul className="list-disc mt-2 ml-4 text-gray-600">
                <li><b> All-Inclusive: </b>Enjoy 3 days of fest fun with <b>complimentary accommodation</b> for all three days.</li>
                <li><b> Pronite Access:</b> Experience the energy of <b>all exciting pronites</b> with top performances. </li>
                <li><b>Event Participation:</b> Join <b>one event of your choice</b> and compete for prizes.</li>
                <li>Additional perks include <b>fun activities, freebies, and surprises</b>  throughout the fest!</li>
                <li> Events can be choosen in the registration desk </li>
              </ul>
            </div>

            {/* Single-Day Pass */}
            <div className="p-6 bg-gray-50 rounded-lg border hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-700">Single-Day Pass – Rs 649</h3>
              <ul className="list-disc mt-2 ml-4 text-gray-600">
                <li> <b>One Day, Full Fest:</b> Access a full day of festivities with free accommodation for that day.</li>
                <li> <b>Pronite Access:</b> Dance the night away at one thrilling pronite. </li>
                <li> <b>Event Entry:</b> Participate in one event and showcase your talents!</li>
                <li> Events can be choosen in the registration desk </li>
              </ul>
              
              
             
            </div>

            {/* Add-On Events */}
            <div className="p-6 bg-gray-50 rounded-lg border hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-700">Add-On Events – Rs 149 per Event</h3>
              <p className="mt-2 text-gray-600">
                Want to take part in more events? For just <b>Rs 149 per extra event</b>, join as many as you like!
              </p>
            </div>

            {/* Special Discounts */}
            <div className="p-6 bg-gray-50 rounded-lg border hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-700">Special Group Discounts</h3>
              <p className="mt-2 text-gray-600">
                <b>Team of 5 or more?</b> Contact us at <b>9125466700</b> to unlock <b>exclusive group discounts and additional benefits.</b>
              </p>
            </div>
          </div>

          <p className="mt-4 text-md text-gray-600">
            For any questions, feel free to contact us at <b>9125466700</b>. Get ready for an unforgettable fest experience!
          </p>
        </section>

        {/* Registration Information */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">How to Register</h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            <li>Fill in your Contact Information.</li>
            <li>Choose the desired package: Single-Day or Three-Day and specify the number of passes.</li>
            <li>Pay the amount using the QR code.</li>
            <li>Submit to complete the registration process and receive your event pass.</li>
            <li>If you have any queries, contact us at 9125466700.</li>
            
          </ol>
        </section>
         <section>
         <div className="flex justify-center mt-10">
        <button
          onClick={handleRegisterClick}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Register Now
        </button>
      </div>
         </section>
      </div>
    </div>
  );
};

export default HomePage;
