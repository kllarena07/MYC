---

# Hacklytics 2024: "My YouTube Companion" by Vansh Bataviya, Kieran Llarena, Sadokat Raupova, Iris  Shakya, 

---
<img src="https://github.com/vanshb03/Hacklytics2024/assets/158211829/d96b39e1-b04b-4b56-9c64-2b26b7e9cebc" width="350" />

## Introduction: 

Introducing our solution: the My YouTube Companion (MYC). With over 2.49 billion users on YouTube and 47% of them engaging with the platform each month, it's evident that YouTube has become an indispensable tool for learning. However, navigating through the vast sea of content can be daunting, especially when encountering unfamiliar terminology. 
Research shows that over 70% of YouTube users watch videos specifically to learn something new. However, the process of pausing the video, conducting a Google search, and deciphering complex terms disrupts the flow of learning and can lead to frustration.
To address this challenge, our team has developed a revolutionary website add-on. The YouTube Learning Companion seamlessly integrates with your browsing experience, providing real-time assistance as you watch educational videos. 
Here's how it works: as the video plays, the companion reads along with the transcript. Whenever it encounters finance terminology, it automatically provides a clear definition and offers real-life examples to illustrate the concept. This innovative tool eliminates the need for interruptions, allowing users to stay focused and engaged with the content.
Imagine watching a tutorial on stock market analysis and effortlessly understanding terms like "dividends," "capital gains," or "market volatility" without ever leaving the video window. With MYC, learning from YouTube becomes not only easier but also more enriching and enjoyable. Empower yourself with knowledge and unlock the full potential of YouTube as a learning platform. Try the My YouTube Companion today and embark on a journey of seamless and immersive learning experiences.

---

## How it works: 

MYC, or the YouTube Companion, functions as an add-on integrated with the YouTube platform. When users encounter unfamiliar terminology, content, or concepts while watching a video, MYC offers an efficient solution. Here's how it works:

- MYC appears as an icon on the right side of the YouTube video player when the user is in the Default view.
- Users can access MYC without interrupting their video playback; there's no need to pause the video.
- By clicking on the MYC icon, users instantly receive quick, accurate, and concise information related to the unfamiliar term or concept being discussed in the video.
- This eliminates the need for users to spend time pausing the video, opening a new browser tab, typing in their query, and searching for the most suitable definition or explanation.
- MYC streamlines the learning process by providing on-the-spot assistance, ensuring that users can swiftly grasp new information without disruptions or delays.

In addition to its core functionality, MYC offers further interaction through two buttons located at the bottom of the interface. These buttons are:

- "I understand": Clicking this button indicates that the user has comprehended the provided information. Selecting this option closes MYC and allows the user to continue watching the video without interruption.
- "Need more information": Choosing this option prompts MYC to provide additional assistance. It offers examples and attempts to define the unfamiliar term or concept in alternative ways, catering to various learning preferences and levels of understanding. This feature ensures that users can delve deeper into the topic if desired, enriching their learning experience directly within the YouTube environment.
  
## How we built it:

My YouTube Companion (MYC) utilizing a combination of web scraping, video processing, data handling, and web service implementation to achieve its functionality.

- ### Web Scraping and Video Processing:
The project involves scraping information from YouTube videos, including their transcripts, using libraries like BeautifulSoup and youtube_transcript_api. This allows MYC to access the content of the video and analyze it in real-time and help the user to understand what they may have not understood through the content.

- ### Data Handling and Analysis:
With the usage of pandas, the project manages and analyzes the data obtained from web scraping and video processing. This could involve tasks such as filtering, sorting, or extracting relevant information from the scraped content and video transcripts.

- ### Web Service Implementation:
The Flask framework is employed to build a web service, which serves as the interface for users to interact with MYC's functionalities. This includes providing real-time assistance, offering definitions and examples, and enabling further exploration of unfamiliar terms without interrupting the video playback.

## Challenges we ran into:

Given the complexity of integrating various technologies and functionalities into a seamless user experience, there are likely several challenges encountered during the development process. Some potential challenges could include:

- **Integration of Web Scraping and Video Processing:** Ensuring that the web scraping and video processing components work seamlessly together to provide accurate and timely assistance without causing performance issues or delays.
- **Real-time Assistance:** Implementing real-time assistance features, such as identifying unfamiliar terms and providing definitions/examples, while minimizing latency and maintaining responsiveness.
- **User Interface Design:** Designing an intuitive and user-friendly interface for MYC that seamlessly integrates with the YouTube platform and provides easy access to its functionalities without cluttering the user experience.

## Accomplishments that we're proud of:

- **Seamless Integration with YouTube:** Successfully integrating MYC as an add-on with the YouTube platform, allowing users to access its features without interrupting their video playback experience.
- **Real-time Assistance:** Implementing real-time assistance features that provide quick, accurate, and concise information to users without disrupting their learning process.
- **Enhanced Learning Experience:** Creating a tool that enriches the learning experience on YouTube by providing on-the-spot assistance, definitions, and examples, thereby empowering users to grasp new concepts effortlessly.

## What we learned:

- **Technological Integration:** Through the development of MYC, we gained valuable experience in integrating various technologies and libraries, such as web scraping, video processing, and web service implementation, to create a cohesive solution.
- **User-Centric Design:** We learned the importance of designing with the user in mind, focusing on creating a seamless and intuitive user experience that enhances learning without causing distractions or interruptions.
- **Problem Solving:** Facing and overcoming challenges encountered during the development process taught us valuable problem-solving skills and strengthened our ability to adapt and innovate in complex technical environments.

By leveraging these insights and experiences, we were able to create a revolutionary tool that transforms the YouTube learning experience and empowers users to unlock the full potential of online education.


---

## Built With:

- **Python**
- **Javascript**
- **Docker**
- **OpenAI**
- **OpenAI**
- **OpenAI**
- **OpenAI**
- **OpenAI**

---

## What's next for MYC:

The scope of MYC's application is extensive. Our goal is to broaden its reach beyond finance to encompass a diverse array of subjects and disciplines. From biology and chemistry to mathematics, statistics, and beyond, MYC aims to cater to the learning needs of individuals across various academic and professional fields. With this expansion, users will have access to on-demand assistance and support in navigating complex concepts and terminology, fostering a more enriching and accessible learning experience across a wide spectrum of subjects.

## Try it out:

---
