import React from 'react'
import '../styles/advisor.css';
import kabali from '../assets/images/kabali .jpg';
import smd from '../assets/images/smd.jpg';
import ktk from '../assets/images/ktk.png';
import ram from '../assets/images/ram.jpg';
import naga from '../assets/images/naga.jpg';
import prema from '../assets/images/prema.jpg';
import mamood from '../assets/images/mamood.jpg';
import ananthi from '../assets/images/ananthi.jpg';
 import murugan from '../assets/images/m.murugan.jpg';
import jebasir from '../assets/images/jeba sir.jpg';
import samuelsir from '../assets/images/samuel sir.jpg';
import ramkumar from '../assets/images/ram kumar.jpg';
import suresh from '../assets/images/suresh.jpg';
import panneer from '../assets/images/panneer.png';
import charlessir from '../assets/images/charles sir.jpg';
 import jeevan from '../assets/images/jeevan.jpg';
 import valavan from '../assets/images/valavan.jpg';
 import kar from '../assets/images/kar.jpg';
import srivasancanada from '../assets/images/srivasan canada.jpg';
 import muthukumar from '../assets/images/muthukumar.jpg';
 import socratis from '../assets/images/socratis.png';
 import subash from '../assets/images/subash (1).jpg';
 import rathinel from '../assets/images/rathinel.jpg';
import mani from '../assets/images/mani.jpg';
import jesuharan from '../assets/images/jesuharan (1).jpg';
import karthick from '../assets/images/karthick.jpg';
// import pet from '../assets/images/pet.jpg';
// import pet from '../assets/images/pet.jpg';

// import pet from '../assets/images/pet.jpg';





const Advisor = () => {
  return (
    <div>
        <div class="advisors-section">
        <h1>Board of Advisors</h1>
        <p>“The Advisor's role is to pull management out of the trees to see the forest.”</p>
        <div class="quotes">
            <div class="quote">
                <p>"To live with men of greatness that their own excels,<br></br>
                    As cherished friends, is greater power that with a monarch dwells."<br></br>
                    - Kural no. 444, Thirukkural</p>
            </div>
            <div class="quote">
                <p>"தம்மிற் பெரியார் தமரா ஒழுகுதல்;
                    வன்மையு ளெல்லாந் தலை." <br></br>
                    "<br></br>
                    <br></br>
                    - குறள் 444 பொருட்பால், அரசியல், திருக்குறள் !</p>
            </div>
        </div>
    </div>



    <div class="advisor-grid">
        {/* <!-- Advisor Cards Start --> */}
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={kabali} alt="Advisor Image"/>
                    <h4>Dr. Kabali P Subramanian</h4>
                    <p>Management consultant</p>
                    
                </div>
                <div class="advisor-back">
                    <p>Assistant Professor - Business Studies, Arab Open University,( Muscut,Oman) <br></br> Business Strategy
                        Innovation,EntrepreneurshipTheory, Building Research ,Digital Business Transformation.</p>
                </div>
            </div>
        </div>
        {/* <!-- Repeat the card 27 more times for 4 columns and 7 rows -->
        <!-- Example of multiple cards --> */}
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={smd}alt="Advisor Image"/>
                    <h4>S M D Rathinasamy </h4>
                    <p>A person who works for educational development without seeking any publicity.</p>
                </div>
                <div class="advisor-back">
                    <p>A person who works for educational development without seeking any publicity.</p>
                </div>
            </div>
        </div>
       


        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={ktk} alt="Advisor Image"/>
                    <h4>K T K Kamaraj</h4>
                    <p>President Merchants Association Surandai <br></br>A person who works for educational development without
                        seeking any publicity.</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>


        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={ram} alt="Advisor Image"/>
                    <h4>Dr Balakrishnan Ramanathan</h4>
                    ACE International Pte Ltd Singapour
            <p class="text-left">Founder and Manging Director - Business Management Consultancy Services, Research &
              Development, Learning & Development</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={naga} alt="Advisor Image"/>
                    <h4>Appa Soma.Nagalingam</h4>
                    {/* <!-- <p>Short description of the advisor.</p> --> */}
                    <p>Fomer IRS Madurai ,Founder and Manging Director Nikil Fountation,Madurai <br></br>I am an enabler willing to empower under
                        privilged school students through Life Skills</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={prema} alt="Advisor Image"/>
                    <h4>Mrs.Prema Manohar</h4>
                    <p>Speaker, Writer, Social Worker
                        Lecturer in English in Government Polytechnic College,theni
                        Focussed to create students who are socially responsible, independent, trusts equality and love their fellow human beings.</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                <img src={mamood} alt="Advisor Image"/>
                    <h4>Mrs.Mamudha Syedh.</h4>
                    <p>Spearker,Feminist
                        founder and managing director F&F (fair and favour) UNISEX SALON,Tenkasi
                        Native: vadakarai(Tenkasi district)</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={ananthi} alt="Advisor Image"/>
                    <h4>Mrs.Ananthi Thankaprakash</h4>
                    <p>Social worker,professor
                        Sri Ram Nallamani Yadava college,Ayikudi
                        Aladipatti ,Surandai</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={murugan} alt="Advisor Image"/>
                    <h4>Dr. Ma.Murugan</h4>
                    <p>Social worker , Young Entrepreneur
                        Founder and Manging Director TNDSC A social worker who rises through hard work and helps others,
                        Native keelasurandai</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={jebasir} alt="Advisor Image"/>
                    <h4>Jebakumar Swamidosan</h4>
                    <p>Auditor
                        Global President of Chiththirai Business Associates Dubai
                        Former CEO Satyam TV
                        Editor · Puthiya Dharisanam youtube channel</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={samuelsir} alt="Advisor Image"/>
                    <h4>Samuel Abraham</h4>
                    <p>Senior Law Officer
                        Sr. HR & Legal Consultant CMC & Hospital, Ludhiana,Punjab
                        District Consumer Commission; State Consumer Forum; National Consumer Commission,New Delhi Supreme Court</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={ramkumar}alt="Advisor Image"/>
                    <h4>Dr.Ram Kumar</h4>
                    <p>Psychologist
                        Social Development Professional
                        Director Nellai cancer care center,Thirunelveli</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={suresh}alt="Advisor Image"/>
                    <h4>Suresh Kumar</h4>
                    <p>School Teacher
                        President Tamilnadu Science Forum ,TENKASI District
                        -He is the epitome of what a teacher should be..front field worker, friend of students</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={panneer} alt="Advisor Image"/>
                    <h4>A.Panneer Selvam</h4>
                    <p>Social worker,Auditor
                        Surandai</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={charlessir} alt="Advisor Image"/>
                    <h4>Charles Chella Durai</h4>
                    <p>Teacher,Writer,Trainer
                        A teacher by profession, a great organizer, a versatile expert, a leader in all events. Great at feeding and entertaining.
                        Native Idaikal,Tenkasi</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={jeevan} alt="Advisor Image"/>
                    <h4>A.Rajinigand Mariappan</h4>
                    <p>Reporter & photography
                        A social worker
                        Jeevan photography
                        Native Veerasigamani</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={valavan} alt="Advisor Image"/>
                    <h4>V S Valavan</h4>
                    <p>Social Worker,Writer,Orator,Trainer,
                        Chennai.
                        Developmental Professional having 22 years of experience working with children from multiple storey of the society</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={kar} alt="Advisor Image"/>
                    <h4>Dr.S.Karuppasamy</h4>
                    <p>Former DGM BHEL Trichy
                        After retirement, he continues to work for the educational development of the village where he was born.Now at Trichy
                        Native keelasurandai</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={srivasancanada} alt="Advisor Image"/>
                    <h4>Srinivasan Sethuraman</h4>
                    <p>Software Engineer.Social activist
                        working in Mechanical engg field and doing social activities,
                        lives in CANADA</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={muthukumar} alt="Advisor Image"/>
                    <h4>A T Muthukumar</h4>
                    <p>Advocate,Entrepreneur,Social Worker
                        Founder and Manging Director PRINTFAAST AND CO.
                        Native kadaiyalurutti,near Surandai.</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={socratis} alt="Advisor Image"/>
                    <h4>K M Socratis</h4>
                    <p>Software Engineer.Social activist
                        lives in USA
                        Native Keelasurandai</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={subash} alt="Advisor Image"/>
                    <h4>Dr. Tamil Marx subhash</h4>
                    <p>MBBS, MD Radiologist
                        DIAGNOSTIC RADIOLOGY EXCELLENCE AWARD IN MEDALL, 2013
                        Native Surandai now at UAE</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                <img src={rathinel} alt="Advisor Image"/>
                    <h4>M.Rathinavel Pandian</h4>
                    <p>Software Engineer.Social activist
                        lives in USA
                        Native Surandai</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={mani} alt="Advisor Image"/>
                    <h4>L.Manimaaran</h4>
                    <p>Writer,Orator,Social activist
                        Software Engineer, lives in USA
                        Native Punkampatti,Avudaiyanoor</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={jesuharan} alt="Advisor Image"/>
                    <h4>G.Jesuharan Thangaraj</h4>
                    <p>"Born to Shine"
                        A professional social worker, Native Parankuntapuram.</p>
                </div>
                <div class="advisor-back">
                    <p>Detailed description about the advisor, their expertise, and achievements.</p>
                </div>
            </div>
        </div>
        <div class="advisor-card">
            <div class="advisor-inner">
                <div class="advisor-front">
                    <img src={karthick} alt="Advisor Image"/>
                    <h4>Karthikeyan Ba Emayavaramban</h4>
                    <p>Writer,Orator,Trainer,Entrepreneur
                        Founder Aatrupadai, Founder Kavippom
                        Managing Partner-Thirukkural Unavagam lives in Chennai</p>
                </div>
                <div class="advisor-back">
                    {/* <!-- <p>Detailed description about the advisor, their expertise, and achievements.</p> -->
                    <!-- <img src="images/karthick.jpg" alt="Advisor Image"> --> */}
                </div>
            </div>
        </div>
        {/* <!-- Add as many as needed to reach 28 cards --> */}
    </div>

    </div>
  )
}

export default Advisor