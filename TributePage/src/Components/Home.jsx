import React from 'react';
import styles from './Style.css'; // Assuming you have your CSS in a separate file
function TributePage() {
  return (
    <div>
      <header>
        <h1>Tribute to  Prime Minister Narendra Modi</h1>
      </header>
      <div className="container">
        <img
          id="image"
          src="https://3.bp.blogspot.com/-YsPvrj99hhg/WDIQLg8M0AI/AAAAAAAAArY/UnpKeFv9YeEJb-mGnS7riAlBEAGEkbB6ACK4B/s1600/HD%2Bpics%2Bof%2Bnarendra%2Bmodi.jpg"
          alt="Profile Image"
        />

        <div id="quote">
          <q>JAI HIND!</q>
        </div>

        <div id="bio">
          <p id="info">
          Economic Reforms: Discuss his initiatives such as GST (Goods and Services Tax), demonetization, and Make in India campaign aimed at boosting economic growth and development.
Infrastructure Development: Highlight projects like the Smart Cities Mission, Swachh Bharat Abhiyan, and Digital India initiative.
Foreign Policy: Discuss his foreign policy initiatives, diplomatic engagements, and efforts to strengthen India's global position.
          </p>
          <ul>
            <br />
            <li>
            Address controversies and criticisms surrounding his tenure, such as the handling of certain situations, economic policies, and social issues.
Provide a balanced view by acknowledging both positive and negative aspects.
            </li>
            <br />
            <li>
            Include quotes, anecdotes, and personal stories to add depth and authenticity to the tribute.
Incorporate images, videos, or infographics to make the content visually engaging.
            </li>
            <br />
            <li>
            National Security: Highlight his government's efforts in strengthening national security, combating terrorism, and promoting defense modernization.
            </li>
            <br />
            <li>
            Global Diplomacy: Modi's foreign visits and engagements have aimed to bolster India's presence on the global stage and foster international cooperation.
            </li>
            <br />
            <li>
            Ayushman Bharat: The world's largest healthcare scheme provides health insurance coverage to economically vulnerable families for secondary and tertiary care hospitalization.
Ujjwala Yojana: Aims to provide clean cooking fuel to poor households by distributing LPG (liquefied petroleum gas) connections.
            </li>
            <br />
            <li>
            Counterterrorism Measures: Modi government has taken steps to strengthen counterterrorism efforts, enhance intelligence capabilities, and secure India's borders.
Defense Modernization: Emphasizes modernizing India's defense infrastructure, increasing defense spending, and promoting indigenous defense production.
            </li>
            <br />
            <li>
            Skill India: Aims to empower youth with skill development training and enhance employability.
Start-up India: Encourages entrepreneurship and supports start-ups through funding, incubation, and mentorship programs.
            </li>
          </ul>
        </div>

        <div class="more">
        <div class="grid-container">
          <div class="grid-item">
            <a href="https://youtu.be/3kNnoRcAbAA?si=o1VdPbQDNiVE4Ld0">
              <img
                src="https://images.moneycontrol.com/static-mcnews/2022/11/1-modi-bilateral-meet-with-g20-leaders.jpg"
                alt=""
              />
              <h4>Bootstrap Studio Full Course</h4>
            </a>
          </div>
          <div class="grid-item">
            <a href="https://youtu.be/3kNnoRcAbAA?si=o1VdPbQDNiVE4Ld0">
              <img
                src="https://www.pngplay.com/wp-content/uploads/7/Narendra-Modi-Transparent-File.png"
                alt=""
              />
              <h4>Spotify Full Working Clone</h4>
            </a>
          </div>
          <div class="grid-item">
            <a href="https://youtu.be/3kNnoRcAbAA?si=o1VdPbQDNiVE4Ld0">
              <img
                src="https://images.hindustantimes.com/img/2023/02/04/550x309/ANI-20220401203-0_1648838067207_1675490994146_1675490994146.jpg"
                alt=""
              />
              <h4>Custom Icon in Flutter</h4>
            </a>
          </div>
          <div class="grid-item">
            <a href="https://www.youtube.com/watch?v=IeILUlUNjRY&t=27s">  
            </a>
          </div>
            
          </div>
        </div>
      </div>

      <footer>
        <p>Created by Eazy2Code | 2020-2023</p>
      </footer>
    </div>
  );
}

export default TributePage;
