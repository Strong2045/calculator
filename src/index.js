window.onload = function load() {
  function create(elem) {
    return document.createElement(elem);
  }
  function append(parent, elem) {
    parent.appendChild(elem);
  }
  function remove(elem) {
    if (elem) {
      elem.parentNode.removeChild(elem);
    }
  }
  function selector(elem, class_name = 'default') {
    const temp = elem;
    temp.classList.add(class_name);
    return temp;
  }
  function search(selectors, all) {
    if (all === true && selectors !== false) {
      return document.querySelectorAll(selectors);
    }
    if (selectors !== false) {
      return document.querySelector(selectors);
    }
    return null;
  }
  function numb(number) {
    if (typeof Number(number) === 'number' && Number.isNaN(Number(number)) === false) {
      return Number(number);
    }
    return false;
  }

  const doc = document.body;

  append(doc, selector(create('input'), 'inp_1'));
  append(doc, create('br'));
  append(doc, selector(create('input'), 'inp_2'));
  append(doc, create('br'));
  append(doc, selector(create('button'), 'but'));

  search('.but').innerHTML = 'Calculate';

  search('.but').onclick = function edit() {
    (function parseError() {
      try {
        remove(search('.result') || false);
        remove(search('.error-message'));
        remove(search('.error-message'));
        return null;
      } catch {
        return null;
      }
    })();

    const inp1 = search('.inp_1');
    const inp2 = search('.inp_2');
    if (numb(inp1.value) === false || inp1.value.replace(/ +/g, ' ').trim() === '') {
      inp1.parentNode.insertBefore(selector(create('span'), 'error-message'), inp1.nextSibling);
      search('.error-message', true)[0].innerHTML = ' Это не число ';
    }
    if (numb(inp2.value) === false || inp2.value.replace(/ +/g, ' ').trim() === '') {
      inp2.parentNode.insertBefore(selector(create('span'), 'error-message'), inp2.nextSibling);
      search('.error-message', true)[search('.error-message', true).length - 1].innerHTML = ' Это не число ';
    }

    if (!search('.error-message')) {
      doc.appendChild(selector(create('div'), 'result'));
      search('.result').innerHTML = Number(inp1.value) + Number(inp2.value);
    }
  };
};
