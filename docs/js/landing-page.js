const testimonials = [
  {
    logo: "./images/logos/sap-fieldglass-vector-logo.png",
    quote:
      "The fundamentals team is amazing to work with!  They were willing to work with our existing stack, and continue to go above and beyond to help us meet our consistency goals.  They are a true asset and incredibly responsive!!",
  },
  {
    logo: "./images/logos/sap-fsm.png",
    company: "SAP FSM",
    quote:
      "Our solution is built on a modern, reactive stack - where micro frontend UI patterns are applied. By splitting monolithic UI into several micro apps, our teams are able to develop and ship things independently with high velocity. This is awesome as each team can deliver customer value fast, but at the same time this confronts us with challenges. Especially when it comes to ensuring a consistent user experience on the interface across the entire web application suite the Fundamental libraries have helped our teams to bring it all together in a nice, consistent way regardless of stack or framework. We use the Fundamental components, examples and documentation nearly every day as part of our design and development lifecycle.",
  }
];

var index = 0;
var maxChar = null;
let x0 = null;

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    // document ready
    // this.search().then(result=>{
    //   result.forEach(blog => {

    //   let col = document.createElement("div");
    //   col.classList.add("section__item");
        
    //   let element = document.createElement("div");
    //   element.classList.add("blog-item");

    //   let title = document.createElement("h1");
    //   title.innerText = blog.title;
    //   title.classList.add("blog-item__title");

    //   let subcontainer = document.createElement("div");
    //   subcontainer.classList.add("blog-item__subcontainer");

    //   let author = document.createElement("H2");
    //   author.innerText = blog.author +" | ";
    //   author.classList.add("blog-item__subtitle");

    //   let date = document.createElement("H3");
    //   date.innerText = blog.date.substring(0,10);
    //   date.classList.add("blog-item__date");

    //   subcontainer.appendChild(author);
    //   subcontainer.appendChild(date);


    //   let description = document.createElement("p");
    //   description.innerText = blog.description;
    //   description.classList.add("blog-item__description"); 
    //   description.classList.add("truncate-overflow");

    //   let link = document.createElement("A");
    //   link.innerText = "Read More";
    //   link.href= blog.anchor;
    //   link.classList.add("blog-item__anchor"); 

    //   element.appendChild(title);
    //   element.appendChild(subcontainer);
    //   element.appendChild(description);
    //   element.appendChild(link);
    //   col.appendChild(element)
    //   document.getElementById("blog-posts-container").appendChild(col);
    //   });
    // });

    addBlogs();
  }
};


testimonials.forEach(element => {
  if (element.quote.length < maxChar || maxChar == null) {
    maxChar = element.quote.length;
  }
});
function setTestemonial() {
  if(testimonials[index]) {
    if("company" in testimonials[index]) {
      document.getElementById("company-name").style.display = "flex";
      document.getElementById("company-name").innerHTML =testimonials[index].company;
      document.getElementById("read-less").style.display = "none";
    } else {
      document.getElementById("company-name").style.display = "none";
    }
  }
  if(testimonials[index].quote.length <= maxChar) {
    document.getElementById("company-quote").innerHTML =testimonials[index].quote;
    document.getElementById("read-less").style.display = "none";
    document.getElementById("read-more").style.display = "none";
    if(screen.width >= 1440) {
      document.getElementById("company-container").style.paddingTop = "69px";
    } 
    else if(screen.width >= 1024) {
      document.getElementById("company-container").style.paddingTop = "42px";
    } else {
      document.getElementById("company-container").style.paddingTop = "28px";
    }
  } else {
    document.getElementById("company-quote").innerHTML =testimonials[index].quote.substring(0, maxChar) + '...';
    document.getElementById("read-more").style.display = "block";
    document.getElementById("read-less").style.display = "none";
    document.getElementById("company-container").style.paddingTop = "0";
  }

  document.getElementById("company-logo").src = testimonials[index].logo;
  document.getElementById("testemonial").style.display = "flex";
}

function readMore () {
  document.getElementById("company-quote").innerHTML =testimonials[index].quote;
  document.getElementById("read-more").style.display = "none";
  const readLess =  document.getElementById("read-less");
  readLess.style.display = "block";
  readLess.classList.add("read-less");
  readLess.className += ' read-less';
  clearInterval(intervalID);
}

function readLess () {
  document.getElementById("company-quote").innerHTML =testimonials[index].quote;
  document.getElementById("read-less").style.display = "none";
  document.getElementById("read-more").style.display = "block";
  document.getElementById("company-quote").innerHTML =testimonials[index].quote.substring(0, maxChar) + '...';
  document.getElementById("company-container").style.paddingTop = "0";
}

function next() {
  clearInterval(intervalID);
  const element = document.getElementById("company");
  element.style.animation = "fade-out 1000ms";
  element.style.opacity = "0";
  setTimeout(function() { 
    index = ((index + 1) % testimonials.length);
    setTestemonial();
    element.style.animation = "fade-in 1000ms"; 
    element.style.opacity = "1";
  }, 1000);
  setIntervalCompany();
}

function setIntervalIndexPrev() {
  if(index==0) {
    index = testimonials.length - 1;
  }
  else {
    index = ((index - 1) % testimonials.length);
  }
}

function prev() {
  clearInterval(intervalID);
  const element = document.getElementById("company");
  element.style.animation = "fade-out 1000ms";
  element.style.opacity = "0";
  setTimeout(function() { 
    setIntervalIndexPrev();
    setTestemonial();
    element.style.animation = "fade-in 1000ms"; 
    element.style.opacity = "1";
  }, 1000);
  setIntervalCompany();
}


document.addEventListener('DOMContentLoaded', (event) => {
  if(event.target == document) {
    index = 0;
    setTestemonial();
  }
  document.getElementById("company").addEventListener('touchstart', lock, false);
  document.getElementById("company").addEventListener('touchend', move, false);

  if(screen.width>=768) {
    document.getElementById('search-button').innerText = "Search";
    document.getElementById('search-button').classList.remove("sap-icon--navigation-right-arrow");
  }
})

function lock(e) {
  x0 = e.targetTouches[0].clientX;
}

function move(e) {
  const end = e.changedTouches[0].clientX;
  if(Math.abs(end - x0)>100) {
    if (end > x0) {
      next();
    } else {
      prev();
    }
  }
}

function setIntervalCompany () {
  intervalID = setInterval(()=> {
    const element = document.getElementById("company");
    element.style.animation = "fade-out 1000ms";
    element.style.opacity = "0";
    setTimeout(function() { 
      index = ((index + 1) % testimonials.length);
      setTestemonial();
      element.style.animation = "fade-in 1000ms"; 
      element.style.opacity = "1";
    }, 1000);
  } , 8000);
}

setIntervalCompany();

function search () {
  return new Promise(function(resolve,reject) {
    const http = new XMLHttpRequest();
    const searchField = document.getElementById('search-1').value;
    let url = "https://content.services.sap.com/cse/search/type?types=blogpost&size=6&text=Fundamental%20Library";
    if(searchField) {
      url = url + "%20"+encodeURI(searchField);
    }
    document.getElementById('search-1').value = '';
    http.open("GET",url);
    http.setRequestHeader('Content-Type', 'application/json');
    http.send();
    http.onreadystatechange = (e) => {
      if(http.responseText) {
        const arr = [];
        const jsonParse = JSON.parse(http.responseText);
        const obj = jsonParse._embedded.contents;
        Object.keys(obj).forEach(key => {
         let object = {
          author:obj[key].author.displayName,
          date:obj[key].created,
          title:obj[key].displayName,
          description: obj[key].content.substring(0,330)+"...",
          anchor: obj[key].prettyUrl
          };
          arr.push(object);
        });
        resolve(arr);
      }
    }
  });
}


function addBlogs() {

  this.search().then(result=>{

    result.forEach(blog => {

    let col = document.createElement("div");
    col.classList.add("section__item");
      
    let element = document.createElement("div");
    element.classList.add("blog-item");

    let title = document.createElement("h1");
    title.innerText = blog.title;
    title.classList.add("blog-item__title");

    let subcontainer = document.createElement("div");
    subcontainer.classList.add("blog-item__subcontainer");

    let author = document.createElement("H2");
    author.innerText = blog.author +" | ";
    author.classList.add("blog-item__subtitle");

    let date = document.createElement("H3");
    date.innerText = blog.date.substring(0,10);
    date.classList.add("blog-item__date");

    subcontainer.appendChild(author);
    subcontainer.appendChild(date);


    let description = document.createElement("p");
    description.innerText = blog.description;
    description.classList.add("blog-item__description"); 

    let link = document.createElement("A");
    link.innerText = "READ ON SAP BLOG";
    link.href= blog.anchor;
    link.classList.add("blog-item__anchor"); 
    
    let iconContainer = document.createElement("div");
    iconContainer.classList.add("blog-item__icon-container"); 

    let icon = document.createElement("i");
    icon.classList.add("blog-item__icon"); 
    icon.classList.add("sap-icon--arrow-right"); 

    iconContainer.appendChild(link);
    iconContainer.appendChild(icon);

    element.appendChild(title);
    element.appendChild(subcontainer);
    element.appendChild(description);
    element.appendChild(iconContainer);
    col.appendChild(element)
    document.getElementById("blog-posts-container").appendChild(col);
    });
  });
}