/* Custom JS goes here */

(function(){
    function Start(){
        // local variables
        var title = document.title;

        console.log("Application Started");
        console.info("----------------------");
        console.warn("Title: " + title);
        
       
        switch(title){
            case "Biography":
                Biography();
                break;
            case "Project":
                Project();
                break;
            case "Contact":
                break;
        }
    }
    Biography = function(){
       let string = document.getElementById("string");

       string.setAttribute('style', 'white-space: pre;');

        string.textContent = "Hi! My name is Iqra Mirza. I am 21 years old, and I was born in Canada. \r\nI’ve been brought up in Scarborough, ON and New York City, USA. \r\nI live in a household of four kids including myself, and a lovely mother whose always by our side. \r\nI have two younger sister, as well as a younger brother. I am the eldest. \r\nI was educated both in Canada and the States. I completed my high school in Canada. \r\nI went to Seneca for Medical Science and Technology. Furthermore, I transferred in to Centennial later. \r\nI am currently in the Health Informatics Technology Program at Centennial College.";
        string.textContent += "I'm an enthusiastic, determined, passionate, and a perfectionist tech savvy \r\nstudent who never gives up or loose hope on anything when I'm at \r\nmy lowest. I've always been in lead in every club I've been in. I love reading books because it clears \r\nour minds and when you are reading you are stress less. I get hooked into a lot of \r\ndifferent books as if every novel is a different  door to an entrance. I am very passionate, I feel as if I'm \r\nthe character myself and as if  I'm in the book. Ever since I was young, \r\nI loved reading. Reading is life, well studying is too now. I can't go to class with only technology in my hand, I must have a book. \r\nIt's a piece of information that one just needs. I have a kobo and I love it, it's very useful on those long summer days or chilly winter nights. \r\nThat's how my fondness for reading and diverse types of books grew.";
        }
    
    function Project(){
        let string = document.getElementById("string");

       string.setAttribute('style', 'white-space: pre;');

        string.textContent = "I have always wanted to be a social activist. \r\nI always wanted to do YouTube, and other social media. \r\nI wanted to be an example or a role model per say. \r\nI like to be creative with my social page. \r\nI have fun with photography and arts. \r\nI like to show the people what is going on in my life to inspire them, \r\nwhether it be baking, cooking, art, nature, myself, or any other social aspect of my life. ";
        let string2 = document.getElementById("string2");

        string2.setAttribute('style', 'white-space: pre;');
 
         string2.textContent = "I have always wanted to have my own clothing company. \r\nIt has been one of my dreams. I have been thinking about it since high school, however in the past two years I decided I was going to turn my dream into reality.  \r\nI wanted to call my clothing line “IQ Fashion”. The reasoning is one “IQ” is the first two letters of my name.  \r\nSecondly, “IQ Fashion” literally is meant for intelligent fashion. It puts a smile on every one’s face when all diverse types of people are included.  \r\nI started looking more into fashion inspirations, other clothing companies, and just general knowledge of how to make a website success (online web store).  \r\nI started taking photos and gather them up for my social media pages.  \r\nI also gathered models or collaborators for future photoshoots and media recognition.  \r\nHopefully, one day I can open this project.  \r\nAs for now, this project is currently in the making. ";

         let string3 = document.getElementById("string3");

         string3.setAttribute('style', 'white-space: pre;');
  
          string3.textContent = "I always wanted to help people and their health.  \r\nIt was an honor at my high school to teach yoga and fitness class when teacher wasn’t feeling so well.  \r\nI was always one of the top students in my gym class.  \r\nI was always told to set up the field with some other students and join the warm up routine after.  \r\nThe reasoning was that my stamina and my fitness level was high (I could run 10 laps on a track for 5 mins).  \r\nI always took my health seriously. However, having ADHD my metabolism wasn’t so great.  \r\nI didn’t know what to do. I didn’t know how to gain weight.  \r\nMost people said, “You’re so fit, you don’t need to gain weight”.  \r\nThe truth was I had too, my BMI was low. I was anorexic. That’s when I took a stand and I started gaining weight.  \r\nI ate very unhealthily and slouched all the time. I gained the wrong weight, and I was not happy about it.  \r\nMy motivation didn’t fade away, I decided to join GoodLife Fitness, and get a personal trainer.  \r\nI decided to share my knowledge and correct it by getting trained by my trainer.  \r\nI was the perfect Yogi, therefore my trainer assisted me on how to train others.  \r\nThat was my project for the Summer. I am know learning how to properly lift weights, so I can train others when I finish my training. ";
    }

    window.onload = Start;
})();