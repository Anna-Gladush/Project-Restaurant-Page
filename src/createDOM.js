const createDOM = (() => {
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
    return p;
  }

  const create_h = (h, parent, text) => {
    const headline = document.createElement(h);
    headline.textContent = text;
    parent.appendChild(headline);
    return headline;
  }

  const create_img = (src, alt, parent) => {
    const img = document.createElement("IMG");
    img.src = src;
    img.alt = alt;
    parent.appendChild(img);
    return img;
  }
  return {
    create_div,
    create_h,
    create_img,
    create_p
  }
})()
export {createDOM}