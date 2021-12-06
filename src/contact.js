

function makeContact() {
    const contactPage = document.createElement('div');
    contactPage.innerHTML = "Email us at billfilbertson@pizzaandicecream.com";

    return contactPage;
}

export {makeContact};