import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Tests.css"


export default class TestimonialsComponent extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" style={{width:"200px",borderRadius:"50%"}} /> */}
          <div className="myCarousel">
            <h3>Kolli Sudeepa</h3>
  
            <p className="Carousel-text">
            Women in Technology is a community, a girl ever wishes to join. Be it the repo or the discord channel, it has been very helpful in finding resources. It's like a one-stop tech zone for a girl in knowing about opportunities, competitions, webinars and various events. 
            </p>
          </div>
        </div>

        <div>
          {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" style={{width:"200px",borderRadius:"50%"}}/> */}
          <div className="myCarousel">
            <h3>Astitva </h3>
          
            <p className="Carousel-text">
            This community has made me more aware about the lack of diversity in STEM. This has motivated me too to support women i know personally who are already in STEM / trying to enter STEM. By the amazing discord server and repository it has highlighted key issues women face, and being a male I try to keep these in mind while working in groups, etc. so that I can do my part at a personal level to equalise the status quo. 
            </p>
          </div>
        </div>

        <div>
          {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"style={{width:"200px",borderRadius:"50%"}} /> */}
          <div className="myCarousel">
            <h3>Ayushi Dubal</h3>
    
            <p className="Carousel-text">
            Women in Technology is an awesome community with a great curation of resources and opportunities. The people in the community are dedicated, helpful, and enthusiastic. I have found many opportunities and good reads on the platform, and am very glad to be a part of the movement! 
            </p>
          </div>
        </div>
        <div>
          {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"style={{width:"200px",borderRadius:"50%"}} /> */}
          <div className="myCarousel">
            <h3>Shivangi Singh</h3>
    
            <p className="Carousel-text">I have been part of the community past 6 months and there is always something new on the server to look upto. The community helped me know about several programs happening in-out. From shying away to ask doubts to having discussions on various topics, all of it is because of the supportive environment in the community. 
Women oriented events, workshops, various scholarships everything can be found. Its like we name it and they have it.
I would definitely like recommend people to be a part of this amazing community.            </p>
          </div>
        </div>
        <div>
          {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"style={{width:"200px",borderRadius:"50%"}} /> */}
          <div className="myCarousel">
            <h3>Siddhi Parashar</h3>
    
            <p className="Carousel-text">This is an amazing platform. It has provided me with a lot of resources and an opportunity to connect with other women in tech. I'm really proud of Shikha to have started this initiative, I would definitely recommend anyone who wants easy access to resources and opportunities to join this server and be a part of the community!            </p>
          </div>
        </div>
        <div>
          {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"style={{width:"200px",borderRadius:"50%"}} /> */}
          <div className="myCarousel">
            <h3>Aitana</h3>
    
            <p className="Carousel-text">Thanks to WTM I have met a lot of interesting people and companies in which I can have an opportunity in the future ✨            </p>
          </div>
        </div>
        <div>
          {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"style={{width:"200px",borderRadius:"50%"}} /> */}
          <div className="myCarousel">
            <h3>Anonymous</h3>
    
            <p className="Carousel-text">This community provided me with very useful resources for the technologies that I am learning right now. Along with it, the members are just too helpful. Whether it comes to a small bug or "What to use to make a good resume" , they all come to help. I am glad to be a part of this community✨✨            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}