const dropdownBtn = document.getElementById('dropdownBtn');
const dropdown  = document.getElementById('dropdown');
function toggleDropDown(){
    
    dropdown.classList.toggle('show');
    
}

dropdownBtn.addEventListener('mouseover', toggleDropDown);

document.addEventListener('click', function(event){
    if (!dropdownBtn.contains(event.target)&&!dropdown.contains(event.target)){
        dropdown.classList.remove('show');
    }});

