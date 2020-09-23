const testimonials = [
  {
    logo: "./images/logos/sap-fsm.png",
    company: "SAP FSM",
    quote:
      "Our solution is built on a modern, reactive stack - where micro frontend UI patterns are applied. By splitting monolithic UI into several micro apps, our teams are able to develop and ship things independently with high velocity. This is awesome as each team can deliver customer value fast, but at the same time this confronts us with challenges. Especially when it comes to ensuring a consistent user experience on the interface across the entire web application suite the Fundamental libraries have helped our teams to bring it all together in a nice, consistent way regardless of stack or framework. We use the Fundamental components, examples and documentation nearly every day as part of our design and development lifecycle.",
  },
  {
    logo: "./images/logos/sap-fieldglass-vector-logo.png",
    quote:
      "The fundamentals team is amazing to work with!  They were willing to work with our existing stack, and continue to go above and beyond to help us meet our consistency goals.  They are a true asset and incredibly responsive!!",
  }
];

var index = 0;
var maxChar = null;
testimonials.forEach(element => {
  if (element.quote.length < maxChar || maxChar == null) {
    maxChar = element.quote.length;
  }
});
function setTestemonial() {

  if(testimonials[index].company) {
    document.getElementById("company-name").style.display = "flex";
    document.getElementById("company-name").innerHTML =testimonials[index].company;
  } else {
    document.getElementById("company-name").style.display = "none";
  }
  if(testimonials[index].quote.length <= maxChar) {
    document.getElementById("company-quote").innerHTML =testimonials[index].quote;
    document.getElementById("read-more").style.display = "none";
    if(screen.width >= 768) {
      document.getElementById("company-container").style.paddingTop = "46px";
    } else {
      document.getElementById("company-container").style.paddingTop = "30px";
    }
  } else {
    document.getElementById("company-quote").innerHTML =testimonials[index].quote.substring(0, maxChar) + '...';
    document.getElementById("read-more").style.display = "block";
      if(screen.width >= 768) {
        document.getElementById("company-container").style.paddingTop = "14px";
      } else {
        document.getElementById("read-more").style.marginTop = "0";
        document.getElementById("company-container").style.paddingTop = "2px";
      }
  }

  document.getElementById("company-logo").src = testimonials[index].logo;
  document.getElementById("testemonial").style.display = "flex";
}

function readMore () {
  document.getElementById("company-quote").innerHTML =testimonials[index].quote;
  document.getElementById("read-more").style.display = "none";
}

function setIntervalIndexNext() {
  if (testimonials.length == 2) {
    if (index == 0) {
      changeItem(1);
    } else {
      changeItem(0);
    }
  } else {
    changeItem((index + 1) % (testimonials.length));
  }
}

function setIntervalIndexPrev() {
  if (testimonials.length <= 2) {
    if (index == 0) {
      changeItem(1);
    } else {
      changeItem(0);
    }
  } else {
    if(index === 0) {
      changeItem(testimonials.length - 1);
    }
    else {
      changeItem((index - 1) % (testimonials.length));
    }
  }
}

function next() {
  clearInterval(intervalID);
  intervalFunction();
  intervalID = setInterval(intervalFunction, 10000);
}

function prev() {
  clearInterval(intervalID);
  intervalPrevFunction();
  intervalID = setInterval(intervalFunction, 10000);
}

function changeItem (indexChanged) {
  index = indexChanged;
  clearInterval(intervalID);
  setTestemonial();
  intervalID = setInterval(intervalFunction, 10000);
}

function intervalFunction () {
  setIntervalIndexNext();
  setTestemonial();
}

function intervalPrevFunction () {
  setIntervalIndexPrev();
  setTestemonial();
}
document.addEventListener('DOMContentLoaded', (event) => {
  if(event.target == document) {
    index = 0;
    changeItem(0);
    setTestemonial();
  }
})

var intervalID = setInterval(intervalFunction , 10000);
