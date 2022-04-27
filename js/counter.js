let counter = 0;
let title;
let image = false;

function init() {
  document.getElementById('counter').innerHTML = counter.toString();
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + '-' + mm + '-' + yyyy;
  // console.log('today', today)
  document.getElementById('date').placeholder = today;
}

function increment() {
  counter++;
  document.getElementById('counter').innerHTML = counter.toString();
}

function reset() {
  console.log('reset', counter)
  counter = 0;
  document.getElementById('counter').innerHTML = counter.toString();
}

function edit() {
  document.getElementById('edit_icon').className='hide';
  document.getElementById('edit_field').className='show';
  document.getElementById('set').classList.add('show')
}

function edit_description() {
  title = false;
  document.getElementById('description-div').classList.add('show-flex');
  document.getElementById('note').innerHTML='Enter new description';
  document.getElementById('note').className='show';
}

function edit_title() {
  title = true;
  document.getElementById('description-div').classList.add('show-flex');
  document.getElementById('note').innerHTML='Enter new title';
  document.getElementById('note').className='show';
}

function set_image() {
  console.log('clicked onm the image');
  image = true;
  document.getElementById('description-div').classList.add('show-flex');
  document.getElementById('note').innerHTML='Enter URL for new image';
  document.getElementById('note').className='show';
}

function set_desc() {
  text = document.getElementById('desc').value;
  if (image) {
    image = false;
    document.getElementById("image").src=text;
    document.getElementById('description-div').classList.remove('show-flex');
  }
  else {
    if (title) {
      document.getElementById('title').innerHTML = text;
      document.getElementById('description-div').classList.remove('show-flex');
    }
    else {
      document.getElementById('description').innerHTML = text;
      document.getElementById('description-div').classList.remove('show-flex');
    }
  }
  // image = false;
  document.getElementById('note').className='hide';
  console.log('set', text);
  // PUT cookie for storing counter value? (and rest)
}

function set() {
  counter = document.getElementById('edit_field').value;
  console.log('set', counter);
  document.getElementById('set').classList.remove('show')
  document.getElementById('set').classList.add('hide')
  document.getElementById('edit_field').className='hide';
  document.getElementById('edit_icon').className='show';
  document.getElementById('counter').innerHTML = counter.toString();
}
