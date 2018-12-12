import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <div id="home">
        <h2 id="inside">Let's code it</h2>
        </div>
        

<section class="my-5">

  <h2 class="h1-responsive font-weight-bold text-center my-5">Why is it so great?</h2>

  <p class="lead grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam.</p>

  <div class="row">

    <div class="col-md-4 mb-md-0 mb-5">

      <div class="row">

        <div class="col-lg-2 col-md-3 col-2">
          <i class="fa fa-bullhorn blue-text fa-2x"></i>
        </div>

        <div class="col-lg-10 col-md-9 col-10">
          <h4 class="font-weight-bold">Marketing</h4>
          <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <a class="btn btn-primary btn-sm">Learn more</a>
        </div>
      

      </div>


    </div>

    <div class="col-md-4 mb-md-0 mb-5">


      <div class="row">

        <div class="col-lg-2 col-md-3 col-2">
          <i class="fa fa-cogs pink-text fa-2x"></i>
        </div>
        <div class="col-lg-10 col-md-9 col-10">
          <h4 class="font-weight-bold">Customization</h4>
          <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <a class="btn btn-pink btn-sm">Learn more</a>
        </div>

      </div>

    </div>
    <div class="col-md-4">

      <div class="row">

        <div class="col-lg-2 col-md-3 col-2">
          <i class="fa fa-dashboard purple-text fa-2x"></i>
        </div>

        <div class="col-lg-10 col-md-9 col-10">
          <h4 class="font-weight-bold">Support</h4>
          <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <a class="btn btn-purple btn-sm">Learn more</a>
        </div>

      </div>

    </div>

  </div>

</section>

      
      <div class="overview">
        <h2>Quick Review on What We Do</h2>
        <p>
          Research has shown that some talented young programmers who started coding on their own<br/>
          give up coding because they didn't get to form a strong bond with coding and then they<br/>
          get frustrated and the reason is because they lack good team work. They didn't get to<br/>
          know people that have interest in whta they do, that is why they gave up.<br/>
          and that is why Let's Code It is here to bring young developers from all areas<br/>
          together so that they can work on projects together, learn together and get jobs together.<br/>
          So if you are a young developer, here is your home and if you are a pro here is also your<br/>
          home.
          Let's sit our ass down and build some record breaking apps<br/>
        </p>
      </div>
      <div class="workdone">
        <h2>Our Projects</h2>
        <p class="story">
          We've worked on a couple of projects both individually and with teams.
          we've built a Food Recipe website, customer's reply webform, school website,<br/>
          profiling webapp and so on.<br/>
          Below are the links to some of the sites we have built:<br/>
            <ul class="links">
              <li><a href="">foodrecipe.com</a></li>
              <li><a href="">nacoss.edu.ng</a></li>
              <li><a href="">pinacle.com</a></li>
            </ul> 
        </p>
      </div>


<section class="team-section text-center my-5">

  <h2 class="h1-responsive font-weight-bold my-5">Our amazing team</h2>
  <p class="grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
    eum porro a pariatur veniam.</p>

  <div class="row text-center">

    <div class="col-md-4 mb-md-0 mb-5">
      <div class="avatar mx-auto">
        <img src={require('../images/arokoyo.jpg')} class="rounded z-depth-1-half" alt="Sample avatar"/>
      </div>
      <h4 class="font-weight-bold dark-grey-text my-4">Arokoyo John</h4>
      <p class="text-uppercase blue-text"><strong>Content editor</strong></p>
      <p class="grey-text">Hi, I'm John. I am a  PHP web developer,<br/>
            I am also an expert in creating web content.<br/>
            That is why I joined Let's Code It, so that I can work<br/>
            with teams, get good jobs and have a better code life.</p>
      <a class="btn-floating btn-sm mx-1 mb-0 btn-fb">
        <i class="fa fa-facebook blue-text"></i>
      </a>
      <a class="btn-floating btn-sm mx-1 mb-0 btn-email">
        <i class="fa fa-envelope blue-text"></i>
      </a>

      <a  class="btn-floating btn-sm mx-1 mb-0 btn-tw">
        <i class="fa fa-twitter blue-text"></i>
      </a>
      <a class="btn-floating btn-sm mx-1 mb-0 btn-git">
        <i class="fa fa-github blue-text"></i>
      </a>
    </div>

    <div class="col-md-4 mb-md-0 mb-5">
      <div class="avatar mx-auto">
        <img src={require('../images/lois.jpg')} class="rounded z-depth-1-half" alt="Sample avatar"/>
      </div>
      <h4 class="font-weight-bold dark-grey-text my-4">Ibiyomi Lois</h4>
      <p class="text-uppercase blue-text"><strong>Front-end designer</strong></p>
      <p class="grey-text">Hi, my name is Lois.<br/>
            I code HTML, CSS and PHP,and if I could code more<br/>
            I would be a badass in javascript someday.<br/>
            That is why I joined Let's Code It so I can<br/>
            improve myself and get good jobs. </p>

      <a class="btn-floating btn-sm mx-1 mb-0 btn-fb">
        <i class="fa fa-facebook blue-text"></i>
      </a>
      <a class="btn-floating btn-sm mx-1 mb-0 btn-email">
        <i class="fa fa-envelope blue-text"></i>
      </a>

      <a  class="btn-floating btn-sm mx-1 mb-0 btn-tw">
        <i class="fa fa-twitter blue-text"></i>
      </a>
      <a class="btn-floating btn-sm mx-1 mb-0 btn-git">
        <i class="fa fa-github blue-text"></i>
      </a>
    </div>

    <div class="col-md-4">
      <div class="avatar mx-auto">
        <img src={require('../images/1.jpg')} class="rounded z-depth-1-half" alt="Sample avatar"/>
      </div>
      <h4 class="font-weight-bold dark-grey-text my-4">Otitoju John</h4>
      <p class="text-uppercase blue-text"><strong>Backend developer</strong></p>
      <p class="grey-text">Hi, I'm John. I am a pro in Nodejs and react,<br/>
            programming is what I do and I love it. That is<br/>
            why I joined Let's Code It, so that I can work<br/>
            with teams, get good jobs and have a better code life.</p>
            <a class="btn-floating btn-sm mx-1 mb-0 btn-fb">
        <i class="fa fa-facebook blue-text"></i>
      </a>
      <a class="btn-floating btn-sm mx-1 mb-0 btn-email">
        <i class="fa fa-envelope blue-text"></i>
      </a>

      <a  class="btn-floating btn-sm mx-1 mb-0 btn-tw">
        <i class="fa fa-twitter blue-text"></i>
      </a>
      <a class="btn-floating btn-sm mx-1 mb-0 btn-git">
        <i class="fa fa-github blue-text"></i>
      </a>
    </div>


  </div>

</section>
      </div>
    )
  }
}
