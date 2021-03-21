let input = document.getElementById('content');
let add = document.getElementById('add');
let list = document.getElementById('list');

function addItem() {
	
	input.value = input.value.trim();
		
      
        let li = document.createElement('li');
        if (input.value) {
		  li.innerText = input.value;
		  list.appendChild(li);
        
        } else {
            let feedback = alert('Please enter items');
            feedback();
        }

}

add.addEventListener('click', addItem);