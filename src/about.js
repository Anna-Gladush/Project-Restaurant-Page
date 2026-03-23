const About = (()=>{
  const main = document.getElementById('content');
  const create_div = (parent, class_name) => {
    const div = document.createElement('div');
    div.className = class_name;
    parent.appendChild(div);
    return div;
  }

  const create_p = (parent, text) => {
    const p = document.createElement('p');
    p.textContent = text;
    parent.appendChild(p);
  }

  const create_h = (h, parent, text) => {
    const headline = document.createElement(h);
    headline.textContent = text;
    parent.appendChild(headline);
  }
  return {

  }
})()

export {About}