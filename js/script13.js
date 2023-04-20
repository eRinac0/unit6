function validateForm() {
    // Отримуємо значення полів логін та пароль
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    // Перевіряємо, чи поля порожні
    if (login === "" || password === "") {
        // Виводимо повідомлення про незаповнені поля
        
        document.getElementById("lg").innerHTML = "Ви не заповнили поле логіна";
        document.getElementById("ps").innerHTML = "Ви не заповнили поле пароля";
        document.getElementById("login").classList.add("error");
        document.getElementById("password").classList.add("error");
        document.getElementById("lg").classList.add("p1_er");
        document.getElementById("ps").classList.add("p1_er");

    }
    if (login === "admin" || password === "12345") {
        
        document.getElementById("lg").innerHTML = "Ви авторізовані";
        document.getElementById("ps").innerHTML = "Ви авторізовані";
        document.getElementById("login").classList.add("valid");
        document.getElementById("password").classList.add("valid");
           document.getElementById("lg").classList.add("p1_vl");

        document.getElementById("ps").classList.add("p1_vl");

    }
}
