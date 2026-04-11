const btnLogin = document.getElementById("btnIn");
const btnRegister = document.getElementById("btnUp");

const formLogin = document.getElementById("formLogin");
const formRegister = document.getElementById("formRegister");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailNovoInput = document.getElementById("emailNovo");
const passwordNovoInput = document.getElementById("passwordNovo");

const popup = document.querySelector(".popup");
const popupMessage = document.getElementById("popupMessage");
const popupClose = document.querySelector(".popup .close");

const USER_STORAGE_KEY = "usuarioCadastro";

function showLoginForm() {
    formLogin.style.display = "block";
    formRegister.style.display = "none";
    btnLogin.classList.add("active");
    btnRegister.classList.remove("active");
}

function showRegisterForm() {
    formLogin.style.display = "none";
    formRegister.style.display = "block";
    btnLogin.classList.remove("active");
    btnRegister.classList.add("active");
}

function getStoredUser() {
    const stored = localStorage.getItem(USER_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
}

function saveUser(email, password) {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify({ email, password }));
}

function clearFields() {
    emailInput.value = "";
    passwordInput.value = "";
    emailNovoInput.value = "";
    passwordNovoInput.value = "";
}

function openPopup(message) {
    popupMessage.textContent = message;
    popup.style.display = "flex";
}

function closePopup() {
    popup.style.display = "none";
}

btnLogin.addEventListener("click", showLoginForm);
btnRegister.addEventListener("click", showRegisterForm);
popupClose.addEventListener("click", closePopup);
popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        closePopup();
    }
});

formRegister.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailNovoInput.value.trim();
    const password = passwordNovoInput.value.trim();

    if (!email || !password) {
        openPopup("Por favor, preencha email e senha para cadastrar.");
        return;
    }

    saveUser(email, password);
    clearFields();
    showLoginForm();
    openPopup("Cadastro realizado com sucesso! Agora faça login.");
});

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const storedUser = getStoredUser();

    if (!email || !password) {
        openPopup("Por favor, preencha email e senha para entrar.");
        return;
    }

    if (!storedUser) {
        showRegisterForm();
        openPopup("Nenhum usuário cadastrado. Cadastre-se primeiro.");
        return;
    }

    if (email === storedUser.email && password === storedUser.password) {
        clearFields();
        openPopup("Login bem-sucedido!");
    } else {
        openPopup("Email ou senha incorretos!");
    }
});

showLoginForm();