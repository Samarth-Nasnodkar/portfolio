import React from 'react';
import '../../css/About.css';

export default function About() {
  return (
    <div className='about-main'>
      <div className="about-txt">
        <p>Hi! my name is Samarth Prabhu Nasnodkar.</p>
        <p>I am a dedicated and enthusiastic Computer Science student at&nbsp;
          <span className='about-hl'>BITS Pilani</span>.</p>
        <p>I have a solid foundation in programming languages like 
        <span className='about-ghl'> Python</span>, <span className='about-ghl'>C/C++</span> and <span className='about-ghl'>Javascript</span>.</p>
        <p>
          I am passionate about learning new technologies and building projects in domains such as 
          <span className='about-ghl'> Data Science</span>
          , <span className='about-ghl'>Web Development</span>
          , <span className='about-ghl'>App Development</span>
          &nbsp;and <span className='about-ghl'>Competitive Programming</span>.
        </p>
        <p>Type '<span className='about-hl'>education</span>' to see the list of available commands</p>
      </div>
      <pre>
{`                                      
                    #=+                      
                  :#=--+=                    
                :.#*******:                  
                .+*********#:                 
                :***********:                 
                :*%*#**##**#                  
                *#:#=+=*=**                  
                .%-=:=.-:==%.                 
                :++=%:+-*=*+=                 
                ::*=@:=-%:*:*                 
                --=++.+*=:=                  
                  =..*-+..=                   
                  +-:::-=:                   
                    .==+                      
                ::+++:.#=++-.                 
    ::=:.     :+++==##=+=+=+.                
    .@#*:     #############*:                
    ==:-+    *#::::::::::::#+   .---.        
    =+-+=   .=#:::::::::::-+++  ****+        
    *+++:   :=+-::::+*::::-+=+.  ::-.        
    %###=  -#++-::::=+::::-*++# .+=+         
    %###=+:.=#++::::::::::-+=+* :=:+         
    %###+=-+=#*#----------+*++# :**#         
    %###=:+*-##*-----------**#. :-:+         
.-++++++++++++++++++++++++++++++++++++-.     
        ......................:...                                                                                                             
`}
      </pre>
    </div>
  );
}
