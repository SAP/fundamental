const testemonials = [
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

var index = -1;
function setTestemonial() {
  if(testemonials[index].company) {
    document.getElementById("company-name").style.display = "flex";
    document.getElementById("company-name").innerHTML =testemonials[index].company;
  } else {
    document.getElementById("company-name").style.display = "none";
  }
  document.getElementById("company-quote").innerHTML =testemonials[index].quote;
  document.getElementById("company-logo").src = testemonials[index].logo;
  document.getElementById("testemonial").style.display = "flex";
}

function setIntervalIndexNext() {
  if (testemonials.length == 2) {
    if (index == 0) {
      index = 1;
    } else {
      index = 0;
    }
  } else {
    index = ((index + 1) % (testemonials.length));
  }
}

function setIntervalIndexPrev() {
  if (testemonials.length <= 2) {
    if (index == 0) {
      index = 1;
    } else {
      index = 0;
    }
  } else {
    if(index === 0) {
      index = testemonials.length - 1;
    }
    else {
      index = ((index - 1) % (testemonials.length));
    }
  }
}

function next() {
  clearInterval(intervalID);
  intervalFunction();
  intervalID = setInterval(intervalFunction, 3000);
}

function prev() {
  intervalPrevFunction();
  clearInterval(intervalID);
  intervalID = setInterval(intervalFunction, 3000);
}


function intervalFunction () {
  setIntervalIndexNext();
  setTestemonial();
}

function intervalPrevFunction () {
  setIntervalIndexPrev();
  setTestemonial();
}

var intervalID = setInterval(intervalFunction , 3000);