import React from 'react';
import { StyleSheet, Text, View, ScrollView, useWindowDimensions } from 'react-native';
import HTML from "react-native-render-html";
import octocat from "./assets/Octocat.webp"

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style type="text/css">
      .grid{display:grid;grid-template-columns:repeat(2,1fr)}body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,sans-serif;background-color:#7FDBFF;color:#B10DC9}h2,.white{color:#B10DC9}a{color:#8334eb;text-decoration:none}.section-1{padding-top:40vh;padding-left:20vw;text-align:center}.section-1 p{font-size:1.1rem;padding-bottom:10px;margin:0}.section-1 a{font-size:1.5rem;padding:10px}.section-2{padding-top:20vh;width:70%}.section-2 h2{font-size:1.7rem;margin-bottom:10px}.section-2 p{font-size:1.1rem;padding-bottom:10px;margin:0}.section-2 a{display:row;padding:5px;font-size:1.2rem;padding-left:0;width:100px}@media (max-width:780px){.grid{grid-template-columns:1fr}.section-1{padding:0;padding-top:5rem}.section-2{padding:0;padding-left:1.5rem;padding-top:2rem}}
      a:hover {color:#B10DC9}

      @keyframes slideInFromTop{
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(0);
      }
    }
    .section-1 img{
      animation: 1s ease-out 0s 1 slideInFromTop;
    }
    .neil{
      animation: 1s ease-out 0s 1 confetti;
    }
    .container {
      width: 100%;
  height: 100%;
}



    </style>
    <title>Neil Bateman</title>
</head>
<body>
  <div class="container">
    <div class="grid">
        <div class="section-1">
            <img src="assets/neil.webp" class="neil" style="max-width: 40%" alt="Image of Neil Bateman, the website creator"/>
            <h1>Neil Bateman</h1>
            <p>Portland, Oregon.</p>
            <a href="https://gitlab.com/nomboloneil" alt="Link to Gitlab"><img src="https://i.imgur.com/dHLmxfO.jpg?2" style="max-width: 100%; height: auto;" alt="Icon for link to gitlab"/></a>
            <a href="https://github.com/neilbateman" alt="Link to Github"><img src="octocat" style="max-width: 25%; height: auto;" alt="Icon for link to github"/></a>
            <a href="https://www.linkedin.com/in/neilbateman" alt="Link to LinkedIn"><img src="assets/linkedin.webp" style="max-width: 18%; height: auto;" alt="Icon for link to github"/></a>
        </div>
        <div class="section-2">
            <h2>About</h2>
            <p>Hello, my name is Neil and I am a software developer. Having worked many jobs from masonry to social work, I've become a well-rounded team leader known for finding creative solutions. I am presently working with a startup in Portland called <a href="https://nombolo.com" alt="Link to Nombolo">Nombolo</a></p>
            <h2>Skills</h2>
            <p>My focus has been on React Native, and I emphatically embrace the philosophy of “learn once, write anywhere”. However, this web page is made with just HTML and CSS. Selecting the proper technology is essential, and because this website uses no unnecessary frameworks leading to a bundle bloat, it is 1875 times smaller than the average website. Notice that page load speed!
            </p>
            <h2>Recent Projects</h2>
            <a href="https://nombolo.com" alt="Link to Nombolo">Nombolo</a>
            <a href="https://inkandspark.com" alt="Link to Ink and Spark">Ink and Spark</a>
            <a href="http://wishbonetech.com" alt="Link to Wishbone Tech">Wishbone Tech</a>
            </div>
          </div>
        </div>
</body>
<br/>
<br/>
<br/>
<footer>
  <div style="text-align:center;">
  <a href="mailto:neilgbateman@gmail.com?cc=neilbatman@gmail.com, &subject=Contact%20Neil&body=hey there">Contact</a> ---
  <a href="assets/resume.pdf">Resume</a> ----
  <a href="https://github.com/neilbateman">Repository</a>
  </div>
</footer>
</html>`

export default function App() {
  const contentWidth = useWindowDimensions().width;

  return (
    <ScrollView style={{
      flex: 1,
      backgroundColor: '#7FDBFF',
    }}>
      <HTML 
        source={{ html: htmlContent }} 
        contentWidth={contentWidth} 
        contentContainerStyle={styles.container}
        classesStyles={ {'section-1': { textAlign: 'right', color: 'teal', fontWeight: '800' } }}

        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7FDBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
