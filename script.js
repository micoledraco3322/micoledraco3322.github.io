const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click',() => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})

const roles = ["PROGRAMMER", "NETWORKING ENTHUSIAST", "CYBERSECURITY ENTHUSIAST", "CUSTOMER SERVICE REPRESENTATIVE", "TRUST AND SAFETY ASSOCIATE"];
const roleElem = document.getElementById("role");

let roleInd = 0;
let charInd = 0;
let isDel = false;

function typing() {
    const curr_role = roles[roleInd];

    if (!isDel) {
        roleElem.textContent = curr_role.slice(0, charInd);
        charInd++;

        if (charInd > curr_role.length) {
            setTimeout(() => {
                isDel = true;
                typing();
            }, 1500);
                return;
            }
        } else {
            roleElem.textContent = curr_role.slice(0, charInd);
            charInd--;

            if (charInd < 0) {
                isDel = false;
                roleInd = (roleInd+1)%roles.length;
                charInd = 0;

                setTimeout(typing, 500);
                return;
            }
        }
        setTimeout(typing, isDel ? 50:100);
}
typing();